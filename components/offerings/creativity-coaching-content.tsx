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

  // ACT 2: The Friction (Cinematic Drift)
  const { scrollYProgress: s2 } = useScroll({ target: r2, offset: ["start start", "end end"] })
  const s2Op1 = useTransform(s2, [0, 0.1, 0.2], [0, 1, 0])
  const s2Y1 = useTransform(s2, [0, 0.1, 0.2], ["40vh", "0vh", "-40vh"])
  const s2Op2 = useTransform(s2, [0.15, 0.25, 0.35], [0, 1, 0])
  const s2Y2 = useTransform(s2, [0.15, 0.25, 0.35], ["40vh", "0vh", "-40vh"])
  const s2Op3 = useTransform(s2, [0.3, 0.4, 0.5], [0, 1, 0])
  const s2Y3 = useTransform(s2, [0.3, 0.4, 0.5], ["40vh", "0vh", "-40vh"])
  const s2Op4 = useTransform(s2, [0.45, 0.55, 0.65], [0, 1, 0])
  const s2Y4 = useTransform(s2, [0.45, 0.55, 0.65], ["40vh", "0vh", "-40vh"])
  const s2Op5 = useTransform(s2, [0.6, 0.7, 0.8], [0, 1, 0])
  const s2Y5 = useTransform(s2, [0.6, 0.7, 0.8], ["40vh", "0vh", "-40vh"])
  const s2Op6 = useTransform(s2, [0.8, 0.95], [0, 1]) // Anchor text
  const s2Y6 = useTransform(s2, [0.8, 0.95], ["40vh", "0vh"])

  // ACT 3: The Call to Creation (Cascading Waterfall)
  const { scrollYProgress: s3 } = useScroll({ target: r3, offset: ["start start", "end end"] })
  const s3BgOp = useTransform(s3, [0, 0.2, 0.8, 1], [0, 0.8, 0.8, 0])
  const s3Scale = useTransform(s3, [0, 1], [0.8, 2.5])
  
  // Anchor Header
  const s3Op1 = useTransform(s3, [0, 0.2], [0, 1])
  const s3Blur1 = useTransform(s3, [0, 0.2], ["10px", "0px"])
  
  // Waterfall List
  const s3ListOp = useTransform(s3, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0])
  const s3ListY = useTransform(s3, [0.1, 0.9], ["90vh", "-90vh"])

  // Final Conclusion
  const s3Op3 = useTransform(s3, [0.75, 0.9], [0, 1])
  const s3Blur3 = useTransform(s3, [0.75, 0.9], ["10px", "0px"])

  // ACT 4: The Archetypes Filmstrip
  const { scrollYProgress: s4 } = useScroll({ target: r4, offset: ["start start", "end end"] })
  const s4X = useTransform(s4, [0.1, 0.9], ["5%", "-75%"])

  // ACT 5: The Embrace
  const { scrollYProgress: s5 } = useScroll({ target: r5, offset: ["start start", "end end"] })
  const s5Op1 = useTransform(s5, [0, 0.3], [0, 1])
  const s5Op2 = useTransform(s5, [0.3, 0.6], [0, 1])
  const s5Op3 = useTransform(s5, [0.6, 0.9], [0, 1])

  return (
    <div className="bg-[#F5F4F1] min-h-screen relative text-foreground selection:bg-[#946DE3] selection:text-white">

      {/* ── MOBILE STICKY CTA BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-foreground/10 bg-[#F5F4F1]/95 backdrop-blur-md" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <Link href="/begin" className="flex-1 flex flex-col items-center justify-center py-4 active:bg-foreground/5 transition-colors">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted-foreground font-bold">Begin Here</span>
          <span className="font-serif text-base mt-0.5 text-[#946DE3]">→ Conversation</span>
        </Link>
        <div className="w-[1px] bg-foreground/10 my-3" />
        <Link href="/offerings" className="flex-1 flex flex-col items-center justify-center py-4 active:bg-foreground/5 transition-colors">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted-foreground font-bold">All Paths</span>
          <span className="font-serif text-base mt-0.5">← The Signal</span>
        </Link>
      </div>
      
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
            <motion.div style={{ opacity: s2Op1, y: s2Y1 }} className="absolute w-full px-4">
              <p className="font-serif text-[28px] md:text-5xl lg:text-7xl leading-tight">
                The creative life, with all its gifts and rewards, is a <span className="italic">unique challenge.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op2, y: s2Y2 }} className="absolute w-full px-4">
              <p className="font-serif text-[28px] md:text-5xl lg:text-7xl leading-tight">
                The creative process, with all its mystery and joy, is also a <span className="italic">unique challenge.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op3, y: s2Y3 }} className="absolute w-full px-4">
              <p className="font-serif text-[28px] md:text-5xl lg:text-7xl leading-tight">
                The creative path, often a lonely one with support in short supply, is also a <span className="italic">unique challenge.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op4, y: s2Y4 }} className="absolute w-full px-4">
              <p className="font-serif text-[28px] md:text-5xl lg:text-7xl leading-tight">
                The creative persona, with all its quirks, shadows and complexity, presents its <span className="italic">unique set of challenges.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op5, y: s2Y5 }} className="absolute w-full px-4">
              <p className="font-serif text-[28px] md:text-5xl lg:text-7xl leading-tight">
                Societal and cultural pressures, along with the perils of the modern world, further <span className="italic">adds to these challenges.</span>
              </p>
            </motion.div>

            <motion.div style={{ opacity: s2Op6, y: s2Y6 }} className="absolute w-full px-4">
              <p className="font-serif text-[32px] md:text-6xl lg:text-8xl tracking-tight leading-none mb-8">
                That&apos;s why creatives need a specialized and <span className="italic text-[#946DE3]">unique kind of support.</span>
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ACT III: The Call to Creation */}
      <section ref={r3} className="relative w-full h-[500vh] z-10 text-[#1A1A1A]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">
          
          {/* PHASE 6: Subtle editorial image — behind purple orb, z-0, opacity whisper */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.06] mix-blend-multiply">
            <img 
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=60&w=2000&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* THE SIGNAL (Deep Background Light Engine) */}
          <motion.div 
            style={{ opacity: s3BgOp, scale: s3Scale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] aspect-square bg-[#946DE3] rounded-full blur-[100px] pointer-events-none z-0 mix-blend-overlay"
          />

          {/* Absolute Fixed Elements */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-[15vh] px-4 pointer-events-none z-10">
            <motion.h2 style={{ opacity: s3Op1, filter: s3Blur1 }} className="text-center font-serif text-3xl md:text-5xl lg:text-7xl tracking-tight leading-none text-foreground drop-shadow-2xl">
              Because you matter, <br className="hidden md:block" /> and your creativity matters.
            </motion.h2>

            <motion.p style={{ opacity: s3Op3, filter: s3Blur3 }} className="font-serif text-2xl md:text-3xl lg:text-4xl text-center leading-tight max-w-3xl text-[#946DE3] italic drop-shadow-xl font-bold bg-[#F5F4F1]/40 px-6 py-4 rounded-full backdrop-blur-md">
              Live a joyful, fulfilling, meaningful, and successful creative life.
            </motion.p>
          </div>

          {/* Scrolling Waterfall Grid */}
          <motion.div 
             style={{ y: s3ListY, opacity: s3ListOp }} 
             className="w-full absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-6"
          >
            <div className="flex flex-col gap-y-10 md:gap-y-12 text-center md:text-left max-w-2xl mx-auto drop-shadow-xl">
              <p className="font-serif text-[22px] md:text-3xl lg:text-4xl leading-tight font-bold text-[#1A1A1A]">To create deep, honest and meaningful work.</p>
              <p className="font-serif text-[22px] md:text-3xl lg:text-4xl leading-tight font-bold text-[#1A1A1A]">To explore and manifest your true creative potential.</p>
              <p className="font-serif text-[22px] md:text-3xl lg:text-4xl leading-tight font-bold text-[#1A1A1A]">To build creative confidence and create boldly.</p>
              <p className="font-serif text-[22px] md:text-3xl lg:text-4xl leading-tight font-bold text-[#1A1A1A]">To overcome blocks, resistance, demons and fears.</p>
              <p className="font-serif text-[22px] md:text-3xl lg:text-4xl leading-tight font-bold text-[#1A1A1A]">To start and finish projects put on the backburner.</p>
              <p className="font-serif text-[22px] md:text-3xl lg:text-4xl leading-tight font-bold text-[#1A1A1A]">To rediscover your inner child and infuse play.</p>
            </div>
          </motion.div>

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
             className="flex gap-8 md:gap-16 px-6 md:px-[10vw] w-max"
           >
              {[
                {
                  title: "Soul Driven & Conscious Creators",
                  desc: "Those who have experienced success in their fields but desire to dream bigger and create deeper, more meaningful work from the depths of their soul.",
                  hint: "If success feels hollow and something deeper is calling."
                },
                {
                  title: "Blocked Creatives",
                  desc: "Those feeling blocked, stuck, frustrated, lost or uninspired. Those who wish to unblock themselves, reignite their spirit, and overcome fear, resistance, and procrastination.",
                  hint: "If the work is there but you can't begin."
                },
                {
                  title: "Recovering Creatives",
                  desc: "Those who had to give up creative dreams due to responsibilities. Those who have taken a long break. Those who are ready to reinvent themselves and start anew.",
                  hint: "If you put your creative self on hold — and miss them."
                },
                {
                  title: "Multi-Passionate Creatives",
                  desc: "Those with multiple creative interests who lack clarity to bring passions together. Those who struggle with indecision and need to channel their diverse strengths powerfully.",
                  hint: "If everything interests you but nothing has your full commitment."
                },
                {
                  title: "Skeptics & Curious Creatives",
                  desc: "Those who think they don't have a creative bone in them. Those curious to explore their creative propensity, build confidence, and live as an artist in the whole sphere of life.",
                  hint: "If you've always believed creativity wasn't for you."
                },
                {
                  title: "Meaning Seekers",
                  desc: "Those suffering an existential crisis or lack of meaning in their work or life. Those who wish to rejuvenate their journeys, rediscover their mojo and find new ways of creating meaning.",
                  hint: "If you're going through the motions but feeling none of it."
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
                   {/* PHASE 7: Hover micro-reveal */}
                   <div className="overflow-hidden mt-6 pt-4 border-t border-current/10 max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-60 transition-all duration-700">
                     <p className="font-sans text-[10px] tracking-[0.25em] uppercase">
                       {item.hint}
                     </p>
                   </div>
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
      <section className="relative z-10 py-24 md:py-48 px-8 text-center bg-white border-t border-foreground/5 pb-28 md:pb-24">
        <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="font-serif text-3xl md:text-6xl tracking-tight">Ready to begin the journey?</h2>
            <Link href="/begin" className="group">
              <div className="flex flex-col items-center">
                <span className="font-sans text-[11px] tracking-[0.6em] uppercase text-muted-foreground group-hover:text-foreground transition-all duration-700 font-bold mb-4">
                  INITIATE THE DIALOGUE
                </span>
                <div 
                  className="w-full h-[2px] bg-[#946DE3] shadow-[0_0_15px_rgba(148,109,227,0.5)] transition-all duration-500 scale-x-50 group-hover:scale-x-100"
                />
              </div>
            </Link>
            <Link href="/offerings" className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500">
              ← Explore all paths
            </Link>
        </div>
      </section>
    </div>
  )
}
