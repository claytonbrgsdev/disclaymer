"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import BlobLava from "@/components/blob-hero"
import { ScrollObserver } from "@/components/scroll-observer"
import { Github, ExternalLink, Mail, ArrowRight, Instagram } from "lucide-react"

const projects = [
  {
    title: "ASA Player",
    description:
      "retro-styled web music player with built-in ascii spectrum analyzer",
    image: "/project-asaplayer.png",
    githubUrl: "https://github.com/claytonbrgsdev/aacs-player",
    liveUrl: "https://claytonbrgsdev.github.io/aacs-player/",
    tags: ["Next.js", "TypeScript", "Web Audio", "UI"],
    year: "2025",
  },
  {
    title: "3D Product Showcase",
    description:
      "three.js showroom with lighting controls and glb asset viewer",
    image: "/project-3dcar.png",
    githubUrl: "https://github.com/claytonbrgsdev/product-showcase-v2",
    liveUrl: "https://claytonbrgsdev.github.io/product-showcase-v2/",
    tags: ["Three.js", "JavaScript", "GLB", "Shaders"],
    year: "2025",
  },
  {
    title: "MEDICATION-CYCLES-TRACKER",
    description:
      "venvanse cycles tracker — 3d spiral timeline for medication tracking with reminders",
    image: "/project-pilltracker.png",
    githubUrl: "https://github.com/claytonbrgsdev/medication-cycles-tracker",
    liveUrl: "https://claytonbrgsdev.github.io/medication-cycles-tracker/",
    tags: ["Visualization", "Three.js", "Next.js"],
    year: "2025",
  },
  {
    title: "Music Organizer",
    description:
      "desktop app that organizes music files using discogs metadata",
    image: "/project-musicorganizer.png",
    githubUrl: "https://github.com/IvPalmer/MusicOrganizer",
    tags: ["Python", "Tkinter", "Discogs"],
    year: "2025",
  },
  {
    title: "Crate-Mate",
    description:
      "ai-assisted record cover scanner that returns links and tracklists",
    image: "/project-cratemate.png",
    githubUrl: "https://github.com/IvPalmer/crate-mate",
    liveUrl: "https://crate-mate.streamlit.app",
    tags: ["React", "Python", "Docker", "Streamlit"],
    year: "2025",
  },
  {
    title: "Record Label Manager",
    description:
      "ops platform for independent labels: ingestion, analytics and admin",
    image: "/project-labelmanager.png",
    githubUrl: "https://github.com/IvPalmer/record-label-manager",
    tags: ["Python", "ETL", "Dashboards", "Django", "React"],
    year: "2025",
  },
  {
    title: "REACTO",
    description:
      "web audio visual experiments and demos with tweakable parameters",
    image: "/project-reacto.png",
    githubUrl: "https://github.com/claytonbrgsdev/reacto",
    liveUrl: "https://claytonbrgsdev.github.io/reacto/",
    tags: ["React", "Web Audio", "Three.js"],
    year: "2025",
  },
  {
    title: "SPECtations",
    description:
      "macOS real-time audio waveform + spectrogram visualizer",
    image: "/project-spectogram.jpeg",
    githubUrl: "https://github.com/claytonbrgsdev/SPECtations",
    tags: ["Python", "PySide6", "Audio"],
    year: "2025",
  },
  {
    title: "Deep Ocean Explorer",
    description:
      "shitty jellyfish night ride — underwater shader playground",
    image: "/project-deepocean.png",
    githubUrl: "https://github.com/claytonbrgsdev/deep-ocean-explorer",
    liveUrl: "https://claytonbrgsdev.github.io/deep-ocean-explorer/",
    tags: ["Three.js", "GLSL", "WebGL"],
    year: "2025",
  },
]

const dashboards = [
  {
    title: "Analytics Dashboard",
    description: "",
    image: "/dashboard-01.png",
    tags: ["metabase"],
    year: "2024",
  },
  {
    title: "Analytics Dashboard",
    description: "",
    image: "/dashboard-02.png",
    tags: ["metabase"],
    year: "2024",
  },
  {
    title: "Analytics Dashboard",
    description: "",
    image: "/dashboard-03.png",
    tags: ["metabase"],
    year: "2024",
  },
  {
    title: "Analytics Dashboard",
    description: "",
    image: "/dashboard-04.jpg",
    tags: ["tableau"],
    year: "2024",
  },
  {
    title: "Analytics Dashboard",
    description: "",
    image: "/dashboard-05.jpg",
    tags: ["power bi"],
    year: "2024",
  },
  {
    title: "Analytics Dashboard",
    description: "",
    image: "/dashboard-06.jpg",
    tags: ["tableau"],
    year: "2024",
  },
]

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Blob behind about section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <BlobLava className="w-screen h-screen" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <ScrollObserver animation="spring-up" className="space-y-12">
            <div className="architectural-flow border-0">
              <ScrollObserver animation="slide-right" delay={200}><div /></ScrollObserver>
              <ScrollObserver animation="scale-up" delay={400}><div /></ScrollObserver>
            </div>

            <ScrollObserver animation="fade-up" delay={600} className="max-w-5xl mx-auto space-y-6 flow-element">
            <h2 className="text-small-bold text-muted-foreground mb-4">a quick intro</h2>
              <h2 className="text-massive font-black leading-none">ABOUT</h2>
              <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                two full-stack developers shipping modern web apps and unusual digital products.<br />
                we build end-to-end: product thinking, interface design, and full-stack engineering.<br />
                small team, senior output. from idea to production with short cycles and measurable results.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                our principles: no claims, only commits. tests before promises. versioned change. reliable deploys.
              </p>
            </ScrollObserver>

            <ScrollObserver animation="fade-up" delay={800} className="max-w-4xl mx-auto">
              <div className="space-y-8 my-16">
                <h4 className="text-lg md:text-xl font-extrabold">SERVICES</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base">
                  <div className="text-center md:text-center">suspiciously good design</div>
                  <div className="text-center md:text-center">backend vip access</div>
                  <div className="text-center md:text-center">super artificial intelligence</div>
                  <div className="text-center md:text-center">relaxing user experience </div>
                  <div className="text-center md:text-center">data with receipts</div>
                  <div className="text-center md:text-center">unusual softwares</div>
                  <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  
                  </div>
                </div>
              </div>
            </ScrollObserver>

            <ScrollObserver animation="fade-up" delay={1000} className="max-w-4xl mx-auto">
              <div className="space-y-8 my-16">
                <h4 className="text-lg md:text-xl font-extrabold">PROCESS</h4>
                <div className="space-y-3 text-sm md:text-base leading-relaxed">
                  <p>scope fast. prototype early. ship small.</p>
                  <p>learn from users. iterate. harden. scale.</p>
                </div>
              </div>
            </ScrollObserver>

            <ScrollObserver animation="fade-up" delay={1200} className="max-w-4xl mx-auto">
              <div className="space-y-8 my-16">
                <h4 className="text-lg md:text-xl font-extrabold">TECH WE LIKE</h4>
                <div className="flex flex-wrap gap-3 justify-center text-xs md:text-sm">
                  {[
                    "typescript",
                    "react/next.js",
                    "node",
                    "python",
                    "postgres",
                    "firebase/supabase",
                    "aws",
                    "docker",
                    "github",
                    "ux design",
                    "threejs",
                    "n8n",
                    "metabase",
                    "tableau",
                    "power bi",
                    "streamlit",
                    "sql",
                    "data modeling"
                  ].map((tech) => (
                    <span key={tech} className="bg-muted px-3 py-2 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollObserver>

            <ScrollObserver
              animation="spring-up"
              delay={1400}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
            >
              <div />
            </ScrollObserver>
          </ScrollObserver>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="beam animate-parallax-float"
            style={{
              top: "20%",
              left: "10%",
              width: "30%",
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          />
          <div
            className="beam animate-parallax-float"
            style={{
              top: "60%",
              right: "10%",
              width: "25%",
              animationDelay: "2s",
              transform: `translateY(${scrollY * -0.03}px)`,
            }}
          />
        </div>
      </section>

      <section id="projects" className="architectural-flow py-0">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollObserver animation="spring-up" className="text-center mb-20">
            <h2 className="text-small-bold text-muted-foreground mb-4">some weird things we've created</h2>
            <h3 className="text-massive font-black leading-none mb-8">PORTFOLIO</h3>
            <p className="text-tiny uppercase tracking-widest max-w-2xl mx-auto">
              selected work across frontend, backend, and experiments.
            </p>
          </ScrollObserver>

          {/* Frontend Projects */}
          <div className="mb-20">
            <ScrollObserver animation="slide-right">
              <h4 className="text-huge-thin mb-12 text-center">SOFTWARES</h4>
            </ScrollObserver>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollObserver key={project.title} animation="spring-up" delay={index * 150}>
                  <Card className="group overflow-hidden border-border hover:border-primary transition-spring hover-lift">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <Dialog>
                        <DialogTrigger asChild>
                          <img
                            src={`${basePath}${project.image || "/placeholder.svg"}`}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-spring cursor-pointer"
                          />
                        </DialogTrigger>
                        <DialogContent bare className="max-w-[98vw] max-h-[98vh] p-0" showCloseButton>
                          <img
                            src={`${basePath}${project.image || "/placeholder.svg"}`}
                            alt={project.title}
                            className="w-auto max-w-[98vw] h-auto max-h-[95vh] object-contain"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h5 className="text-small-bold">{project.title.toUpperCase()}</h5>
                        <span className="text-tiny text-muted-foreground">{project.year}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description.toLowerCase()}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className={`text-tiny bg-muted px-2 py-1 rounded transition-spring stagger-${tagIndex + 1}`}
                          >
                            {tag.toLowerCase()}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        {project.githubUrl && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="text-xs font-semibold bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-spring"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                              <Github className="w-3 h-3 mr-1" />
                              CODE
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            asChild
                            size="sm"
                            className="text-xs font-semibold bg-foreground text-background hover:bg-foreground/90 transition-spring"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              LIVE
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </ScrollObserver>
              ))}
            </div>
          </div>

          {/* Dashboards */}
          <div>
            <ScrollObserver animation="slide-left">
              <h4 className="text-huge-thin mb-12 text-center">DASHBOARDS</h4>
            </ScrollObserver>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboards.map((dashboard, index) => (
                <ScrollObserver key={dashboard.title} animation="spring-up" delay={index * 150}>
                  <Card className="group overflow-hidden border-border hover:border-primary transition-spring hover-lift">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <Dialog>
                        <DialogTrigger asChild>
                          <img
                            src={`${basePath}${dashboard.image || "/placeholder.svg"}`}
                            alt={dashboard.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-spring cursor-pointer"
                          />
                        </DialogTrigger>
                        <DialogContent bare className="max-w-[98vw] max-h-[98vh] p-0" showCloseButton>
                          <img
                            src={`${basePath}${dashboard.image || "/placeholder.svg"}`}
                            alt={dashboard.title}
                            className="w-auto max-w-[98vw] h-auto max-h-[95vh] object-contain"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h5 className="text-small-bold">{dashboard.title.toUpperCase()}</h5>
                        <span className="text-tiny text-muted-foreground">{dashboard.year}</span>
                      </div>

                      {dashboard.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {dashboard.description.toLowerCase()}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {dashboard.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className={`text-tiny bg-muted px-2 py-1 rounded transition-spring stagger-${tagIndex + 1}`}
                          >
                            {tag.toLowerCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </ScrollObserver>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 radiate-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollObserver animation="spring-up" className="space-y-12">
            <div>
              <ScrollObserver animation="fade-in" delay={100}>
                <h2 className="text-small-bold text-muted-foreground mb-4">don't be shy and come say hello</h2>
              </ScrollObserver>
              <ScrollObserver animation="scale-up" delay={200}>
                <h3 className="text-massive font-black leading-none mb-16">CONTACT</h3>
              </ScrollObserver>
              <ScrollObserver animation="fade-up" delay={300}>
                <div className="space-y-6 max-w-xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center justify-center gap-2">
                        CLAYTON BORGES
                        <a
                          href="https://github.com/claytonbrgsdev"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Clayton GitHub"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href="https://instagram.com/azulbic_"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Clayton Instagram"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </h4>
                      <p className="text-sm text-muted-foreground">claytonborgesdev@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center justify-center gap-2">
                        RAPHAEL PALMER
                        <a
                          href="https://github.com/IvPalmer"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Raphael GitHub"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href="https://instagram.com/rapha.palmer"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Raphael Instagram"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </h4>
                      <p className="text-sm text-muted-foreground">raphaelpalmer42@gmail.com</p>
                    </div>
                  </div>
                </div>
              </ScrollObserver>
            </div>
          </ScrollObserver>
        </div>
      </section>

      <ScrollObserver animation="fade-in">
        <footer className="py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="text-tiny uppercase tracking-widest text-muted-foreground">
              © 2025 disclaymer — all rights reserved i guess
            </div>
          </div>
        </footer>
      </ScrollObserver>
    </div>
  )
}
