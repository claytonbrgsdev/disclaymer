import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeToggle } from "../components/theme-toggle"
import MobileNav from "../components/mobile-nav"

const geistSans = GeistSans

const geistMono = GeistMono

export const metadata: Metadata = {
  metadataBase: new URL("https://claytonbrgsdev.github.io/disclaymer"),
  title: "DISCLAYMER",
  description:
    "no claims, only commits. tests before promises. versioned change. reliable deploys.",
  openGraph: {
    title: "DISCLAYMER",
    description:
      "no claims, only commits. tests before promises. versioned change. reliable deploys.",
    url: "https://claytonbrgsdev.github.io/disclaymer/",
    siteName: "DISCLAYMER",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "DISCLAYMER",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DISCLAYMER",
    description:
      "no claims, only commits. tests before promises. versioned change. reliable deploys.",
    images: ["/thumbnail.png"],
  }
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
                <div className="flex items-baseline gap-3">
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic whitespace-nowrap">
                    DISCLAYMER
                  </h1>
                  <span className="hidden sm:inline text-sm font-normal whitespace-nowrap italic not-italic:!">
                    no pitch, only product.
                  </span>
                </div>
              </div>
              <div className="hidden md:flex space-x-8 items-center">
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
              <div className="flex md:hidden items-center">
                <ThemeToggle />
                <MobileNav />
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
