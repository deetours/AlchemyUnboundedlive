"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function CreativityCoachingContent() {
  // Section Refs
  const r1 = useRef(null)
  const r2 = useRef(null)
  const r3 = useRef(null)
  const r4 = useRef(null)
  const r5 = useRef(null)

  // ACT 1: The Threshold
  const { scrollYProgress: s1 } = useScroll({ target: r1, offset: ["start start", "end start"] })
  const s1HeroOp = useTransform(s1, [0, 0.4], [1, 0])
  const s1HeroBlur = useTransform(s1, [0, 0.4], ["0px", "20px"])
  const s1HeroY = useTransform(s1, [0, 0.4], [0, -50])

  // ACT 2: The Friction (Rapid Sequential Reveals)
  const { scrollYProgress: s2 } = useScroll({ target: r2, offset: ["start start", "end end"] })
  const s2Op1 = useTransform(s2, [0, 0.1, 0.2], [0, 1, 0])
  const s2Y1 = useTransform(s2, [0, 0.1, 0.2], [20, 0, -20])
  const s2Op2 = useTransform(s2, [0.15, 0.25, 0.35], [0, 1, 0])
  const s2Y2 = useTransform(s2, [0.15, 0.25, 0.35], [20, 0, -20])
  const s2Op3 = useTransform(s2, [0.3, 0.4, 0.5], [0, 1, 0])
  const s2Y3 = useTransform(s2, [0.3, 0.4, 0.5], [20, 0, -20])
  const s2Op4 = useTransform(s2, [0.45, 0.55, 0.65], [0, 1, 0])
  const s2Y4 = useTransform(s2, [0.45, 0.55, 0.65], [20, 0, -20])
  const s2Op5 = useTransform(s2, [0.6, 0.7, 0.8], [0, 1, 0])
  const s2Y5 = useTransform(s2, [0.6, 0.7, 0.8], [20, 0, -20])
  const s2Op6 = useTransform(s2, [0.8, 0.95], [0, 1]) // Anchor text
  const s2Y6 = useTransform(s2, [0.8, 0.95], [20, 0])

  // ACT 3: The Call to Creation (The Purple Signal Light Engine)
  const { scrollYProgress: s3 } = useScroll({ target: r3, offset: ["start start", "end end"] })
  const s3BgOp = useTransform(s3, [0, 0.2, 0.8, 1], [0, 0.8, 0.8, 0])
  const s3Scale = useTransform(s3, [0, 1], [0.8, 2.5])
  // Text fading sequence slowed down for reading
  const s3Op1 = useTransform(s3, [0, 0.3], [0, 1])
  const s3Blur1 = useTransform(s3, [0, 0.3], ["10px", "0px"])
  const s3Op2 = useTransform(s3, [0.3, 0.6], [0, 1])
  const s3Blur2 = useTransform(s3, [0.3, 0.6], ["10px", "0px"])
  const s3Op3 = useTransform(s3, [0.6, 0.8], [0, 1])
  const s3Blur3 = useTransform(s3, [0.6, 0.8], ["10px", "0px"])

  // ACT 4: The Archetypes Filmstrip
  const { scrollYProgress: s4 } = useScroll({ target: r4, offset: ["start start", "end end"] })
  const s4X = useTransform(s4, [0.1, 0.9], ["10vw", "-160vw"])

  // ACT 5: The Embrace
  const { scrollYProgress: s5 } = useScroll({ target: r5, offset: ["start start", "end end"] })
  const s5Op1 = useTransform(s5, [0, 0.3], [0, 1])
  const s5Op2 = useTransform(s5, [0.3, 0.6], [0, 1])
  const s5Op3 = useTransform(s5, [0.6, 0.9], [0, 1])

  return (
    <div className="bg-[#F5F4F1] min-h-screen relative text-foreground selection:bg-[#946DE3] selection:text-white">
      
      {/* ACT I: The Threshold */}
      <section ref={r1} className="relative w-full h-[120vh] z-20">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <motion.div 
            style={{ opacity: s1HeroOp, filter: s1HeroBlur, y: s1HeroY }}
            className="flex flex-col items-center justify-center text-center px-6"
          >
            <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#946DE3] font-bold mb-8 md:mb-12">Creativity Coaching</p>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.9] mb-12">
              Unlock your <br className="hidden md:block" />
              <span className="italic">magic.</span>
            </h1>
            <p className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight max-w-4xl text-muted-foreground">
              Welcome to the world of creativity coaching. I help you navigate the challenges of the creative journey and bring your unique vision to life with confidence and clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ACT II: The Friction */}
      <section ref={r2} className="relative w-full h-[600vh] z-10 text-[#1A1A1A]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12 bg-[#F5F4F1]">
          
          <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center text-center">
            <motion.div style={{ opacity: s2Op1, y: s2Y1 }} className="absolute">
              <p className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight">
                The creative life, with all its gifts and rewards, is a <span className="italic">unique challenge.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op2, y: s2Y2 }} className="absolute">
              <p className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight">
                The creative process, with all its mystery and joy, is also a <span className="italic">unique challenge.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op3, y: s2Y3 }} className="absolute">
              <p className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight">
                The creative path, often a lonely one with support in short supply, is also a <span className="italic">unique challenge.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op4, y: s2Y4 }} className="absolute">
              <p className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight">
                The creative persona, with all its quirks, shadows and complexity, presents its <span className="italic">unique set of challenges.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op5, y: s2Y5 }} className="absolute">
              <p className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight">
                Societal and cultural pressures, along with the perils of the modern world, further <span className="italic">adds to these challenges.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op6, y: s2Y6 }} className="absolute">
              <p className="font-serif text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none mb-8">
                That&apos;s why creatives need a specialized and <span className="italic text-[#946DE3]">unique kind of support.</span>
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ACT III: The Call to Creation */}
      <section ref={r3} className="relative w-full h-[400vh] z-10 text-[#1A1A1A]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">
          
          {/* THE SIGNAL (Deep Background Light Engine) */}
          <motion.div 
            style={{ opacity: s3BgOp, scale: s3Scale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[40vw] aspect-square bg-[#946DE3] rounded-full blur-[100px] pointer-events-none z-0 mix-blend-overlay"
          />

          <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8 relative z-10 px-4">
            <motion.h2 style={{ opacity: s3Op1, filter: s3Blur1 }} className="text-center font-serif text-3xl md:text-5xl lg:text-7xl tracking-tight leading-none text-foreground">
              Because you matter, <br className="hidden md:block" /> and your creativity matters.
            </motion.h2>
            
            <motion.div style={{ opacity: s3Op2, filter: s3Blur2 }} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-4xl mx-auto mt-12 bg-[#F5F4F1]/60 p-8 md:p-12 border border-foreground/5 shadow-2xl backdrop-blur-sm rounded-sm">
              <p className="font-serif text-lg md:text-xl leading-snug">• Create deep, honest and meaningful creative work</p>
              <p className="font-serif text-lg md:text-xl leading-snug">• Explore and manifest your true creative potential</p>
              <p className="font-serif text-lg md:text-xl leading-snug">• Build creative confidence and create boldly</p>
              <p className="font-serif text-lg md:text-xl leading-snug">• Overcome blocks, resistance, demons and fears</p>
              <p className="font-serif text-lg md:text-xl leading-snug">• Start and finish projects put on the backburner</p>
              <p className="font-serif text-lg md:text-xl leading-snug">• Rediscover your inner child and infuse play</p>
            </motion.div>

            <motion.p style={{ opacity: s3Op3, filter: s3Blur3 }} className="font-serif text-xl md:text-3xl lg:text-4xl text-center leading-tight max-w-3xl opacity-90 text-[#946DE3] italic">
              Live a joyful, fulfilling, meaningful, and successful creative life.
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
             className="flex gap-8 md:gap-16 px-6 md:px-[10vw] w-[250vw] md:w-[200vw]"
           >
              {[
                {
                  title: "Soul Driven & Conscious Creators",
                  desc: "Those who have experienced success in their fields but desire to dream bigger and create deeper, more meaningful work from the depths of their soul."
                },
                {
                  title: "Blocked Creatives",
                  desc: "Those feeling blocked, stuck, frustrated, lost or uninspired. Those who wish to unblock themselves, reignite their spirit, and overcome fear, resistance, and procrastination."
                },
                {
                  title: "Recovering Creatives",
                  desc: "Those who had to give up creative dreams due to responsibilities. Those who have taken a long break. Those who are ready to reinvent themselves and start anew."
                },
                {
                  title: "Multi-Passionate Creatives",
                  desc: "Those with multiple creative interests who lack clarity to bring passions together. Those who struggle with indecision and need to channel their diverse strengths powerfully."
                },
                {
                  title: "Skeptics & Curious Creatives",
                  desc: "Those who think they don't have a creative bone in them. Those curious to explore their creative propensity, build confidence, and live as an artist in the whole sphere of life."
                },
                {
                  title: "Meaning Seekers",
                  desc: "Those suffering an existential crisis or lack of meaning in their work or life. Those who wish to rejuvenate their journeys, rediscover their mojo and find new ways of creating meaning."
                }
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-[80vw] md:w-[35vw] bg-[#F5F4F1] border border-foreground/5 p-8 md:p-16 flex flex-col justify-between group hover:bg-[#946DE3] hover:text-white transition-colors duration-700">
                   <div>
                      <div className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#946DE3] group-hover:text-white/70 font-bold mb-8">Type 0{i+1}</div>
                      <h3 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight mb-8">
                        {item.title}
                      </h3>
                   </div>
                   <p className="font-serif text-lg md:text-xl opacity-70 leading-relaxed max-w-sm">
                      {item.desc}
                   </p>
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* ACT V: The Embrace Monolith */}
      <section ref={r5} className="relative w-full h-[400vh] z-10 bg-[#F5F4F1]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-12 text-center text-[#1A1A1A]">
            <motion.p style={{ opacity: s5Op1 }} className="font-serif text-3xl md:text-5xl lg:text-7xl leading-[1.2] max-w-5xl mx-auto mb-16">
              I love working with creatives of all kinds, including visual artists, writers, dancers, performers, movement artists, sculptors, photographers, storytellers, film makers, actors, comedians, designers, and purpose-driven entrepreneurs.
            </motion.p>
            <motion.p style={{ opacity: s5Op2 }} className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.3] max-w-4xl mx-auto italic opacity-80 mb-16">
              I also love to support coaches, trainers, healers, therapists, consultants, teachers, and leaders in the personal development space.
            </motion.p>
            <motion.p style={{ opacity: s5Op3 }} className="font-serif text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto opacity-60 uppercase tracking-widest font-sans font-bold">
              I welcome non-conformists, mavericks, outliers and spiritual seekers who see the world in interesting and unique ways.
            </motion.p>
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
                  className="w-full h-[2px] bg-[#946DE3] shadow-[0_0_15px_rgba(148,109,227,0.5)] transition-all duration-500 scale-x-50 group-hover:scale-x-100"
                />
              </div>
            </Link>
        </div>
      </section>
    </div>
  )
}
