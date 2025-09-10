"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Palette, Zap } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh pt-16 bg-transparent">
      {/* Interactive background elements */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-2xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
        }}
      />

      <div className="relative z-10 space-y-8 px-4 max-w-4xl mx-auto text-justify">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl text-balance animate-slide-up font-thin tracking-[1em]">
            <span className="bg-clip-text animate-gradient shadow-none border-transparent bg-transparent text-black text-8xl font-light tracking-tighter italic">DISCLAYMER</span>
          </h1>

          <h2
            className="text-2xl md:text-3xl font-bold text-foreground/90 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Development Team
          </h2>

          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            We are Disclaymer — a two-person team building thoughtful software and digital products with modern web
            technologies and innovative design.
          </p>
        </div>

        {/* Feature highlights */}
        

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: "600ms" }}
        >
          <Button
            size="lg"
            className="hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 animate-glow group"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Our Work
            <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass hover:bg-primary/10 transition-all duration-300 bg-transparent"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
