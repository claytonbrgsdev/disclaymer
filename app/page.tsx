"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollObserver } from "@/components/scroll-observer"
import { Github, ExternalLink, Mail, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Landing Moderna",
    description: "Modern landing page with smooth animations and strong typography",
    image: "/modern-landing-page-with-animations.jpg",
    githubUrl: "#",
    liveUrl: "#",
    tags: ["React", "Next.js", "Framer", "Tailwind"],
    year: "2024",
  },
  {
    title: "Portfolio Minimal",
    description: "Minimalist layout focused on performance and accessibility",
    image: "/minimal-portfolio-design.jpg",
    githubUrl: "#",
    tags: ["TypeScript", "CSS Grid", "GSAP", "Responsive"],
    year: "2024",
  },
  {
    title: "E-commerce UI",
    description: "E-commerce prototype with shopping cart and micro-interactions",
    image: "/ecommerce-interface-design.jpg",
    githubUrl: "#",
    liveUrl: "#",
    tags: ["React", "Redux", "Stripe", "PWA"],
    year: "2024",
  },
]

const dashboards = [
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard with real-time data visualizations",
    image: "/analytics-dashboard.png",
    tags: ["D3.js", "Chart.js", "Real-time"],
    year: "2024",
  },
  {
    title: "Admin Panel",
    description: "Complete administrative panel with user management",
    image: "/admin-panel-interface.jpg",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    year: "2024",
  },
  {
    title: "Project Manager",
    description: "Project management system with kanban board",
    image: "/project-management-dashboard.png",
    tags: ["React", "Socket.io", "PostgreSQL"],
    year: "2024",
  },
]

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
      <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <ScrollObserver animation="spring-up" className="space-y-12">
            <div className="architectural-flow border-0">
              <ScrollObserver animation="slide-right" delay={200}></ScrollObserver>
              <ScrollObserver animation="scale-up" delay={400}></ScrollObserver>
            </div>

            <ScrollObserver animation="fade-up" delay={600} className="max-w-4xl mx-auto space-y-10 flow-element">
              <div className="space-y-8">
                <h4 className="leading-tight text-justify font-extrabold text-4xl">
                  WE ARE DISCLAYMER.{" "}
                  <span className="text-xl md:text-2xl leading-tight text-justify font-light tracking-normal">
                    no pitch, only product.
                  </span>
                </h4>
                <p className="text-base md:text-lg font-light leading-relaxed text-right">
                  two full-stack developers shipping modern web apps and unusual digital products.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-right">
                  we build end-to-end: product thinking, interface design, and full-stack engineering.
                  <br />
                  small team, senior output. from idea to production with short cycles and measurable results.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic text-right">
                  our principles: no claims, only commits. tests before promises. versioned change. reliable deploys.
                </p>
              </div>
            </ScrollObserver>

            <ScrollObserver animation="fade-up" delay={800} className="max-w-4xl mx-auto">
              <div className="space-y-8 my-24">
                <h4 className="text-lg md:text-xl font-extrabold">SERVICES</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base">
                  <div className="text-center md:text-center">dubious design</div>
                  <div className="text-center md:text-center">backend passes</div>
                  <div className="text-center md:text-center">artificial intelidance</div>
                  <div className="text-center md:text-center">user hugging experience </div>
                  <div className="text-center md:text-center">data analysis</div>
                  <div className="text-center md:text-center">unusual softwares</div>
                  <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  
                  </div>
                </div>
              </div>
            </ScrollObserver>

            <ScrollObserver animation="fade-up" delay={1000} className="max-w-4xl mx-auto">
              <div className="space-y-8 my-24">
                <h4 className="text-lg md:text-xl font-extrabold">PROCESS</h4>
                <div className="space-y-3 text-sm md:text-base leading-relaxed">
                  <p>scope fast. prototype early.</p>
                  <p>ship small. learn from users.</p>
                  <p>iterate. harden. scale.</p>
                </div>
              </div>
            </ScrollObserver>

            <ScrollObserver animation="fade-up" delay={1200} className="max-w-5xl mx-auto">
              <div className="space-y-8 my-24">
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
                    "sql",
                    "threejs",
                    "n8n",
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
            <h2 className="text-small-bold text-muted-foreground mb-4">OUR WORK</h2>
            <h3 className="text-massive font-black leading-none mb-8">PROJECTS</h3>
            <p className="text-tiny uppercase tracking-widest max-w-2xl mx-auto">
              selected work across frontend, backend, and experiments.
            </p>
          </ScrollObserver>

          {/* Frontend Projects */}
          <div className="mb-20">
            <ScrollObserver animation="slide-right">
              <h4 className="text-huge-thin mb-12 text-center">FRONTEND</h4>
            </ScrollObserver>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollObserver key={project.title} animation="spring-up" delay={index * 150}>
                  <Card className="group overflow-hidden border-border hover:border-primary transition-spring hover-lift">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-spring"
                      />
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
                            size="sm"
                            variant="outline"
                            className="text-xs font-semibold bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-spring"
                          >
                            <Github className="w-3 h-3 mr-1" />
                            CODE
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="text-xs font-semibold bg-foreground text-background hover:bg-foreground/90 transition-spring"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            LIVE
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
                      <img
                        src={dashboard.image || "/placeholder.svg"}
                        alt={dashboard.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-spring"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h5 className="text-small-bold">{dashboard.title.toUpperCase()}</h5>
                        <span className="text-tiny text-muted-foreground">{dashboard.year}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {dashboard.description.toLowerCase()}
                      </p>

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

      <section id="contact" className="py-32 radiate-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollObserver animation="spring-up" className="space-y-12">
            <div>
              <ScrollObserver animation="fade-in" delay={100}>
                <h2 className="text-small-bold text-muted-foreground mb-4">GET IN TOUCH</h2>
              </ScrollObserver>
              <ScrollObserver animation="scale-up" delay={200}>
                <h3 className="text-massive font-black leading-none mb-8">CONTACT</h3>
              </ScrollObserver>
              <ScrollObserver animation="fade-up" delay={300}>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold mb-2">CLAYTON BORGES</h4>
                      <p className="text-sm text-muted-foreground">claytonborgesdev@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">RAPHAEL PALMER</h4>
                      <p className="text-sm text-muted-foreground">raphaelpalmer42@gmail.com</p>
                    </div>
                  </div>
                </div>
              </ScrollObserver>
            </div>

            <ScrollObserver animation="spring-up" delay={400} className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-600 text-small-bold py-6 transition-spring hover-lift"
                style={{ color: "white" }}
              >
                <Mail className="w-5 h-5 mr-2" />
                EMAIL US
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-small-bold py-6 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-spring hover-lift"
              >
                <Github className="w-5 h-5 mr-2" />
                GITHUB
              </Button>
            </ScrollObserver>

            <ScrollObserver
              animation="fade-up"
              delay={600}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border"
            >
              {[
                { label: "go", value: "horse" },
              ].map((item, index) => (
                <ScrollObserver key={item.label} animation="scale-up" delay={700 + index * 100}>
                  
                </ScrollObserver>
              ))}
            </ScrollObserver>
          </ScrollObserver>
        </div>
      </section>

      <ScrollObserver animation="fade-in">
        <footer className="py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="text-tiny uppercase tracking-widest text-muted-foreground">
              © 2024 disclaymer — development team
            </div>
          </div>
        </footer>
      </ScrollObserver>
    </div>
  )
}
