"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// --- THE PATHS DATA ---
type PathID = "descent" | "signal" | "vessel" | null;

const PATHS = {
  descent: {
    title: "THE DESCENT",
    word: "Descent",
    subtitle: "Inner Architecture & Identity Transition",
    copy1: "We do not fix what is broken. We examine the patterns shaping your choices.",
    copy2: "For those navigating identity collapse, life transition, or the tension between who you are and who you must become.",
    bullets: [
      "Deconstructing performance-based loops",
      "Mapping the emotional architecture",
      "Moving from external pressure to inner clarity"
    ],
    note: "This is not advice. This is guided self-discovery and realignment.",
    href: "/offerings/life-coaching",
    hrefLabel: "Explore The Descent",
    color: "#946DE3"
  },
  signal: {
    title: "THE SIGNAL",
    word: "Signal",
    subtitle: "Creative Integrity & Authentic Resonance",
    copy1: "Creative work is not content. It is signal.",
    copy2: "For makers and creators severed from their authentic voice by algorithmic pressure and performance exhaustion.",
    bullets: [
      "Clearing the noise of external expectations",
      "Building sustainable visibility",
      "Monetization that respects the nervous system"
    ],
    note: "This is not a content strategy. This is embodied creative alignment.",
    href: "/offerings/creativity-coaching",
    hrefLabel: "Explore The Signal",
    color: "#946DE3"
  },
  vessel: {
    title: "THE VESSEL",
    word: "Vessel",
    subtitle: "Movement Arts & Somatic Intelligence",
    copy1: "The body stores what the mind forgets.",
    copy2: "For those seeking to build nervous system resilience and emotional intelligence through rigorous physical embodiment.",
    bullets: [
      "Developing physical intuition",
      "Releasing stored survival patterns",
      "Integration through complex coordination"
    ],
    note: "This is not fitness. This is embodiment training.",
    href: "/offerings/movement-arts",
    hrefLabel: "Explore The Vessel",
    color: "#FFC908"
  }
}

export default function PathsPage() {
  const [mounted, setMounted] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<PathID>(null)
  const [selectedPath, setSelectedPath] = useState<PathID>(null)
  // Mobile accordion state — separate from desktop selection
  const [expandedMobile, setExpandedMobile] = useState<PathID>(null)
  
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null;

  return (
    <main className="bg-[#F5F4F1] min-h-screen text-foreground selection:bg-primary/30 flex flex-col overflow-x-hidden">
      <Navigation />

      {/* ─── MOBILE LAYOUT (hidden on md+) ─── */}
      <section className="md:hidden flex-grow w-full pt-28 pb-16 px-5 flex flex-col gap-0">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl text-foreground mb-3">The Crossroads</h1>
          <p className="font-sans text-[10px] tracking-[0.5em] text-muted-foreground uppercase">Choose your direction</p>
        </div>

        {/* Accordion Paths */}
        <div className="flex flex-col divide-y divide-foreground/10 border-y border-foreground/10">
          {(["descent", "signal", "vessel"] as PathID[]).map((pathId) => {
            const path = PATHS[pathId!]
            const isOpen = expandedMobile === pathId

            return (
              <div key={pathId}>
                {/* Path Header Row */}
                <button
                  onClick={() => setExpandedMobile(isOpen ? null : pathId)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`font-serif text-4xl tracking-tighter transition-all duration-500 ${isOpen ? "italic" : ""}`}
                    style={{ color: isOpen ? path.color : undefined }}>
                    {path.word}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl font-light text-muted-foreground ml-4 shrink-0"
                  >
                    +
                  </motion.span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 space-y-6">
                        {/* Yellow/Purple accent line */}
                        <div className="h-[2px] w-12" style={{ backgroundColor: path.color }} />

                        <p className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold"
                          style={{ color: path.color }}>
                          {path.subtitle}
                        </p>

                        <p className="font-serif text-2xl leading-snug text-foreground">
                          {path.copy1}
                        </p>
                        <p className="font-serif text-base text-muted-foreground italic leading-relaxed">
                          {path.copy2}
                        </p>

                        <ul className="space-y-3 pt-2">
                          {path.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <span className="mt-1.5 shrink-0" style={{ color: path.color }}>•</span>
                              <span className="font-sans text-sm text-foreground/80 leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="font-serif text-sm text-foreground/50 italic border-l-2 pl-4 py-1"
                          style={{ borderColor: path.color + "50" }}>
                          {path.note}
                        </p>

                        {/* CTA — links to specific service */}
                        <div className="pt-4 flex flex-col gap-5">
                          <Link
                            href={path.href}
                            className="group inline-flex items-center gap-3 py-4 active:opacity-70 transition-opacity"
                          >
                            <span className="font-sans text-[11px] tracking-[0.5em] uppercase font-bold text-foreground">
                              {path.hrefLabel}
                            </span>
                            <motion.span
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              className="text-sm"
                              style={{ color: path.color }}
                            >→</motion.span>
                          </Link>
                          <div className="h-[1px] w-full bg-foreground/10" />
                          <Link
                            href="/begin"
                            className="group inline-flex flex-col w-max"
                          >
                            <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-bold mb-2">
                              → Begin a conversation
                            </span>
                            <div className="h-[1px] w-full bg-foreground/15" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Global note */}
        <p className="font-sans text-[9px] tracking-widest text-muted-foreground uppercase leading-relaxed mt-10 px-1">
          Investment is determined during our alignment dialogue. These containers are intimately scale-limited to protect the integrity of the work.
        </p>
      </section>

      {/* ─── DESKTOP LAYOUT (hidden on mobile) ─── */}
      <section className="hidden md:flex flex-grow relative w-full pt-32 pb-32 flex-col items-center justify-center min-h-screen">
        
        {/* Intro Text (Fades out when a path is selected) */}
        <AnimatePresence>
          {!selectedPath && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="absolute top-40 text-center z-10"
            >
              <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">The Crossroads</h1>
              <p className="font-sans text-[10px] tracking-[0.6em] text-muted-foreground uppercase">Choose your direction</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Path Options */}
        <div className={`relative w-full max-w-7xl mx-auto px-8 flex ${selectedPath ? 'flex-row' : 'flex-row'} items-center justify-center gap-24 transition-all duration-1000 z-20 h-full`}>
          
          {(["descent", "signal", "vessel"] as PathID[]).map((pathId) => {
            const isHovered = hoveredPath === pathId;
            const isSelected = selectedPath === pathId;
            const isAnotherSelected = selectedPath !== null && selectedPath !== pathId;
            
            if (isAnotherSelected) return null;

            return (
              <motion.div
                key={pathId}
                layoutId={`path-desktop-${pathId}`}
                onMouseEnter={() => !selectedPath && setHoveredPath(pathId)}
                onMouseLeave={() => !selectedPath && setHoveredPath(null)}
                onClick={() => setSelectedPath(pathId)}
                className={`cursor-pointer transition-all duration-700 ${
                  isSelected ? "w-1/3 text-left items-start justify-start" : "flex-1 text-center items-center justify-center flex"
                }`}
                animate={{
                  opacity: (hoveredPath && !isHovered && !selectedPath) ? 0.3 : 1,
                  filter: (hoveredPath && !isHovered && !selectedPath) ? "blur(8px)" : "blur(0px)",
                  scale: isHovered && !selectedPath ? 1.05 : 1
                }}
              >
                <h2 className={`font-serif uppercase transition-colors duration-500
                  ${isSelected ? "text-5xl md:text-7xl lg:text-8xl text-foreground leading-none" : "text-4xl md:text-6xl lg:text-7xl text-foreground/80"}
                  ${isHovered && !selectedPath ? "text-[#946DE3]" : ""}
                `}>
                  {PATHS[pathId!].word}
                </h2>
                
                {/* Back button when selected */}
                <AnimatePresence>
                  {isSelected && (
                     <motion.div
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: -20 }}
                       transition={{ delay: 0.5 }}
                       onClick={(e) => { e.stopPropagation(); setSelectedPath(null); setHoveredPath(null); }}
                       className="mt-12 group flex items-center gap-4 cursor-pointer"
                     >
                       <span className="text-[#946DE3] transform group-hover:-translate-x-2 transition-transform duration-500">←</span>
                       <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500">Return to Threshold</span>
                     </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}

          {/* Details Reveal (Right Side) */}
          <AnimatePresence>
            {selectedPath && (
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="w-2/3 h-full flex items-center pl-12 md:pl-24 relative"
              >
                {/* The Yellow Slicing Line */}
                <motion.div 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[80vh] bg-[#FFC908] origin-top shadow-[0_0_20px_rgba(255,201,8,0.3)]"
                />

                <div className="max-w-2xl space-y-12 py-12">
                   <h3 className="font-sans text-xs tracking-[0.5em] text-[#A0700A] uppercase font-bold">
                     {PATHS[selectedPath].subtitle}
                   </h3>

                   <div className="space-y-8">
                     <p className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
                       {PATHS[selectedPath].copy1}
                     </p>
                     <p className="font-serif text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
                       {PATHS[selectedPath].copy2}
                     </p>
                   </div>

                   <ul className="space-y-4 pt-8">
                     {PATHS[selectedPath].bullets.map((b, i) => (
                       <li key={i} className="flex gap-4 items-start">
                         <span className="text-[#FFC908] mt-1.5">•</span>
                         <span className="font-sans text-sm tracking-wide text-foreground/80">{b}</span>
                       </li>
                     ))}
                   </ul>

                   <div className="pt-12 border-t border-foreground/10 space-y-8">
                     <p className="font-serif text-lg text-foreground/60 italic border-l-2 border-[#946DE3]/30 pl-4 py-2">
                       {PATHS[selectedPath].note}
                     </p>

                     <div className="flex flex-col space-y-6">
                       {/* ── Link to the specific service page ── */}
                       <Link href={PATHS[selectedPath].href} className="group inline-flex flex-col w-max">
                         <span className="font-sans text-xs tracking-[0.6em] uppercase text-[#946DE3] group-hover:text-foreground transition-colors duration-500 font-bold mb-2">
                           → {PATHS[selectedPath].hrefLabel}
                         </span>
                         <div className="h-[1px] w-full bg-[#946DE3]/30 group-hover:bg-foreground/30 transition-colors duration-500" />
                       </Link>

                       <Link href="/begin" className="group inline-flex flex-col w-max">
                         <span className="font-sans text-xs tracking-[0.6em] uppercase text-foreground group-hover:text-[#946DE3] transition-colors duration-500 font-bold mb-2">
                           → Begin a conversation
                         </span>
                         <div className="h-[1px] w-full bg-foreground/20 group-hover:bg-[#946DE3] transition-colors duration-500" />
                       </Link>

                       <p className="font-sans text-[9px] tracking-widest text-muted-foreground uppercase leading-relaxed max-w-md">
                         Investment is determined strictly during our alignment dialogue. These containers are intimately scale-limited to protect the integrity of the work.
                       </p>
                     </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <Footer />
    </main>
  )
}
