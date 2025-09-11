"use client"

import { useState } from "react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const Item = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-muted"
    >
      {label}
    </a>
  )

  return (
    <div className="md:hidden ml-2">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="p-2 border rounded bg-background"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 top-16 z-[60] w-56 rounded border bg-background shadow-xl">
          <Item href="#about" label="About" />
          <Item href="#projects" label="Projects" />
          <Item href="#contact" label="Contact" />
        </div>
      )}
    </div>
  )
}


