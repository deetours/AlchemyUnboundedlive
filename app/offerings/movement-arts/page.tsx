"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function TheVesselPage() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({ 
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end end"]
  })

  // Fluid transition: Earthy/Fleshy neutral to bone white
  const bg = useTransform(scrollYProgress, [0, 0.45, 0.55], ["#EBE8E4", "#EBE8E4", "#F5F4F1"])
  const text = useTransform(scrollYProgress, [0, 1], ["#1A1A1A", "#1A1A1A"])

  // Surreal parallax elements for background
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const blob1Rotate = useTransform(scrollYProgress, [0, 1], [0, 20])
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const blob2Rotate = useTransform(scrollYProgress, [0, 1], [0, -40])

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null;

  return (
    <motion.main 
      ref={containerRef}
      style={{ backgroundColor: bg }}
      className="min-h-screen selection:bg-primary/30 transition-colors duration-1000 overflow-x-hidden"
    >
      {/* Fixed Navigation */}
      <div className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-foreground">
         <Link href="/" className="group py-2">
            <span className="font-serif text-2xl tracking-tight text-foreground transition-colors duration-700">
               Alchemy <span className="text-[#946DE3]">Unbounded</span>
            </span>
         </Link>
         <Link href="/offerings" className="font-sans text-[10px] tracking-[0.4em] uppercase flex gap-2 items-center opacity-60 hover:opacity-100 transition-opacity duration-700">
           <span>←</span> The Crossroads
         </Link>
      </div>

      <motion.div className="relative">
         
         {/* THE DENSITY (Fluid background elements) */}
         <div className="fixed inset-0 pointer-events-none z-0">
            <motion.div 
               style={{ 
                  y: blob1Y,
                  rotate: blob1Rotate
               }}
               className="absolute top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-[#FFC908]/5 rounded-full blur-[120px]"
            />
            <motion.div 
               style={{ 
                  y: blob2Y,
                  rotate: blob2Rotate
               }}
               className="absolute bottom-1/4 -left-1/4 w-[60vw] h-[60vw] bg-[#946DE3]/5 rounded-full blur-[100px]"
            />
         </div>

         {/* ACT I: THE WEIGHT */}
         <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto relative z-10">
            <motion.p className="font-sans text-[10px] tracking-[0.6em] uppercase opacity-50 mb-12">Movement Arts Training</motion.p>
            <motion.h1 className="font-serif text-5xl md:text-8xl leading-none max-w-5xl mb-24 lg:-ml-2">
               The body stores <br/>
               <span className="italic opacity-60">what the mind forgets.</span>
            </motion.h1>
            
            <div className="flex flex-col md:flex-row gap-16 items-start">
               <div className="max-w-md space-y-8">
                  <p className="font-serif text-xl md:text-2xl leading-relaxed">
                     You are not an brain carrying around a biological machine. You are a coherent, breathing vessel of experience.
                  </p>
                  <p className="font-sans text-xs tracking-widest opacity-60 leading-relaxed uppercase">
                     Welcome to the training of the container.
                  </p>
               </div>
            </div>
         </section>

         {/* ACT II: THE DENSITY (The Vessel) */}
         <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative z-10 pt-32">
            <div className="grid md:grid-cols-2 gap-24 items-start">
               <div className="space-y-12">
                  <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                     Building the <br/>
                     <span className="text-[#946DE3]">Vessel.</span>
                  </h2>
                  <p className="font-serif text-xl opacity-70 leading-relaxed italic max-w-sm">
                     Movement is not exercise. It is a way of observing the quality of your own presence.
                  </p>
               </div>
               
               <div className="space-y-24">
                  <div className="group">
                     <h3 className="font-sans text-xs tracking-[0.4em] uppercase font-bold mb-6 text-[#FFC908]">Somatic Intelligence</h3>
                     <p className="font-serif text-lg leading-relaxed opacity-80 border-b border-current/10 pb-8">
                        Learning to read the subtle signals of the nervous system. Moving from reactivity into intentional response.
                     </p>
                  </div>
                  <div className="group">
                     <h3 className="font-sans text-xs tracking-[0.4em] uppercase font-bold mb-6 opacity-40">Kinematic Clarity</h3>
                     <p className="font-serif text-lg leading-relaxed opacity-80 border-b border-current/10 pb-8">
                        The release of stored survival patterns through complex, rigorous coordination and play.
                     </p>
                  </div>
                  <div className="group">
                     <h3 className="font-sans text-xs tracking-[0.4em] uppercase font-bold mb-6 opacity-40">The Steady Center</h3>
                     <p className="font-serif text-lg leading-relaxed opacity-80 border-b border-current/10 pb-8">
                        Building a body that remains calm, vital, and grounded even amidst the storm of complexity.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* ACT III: THE METHOD */}
         <section className="py-40 px-6 md:px-24 bg-[#1A1A1A] text-white">
            <div className="max-w-4xl mx-auto space-y-40">
               <div>
                 <p className="font-sans text-[10px] tracking-[0.6em] uppercase opacity-30 mb-8">The Curriculum</p>
                 <h2 className="font-serif text-3xl md:text-5xl border-l border-[#FFC908] pl-8 leading-tight">
                   From mechanics to <br/> spontaneous flow.
                 </h2>
               </div>

               <div className="grid md:grid-cols-2 gap-16">
                  <div className="space-y-4">
                     <span className="font-serif text-4xl text-[#FFC908] opacity-50 block mb-8">01</span>
                     <h3 className="font-serif text-2xl">Foundations</h3>
                     <p className="font-sans text-sm opacity-60 leading-relaxed">
                        Joint health, spinal integrity, and basic locomotive patterns. We rebuild the map of your body.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <span className="font-serif text-4xl text-[#FFC908] opacity-50 block mb-8">02</span>
                     <h3 className="font-serif text-2xl">Complexity</h3>
                     <p className="font-sans text-sm opacity-60 leading-relaxed">
                        Hand-balancing, floorwork, and non-linear movement. Challenging the brain to stay present through the body.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <span className="font-serif text-4xl text-[#FFC908] opacity-50 block mb-8">03</span>
                     <h3 className="font-serif text-2xl">Conditioning</h3>
                     <p className="font-sans text-sm opacity-60 leading-relaxed">
                        Strength and mobility training built not for appearance, but for capacity and resilience.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <span className="font-serif text-4xl text-[#FFC908] opacity-50 block mb-8">04</span>
                     <h3 className="font-serif text-2xl">Expression</h3>
                     <p className="font-sans text-sm opacity-60 leading-relaxed">
                        Improvisation and movement arts. The transition from technique into the joy of embodied life.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* INVESTMENT */}
         <section className="py-32 px-6 md:px-24 text-center">
            <div className="max-w-3xl mx-auto space-y-12">
               <h2 className="font-serif text-2xl md:text-3xl italic opacity-60">This is not fitness. This is the container for your life.</h2>
               <div className="h-24 w-[1px] bg-foreground/10 mx-auto" />
               <div className="flex flex-col items-center">
                  <span className="font-sans text-[10px] tracking-[0.5em] uppercase opacity-40 mb-4">Training Investment</span>
                  <span className="font-serif text-5xl">$1,800 USD</span>
                  <span className="font-sans text-[10px] tracking-widest opacity-60 uppercase mt-4">6-Month Transformation</span>
               </div>
            </div>
         </section>

         {/* FINAL CTA */}
         <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pb-20">
            <h2 className="font-serif text-4xl md:text-6xl mb-16 max-w-4xl">
               Is your body a home, <br/> or a prison?
            </h2>
            <Link href="/begin" className="group flex flex-col items-center">
               <span className="font-sans text-[10px] tracking-[0.8em] uppercase transition-all duration-700 font-bold mb-4">
                 OCCUPY THE VESSEL
               </span>
               <div className="h-[2px] w-0 group-hover:w-full bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)] transition-all duration-700" />
            </Link>
         </section>

         <Footer />
      </motion.div>
    </motion.main>
  )
}
