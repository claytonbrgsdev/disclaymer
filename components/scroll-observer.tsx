"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollObserverProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "spring-up"
  delay?: number
  threshold?: number
}

export function ScrollObserver({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollObserverProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const animationClass = isVisible ? `animate-${animation}` : `opacity-0 ${getInitialTransform(animation)}`

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out px-0 my-8 text-center items-stretch justify-center ${animationClass} ${className}`}>
      {children}
    </div>
  )
}

function getInitialTransform(animation: string): string {
  switch (animation) {
    case "fade-up":
      return "translate-y-8"
    case "slide-left":
      return "translate-x-8"
    case "slide-right":
      return "-translate-x-8"
    case "scale-up":
      return "scale-95"
    case "spring-up":
      return "translate-y-12 scale-95"
    default:
      return ""
  }
}
