"use client"

import { useEffect, useState } from "react"

export function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 navbar-glass transition-all duration-300 ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black tracking-tight text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              DISCLAYMER
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
