"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const MAX_BLOBS = 6;

export default function BlobLava({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    el.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(1, 1) },
      u_count: { value: 3 },
      u_centers: { value: Array(MAX_BLOBS).fill(0).map(() => new THREE.Vector2()) },
      u_radii: { value: new Array(MAX_BLOBS).fill(0) },
      u_hue: { value: 265.0 },
      u_iso: { value: 10 },      // isosurface level for field sum
      u_edge: { value: 0.15 },    // edge feather for smoothstep
      u_soft: { value: 0.3 },    // spec/rim softness
    };

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
precision highp float;

uniform vec2 u_res;
uniform float u_time;
uniform float u_hue;
uniform int u_count;
uniform vec2 u_centers[${MAX_BLOBS}];
uniform float u_radii[${MAX_BLOBS}];
uniform float u_iso;   // field iso value
uniform float u_edge;  // edge feather
uniform float u_soft;  // lighting softness

// HSL to RGB (compact)
vec3 hsl2rgb(vec3 hsl){
  vec3 rgb = clamp(abs(mod(hsl.x*6.0+vec3(0,4,2),6.0)-3.0)-1.0,0.0,1.0);
  rgb = rgb*rgb*(3.0-2.0*rgb);
  return hsl.z + hsl.y*(rgb-0.5)*(1.0-abs(2.0*hsl.z-1.0));
}

struct Field { float f; vec2 g; };

Field fieldAndGrad(vec2 p){
  float f = 0.0;
  vec2 g = vec2(0.0);
  for(int i=0;i<${MAX_BLOBS}; i++){
    if(i>=u_count) break;
    vec2 d = p - u_centers[i];
    float r = u_radii[i];
    float d2 = max(1e-4, dot(d,d));
    float k = (r*r) / d2;          // field term
    f += k;
    // gradient of k wrt p
    g += -2.0 * (r*r) * d / (d2*d2);
  }
  return Field(f, g);
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv*2.0 - 1.0;
  p.x *= u_res.x / u_res.y;

  // evaluate field in a lightly warped domain for organic wobble
  vec2 q = p + 0.03*vec2(sin(p.y*2.0 + u_time*0.8), cos(p.x*1.8 - u_time*0.7));

  // smoothed normal via central differences on blurred field (removes pin-point highlights)
  float px = 1.5 / u_res.y;
  float py = px;
  float fR = fieldAndGrad(q + vec2(px, 0.0)).f;
  float fL = fieldAndGrad(q - vec2(px, 0.0)).f;
  float fU = fieldAndGrad(q + vec2(0.0, py)).f;
  float fD = fieldAndGrad(q - vec2(0.0, py)).f;
  vec2 gn = normalize(vec2(-(fR - fL), -(fU - fD)) + 1e-6);
  gn *= 0.5; // soften
  vec3 N = normalize(vec3(gn, 1.0));

  vec3 L = normalize(vec3(0.25, 0.25, 10.0));
  vec3 V = vec3(0.0, 0.0, 1.0);

  // broad wrap lighting; no sharp specular
  float wrap = 0.6;
  float diff = clamp((dot(N, L) + wrap) / (1.0 + wrap), 0.0, 1.0);
  float rim  = pow(1.0 - max(dot(N, V), 0.0), 2.0) * 0.30;

  float hue = fract(u_hue/360.0);
  vec3 base = hsl2rgb(vec3(hue, 0.65, 0.55));
  vec3 col = base * (0.35 + 0.65*diff) + rim*0.6;

  // smooth threshold for antialiased silhouette
  float m = smoothstep(u_iso - u_edge, u_iso + u_edge, fieldAndGrad(q).f);
  if(m <= 0.001) discard; // full transparency outside

  gl_FragColor = vec4(col, m*0.95);
}
`,
      transparent: true,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(mesh);

    // ---- blob system (CPU): positions/velocities + split/merge ----
    type B = { p: THREE.Vector2; v: THREE.Vector2; r: number; life: number; merging: boolean };
    let blobs: B[] = [];
    const R = 0.6; // normalized extent (bigger reach)
    const main: B = { p: new THREE.Vector2(0,0), v: new THREE.Vector2(), r: 0.70, life: 1, merging: false };
    blobs.push(main);

    const b1: B = { p: new THREE.Vector2(0.30, 0.06), v: new THREE.Vector2(), r: 0.48, life: 1, merging: false };
    const b2: B = { p: new THREE.Vector2(-0.28, -0.10), v: new THREE.Vector2(), r: 0.44, life: 1, merging: false };
    blobs.push(b1, b2);
    uniforms.u_count.value = 3;

    let hueNext = performance.now();

    function tick(dt: number, t: number) {
      // main center slow wander
      const Rwander = R * 0.65;
      main.p.x = Math.cos(t * 0.10) * Rwander * 0.9 + Math.cos(t * 0.23) * Rwander * 0.1;
      main.p.y = Math.sin(t * 0.07) * Rwander * 0.9 + Math.sin(t * 0.19) * Rwander * 0.1;
      main.r = 0.96 * (1 + 0.04 * Math.sin(t * 0.8));

      // continuous split-merge phase (0 merged .. 1 separated)
      const phase = 0.25 + 0.5 * Math.sin(t * 0.25) * 0.55; // slow and smooth

      // place two satellites around main with slowly drifting angles
      const dist = main.r * (0.45 + 0.65 * phase); // expand/contract
      const a1 = t * 0.18 + 0.6 * Math.sin(t * 0.11);
      const a2 = t * -0.16 + 1.3 * Math.cos(t * 0.09);

      const b1 = blobs[1];
      const b2 = blobs[2];
      b1.p.set(main.p.x + Math.cos(a1) * dist, main.p.y + Math.sin(a1) * dist);
      b2.p.set(main.p.x + Math.cos(a2) * dist, main.p.y + Math.sin(a2) * dist);

      // subtle radius breathing keeps volume visually stable
      const rBase1 = 0.54;
      const rBase2 = 0.50;
      b1.r = rBase1 * (1.0 - 0.15 * phase) * (1 + 0.05 * Math.sin(t * 0.7));
      b2.r = rBase2 * (1.0 - 0.10 * phase) * (1 + 0.05 * Math.cos(t * 0.6));

      // upload uniforms for all three
      uniforms.u_count.value = 3;
      for (let i = 0; i < MAX_BLOBS; i++) {
        const target = i < 3 ? blobs[i] : null;
        const v2 = uniforms.u_centers.value[i];
        if (target) {
          v2.set(target.p.x, target.p.y);
          uniforms.u_radii.value[i] = target.r * 0.95;
        } else {
          v2.set(3, 3);
          uniforms.u_radii.value[i] = 0;
        }
      }

      // slow hue drift
      if (performance.now() > hueNext) {
        uniforms.u_hue.value = (uniforms.u_hue.value + 0.04) % 360;
        hueNext = performance.now() + 60.0;
      }
    }

    let stop = false;
    let last = performance.now();
    function loop(){
      if (stop) return;
      const now = performance.now();
      const dt = Math.min(0.033, (now-last)/1000);
      last = now;

      uniforms.u_time.value = now/1000;
      tick(dt, uniforms.u_time.value);
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }

    function onResize(){
      const w = el.clientWidth || window.innerWidth;
      const h = el.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      uniforms.u_res.value.set(w, h);
    }

    onResize();
    window.addEventListener("resize", onResize);
    loop();

    return () => {
      stop = true;
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mat.dispose();
      (mesh.geometry as THREE.BufferGeometry).dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className={`relative w-full h-full ${className}`} />;
}