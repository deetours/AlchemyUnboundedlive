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
    subtitle: "Inner Architecture & Identity Transition",
    copy1: "We do not fix what is broken. We examine the patterns shaping your choices.",
    copy2: "For those navigating identity collapse, life transition, or the tension between who you are and who you must become.",
    bullets: [
      "Deconstructing performance-based loops",
      "Mapping the emotional architecture",
      "Moving from external pressure to inner clarity"
    ],
    note: "This is not advice. This is guided self-discovery and realignment."
  },
  signal: {
    title: "THE SIGNAL",
    subtitle: "Creative Integrity & Authentic Resonance",
    copy1: "Creative work is not content. It is signal.",
    copy2: "For makers and creators severed from their authentic voice by algorithmic pressure and performance exhaustion.",
    bullets: [
      "Clearing the noise of external expectations",
      "Building sustainable visibility",
      "Monetization that respects the nervous system"
    ],
    note: "This is not a content strategy. This is embodied creative alignment."
  },
  vessel: {
    title: "THE VESSEL",
    subtitle: "Movement Arts & Somatic Intelligence",
    copy1: "The body stores what the mind forgets.",
    copy2: "For those seeking to build nervous system resilience and emotional intelligence through rigorous physical embodiment.",
    bullets: [
      "Developing physical intuition",
      "Releasing stored survival patterns",
      "Integration through complex coordination"
    ],
    note: "This is not fitness. This is embodiment training."
  }
}

export default function PathsPage() {
  const [mounted, setMounted] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<PathID>(null)
  const [selectedPath, setSelectedPath] = useState<PathID>(null)
  
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null;

  return (
    <main className="bg-[#F5F4F1] min-h-screen text-foreground selection:bg-primary/30 flex flex-col overflow-x-hidden">
      <Navigation />

      {/* --- THE CROSSROADS EXPERIENCE --- */}
      <section className="flex-grow relative w-full pt-32 pb-32 flex flex-col items-center justify-center min-h-screen">
        
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

        {/* The Path Options (Vertical Typography) */}
        <div className={`relative w-full max-w-7xl mx-auto px-8 flex ${selectedPath ? 'flex-row' : 'flex-col md:flex-row'} items-center justify-center gap-12 md:gap-24 transition-all duration-1000 z-20 h-full`}>
          
          {(["descent", "signal", "vessel"] as PathID[]).map((pathId) => {
            const isHovered = hoveredPath === pathId;
            const isSelected = selectedPath === pathId;
            const isAnotherSelected = selectedPath !== null && selectedPath !== pathId;
            
            // If another path is selected, hide this one entirely
            if (isAnotherSelected) return null;

            return (
              <motion.div
                key={pathId}
                layoutId={`path-${pathId}`}
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
                  {PATHS[pathId!].title.split(' ')[1]} {/* Just the word DESCENT, SIGNAL, VESSEL */}
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

                   <div className="pt-12 border-t border-foreground/10 space-y-12">
                     <p className="font-serif text-lg text-foreground/60 italic border-l-2 border-[#946DE3]/30 pl-4 py-2">
                       {PATHS[selectedPath].note}
                     </p>

                     <div className="flex flex-col space-y-6">
                       <Link href="/begin" className="group inline-flex flex-col w-max">
                         <span className="font-sans text-xs tracking-[0.6em] uppercase text-foreground group-hover:text-[#946DE3] transition-colors duration-500 font-bold mb-2">
                           → I am ready for this path
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
