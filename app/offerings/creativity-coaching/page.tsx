"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function TheSignalPage() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({ 
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end end"]
  })

  // Hyper-stark coloring
  const bg = useTransform(scrollYProgress, [0, 0.45, 0.55], ["#FFFFFF", "#FFFFFF", "#1A1A1A"])
  const text = useTransform(scrollYProgress, [0, 0.45, 0.55], ["#1A1A1A", "#1A1A1A", "#FFFFFF"])

  // Interference echoes
  const ghostX1 = useTransform(scrollYProgress, [0, 1], [-200, 200])
  const ghostX2 = useTransform(scrollYProgress, [0, 1], [200, -200])
  const ghostX3 = useTransform(scrollYProgress, [0, 1], [-300, 300])

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null;

  return (
    <motion.main 
      ref={containerRef}
      style={{ backgroundColor: bg }}
      className="min-h-screen selection:bg-primary/30 transition-colors duration-700 overflow-x-hidden"
    >
      {/* Mix-blend Navigation */}
      <div className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
         <Link href="/" className="group py-2">
            <span className="font-serif text-2xl tracking-tight transition-colors duration-700">
               Alchemy <span className="text-[#946DE3]">Unbounded</span>
            </span>
         </Link>
         <Link href="/offerings" className="font-sans text-[10px] tracking-[0.4em] uppercase flex gap-2 items-center opacity-70 hover:opacity-100 transition-opacity duration-700">
           <span>←</span> The Crossroads
         </Link>
      </div>

      <motion.div style={{ color: text }} className="relative">
         
         {/* THE INTERFERENCE (Ghostly background noise) */}
         <div className="fixed inset-0 pointer-events-none opacity-5 flex flex-col items-center justify-around font-serif text-[20vh] leading-none select-none">
            <motion.span style={{ x: ghostX1 }}>ALGORITHM</motion.span>
            <motion.span style={{ x: ghostX2 }}>PERFORMANCE</motion.span>
            <motion.span style={{ x: ghostX3 }}>METRICS</motion.span>
         </div>

         {/* ACT I: THE NOISE */}
         <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto">
            <motion.p className="font-sans text-[10px] tracking-[0.6em] uppercase opacity-50 mb-12">Creativity Coaching</motion.p>
            <motion.h1 className="font-serif text-5xl md:text-8xl leading-none max-w-5xl mb-24">
               The world asks you to <br/>
               <span className="italic">perform.</span>
            </motion.h1>
            
            <div className="flex flex-col md:flex-row gap-16 items-start">
               <div className="max-w-md space-y-8">
                  <p className="font-serif text-xl md:text-2xl leading-relaxed">
                     You have been optimized into a product. Your creative fire is being used to feed the machine.
                  </p>
                  <p className="font-sans text-xs tracking-widest opacity-60 leading-relaxed uppercase">
                     We are here to sever the connection.
                  </p>
               </div>
               <div className="w-[1px] h-32 bg-[#FFC908] hidden md:block" />
            </div>
         </section>

         {/* ACT II: THE FREQUENCY (The Threshold) */}
         <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 bg-current/5">
            <div className="grid md:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                     Find your <br/>
                     <span className="text-[#946DE3]">Signal.</span>
                  </h2>
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-48 bg-[#FFC908]/20 blur-2xl" />
               </div>
               <div className="space-y-16">
                  <div className="border-l border-[#FFC908] pl-8">
                     <h3 className="font-sans text-xs tracking-[0.4em] uppercase font-bold mb-4">The Severance</h3>
                     <p className="font-serif text-lg opacity-80 max-w-sm">
                        Removing the parasitic gaze of the audience. Creating from the true center, not the expected outcome.
                     </p>
                  </div>
                  <div className="border-l border-current/20 pl-8 opacity-60">
                     <h3 className="font-sans text-xs tracking-[0.4em] uppercase font-bold mb-4">The Resonance</h3>
                     <p className="font-serif text-lg max-w-sm">
                        Building work that vibrates with the frequency of your actual life, not the trend.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* ACT III: THE WORK */}
         <section className="py-40 px-6 md:px-24">
            <div className="max-w-4xl mx-auto space-y-40">
               <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-current/10 pb-12">
                  <h2 className="font-serif text-6xl">01</h2>
                  <div className="max-w-md mt-8 md:mt-0">
                     <h3 className="font-serif text-2xl mb-4 italic text-[#FFC908]">Identity Reclamation</h3>
                     <p className="font-sans text-sm leading-relaxed opacity-70">
                        Who are you when no one is watching? We peel back the layers of digital performance to find the maker underneath.
                     </p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-current/10 pb-12">
                  <h2 className="font-serif text-6xl">02</h2>
                  <div className="max-w-md mt-8 md:mt-0">
                     <h3 className="font-serif text-2xl mb-4 italic text-[#FFC908]">The New Visibility</h3>
                     <p className="font-sans text-sm leading-relaxed opacity-70">
                        Visibility without depletion. Learning to share work in a way that nourishes your creativity rather than consuming it.
                     </p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-current/10 pb-12">
                  <h2 className="font-serif text-6xl">03</h2>
                  <div className="max-w-md mt-8 md:mt-0">
                     <h3 className="font-serif text-2xl mb-4 italic text-[#FFC908]">Embodied Discipline</h3>
                     <p className="font-sans text-sm leading-relaxed opacity-70">
                        Structuring a creative life that respects your nervous system. Sustainable consistency born from joy, not pressure.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* THE INVESTMENT */}
         <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
            <div className="bg-current/5 p-16 flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="max-w-md">
                  <h2 className="font-serif text-3xl mb-4 line-through opacity-30">Content Strategy</h2>
                  <h2 className="font-serif text-3xl mb-8 italic">Creative Maturity.</h2>
                  <p className="font-sans text-[9px] tracking-[0.5em] uppercase opacity-50">Private Immersion</p>
               </div>
               <div className="flex flex-col items-end text-right">
                  <span className="font-serif text-5xl mb-2">$1,500</span>
                  <span className="font-sans text-[10px] tracking-widest opacity-60 uppercase">Per 3-Month Cycle</span>
               </div>
            </div>
         </section>

         {/* CALL TO ACTION */}
         <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-serif text-4xl md:text-6xl mb-16 max-w-3xl">
               Is your voice actually your own?
            </h2>
            <Link href="/begin" className="group flex flex-col items-center">
               <span className="font-sans text-[10px] tracking-[0.8em] uppercase transition-all duration-700 font-bold mb-4">
                 RECLAIM THE SIGNAL
               </span>
               <div className="h-[2px] w-0 group-hover:w-full bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)] transition-all duration-700" />
            </Link>
         </section>

         <Footer />
      </motion.div>
    </motion.main>
  )
}
