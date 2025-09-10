"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubUrl?: string
  liveUrl?: string
  tags: string[]
  delay?: number
}

export function ProjectCard({ title, description, image, githubUrl, liveUrl, tags, delay = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 animate-slide-up glass"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.8 : 0.3 }}
        />
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0.7 }}
        />

        {/* Floating action buttons */}
        <div
          className="absolute top-4 right-4 flex gap-2 transition-all duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          {githubUrl && (
            <Button size="sm" variant="secondary" className="animate-float glass">
              <Github className="w-4 h-4" />
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              variant="default"
              className="animate-float animate-glow"
              style={{ animationDelay: "0.2s" }}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 transition-all duration-300 hover:bg-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex-1 group/btn bg-transparent">
              <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12" />
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn"
            >
              <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:translate-x-1" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
