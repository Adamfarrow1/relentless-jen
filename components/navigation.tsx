"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },

    { href: "/health-insurance", label: "Health Insurance" },
    { href: "/life-annuities", label: "Life & Annuities" },
    { href: "/about", label: "About Us" },
  ]

  const agentResourcesLinks = [
    { href: "/agent-resources/partner-links", label: "Partner Links" },
    { href: "/agent-resources/carrier-links", label: "Carrier Links" },
    { href: "/agent-resources/certification-links", label: "Certification Links" },
    { href: "/agent-resources/aca-links", label: "ACA Links" },
    { href: "/agent-resources/resources-library", label: "Resources Library" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-4 font-semibold text-xl">
            <img src="/logo_relentlessjen.jpeg" alt="Relentless Jen" className="h-15 w-15" />
            <span className="text-foreground">Relentless Jen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setIsAgentDropdownOpen(true)}
              onMouseLeave={() => setIsAgentDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Agent Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              {isAgentDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-background border border-border rounded-md shadow-lg py-2">
                  {agentResourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button asChild>
              <Link href="/contact">Become an Agent</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2">
              <button
                onClick={() => setIsAgentDropdownOpen(!isAgentDropdownOpen)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Agent Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${isAgentDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isAgentDropdownOpen && (
                <div className="pl-4 space-y-2">
                  {agentResourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Become an Agent
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
