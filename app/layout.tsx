import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeToggle } from "../components/theme-toggle"

const geistSans = GeistSans

const geistMono = GeistMono

export const metadata: Metadata = {
  title: "DISCLAYMER - Architectural Portfolio",
  description: "We are Disclaymer — a two-person development team building thoughtful software and digital products.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-none mx-auto px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="architectural-flow flex-shrink-0 pr-8">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic whitespace-nowrap">
                  DISCLAYMER
                </h1>
              </div>
              <div className="flex space-x-8 items-center">
                <a
                  href="#about"
                  className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
                >
                  ABOUT
                </a>
                <a
                  href="#projects"
                  className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
                >
                  PROJECTS
                </a>
                <a
                  href="#contact"
                  className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
                >
                  CONTACT
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
