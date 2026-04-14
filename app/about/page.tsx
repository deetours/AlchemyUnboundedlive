"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect, ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// --- COMPONENTS ---

const StickyFrame = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden ${className}`}>
    {children}
  </div>
)

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  // ACT I: THE ARMOR — Dark, oppressive
  const act1Ref = useRef(null)
  const { scrollYProgress: s1 } = useScroll({ target: mounted ? act1Ref : undefined, offset: ["start start", "end end"] })
  const s1Text1 = useTransform(s1, [0, 0.15, 0.25], [0, 1, 0.1])
  const s1Text2 = useTransform(s1, [0.25, 0.35, 0.45], [0, 1, 0.1])
  const s1Text3 = useTransform(s1, [0.45, 0.55, 0.65], [0, 1, 0.1])
  const s1Text4 = useTransform(s1, [0.65, 0.75, 0.85], [0, 1, 0.1])
  const s1Text5 = useTransform(s1, [0.85, 0.95, 1], [0, 1, 0.4])

  // ACT II: THE FRICTION — Intense Contrast
  const act2Ref = useRef(null)
  const { scrollYProgress: s2 } = useScroll({ target: mounted ? act2Ref : undefined, offset: ["start start", "end end"] })
  const s2T1Op = useTransform(s2, [0.0, 0.1, 0.15], [0, 1, 0])
  const s2T2Op = useTransform(s2, [0.18, 0.28, 0.33], [0, 1, 0])
  const s2T3Op = useTransform(s2, [0.36, 0.46, 0.51], [0, 1, 0])
  const s2T4Op = useTransform(s2, [0.54, 0.64, 0.69], [0, 1, 0])
  const s2T5Op = useTransform(s2, [0.72, 0.82, 0.87], [0, 1, 0])
  const s2T6Op = useTransform(s2, [0.9, 0.95], [0, 1])
  
  const s2LineH = useTransform(s2, [0.4, 0.95], ["0%", "100%"])

  // ACT III: THE SEVERANCE — Minimalist
  const act3Ref = useRef(null)
  const { scrollYProgress: s3 } = useScroll({ target: mounted ? act3Ref : undefined, offset: ["start start", "end end"] })
  const s3X1 = useTransform(s3, [0, 0.2], ["100%", "0%"])
  const s3Op1 = useTransform(s3, [0.1, 0.3], [0, 1])
  const s3X2 = useTransform(s3, [0.3, 0.5], ["100%", "0%"])
  const s3Op2 = useTransform(s3, [0.4, 0.6], [0, 1])
  const s3X3 = useTransform(s3, [0.6, 0.8], ["100%", "0%"])
  const s3Op3 = useTransform(s3, [0.7, 0.9], [0, 1])
  const s3X4 = useTransform(s3, [0.85, 1], ["100%", "0%"])
  const s3Op4 = useTransform(s3, [0.9, 1], [0, 1])

  // ACT IV: THE APPRENTICESHIP — Structured
  const act4Ref = useRef(null)
  const { scrollYProgress: s4 } = useScroll({ target: mounted ? act4Ref : undefined, offset: ["start start", "end end"] })
  const s4MainOp = useTransform(s4, [0, 0.1], [0, 1])
  const s4Sub1Op = useTransform(s4, [0.1, 0.2], [0, 0.5])
  const s4Sub2Op = useTransform(s4, [0.2, 0.3], [0, 0.5])
  const s4Sub3Op = useTransform(s4, [0.3, 0.4], [0, 0.5])
  const s4Ref1Op = useTransform(s4, [0.45, 0.55], [0, 1])
  const s4Ref2Op = useTransform(s4, [0.6, 0.7], [0, 1])
  const s4Ref3Op = useTransform(s4, [0.75, 0.85], [0, 1])
  const s4EndOp = useTransform(s4, [0.9, 1], [0, 1])

  // ACT V: THE STANCE — Brutalist
  const act5Ref = useRef(null)
  const { scrollYProgress: s5 } = useScroll({ target: mounted ? act5Ref : undefined, offset: ["start start", "end end"] })
  const s5GiantScale = useTransform(s5, [0, 0.3], [4, 1])
  const s5GiantOp = useTransform(s5, [0, 0.1], [0, 1])
  const s5L1Op = useTransform(s5, [0.3, 0.4], [0, 1])
  const s5L2Op = useTransform(s5, [0.5, 0.6], [0, 1])
  const s5L3Op = useTransform(s5, [0.7, 0.8], [0, 1])
  const s5L4Op = useTransform(s5, [0.9, 1], [0, 1])

  // ACT VI: THE PRESENCE — The Encounter
  const act6Ref = useRef(null)
  const { scrollYProgress: s6 } = useScroll({ target: mounted ? act6Ref : undefined, offset: ["start start", "end end"] })
  const s6ImgBlur = useTransform(s6, [0, 0.3], ["20px", "0px"])
  const s6ImgScale = useTransform(s6, [0, 1], [1, 1.1])
  const s6T1Op = useTransform(s6, [0.3, 0.5], [0, 1])
  const s6T2Op = useTransform(s6, [0.5, 0.7], [0, 1])
  const s6T3Op = useTransform(s6, [0.7, 0.9], [0, 1])
  const s6LineW = useTransform(s6, [0.8, 1], ["0%", "100%"])

  return (
    <main className="bg-[#F5F4F1] text-foreground selection:bg-primary/30 min-h-screen">
      <Navigation />

      {/* ACT I: THE ARMOR — Dark, oppressive */}
      <section ref={act1Ref} className="relative w-full h-[400vh] bg-[#1A1A1A]">
        <StickyFrame>
          <div className="flex flex-col items-center justify-center text-center px-8 relative">
            <motion.p style={{ opacity: s1Text1 }} className="relative z-10 font-serif text-3xl md:text-5xl text-white/90 mb-8">Mechanical Engineer. Purdue.</motion.p>
            <motion.p style={{ opacity: s1Text2 }} className="relative z-10 font-serif text-3xl md:text-5xl text-white/90 mb-8">SAP Logistics Consultant.</motion.p>
            <motion.p style={{ opacity: s1Text3 }} className="relative z-10 font-serif text-3xl md:text-5xl text-white/90 mb-8">Years in the corporate machine.</motion.p>
            <motion.p style={{ opacity: s1Text4 }} className="relative z-10 font-serif text-3xl md:text-5xl text-white/90 mb-8">Success on paper.</motion.p>
            <motion.p style={{ opacity: s1Text5 }} className="relative z-10 font-serif text-3xl md:text-5xl italic text-white/40 max-w-2xl px-8 leading-tight">And a deeper pull toward something he couldn’t yet name.</motion.p>
          </div>
        </StickyFrame>
      </section>

      {/* ACT II: THE FRICTION — Intense Contrast */}
      <section ref={act2Ref} className="relative w-full h-[500vh] bg-[#F5F4F1]">
        <StickyFrame>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* The vertical yellow timeline */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[1px] bg-foreground/5 z-0">
               <motion.div style={{ height: s2LineH }} className="w-full bg-[#FFC908] origin-top shadow-[0_0_20px_rgba(255,201,8,0.3)]" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 w-full">
              <motion.p style={{ opacity: s2T1Op }} className="absolute font-serif text-2xl md:text-4xl max-w-2xl px-4">The inner misalignment took form.</motion.p>
              <motion.p style={{ opacity: s2T2Op }} className="absolute font-serif text-2xl md:text-4xl max-w-2xl px-4">By thirty, it was a hundred pounds of excess weight.</motion.p>
              <motion.p style={{ opacity: s2T3Op }} className="absolute font-serif text-2xl md:text-4xl max-w-2xl px-4">Not dramatic. <br /> Just undeniable.</motion.p>
              <motion.p style={{ opacity: s2T4Op }} className="absolute font-serif text-2xl md:text-4xl max-w-2xl px-4">Then, a decision.</motion.p>
              <motion.p style={{ opacity: s2T5Op }} className="absolute font-serif text-2xl md:text-4xl max-w-2xl px-4">Ten months. The weight gone.</motion.p>
              <motion.p style={{ opacity: s2T6Op }} className="absolute font-serif text-2xl md:text-4xl max-w-2xl px-4">What was never his, left. <br /> What was, began to return.</motion.p>
            </div>
          </div>
        </StickyFrame>
      </section>

      {/* ACT III: THE SEVERANCE — Minimalist */}
      <section ref={act3Ref} className="relative w-full h-[400vh]">
        <StickyFrame>
          <div className="flex flex-col items-center justify-center gap-12 px-8 overflow-hidden">
             <motion.p style={{ x: s3X1, opacity: s3Op1 }} className="font-serif text-2xl md:text-4xl text-foreground/60 w-full text-center">The clarity that follows destruction is deafening.</motion.p>
             <motion.p style={{ x: s3X2, opacity: s3Op2 }} className="font-serif text-2xl md:text-4xl text-foreground/60 w-full text-center">The corporate path no longer survived logic.</motion.p>
             <motion.p style={{ x: s3X3, opacity: s3Op3 }} className="font-serif text-2xl md:text-4xl text-foreground/60 w-full text-center">So in my late thirties, I walked away.</motion.p>
             <motion.p style={{ x: s3X4, opacity: s3Op4 }} className="font-serif text-3xl md:text-6xl text-foreground text-center">
                <span className="text-[#946DE3] italic">Into the unknown.</span> Without looking back.
             </motion.p>
          </div>
        </StickyFrame>
      </section>

      {/* ACT IV: THE APPRENTICESHIP — Structured */}
      <section ref={act4Ref} className="relative w-full h-[400vh] bg-white">
        <StickyFrame>
          <div className="max-w-4xl mx-auto w-full px-8 relative">
            {/* Surreal Echo */}
            <motion.div 
               style={{ y: useTransform(s4, [0, 1], [100, -100]), opacity: 0.04 }}
               className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
            >
               <span className="font-serif text-[15rem] md:text-[25rem] leading-none whitespace-nowrap">LINEAGE</span>
            </motion.div>

            <motion.h2 style={{ opacity: s4MainOp }} className="relative z-10 font-serif text-3xl md:text-5xl text-center mb-12 md:mb-24">To guide others into the dark,<br />you must map it yourself.</motion.h2>
            
            <div className="space-y-8 md:space-y-16 relative z-10">
               <motion.div style={{ opacity: s4Sub1Op }} className="flex items-center gap-6">
                 <div className="w-2 h-2 rounded-full bg-[#FFC908]" />
                 <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-muted-foreground transition-all duration-700">Two decades of brutal internal work.</p>
               </motion.div>
               
               <motion.div style={{ opacity: s4Sub2Op }} className="flex items-center gap-6">
                 <div className="w-2 h-2 rounded-full bg-[#FFC908]" />
                 <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-muted-foreground transition-all duration-700">Studying under masters of meaning:</p>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  <motion.div style={{ opacity: s4Ref1Op }} className="border-l-2 border-primary/20 pl-6 py-2">
                     <p className="font-serif text-lg">Eric Maisel</p>
                     <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 md:mt-2">Creativity</p>
                  </motion.div>
                  <motion.div style={{ opacity: s4Ref2Op }} className="border-l-2 border-primary/20 pl-6 py-2">
                     <p className="font-serif text-lg">Leon VanderPol</p>
                     <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 md:mt-2">Transformation</p>
                  </motion.div>
                  <motion.div style={{ opacity: s4Ref3Op }} className="border-l-2 border-primary/20 pl-6 py-2">
                     <p className="font-serif text-lg">Fighting Monkey</p>
                     <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 md:mt-2">Development</p>
                  </motion.div>
               </div>

               <motion.p style={{ opacity: s4EndOp }} className="font-serif text-lg md:text-xl italic text-muted-foreground text-center mt-12 md:mt-24">Grounding the intuition in absolute rigor.</motion.p>
            </div>
          </div>
        </StickyFrame>
      </section>

      {/* ACT V: THE STANCE — Brutalist */}
      <section ref={act5Ref} className="relative w-full h-[400vh]">
        <StickyFrame>
          <div className="flex flex-col items-center justify-center text-center px-8 w-full">
            <motion.h2 
              style={{ scale: s5GiantScale, opacity: s5GiantOp }}
              className="font-serif text-6xl md:text-9xl tracking-tighter mb-24"
            >
              Absolute.
            </motion.h2>

            <div className="space-y-8 max-w-2xl mx-auto">
              <motion.p style={{ opacity: s5L1Op }} className="font-serif text-2xl md:text-4xl leading-snug">I do not fix people.</motion.p>
              <motion.p style={{ opacity: s5L2Op }} className="font-serif text-2xl md:text-4xl leading-snug">I do not prescribe hacks.</motion.p>
              <motion.p style={{ opacity: s5L3Op }} className="font-serif text-2xl md:text-4xl leading-snug">I do not believe transformation is a task.</motion.p>
              <motion.p style={{ opacity: s5L4Op }} className="font-serif text-2xl md:text-4xl text-primary font-bold italic leading-tight pt-8">I hold the space for what you are terrified to look at.</motion.p>
            </div>
          </div>
        </StickyFrame>
      </section>

      {/* ACT VI: THE PRESENCE — The Encounter */}
      <section ref={act6Ref} className="relative w-full h-[300vh] bg-white">
        <StickyFrame>
           <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                style={{ filter: s6ImgBlur, scale: s6ImgScale }}
                className="w-full h-full bg-[url('/contemplative-man-in-natural-light-peaceful-portra.jpg')] bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-white/40" />
           </div>

           <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8">
              <div className="w-full max-w-6xl flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <motion.p style={{ opacity: s6T1Op }} className="font-serif text-2xl sm:text-3xl md:text-5xl text-foreground text-center md:text-left italic">No expectations.</motion.p>
                <motion.p style={{ opacity: s6T2Op }} className="font-serif text-2xl sm:text-3xl md:text-5xl text-foreground text-center md:text-right italic">No performance.</motion.p>
              </div>

              <div className="absolute bottom-24 flex flex-col items-center space-y-12">
                <motion.p style={{ opacity: s6T3Op }} className="font-serif text-3xl md:text-5xl font-bold">Just a conversation.</motion.p>
                
                <Link href="/begin" className="group">
                  <div className="flex flex-col items-center">
                    <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-muted-foreground group-hover:text-foreground transition-all duration-700 font-bold mb-4">
                      INITIATE THE DIALOGUE
                    </span>
                    <motion.div 
                      style={{ width: s6LineW }}
                      className="h-[2px] bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)]"
                    />
                  </div>
                </Link>
              </div>
           </div>
        </StickyFrame>
      </section>

      <Footer />
    </main>
  )
}
