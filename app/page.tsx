"use client"

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect, ReactNode, forwardRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// --- MOTION PRIMITIVES ---

const Reveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, filter: "blur(0px)" }}
    viewport={{ margin: "-10% 0px -10% 0px", once: true }}
    transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

const Rise = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ margin: "-10% 0px -10% 0px", once: true }}
    transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

// --- ILLUSTRATIONS ---

const CompassRing = () => (
  <div className="absolute bottom-[-150px] right-[-150px] w-[700px] h-[700px] pointer-events-none opacity-[0.035] text-foreground">
    <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="350" cy="350" r="349.5" stroke="currentColor" />
      <circle cx="350" cy="350" r="280" stroke="currentColor" strokeDasharray="4 4" />
      <line x1="350" y1="0" x2="350" y2="700" stroke="currentColor" />
      <line x1="0" y1="350" x2="700" y2="350" stroke="currentColor" />
      <path d="M350 150 L370 330 L550 350 L370 370 L350 550 L330 370 L150 350 L330 330 Z" stroke="currentColor" />
    </svg>
  </div>
)

const AlchemicCircle = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.06] text-[#946DE3]"
  >
    <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="350" cy="350" r="340" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="350" cy="350" r="320" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="350" cy="350" r="200" stroke="currentColor" strokeWidth="0.5" />
      <path d="M350 10 L644 515 L56 515 Z" stroke="currentColor" strokeWidth="0.5" />
      <path d="M350 690 L56 185 L644 185 Z" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  </motion.div>
)

// --- CINEMATIC PRIMITIVES ---

const ScrollScene = forwardRef<HTMLElement, { children: ReactNode, className?: string, height?: string }>(
  ({ children, className = "", height = "h-[200vh]" }, ref) => (
    <section ref={ref} className={`relative w-full ${height} ${className}`}>
      {children}
    </section>
  )
)
ScrollScene.displayName = "ScrollScene"

const StickyFrame = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden ${className}`}>
    {children}
  </div>
)

const TestimonialVoice = ({ quote, author }: { quote: string, author: string }) => {
  return (
    <div className="max-w-4xl mx-auto py-32 px-8 text-center relative z-10">
      <Reveal>
        <div className="w-[40px] h-[1px] bg-[#946DE3] opacity-[0.2] mx-auto mb-12" />
        <p className="font-serif text-3xl md:text-5xl text-foreground mb-12 italic leading-relaxed">
          "{quote}"
        </p>
        <span className="font-sans text-[10px] tracking-[0.6em] uppercase text-muted-foreground font-bold">
          — {author}
        </span>
      </Reveal>
    </div>
  )
}

// --- MOBILE-ONLY ENHANCEMENTS ---

// 6-dot scene progress indicator — fixed bottom-right, mobile-only
function MobileSceneIndicator() {
  const [activeScene, setActiveScene] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const SCENE_THRESHOLDS = [0.04, 0.13, 0.28, 0.42, 0.54, 0.68, 0.80, 0.91]
    
    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrolled / total

      setVisible(progress > 0.02)
      
      let current = 0
      for (let i = 0; i < SCENE_THRESHOLDS.length; i++) {
        if (progress >= SCENE_THRESHOLDS[i]) current = i
      }
      setActiveScene(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 md:hidden flex flex-col gap-2 pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            backgroundColor: i === activeScene ? '#FFC908' : 'rgba(26,26,26,0.2)',
            scale: i === activeScene ? 1.4 : 1
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-1 h-1 rounded-full"
        />
      ))}
    </motion.div>
  )
}

// Scroll hint chevron — pulses 3 times in hero, then disappears — mobile-only
function MobileScrollHint() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000)
    const handleScroll = () => { if (window.scrollY > 50) setShow(false) }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { clearTimeout(timer); window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: [0, 0.5, 0], y: [0, 8, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, repeat: 2, ease: 'easeInOut', delay: 1.5 }}
          className="mt-8 flex justify-center md:hidden pointer-events-none"
          aria-hidden="true"
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 4 L8 20 M2 14 L8 20 L14 14" stroke="#946DE3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// --- MAIN PAGE ---

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])


  const targetRef = useRef(null)

  // ACT 1: THE ARREST (Hero)
  const scene1Ref = useRef(null)
  const { scrollYProgress: scroll1 } = useScroll({ target: mounted ? scene1Ref : undefined, offset: ["start start", "end start"] })
  const heroOpacity = useTransform(scroll1, [0, 0.4], [1, 0])
  const heroBlur = useTransform(scroll1, [0, 0.4], ["0px", "20px"])

  // ACT 2: THE MIRROR (The Deceleration)
  const scene2Ref = useRef(null)
  const { scrollYProgress: scroll2 } = useScroll({ target: mounted ? scene2Ref : undefined, offset: ["start start", "end end"] })
  
  // Focus Pull Ranges
  const f1Op = useTransform(scroll2, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0])
  const f1Blur = useTransform(scroll2, [0, 0.1, 0.2, 0.3], ["20px", "0px", "0px", "40px"])
  const f1Scale = useTransform(scroll2, [0, 0.1, 0.3], [1.1, 1, 0.9])
  
  const f2Op = useTransform(scroll2, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0])
  const f2Blur = useTransform(scroll2, [0.3, 0.4, 0.5, 0.6], ["20px", "0px", "0px", "40px"])
  const f2Scale = useTransform(scroll2, [0.3, 0.4, 0.6], [1.1, 1, 0.9])
  
  const f3Op = useTransform(scroll2, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0])
  const f3Blur = useTransform(scroll2, [0.6, 0.7, 0.8, 0.9], ["20px", "0px", "0px", "40px"])
  const f3Scale = useTransform(scroll2, [0.6, 0.7, 0.9], [1.1, 1, 0.9])

  const anchorOp = useTransform(scroll2, [0.85, 0.95], [0, 1])

  // ACT 3: THE GATE (The Severance)
  const scene3Ref = useRef(null)
  const { scrollYProgress: scroll3 } = useScroll({ target: mounted ? scene3Ref : undefined, offset: ["start start", "end end"] })
  
  // Wipe Translation: 0 to 100%
  const wipeX = useTransform(scroll3, [0.1, 0.9], ["-50%", "50%"])
  const lineOpacity = useTransform(scroll3, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // ACT 4: THE ARCHITECTURE (The Strobe)
  const scene4Ref = useRef(null)
  const { scrollYProgress: scroll4 } = useScroll({ target: mounted ? scene4Ref : undefined, offset: ["start start", "end end"] })
  const strobe1 = useTransform(scroll4, [0, 0.3], [1, 0])
  const strobe2 = useTransform(scroll4, [0.3, 0.6], [1, 0])
  const strobe3 = useTransform(scroll4, [0.6, 1], [0, 1])
  const strobeLine = useTransform(scroll4, [0, 1], ["0%", "100%"])

  // ACT 5: THE MECHANIC (The Specifications) - Standard scroll
  
  // ACT 6: THE EXPOSURE (Focus Pull)
  const scene6Ref = useRef(null)
  const { scrollYProgress: scroll6 } = useScroll({ target: mounted ? scene6Ref : undefined, offset: ["start start", "end end"] })
  
  // The Noise (Background array of fluff words)
  const s6NoiseScale = useTransform(scroll6, [0, 0.4], [1, 1.1])
  const s6NoiseBlur  = useTransform(scroll6, [0.0, 0.25, 0.4], ["8px", "24px", "40px"])
  const s6NoiseOp    = useTransform(scroll6, [0.0, 0.2, 0.45], [0.3, 0.1, 0])

  // The Yellow Scapel Line
  const s6LineScaleX = useTransform(scroll6, [0.2, 0.55], [0, 1])
  const s6LineOp     = useTransform(scroll6, [0.2, 0.25, 0.8, 0.9], [0, 1, 1, 0])
  
  // The Sharp Truth (Central clear text)
  const s6TruthY     = useTransform(scroll6, [0.4, 0.6], [20, 0])
  const s6TruthOp    = useTransform(scroll6, [0.4, 0.55, 0.85, 0.95], [0, 1, 1, 0])

  // ACT 7: THE WITNESSES
  const scene7Ref = useRef(null)
  const { scrollYProgress: scroll7 } = useScroll({ target: mounted ? scene7Ref : undefined, offset: ["start start", "end end"] })
  const t1Op    = useTransform(scroll7, [0,    0.1,  0.28, 0.35], [0, 1, 1, 0])
  const t1Blur  = useTransform(scroll7, [0,    0.1,  0.28, 0.35], ["20px", "0px", "0px", "30px"])
  const t1Scale = useTransform(scroll7, [0,    0.1,  0.35],        [1.05, 1, 0.96])
  const t2Op    = useTransform(scroll7, [0.38, 0.5,  0.62, 0.68], [0, 1, 1, 0])
  const t2Blur  = useTransform(scroll7, [0.38, 0.5,  0.62, 0.68], ["20px", "0px", "0px", "30px"])
  const t2Scale = useTransform(scroll7, [0.38, 0.5,  0.68],        [1.05, 1, 0.96])
  const t3Op    = useTransform(scroll7, [0.72, 0.85, 1],           [0, 1, 1])
  const t3Blur  = useTransform(scroll7, [0.72, 0.85, 1],           ["20px", "0px", "0px"])
  const t3Scale = useTransform(scroll7, [0.72, 0.85, 1],           [1.05, 1, 1])

  // ACT: THE AUTHOR
  const sceneAuthorRef = useRef(null)
  const { scrollYProgress: scrollAuthor } = useScroll({ target: mounted ? sceneAuthorRef : undefined, offset: ["start start", "end end"] })
  // authNameOp: eliminated text fades out by 0.75, name fades in 0.75 → 0.84
  const authNameOp = useTransform(scrollAuthor, [0.75, 0.84], [0, 1])
  const authCtaOp  = useTransform(scrollAuthor, [0.85, 0.95], [0, 1])

  // ACT 8: THE SETTLING
  const scene8Ref = useRef(null)
  const { scrollYProgress: scroll8 } = useScroll({ target: mounted ? scene8Ref : undefined, offset: ["start start", "end end"] })
  const s8LineH  = useTransform(scroll8, [0.1, 0.75], ["0%", "100%"])
  const s8LineOp = useTransform(scroll8, [0,   0.08], [0, 1])
  const s8TextOp = useTransform(scroll8, [0.7, 0.92], [0, 1])
  const s8TextY  = useTransform(scroll8, [0.7, 0.92], [20, 0])

  return (
    <main ref={targetRef} className="bg-[#F5F4F1] relative text-foreground selection:bg-primary/30 selection:text-primary-foreground min-h-screen">
      <Navigation />

      {/* MOBILE-ONLY: Scroll Depth Indicator */}
      <MobileSceneIndicator />

      {/* ACT 1: THE ARREST (The Immediate Truth) */}
      <ScrollScene ref={scene1Ref} height="h-[160vh] md:h-[120vh]">
        <StickyFrame>
          {/* Background Strikethroughs (Industry Cliches) — hidden on mobile to prevent overflow */}
          <div className="absolute inset-0 flex-col justify-center items-center opacity-[0.03] pointer-events-none select-none px-8 hidden md:flex overflow-hidden">
             <div className="relative">
                <span className="font-serif md:text-[12rem] leading-none whitespace-nowrap">Tactical Hacks.</span>
                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#946DE3] -rotate-3" />
             </div>
             <div className="relative mt-8 md:mt-16">
                <span className="font-serif md:text-[12rem] leading-none whitespace-nowrap">Morning Routines.</span>
                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#946DE3] rotate-2" />
             </div>
             <div className="relative mt-8 md:mt-16">
                <span className="font-serif md:text-[12rem] leading-none whitespace-nowrap">Passive Listening.</span>
                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#946DE3] -rotate-1" />
             </div>
          </div>
          {/* Mobile strikethroughs — contained, no overflow */}
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.04] pointer-events-none select-none px-6 md:hidden overflow-hidden">
             <span className="font-serif text-4xl leading-none italic">Tactical Hacks.</span>
             <span className="font-serif text-4xl leading-none italic mt-4">Morning Routines.</span>
             <span className="font-serif text-4xl leading-none italic mt-4">Passive Listening.</span>
          </div>

          <motion.div style={{ opacity: heroOpacity, filter: heroBlur }} className="max-w-6xl mx-auto space-y-10 md:space-y-12 text-center px-6 md:px-8 relative z-10">
            <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-9xl lg:text-[11rem] tracking-tighter leading-[0.85] text-foreground">
              Beyond <br /> optimization.
            </h1>
            <div className="space-y-8 md:space-y-12 max-w-2xl mx-auto">
              <p className="font-sans text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-muted-foreground font-bold leading-loose">
                A private 1:1 transformation space for leaders, creators, and those drawn to something deeper to return to themselves and live with clarity, creativity, and quiet alignment.
              </p>
              <div className="pt-6 md:pt-8">
                <Link href="/begin" className="group relative inline-flex items-center gap-4 py-4 px-2 -mx-2">
                  <span className="font-sans text-[11px] md:text-xs tracking-[0.6em] md:tracking-[0.8em] uppercase text-foreground group-hover:text-primary active:text-primary transition-all duration-700 font-bold">
                    ENTER THE SPACE
                  </span>
                  <div className="absolute -bottom-2 left-2 right-2 h-[1px] bg-[#FFC908] scale-x-0 group-hover:scale-x-100 active:scale-x-100 transition-transform duration-700 origin-left" />
                </Link>
              </div>
            </div>
            {/* Mobile scroll hint — visible only on mobile, auto-fades */}
            <MobileScrollHint />
          </motion.div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT 2: THE MIRROR (The Deceleration) */}
      <ScrollScene ref={scene2Ref} height="h-[400vh]">
        <StickyFrame>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
             {/* Word 1: Founder */}
             <motion.div style={{ opacity: f1Op, filter: f1Blur, scale: f1Scale }} className="absolute text-center">
                <span className="font-serif text-6xl md:text-[11rem] tracking-tighter italic">The Founder.</span>
             </motion.div>
             
             {/* Word 2: Creator */}
             <motion.div style={{ opacity: f2Op, filter: f2Blur, scale: f2Scale }} className="absolute text-center">
                <span className="font-serif text-6xl md:text-[11rem] tracking-tighter italic">The Creator.</span>
             </motion.div>
             
             {/* Word 3: Seeking Mind */}
             <motion.div style={{ opacity: f3Op, filter: f3Blur, scale: f3Scale }} className="absolute text-center">
                <span className="font-serif text-6xl md:text-[11rem] tracking-tighter italic">The Seeking Mind.</span>
             </motion.div>

             {/* Final Anchor */}
             <motion.div style={{ opacity: anchorOp }} className="max-w-4xl px-8 text-center">
                <p className="font-serif text-3xl md:text-5xl leading-tight">
                   The titles do not matter. <br /><br />
                   They sit well on the surface. <br />
                   They don’t settle within.
                </p>
             </motion.div>
          </div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT 3: THE GATE (The Severance) */}
      <ScrollScene ref={scene3Ref} height="h-[200vh]">
        <StickyFrame>
           <div className="relative w-full h-full flex items-center overflow-hidden">
              
              {/* Wipe Line (Yellow) */}
              <motion.div 
                style={{ x: wipeX, opacity: lineOpacity }}
                className="absolute left-1/2 top-0 w-[2px] h-full bg-[#FFC908] z-30 shadow-[0_0_20px_rgba(244,180,0,0.3)]"
              />

              {/* Left Side + Right Side: The Gate Content */}
              <div className="absolute inset-0 grid grid-cols-2">
                 <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-24">
                    <div className="max-w-md space-y-4 md:space-y-8 opacity-40">
                       <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[1em] uppercase text-foreground font-bold">NOT THIS</span>
                       <div className="space-y-2 md:space-y-4">
                          <p className="font-serif text-lg md:text-3xl">Not therapy.</p>
                          <p className="font-serif text-lg md:text-3xl">Not shortcuts.</p>
                          <p className="font-serif text-base md:text-3xl leading-snug">Not another way to become better.</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Right Side: The Inclusions (Revealing) */}
                 <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-24">
                    <div className="max-w-md space-y-4 md:space-y-8">
                       <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[1em] uppercase text-[#946DE3] font-bold">THIS</span>
                       <p className="font-serif text-base sm:text-xl md:text-4xl leading-snug md:leading-tight">
                          A space to see clearly, <br/>
                          and let what isn't true fall away <br/>
                          until only what matters remains.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Overlays for Masking Effect */}
              <motion.div 
                style={{ scaleX: useTransform(scroll3, [0.1, 0.9], [1, 0]), originX: 0 }}
                className="absolute right-1/2 top-0 w-1/2 h-full bg-[#F5F4F1] z-20"
              />
              <motion.div 
                style={{ scaleX: useTransform(scroll3, [0.1, 0.9], [1, 0]), originX: 1 }}
                className="absolute left-1/2 top-0 w-1/2 h-full bg-[#F5F4F1] z-20"
              />
           </div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT 4: THE ARCHITECTURE (The Strobe) */}
      <ScrollScene ref={scene4Ref} height="h-[300vh]" className="bg-white">
        <StickyFrame>
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Progress Line */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 h-[200px] w-[1px] bg-foreground/10">
                 <motion.div style={{ height: strobeLine }} className="w-full bg-[#FFC908] origin-top" />
              </div>

              <div className="max-w-4xl text-center px-8">
                 {/* Snap 1 */}
                 <motion.div style={{ opacity: strobe1, display: useTransform(scroll4, s => s < 0.3 ? "block" : "none") }}>
                    <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
                       The dismantling <br /> of what is false.
                    </h2>
                 </motion.div>
                 
                 {/* Snap 2 */}
                 <motion.div style={{ opacity: strobe2, display: useTransform(scroll4, s => s >= 0.3 && s < 0.6 ? "block" : "none") }}>
                    <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
                       The recovery <br /> of what is true.
                    </h2>
                 </motion.div>

                 {/* Snap 3 */}
                 <motion.div style={{ opacity: strobe3, display: useTransform(scroll4, s => s >= 0.6 ? "block" : "none") }}>
                    <div className="space-y-12">
                       <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
                          The return of <br /> creative velocity.
                       </h2>
                       <p className="font-serif text-xl md:text-2xl opacity-60 italic max-w-xl mx-auto">
                           Not becoming someone else. <br/>
                           Just no longer working against yourself.
                       </p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT 5: THE DIVERGENCE (Path Redirection) */}
      <TheDivergenceScene />

      {/* ACT 6: THE EXPOSURE */}
      <ScrollScene ref={scene6Ref} height="h-[250vh]" className="z-10">
        <StickyFrame className="bg-[#F5F4F1]">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            
            {/* The Noise - Large Background Text entirely constructed of blur effects */}
            <motion.div
              style={{
                scale: s6NoiseScale,
                filter: s6NoiseBlur,
                opacity: s6NoiseOp,
              }}
              className="absolute inset-0 flex flex-col items-center justify-around py-12 pointer-events-none select-none"
            >
              <p className="font-serif text-[4vw] md:text-5xl italic font-black uppercase tracking-widest leading-none text-foreground text-opacity-40">ACCOUNTABILITY</p>
              <p className="font-serif text-[6vw] md:text-7xl italic font-black uppercase tracking-tight leading-none text-foreground text-opacity-40">MINDSET HACKS</p>
              <p className="font-serif text-[5vw] md:text-6xl italic font-black uppercase tracking-[0.2em] leading-none text-foreground text-opacity-40">FRAMEWORKS</p>
              <p className="font-serif text-[7vw] md:text-8xl italic font-black uppercase tracking-tighter leading-none text-foreground text-opacity-40">WEEKLY REFLECTIONS</p>
              <p className="font-serif text-[4vw] md:text-5xl italic font-black uppercase tracking-[0.3em] leading-none text-foreground text-opacity-40">OPTIMIZATION</p>
            </motion.div>

            {/* The Scalpel (Yellow Line slicing through) */}
            <motion.div
              style={{ scaleX: s6LineScaleX, opacity: s6LineOp, originX: 0 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#FFC908] z-20"
            />

            {/* The Reality (Focused Truth emerging from the line) */}
            <motion.div
              style={{ opacity: s6TruthOp, y: s6TruthY }}
              className="absolute z-30 max-w-4xl text-center px-8"
            >
              <div className="space-y-4 md:space-y-6">
                <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-foreground tracking-tight drop-shadow-md">
                  Not the story.
                </p>
                <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-foreground tracking-tight drop-shadow-md">
                  Not the explanation.
                </p>
                <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-foreground tracking-tight drop-shadow-md">
                  Just this: <br/> How you actually live.
                </p>
              </div>
            </motion.div>

          </div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT 7: THE WITNESSES */}
      <ScrollScene ref={scene7Ref} height="h-[350vh]" className="bg-[#F5F4F1] z-20">
        <StickyFrame className="bg-[#F5F4F1]">
          <div className="relative w-full h-full flex items-center justify-center px-8">

            {/* Portrait 1 — Kapildev Verma — synced to t1 scroll window */}
            <motion.div
              style={{ opacity: t1Op }}
              className="absolute inset-0 pointer-events-none z-0"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.18]"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2400&auto=format&fit=crop')" }}
              />
              {/* Vignette so text stays readable */}
              <div className="absolute inset-0 bg-[#F5F4F1]/70" />
            </motion.div>

            {/* Portrait 2 — M.R. — synced to t2 scroll window */}
            <motion.div
              style={{ opacity: t2Op }}
              className="absolute inset-0 pointer-events-none z-0"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.18]"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2400&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-[#F5F4F1]/70" />
            </motion.div>

            {/* Portrait 3 — Neha Agarwal — synced to t3 scroll window */}
            <motion.div
              style={{ opacity: t3Op }}
              className="absolute inset-0 pointer-events-none z-0"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.18]"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2400&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-[#F5F4F1]/70" />
            </motion.div>

            {/* Testimonial 1 — Kapildev Verma */}
            <motion.div style={{ opacity: t1Op, filter: t1Blur, scale: t1Scale }} className="absolute max-w-5xl text-center px-4 z-10">
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-[1.3] text-foreground mb-10">
                &ldquo;Working with Harish has been one of the most transformative experiences of my life. Harish&apos;s approach is not formulaic—it&apos;s deeply personal, intuitive, and anchored in truth.&rdquo;
              </p>
              <div className="w-[60px] h-[1px] bg-[#FFC908] mx-auto mb-6" />
              <span className="font-sans text-[10px] tracking-[0.4em] font-bold text-foreground uppercase block mb-1">Kapildev Verma</span>
              <span className="font-sans text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Head, Client Servicing · India</span>
            </motion.div>

            {/* Testimonial 2 — M.R. */}
            <motion.div style={{ opacity: t2Op, filter: t2Blur, scale: t2Scale }} className="absolute max-w-5xl text-center px-4 z-10">
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-[1.3] text-foreground mb-10">
                &ldquo;Harish has a remarkable ability to connect you with your inner wisdom, guiding you to answers you already have within. I&apos;ve been able to unlock new levels of my vision.&rdquo;
              </p>
              <div className="w-[60px] h-[1px] bg-[#FFC908] mx-auto mb-6" />
              <span className="font-sans text-[10px] tracking-[0.4em] font-bold text-foreground uppercase block mb-1">M.R.</span>
              <span className="font-sans text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Founder · US</span>
            </motion.div>

            {/* Testimonial 3 — Neha Agarwal */}
            <motion.div style={{ opacity: t3Op, filter: t3Blur, scale: t3Scale }} className="absolute max-w-5xl text-center px-4 z-10">
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl italic leading-[1.3] text-foreground mb-10">
                &ldquo;True to his name, Harish embodies the one who removes darkness, illusion, and all obstacles in the path of life and personal evolution.&rdquo;
              </p>
              <div className="w-[60px] h-[1px] bg-[#FFC908] mx-auto mb-6" />
              <span className="font-sans text-[10px] tracking-[0.4em] font-bold text-foreground uppercase block mb-1">Neha Agarwal</span>
              <span className="font-sans text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Fashion Designer · India</span>
            </motion.div>

          </div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT: THE AUTHOR */}
      <ScrollScene ref={sceneAuthorRef} height="h-[300vh]" className="bg-[#F5F4F1] z-[25]">
        <StickyFrame className="bg-[#F5F4F1]">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* PHASE 1-3: Eliminated definitions — visible 0→0.72, fade out 0.65→0.75 */}
            <motion.div
              style={{ opacity: useTransform(scrollAuthor, [0, 0.04, 0.65, 0.75], [0, 1, 1, 0]) }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-8 md:gap-12 px-8"
            >
              {/* Line 1 */}
              <div className="relative flex items-center justify-center overflow-hidden">
                <motion.span
                  style={{ opacity: useTransform(scrollAuthor, [0, 0.05, 0.25, 0.30], [0, 0.45, 0.45, 0.15]) }}
                  className="font-serif text-3xl sm:text-5xl md:text-6xl italic tracking-tight text-foreground whitespace-nowrap"
                >
                  Not a life coach.
                </motion.span>
                {/* strikethrough track */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-foreground/10 -translate-y-1/2" />
                {/* animated yellow line — covers 0→0.28 */}
                <motion.div
                  style={{ scaleX: useTransform(scrollAuthor, [0.0, 0.28], [0, 1]), originX: 0 }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FFC908] -translate-y-1/2"
                />
              </div>

              {/* Line 2 */}
              <div className="relative flex items-center justify-center overflow-hidden">
                <motion.span
                  style={{ opacity: useTransform(scrollAuthor, [0.25, 0.32, 0.50, 0.55], [0, 0.45, 0.45, 0.15]) }}
                  className="font-serif text-3xl sm:text-5xl md:text-6xl italic tracking-tight text-foreground whitespace-nowrap"
                >
                  Not a methodology.
                </motion.span>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-foreground/10 -translate-y-1/2" />
                <motion.div
                  style={{ scaleX: useTransform(scrollAuthor, [0.28, 0.55], [0, 1]), originX: 0 }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FFC908] -translate-y-1/2"
                />
              </div>

              {/* Line 3 */}
              <div className="relative flex items-center justify-center overflow-hidden">
                <motion.span
                  style={{ opacity: useTransform(scrollAuthor, [0.50, 0.57, 0.65, 0.70], [0, 0.45, 0.45, 0.15]) }}
                  className="font-serif text-3xl sm:text-5xl md:text-6xl italic tracking-tight text-foreground whitespace-nowrap"
                >
                  Not a system.
                </motion.span>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-foreground/10 -translate-y-1/2" />
                <motion.div
                  style={{ scaleX: useTransform(scrollAuthor, [0.55, 0.72], [0, 1]), originX: 0 }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FFC908] -translate-y-1/2"
                />
              </div>
            </motion.div>

            {/* PHASE 4: Name — starts 0.75, fully visible by 0.84 */}
            <motion.div
              style={{ opacity: authNameOp }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-8"
            >
              <div className="relative inline-block">
                <h2 className="font-serif text-6xl sm:text-[8rem] md:text-[10rem] lg:text-[12rem] tracking-tighter leading-[0.88] text-foreground">
                  Harish.
                </h2>
                <motion.div
                  style={{ scaleX: useTransform(scrollAuthor, [0.80, 1.0], [0, 1]), originX: 0 }}
                  className="absolute -bottom-1 md:-bottom-3 left-0 w-full h-[3px] md:h-[4px] bg-[#FFC908]"
                />
              </div>

              <motion.div style={{ opacity: authCtaOp }} className="mt-4">
                <Link href="/about" className="group">
                  <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-muted-foreground font-bold">
                    → THE <span className="text-[#946DE3] group-hover:text-foreground transition-colors duration-500">PHILOSOPHY</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT 8: THE SETTLING */}
      <ScrollScene ref={scene8Ref} height="h-[180vh]" className="bg-[#F5F4F1] z-30">
        <StickyFrame className="bg-[#F5F4F1]">
          <div className="relative w-full h-full flex flex-col items-center justify-center">

            {/* Vertical line draws downward — same visual language as Acts 3 and 6 */}
            <motion.div style={{ opacity: s8LineOp }} className="flex flex-col items-center">
              <div className="relative w-[1px] h-[32vh] bg-foreground/10">
                <motion.div
                  style={{ height: s8LineH }}
                  className="w-full bg-[#FFC908] origin-top shadow-[0_0_20px_rgba(244,180,0,0.25)]"
                />
              </div>
            </motion.div>

            {/* Single factual line — appears after the line completes */}
            <motion.div
              style={{ opacity: s8TextOp, y: s8TextY }}
              className="mt-16 text-center px-8"
            >
              <p className="font-serif text-3xl md:text-5xl lg:text-[4vw] leading-tight text-foreground">
                The work begins with a conversation.
              </p>
            </motion.div>

          </div>
        </StickyFrame>
      </ScrollScene>

      {/* ACT 9: THE OPENING */}
      <section className="bg-[#F5F4F1] py-52 relative z-40">
        <div className="max-w-xl mx-auto px-8 text-center">
          <Rise>
            <Link href="/begin" className="group relative inline-block">
              <span className="font-serif text-2xl md:text-4xl text-foreground">
                Schedule the diagnostic.
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-[#FFC908] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          </Rise>
          <Rise delay={0.4}>
            <p className="font-sans text-[9px] tracking-[0.6em] uppercase text-muted-foreground font-bold opacity-40 mt-14">
              Ninety minutes · No commitment
            </p>
          </Rise>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// --- THE DIVERGENCE SCENE (CINEMATIC PATH REDIRECTION) ---

const PATHS_OPT3 = [
  {
    id: "descent",
    action: "dismantle",
    subject: "the architecture of your current life.",
    href: "/offerings/life-coaching",
    bgColor: "#FFC908", // Brand Yellow surge
    textColor: "#000000",
    indicator: "#000000"
  },
  {
    id: "signal",
    action: "reclaim",
    subject: "the signal of your true work.",
    href: "/offerings/creativity-coaching",
    bgColor: "#946DE3", // Brand Purple flood
    textColor: "#FFFFFF",
    indicator: "#FFFFFF"
  },
  {
    id: "vessel",
    action: "occupy",
    subject: "the physical vessel you inhabit.",
    href: "/offerings/movement-arts",
    bgColor: "#EBE8E4", // Earthy putty
    textColor: "#1A1A1A",
    indicator: "#FFC908"
  }
];

function TheDivergenceScene() {
  const [activePath, setActivePath] = useState<string | null>(null);

  // Background color dynamically shifts based on hover/touch
  const activePathData = PATHS_OPT3.find(p => p.id === activePath);
  const bg = activePathData ? activePathData.bgColor : "#F5F4F1";
  const defaultText = "#1A1A1A";

  const handleActivate = (id: string) => setActivePath(id);
  const handleDeactivate = () => setActivePath(null);

  return (
    <motion.section 
      animate={{ backgroundColor: bg }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative w-full min-h-[100vh] flex flex-col justify-center px-6 md:px-24 py-24 md:py-32 z-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <p 
          className="font-sans text-[11px] md:text-xs tracking-[0.5em] md:tracking-[0.8em] uppercase font-bold mb-12 md:mb-24 transition-colors duration-1000"
          style={{ color: activePathData ? activePathData.textColor : defaultText, opacity: 0.5 }}
        >
          The friction ends when you are ready to...
        </p>

        <div className="space-y-10 md:space-y-8 pl-0 md:pl-12 lg:pl-24">
          {PATHS_OPT3.map((path) => {
            const isActive = activePath === path.id;
            const isOtherActive = activePath !== null && !isActive;

            return (
              <div 
                key={path.id}
                onMouseEnter={() => handleActivate(path.id)}
                onMouseLeave={handleDeactivate}
                onTouchStart={() => handleActivate(path.id)}
                onTouchEnd={handleDeactivate}
                onTouchCancel={handleDeactivate}
                className="relative group cursor-pointer block py-2"
              >
                <Link href={path.href} className="absolute inset-0 z-20" aria-label={path.action} />
                
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: isOtherActive ? 0.15 : 1,
                    filter: isOtherActive ? "blur(6px)" : "blur(0px)",
                    x: isActive ? 12 : 0
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start md:items-center gap-4 md:gap-12 transition-colors duration-700"
                  style={{ color: activePathData ? activePathData.textColor : defaultText }}
                >
                  <motion.div 
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-6 md:w-16 lg:w-24 h-[2px] mt-5 md:mt-0 origin-left shrink-0"
                    style={{ backgroundColor: path.indicator }}
                  />
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                    <span className="font-serif text-[2.8rem] sm:text-5xl md:text-7xl lg:text-[7rem] tracking-tighter leading-none group-active:italic transition-all duration-700" style={{ fontStyle: isActive ? 'italic' : 'normal' }}>
                      {path.action}
                    </span>
                    <span className="font-serif text-lg md:text-3xl lg:text-4xl opacity-60 italic leading-snug">
                      {path.subject}
                    </span>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
