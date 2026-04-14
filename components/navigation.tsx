"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/offerings", label: "Path" },
  { href: "/about", label: "Philosophy" },
  { href: "/voices", label: "Outcomes" },
  { href: "/begin", label: "Apply" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="group py-2">
            <span className="font-serif text-2xl tracking-tight text-foreground">
              Alchemy <span className="text-[#946DE3]">Unbounded</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative h-10 flex items-center"
              >
                <span className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-muted-foreground group-hover:text-foreground transition-all duration-700">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}

            {/* PHASE 5: Availability Signal — pure addition, pointer-events-none, whisper only */}
            <span
              className="hidden lg:flex items-center gap-2 pointer-events-none select-none ml-4"
              aria-hidden="true"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC908] animate-pulse" />
              <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-muted-foreground opacity-50">
                Accepting clients
              </span>
            </span>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="w-6 h-0.5 bg-foreground block" />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background md:hidden overflow-y-auto"
          >
            {/* Fixed Close Button Header */}
            <div className="fixed top-0 right-0 left-0 z-50 bg-background border-b border-border/20 px-6 py-6 flex justify-between items-center">
              <div />
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 hover:bg-card rounded-lg transition-all duration-300 active:scale-95"
                aria-label="Close menu"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center min-h-screen gap-12 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-5xl text-foreground hover:text-primary transition-all duration-500 block text-center"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
