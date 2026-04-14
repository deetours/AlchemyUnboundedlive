"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

// --- UTILS ---
const ARCHETYPES = [
  {
    title: "Explorers",
    subtitle: "Unlock your Inner Potential",
    desc: "Those daring to explore the depths of their being, challenge their limitations, and unlock their true potential."
  },
  {
    title: "Healing Voyagers",
    subtitle: "Let Go to Let Come",
    desc: "Those ready for a voyage of deep healing, restoration and empowerment. Ready to rewrite their stories."
  },
  {
    title: "Embracers of Individuality",
    subtitle: "Be the Bold and Authentic You",
    desc: "Those aiming to shed self-doubt, fears and masks, live with confidence and clarity in alignment with their authentic self."
  },
  {
    title: "Seekers of Balance",
    subtitle: "Find your Inner Equilibrium",
    desc: "Those yearning to cultivate inner equilibrium in a fast-paced world, finding harmony and deeper connection."
  },
  {
    title: "Trailblazing Leaders",
    subtitle: "Empower your Vision",
    desc: "Visionaries and entrepreneurs who dream of creating initiatives that not only thrive but also align deeply with their souls."
  },
  {
    title: "Adventurers of Change",
    subtitle: "Embrace Life's Transitions",
    desc: "Those seeking to navigate transitions with resilience, uncovering the significance and opportunities they bring."
  },
  {
    title: "Spiritual Seekers",
    subtitle: "Elevate your Consciousness",
    desc: "Those on a quest to connect to the source within, moving beyond limiting ego patterns into direct experience."
  },
  {
    title: "Meaning Seekers",
    subtitle: "Live a Purposeful Life",
    desc: "Those yearning to live a vital life fueled by meaning, seeking a guiding light to illuminate their unique path."
  }
]

function LifeCoachingInterior() {
  const r1 = useRef<HTMLElement>(null)
  const r2 = useRef<HTMLElement>(null)
  const r3 = useRef<HTMLElement>(null)
  const r4 = useRef<HTMLElement>(null)
  const r5 = useRef<HTMLElement>(null)

  // --- H O O K S ---

  // ACT 1: Threshold
  const { scrollYProgress: s1 } = useScroll({ target: r1, offset: ["start start", "end start"] })
  const s1Y = useTransform(s1, [0, 1], ["0%", "50%"])
  const s1Op = useTransform(s1, [0, 0.8], [1, 0])

  // ACT 2: Inquiry (Cinematic Drift)
  const { scrollYProgress: s2 } = useScroll({ target: r2, offset: ["start start", "end end"] })
  const s2T1 = useTransform(s2, [0, 0.15, 0.2], [0, 1, 0])
  const s2Y1 = useTransform(s2, [0, 0.2], ["40vh", "-40vh"])
  const s2B1 = useTransform(s2, [0, 0.15, 0.2], ["10px", "0px", "10px"])

  const s2T2 = useTransform(s2, [0.2, 0.35, 0.4], [0, 1, 0])
  const s2Y2 = useTransform(s2, [0.2, 0.4], ["40vh", "-40vh"])
  const s2B2 = useTransform(s2, [0.2, 0.35, 0.4], ["10px", "0px", "10px"])

  const s2T3 = useTransform(s2, [0.4, 0.55, 0.6], [0, 1, 0])
  const s2Y3 = useTransform(s2, [0.4, 0.6], ["40vh", "-40vh"])
  const s2B3 = useTransform(s2, [0.4, 0.55, 0.6], ["10px", "0px", "10px"])

  const s2T4 = useTransform(s2, [0.6, 0.75, 0.8], [0, 1, 0])
  const s2Y4 = useTransform(s2, [0.6, 0.8], ["40vh", "-40vh"])
  const s2B4 = useTransform(s2, [0.6, 0.75, 0.8], ["10px", "0px", "10px"])

  const s2T5 = useTransform(s2, [0.8, 0.95, 1], [0, 1, 0])
  const s2Y5 = useTransform(s2, [0.8, 1], ["40vh", "-40vh"])
  const s2B5 = useTransform(s2, [0.8, 0.95, 1], ["10px", "0px", "10px"])

  // ACT 3: Heroic Journey (The Solar Corona)
  const { scrollYProgress: s3 } = useScroll({ target: r3, offset: ["start start", "end end"] })
  // The Solar Corona expansion logic
  const s3BgOp = useTransform(s3, [0, 0.2, 0.8, 1], [0, 0.8, 0.8, 0])
  const s3Scale = useTransform(s3, [0, 1], [0.8, 2.5])
  // Text fading sequence deeply slowed down
  const s3Op1 = useTransform(s3, [0, 0.2], [0, 1])
  const s3Blur1 = useTransform(s3, [0, 0.2], ["10px", "0px"])
  const s3Op2 = useTransform(s3, [0.2, 0.4], [0, 1])
  const s3Blur2 = useTransform(s3, [0.2, 0.4], ["10px", "0px"])
  const s3Op3 = useTransform(s3, [0.4, 0.6], [0, 1])
  const s3Blur3 = useTransform(s3, [0.4, 0.6], ["10px", "0px"])

  // ACT 4: The Filmstrip (Archetypes)
  const { scrollYProgress: s4 } = useScroll({ target: r4, offset: ["start start", "end end"] })
  // Filmstrip movement. 8 cards. We want to translate from 0 to a negative percentage.
  // There are 8 cards, each takes ~1/4 to 1/3 of the screen width depending on device.
  // To keep it perfectly responsive without JS dimension calculation, we translate it -75%.
  // CSS: The strip container must be wide enough.
  const s4X = useTransform(s4, [0.1, 0.9], ["5%", "-75%"])

  // ACT 5: The Containers
  const { scrollYProgress: s5 } = useScroll({ target: r5, offset: ["start start", "end end"] })
  const s5OpMain = useTransform(s5, [0, 0.2], [0, 1])
  const s5Card1Y = useTransform(s5, [0.1, 0.3], [150, 0])
  const s5Card1Op = useTransform(s5, [0.1, 0.3], [0, 1])
  const s5Card2Y = useTransform(s5, [0.2, 0.4], [150, 0])
  const s5Card2Op = useTransform(s5, [0.2, 0.4], [0, 1])
  const s5Card3Y = useTransform(s5, [0.3, 0.5], [150, 0])
  const s5Card3Op = useTransform(s5, [0.3, 0.5], [0, 1])

  return (
    <div className="bg-[#F5F4F1] min-h-screen relative text-foreground selection:bg-[#FFC908]">
      
      {/* --- SCENES --- */}

      {/* ACT I: The Threshold */}
      <section ref={r1} className="relative w-full h-screen z-10">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">
          <motion.div 
            style={{ y: s1Y, opacity: s1Op }}
            className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#946DE3] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground font-bold mb-8 md:mb-12">Transformational Life Coaching</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-12">Where the ordinary transcends into the <span className="italic text-[#946DE3]">extraordinary.</span></h1>
            <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-2xl leading-snug">And the mundane transforms into magic.</p>
          </motion.div>
        </div>
      </section>

      {/* ACT II: The Inquiry */}
      <section ref={r2} className="relative w-full h-[500vh] z-10">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
               <div className="grid [grid-template-areas:'stack'] place-items-center w-full relative">
                  <motion.p style={{ opacity: s2T1, y: s2Y1, filter: s2B1 }} className="[grid-area:stack] font-serif text-3xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-tight w-full">
                    You have built the architecture.
                  </motion.p>
                  <motion.p style={{ opacity: s2T2, y: s2Y2, filter: s2B2 }} className="[grid-area:stack] font-serif text-3xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-tight w-full">
                    The career is secure. <br className="md:hidden" /> The optics are flawless.
                  </motion.p>
                  <motion.p style={{ opacity: s2T3, y: s2Y3, filter: s2B3 }} className="[grid-area:stack] font-serif text-3xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-tight w-full">
                    And yet, the <span className="text-[#946DE3] italic">exhaustion</span> remains.
                  </motion.p>
                  <motion.p style={{ opacity: s2T4, y: s2Y4, filter: s2B4 }} className="[grid-area:stack] font-serif text-3xl md:text-4xl lg:text-6xl text-[#1A1A1A] leading-tight w-full max-w-5xl">
                    Because you are not an engineering problem to be solved.
                  </motion.p>
                  <motion.p style={{ opacity: s2T5, y: s2Y5, filter: s2B5 }} className="[grid-area:stack] font-serif text-3xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-tight w-full">
                    This is a confrontation with the reality you are avoiding.
                  </motion.p>
               </div>
            </div>
        </div>
      </section>

      {/* ACT III: The Heroic Journey */}
      <section ref={r3} className="relative w-full h-[400vh] z-10 text-[#1A1A1A]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">
          
          {/* THE SOLAR CORONA (Deep Background Light Engine) */}
          <motion.div 
            style={{ opacity: s3BgOp, scale: s3Scale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] aspect-square bg-[#FFC908] rounded-full blur-[150px] pointer-events-none z-0"
          />
          <motion.div 
            style={{ opacity: s3BgOp, scale: s3Scale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[40vw] aspect-square bg-orange-300 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-overlay"
          />

          <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8 relative z-10 text-center px-4">
            <motion.h2 style={{ opacity: s3Op1, filter: s3Blur1 }} className="font-serif text-3xl md:text-5xl lg:text-7xl tracking-tight leading-none">
              Transformation is no small feat. <br className="hidden md:block" /> It is a heroic journey.
            </motion.h2>
            <motion.p style={{ opacity: s3Op2, filter: s3Blur2 }} className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight max-w-3xl opacity-80">
              It requires an unbridled honesty to look deeply within yourself as you are, and to face both shadows and light.
            </motion.p>
            <motion.p style={{ opacity: s3Op3, filter: s3Blur3 }} className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight max-w-3xl opacity-80">
              It involves gently unraveling a lifetime of limited conditioning. <br/><span className="font-bold italic">It is true creative alchemy.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* ACT IV: The Archetypes Filmstrip */}
      <section ref={r4} className="relative w-full h-[600vh] z-20 bg-white">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
           <div className="text-center mb-16 px-6">
              <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-[#1A1A1A] mb-4">Who is this for?</h2>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold">Scroll through to explore.</p>
           </div>

           {/* The Horizontal Filmstrip Container */}
           <motion.div 
             style={{ x: s4X }} 
             className="flex gap-8 px-[10vw] items-center w-max"
           >
             {ARCHETYPES.map((arch, i) => (
                <div key={i} className="min-w-[70vw] md:min-w-[40vw] lg:min-w-[25vw] h-full flex flex-col p-12 border border-foreground/10 bg-[#F5F4F1] hover:bg-[#946DE3] hover:text-white transition-all duration-700 rounded-xl group shrink-0">
                   <h3 className="font-serif text-3xl md:text-4xl mb-4">{arch.title}</h3>
                   <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#FFC908] mb-8 group-hover:text-white transition-colors duration-500">{arch.subtitle}</h4>
                   <p className="font-serif text-lg md:text-xl leading-relaxed opacity-70 group-hover:opacity-100">{arch.desc}</p>
                </div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* ACT V: The Monolith Containers */}
      <section ref={r5} className="relative w-full h-[400vh] z-10 bg-[#F5F4F1]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">
           <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
              <motion.h2 style={{ opacity: s5OpMain }} className="font-serif text-4xl md:text-6xl text-center mb-24 tracking-tighter">The Containers</motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
                 <motion.div style={{ y: s5Card1Y, opacity: s5Card1Op }} className="flex flex-col border-t border-[#1A1A1A]/20 pt-8">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-muted-foreground mb-4">Short-Term</p>
                    <p className="font-serif text-4xl mb-8">6 Weeks</p>
                    <ul className="space-y-4 font-serif text-lg opacity-80 mb-12">
                       <li className="flex gap-4"><span className="text-[#FFC908]">—</span> Six 75-minute sessions</li>
                       <li className="flex gap-4"><span className="text-[#FFC908]">—</span> One 60-minute integration</li>
                    </ul>
                    <p className="font-serif text-xl mt-auto border-t border-foreground/10 pt-4">$750 USD</p>
                 </motion.div>

                 <motion.div style={{ y: s5Card2Y, opacity: s5Card2Op }} className="flex flex-col border-t border-[#946DE3] pt-8">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-[#946DE3] mb-4">Deep Dive</p>
                    <p className="font-serif text-4xl mb-8">3–6 Months</p>
                    <ul className="space-y-4 font-serif text-lg opacity-80 mb-12">
                       <li className="flex gap-4"><span className="text-[#946DE3]">—</span> Twelve 75-minute sessions</li>
                       <li className="flex gap-4"><span className="text-[#946DE3]">—</span> Three monthly check-ins</li>
                    </ul>
                    <p className="font-serif text-xl mt-auto border-t border-foreground/10 pt-4">$1,500 USD</p>
                 </motion.div>

                 <motion.div style={{ y: s5Card3Y, opacity: s5Card3Op }} className="flex flex-col border-t border-[#1A1A1A]/20 pt-8">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-muted-foreground mb-4">The Arc</p>
                    <p className="font-serif text-4xl mb-8">1 Year</p>
                    <ul className="space-y-4 font-serif text-lg opacity-80 mb-12">
                       <li className="flex gap-4"><span className="text-[#FFC908]">—</span> Twenty 75-minute sessions</li>
                       <li className="flex gap-4"><span className="text-[#FFC908]">—</span> Continuous priority access</li>
                    </ul>
                    <p className="font-serif text-xl mt-auto border-t border-foreground/10 pt-4">$2,500 USD</p>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* OUTRO */}
      <section className="relative z-10 py-48 px-8 text-center bg-white border-t border-foreground/5">
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-serif text-4xl md:text-6xl mb-16 tracking-tight">Ready to begin the journey?</h2>
            <Link href="/begin" className="group">
              <div className="flex flex-col items-center">
                <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-muted-foreground group-hover:text-foreground transition-all duration-700 font-bold mb-4">
                  INITIATE THE DIALOGUE
                </span>
                <div 
                  className="w-full h-[2px] bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)] transition-all duration-500 scale-x-50 group-hover:scale-x-100"
                />
              </div>
            </Link>
        </div>
      </section>
    </div>
  )
}

export default function LifeCoachingContent() {
  return <LifeCoachingInterior />
}
