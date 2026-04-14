"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"

const navLinks = [
  { href: "/offerings", label: "Path",       hint: "The three doors",          index: 0 },
  { href: "/about",     label: "Philosophy", hint: "The man behind the work",  index: 1 },
  { href: "/voices",    label: "Outcomes",   hint: "Witnesses to the change",  index: 2 },
  { href: "/begin",     label: "Apply",      hint: "Begin the conversation",   index: 3 },
]

// Entry directions — each word arrives from a different cardinal point
const ENTRY_FROM = [
  { x: -60,  y: -30 }, // Path — from top-left
  { x:  60,  y: -20 }, // Philosophy — from top-right
  { x: -40,  y:  30 }, // Outcomes — from bottom-left
  { x:  40,  y:  40 }, // Apply — from bottom-right
]

export function Navigation() {
  const [isOpen, setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered]  = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

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
          <Link href="/" className="group py-2" onClick={() => setIsOpen(false)}>
            <span className="font-serif text-2xl tracking-tight text-foreground">
              Alchemy <span className="text-[#946DE3]">Unbounded</span>
            </span>
          </Link>

          {/* Desktop Navigation — unchanged */}
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

          {/* Mobile: Sigil trigger button — replaces hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative flex items-center justify-center w-10 h-10"
            aria-label="Open navigation"
          >
            <motion.div
              animate={isOpen
                ? { rotate: 45, scale: 0.8, opacity: 0.5 }
                : { rotate: 0,  scale: 1,   opacity: 1   }
              }
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer pulsing ring — only when closed */}
              {!isOpen && (
                <motion.span
                  animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border border-[#946DE3] pointer-events-none"
                />
              )}
              {/* The sigil glyph */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="relative z-10">
                <circle cx="11" cy="11" r="9.5" stroke="#946DE3" strokeWidth="1" opacity="0.7"/>
                <circle cx="11" cy="11" r="5" stroke="#946DE3" strokeWidth="0.75" opacity="0.5"/>
                <line x1="11" y1="1.5" x2="11" y2="20.5" stroke="#946DE3" strokeWidth="0.75" opacity="0.4"/>
                <line x1="1.5" y1="11" x2="20.5" y2="11" stroke="#946DE3" strokeWidth="0.75" opacity="0.4"/>
                <circle cx="11" cy="11" r="1.5" fill="#FFC908"/>
              </svg>
            </motion.div>
          </button>
        </nav>
      </motion.header>

      {/* ═══════════════════════════════════════
          IMMERSIVE MOBILE MENU OVERLAY
          ═══════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] md:hidden"
            style={{ background: "rgba(12, 10, 10, 0.97)" }}
          >
            {/* Slowly rotating alchemical circle — atmospheric backdrop */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] pointer-events-none"
              aria-hidden="true"
            >
              <svg viewBox="0 0 500 500" fill="none" width="100%" height="100%">
                <circle cx="250" cy="250" r="248" stroke="#946DE3" strokeWidth="0.3" opacity="0.12"/>
                <circle cx="250" cy="250" r="200" stroke="#946DE3" strokeWidth="0.3" opacity="0.08" strokeDasharray="3 8"/>
                <circle cx="250" cy="250" r="140" stroke="#FFC908" strokeWidth="0.3" opacity="0.06"/>
                <path d="M250 2 L498 374 L2 374 Z" stroke="#946DE3" strokeWidth="0.3" opacity="0.06"/>
                <path d="M250 498 L2 126 L498 126 Z" stroke="#946DE3" strokeWidth="0.3" opacity="0.06"/>
              </svg>
            </motion.div>

            {/* Gold hair-line cross — center axis */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" aria-hidden="true">
              <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-[#FFC908] opacity-[0.06]" />
              <div className="absolute left-1/2 top-0 h-full w-[0.5px] bg-[#FFC908] opacity-[0.06]" />
            </div>

            {/* Close trigger — tap anywhere on the dark area */}
            <div
              className="absolute inset-0 z-0"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Top bar — logo stays + close sigil */}
            <div className="relative z-10 flex justify-between items-center px-6 pt-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-serif text-lg tracking-tight text-white/70"
              >
                Alchemy <span className="text-[#946DE3]">Unbounded</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
                className="relative flex items-center justify-center w-10 h-10"
              >
                <motion.div
                  initial={{ rotate: -45, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: -45, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="9.5" stroke="#946DE3" strokeWidth="1" opacity="0.7"/>
                    <line x1="7" y1="7" x2="15" y2="15" stroke="#FFC908" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="15" y1="7" x2="7" y2="15" stroke="#FFC908" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </button>
            </div>

            {/* Nav items — staggered, each from a unique direction */}
            <div className="relative z-10 flex flex-col items-start justify-center min-h-[80vh] px-8 gap-2 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    x: ENTRY_FROM[i].x,
                    y: ENTRY_FROM[i].y,
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: ENTRY_FROM[i].x * 0.5,
                    y: ENTRY_FROM[i].y * 0.5,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  className="relative group cursor-pointer w-full py-3"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-start gap-1"
                  >
                    {/* Index number */}
                    <motion.span
                      animate={{ opacity: hovered === i ? 1 : 0.2 }}
                      transition={{ duration: 0.3 }}
                      className="font-sans text-[10px] tracking-[0.4em] text-[#946DE3] font-bold"
                    >
                      0{i + 1}
                    </motion.span>

                    {/* Main label */}
                    <motion.span
                      animate={{
                        color: hovered === i ? "#FFC908" : "rgba(255,255,255,0.9)",
                        x: hovered === i ? 8 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="font-serif text-[3rem] leading-none tracking-tight block"
                    >
                      {link.label}
                    </motion.span>

                    {/* Sub-hint — only visible on hover */}
                    <motion.span
                      animate={{
                        opacity: hovered === i ? 0.5 : 0,
                        y: hovered === i ? 0 : 4,
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="font-sans text-[10px] tracking-[0.3em] uppercase text-white pl-1"
                    >
                      {link.hint}
                    </motion.span>
                  </Link>

                  {/* Gold underline that grows on hover */}
                  <motion.div
                    animate={{ scaleX: hovered === i ? 1 : 0, opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 h-[1px] w-full bg-[#FFC908] origin-left shadow-[0_0_8px_rgba(255,201,8,0.4)]"
                  />
                </motion.div>
              ))}

              {/* Accepting clients pulse — bottom of menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center gap-3 mt-8 pl-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC908] animate-pulse" />
                <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/30">
                  Accepting clients
                </span>
              </motion.div>
            </div>

            {/* Bottom edge — begin CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="relative z-10 absolute bottom-0 left-0 right-0 px-8 pb-10 border-t border-white/5 pt-6"
              style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom, 0px))" }}
            >
              <Link
                href="/begin"
                onClick={() => setIsOpen(false)}
                className="font-sans text-[10px] tracking-[0.8em] uppercase text-[#FFC908]/60 hover:text-[#FFC908] transition-colors duration-500 font-bold"
              >
                → Begin the Conversation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
