"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function MovementArtsContent() {
  // Section Refs
  const r1 = useRef(null)
  const r2 = useRef(null)
  const r3 = useRef(null)
  const r4 = useRef(null)
  const r5 = useRef(null)

  // ACT 1: The Vessel (Hero)
  const { scrollYProgress: s1 } = useScroll({ target: r1, offset: ["start start", "end start"] })
  const s1HeroOp = useTransform(s1, [0, 0.4], [1, 0])
  const s1HeroBlur = useTransform(s1, [0, 0.4], ["0px", "20px"])
  const s1HeroY = useTransform(s1, [0, 0.4], [0, -50])

  // ACT 2: The Stance (Cinematic Drift)
  const { scrollYProgress: s2 } = useScroll({ target: r2, offset: ["start start", "end end"] })
  const s2Op1 = useTransform(s2, [0.1, 0.4, 0.9], [0, 1, 0])
  const s2Y1 = useTransform(s2, [0.1, 0.4, 0.9], ["30vh", "0vh", "-30vh"])

  // ACT 3: The Call to Vitality (Cascading Waterfall)
  const { scrollYProgress: s3 } = useScroll({ target: r3, offset: ["start start", "end end"] })
  const s3Scale = useTransform(s3, [0, 1], [0.5, 1.5])
  const s3Rotate = useTransform(s3, [0, 1], [0, 90])
  
  // Anchor Header
  const s3Op1 = useTransform(s3, [0, 0.1], [0, 1])
  const s3Blur1 = useTransform(s3, [0, 0.1], ["10px", "0px"])
  
  // Waterfall List (10 super items)
  const s3ListOp = useTransform(s3, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0])
  const s3ListY = useTransform(s3, [0.1, 0.9], ["100vh", "-160vh"])

  // Final Conclusion
  const s3Op3 = useTransform(s3, [0.85, 0.95], [0, 1])
  const s3Blur3 = useTransform(s3, [0.85, 0.95], ["10px", "0px"])

  // ACT 4: The Archetypes Filmstrip (7 Cards)
  const { scrollYProgress: s4 } = useScroll({ target: r4, offset: ["start start", "end end"] })
  const s4X = useTransform(s4, [0.1, 0.9], ["5%", "-75%"])

  // ACT 5: The Monolith & Lineage
  const { scrollYProgress: s5 } = useScroll({ target: r5, offset: ["start start", "end end"] })
  const s5Op1 = useTransform(s5, [0, 0.2], [0, 1])
  const s5Op2 = useTransform(s5, [0.15, 0.35], [0, 1])
  const s5Op3 = useTransform(s5, [0.45, 0.65], [0, 1])
  const s5Op4 = useTransform(s5, [0.6, 0.8], [0, 1])

  return (
    <div className="bg-[#F5F4F1] min-h-screen relative text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F5F4F1]">

      {/* ── MOBILE STICKY CTA BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-[#1A1A1A]/10 bg-[#F5F4F1]/95 backdrop-blur-md" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <Link href="/begin" className="flex-1 flex flex-col items-center justify-center py-4 active:bg-foreground/5 transition-colors">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#1A1A1A]/50 font-bold">Begin Here</span>
          <span className="font-serif text-base mt-0.5 text-[#FFC908]">→ Conversation</span>
        </Link>
        <div className="w-[1px] bg-[#1A1A1A]/10 my-3" />
        <Link href="/offerings" className="flex-1 flex flex-col items-center justify-center py-4 active:bg-foreground/5 transition-colors">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#1A1A1A]/50 font-bold">All Paths</span>
          <span className="font-serif text-base mt-0.5">← The Vessel</span>
        </Link>
      </div>
      
      {/* ACT I: The Vessel */}
      <section ref={r1} className="relative w-full h-[120vh] z-20 bg-[#F5F4F1] text-[#1A1A1A]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          {/* Structural Geometric Background Art */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] aspect-square rounded-full border-[1px] border-[#1A1A1A]/10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-screen bg-[#1A1A1A]/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[1px] bg-[#1A1A1A]/5 pointer-events-none" />

          <motion.div 
            style={{ opacity: s1HeroOp, filter: s1HeroBlur, y: s1HeroY }}
            className="flex flex-col items-center justify-center text-center px-6"
          >
            <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#1A1A1A]/50 font-bold mb-8 md:mb-12 bg-[#F5F4F1] px-4">Movement Arts</p>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.9] mb-12 bg-[#F5F4F1] px-8">
              Occupy the <br className="hidden md:block" />
              <span className="italic text-[#FFC908]">vessel.</span>
            </h1>
            <p className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight max-w-4xl opacity-80 bg-[#F5F4F1] px-4 py-2">
              Welcome to the realm of movement arts. Embark on the journey of ELIXIR — a sustainable, intelligent movement practice rooted in ancient wisdom that transforms your body and mind into lifelong assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ACT II: The Stance */}
      <section ref={r2} className="relative w-full h-[300vh] z-10 text-[#1A1A1A]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12 bg-[#F5F4F1]">
          <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center text-center">
            <motion.div style={{ opacity: s2Op1, y: s2Y1 }} className="absolute">
              <p className="font-serif text-[32px] md:text-6xl lg:text-8xl tracking-tight leading-none mb-8">
                Because your body and mind are <br className="hidden lg:block" />
                <span className="italic text-[#FFC908]">not meant to be obstacles in your life.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACT III: The Call to Vitality (Cascading Waterfall) */}
      <section ref={r3} className="relative w-full h-[600vh] z-10 text-[#1A1A1A]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12">
          
          {/* PHASE 6: Subtle kinetic body image — behind geometry, z-0, opacity whisper */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.05] mix-blend-multiply">
            <img 
              src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=60&w=2000&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* THE KINETIC ENGINE (Rotating Geometric Structure) */}
          <motion.div 
            style={{ scale: s3Scale, rotate: s3Rotate }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] aspect-square border-[2px] border-[#1A1A1A]/10 rounded-full pointer-events-none z-0 mix-blend-overlay flex items-center justify-center"
          >
            <div className="w-[80%] h-[80%] border-[1px] border-[#1A1A1A]/5 rounded-full" />
            <div className="absolute w-[120%] h-[1px] bg-[#1A1A1A]/5" />
            <div className="absolute h-[120%] w-[1px] bg-[#1A1A1A]/5" />
          </motion.div>

          {/* Absolute Fixed Headers & Footers */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-[15vh] px-4 pointer-events-none z-10">
            <motion.h2 style={{ opacity: s3Op1, filter: s3Blur1 }} className="text-center font-serif text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none text-foreground bg-[#F5F4F1] px-8 rounded-full">
              Do you wish to—
            </motion.h2>

            <motion.p style={{ opacity: s3Op3, filter: s3Blur3 }} className="font-serif text-2xl md:text-3xl lg:text-4xl text-center leading-tight max-w-4xl text-[#1A1A1A] italic pt-8 md:pt-12 bg-[#F5F4F1] px-8 py-4 rounded-full">
              Cultivate a practice that sparks joy, play, critical thinking, adaptability, and a profound love for life?
            </motion.p>
          </div>

          {/* Scrolling Waterfall List */}
          <motion.div 
             style={{ y: s3ListY, opacity: s3ListOp }} 
             className="w-full absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-6"
          >
            <div className="flex flex-col gap-y-12 md:gap-y-16 text-center md:text-left max-w-4xl mx-auto">
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To foster deep and long-term health, fitness, vitality, and youthfulness.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To revitalize and nourish your joints, tissues, and organs from the inside out.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To develop strength, mobility, and conditioning as an interconnected whole.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To cultivate a loving relationship with your body and be comfortable in it.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To cultivate kinetic hygiene practices for better performance and graceful aging.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To heal chronic pains, dissolve tensions, and rehabilitate injuries.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To move beyond linear protocols and conventional workouts.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To explore any movement discipline without feeling restricted.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To establish deep connection and awareness with your body in its totality.</p>
              <p className="font-serif text-[24px] md:text-4xl lg:text-5xl leading-tight font-bold opacity-90">To transform your physical body into a limitless asset.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ACT IV: The Archetypes Filmstrip */}
      <section ref={r4} className="relative w-full h-[600vh] z-20 bg-[#F5F4F1] text-[#1A1A1A] border-t border-[#1A1A1A]/5 pt-32 md:pt-0">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
           <div className="text-center mb-16 px-6">
              <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-[#1A1A1A] mb-4">Who is this for?</h2>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#1A1A1A]/50 font-bold">Scroll through to explore.</p>
           </div>

           {/* The Horizontal Filmstrip Container */}
           <motion.div 
             style={{ x: s4X }}
             className="flex gap-4 md:gap-16 px-6 md:px-[10vw] w-max"
           >
              {[
                {
                  title: "Fit for Life",
                  desc: "Those seeking to foster long-term health, youthfulness, and well-being. Moving beyond quick fixes to cultivate a sustainable practice that revitalizes joints and organs.",
                  hint: "If your body feels like something to manage, not inhabit."
                },
                {
                  title: "Body-Mind-Heart Balance",
                  desc: "Those looking to center themselves, cultivating inner silence and mindfulness through movement so they can meet everyday stressors with grace and equanimity.",
                  hint: "If you are physically active but internally depleted."
                },
                {
                  title: "Athletes, Movers & Shakers",
                  desc: "Professional and hobbyist athletes seeking a sub-base of healthy physical development that supports them holistically to excel in their chosen disciplines.",
                  hint: "If you're training hard but something foundational feels missing."
                },
                {
                  title: "Artists, Creators & Mavericks",
                  desc: "Those looking for a profound non-linear movement practice which supports doing what they do with vigour, bringing more play and imagination into their domains.",
                  hint: "If your body is the last frontier you haven't explored."
                },
                {
                  title: "Fitness Enthusiasts",
                  desc: "Those jaded from conventional, linear exercise routines, seeking to explore a deeper, dynamic alternative that elevates their training into an art form.",
                  hint: "If the gym stopped feeling alive a long time ago."
                },
                {
                  title: "Coaches & Trainers",
                  desc: "Owners of gyms and facilities seeking to infuse more depth, play, and creative ideas into their training, making them more alive for their clients.",
                  hint: "If you want your sessions to feel less like protocol and more like poetry."
                },
                {
                  title: "Spiritual Seekers",
                  desc: "Those on a quest to connect to the source within, opening pathways to higher observation. Embracing a practice that transcends physicality, yet grounded in the body.",
                  hint: "If you believe the body and spirit are not separate."
                }
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] md:w-[32vw] bg-white border border-[#1A1A1A]/10 p-8 md:p-12 flex flex-col justify-between group hover:bg-[#FFC908] hover:text-[#1A1A1A] transition-colors duration-700 text-[#1A1A1A] shadow-sm hover:shadow-xl">
                   <div>
                      <div className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#1A1A1A]/50 group-hover:text-[#1A1A1A] font-bold mb-8">Type 0{i+1}</div>
                      <h3 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight mb-8">
                        {item.title}
                      </h3>
                   </div>
                   <p className="font-serif text-base md:text-lg opacity-80 leading-relaxed max-w-sm">
                      {item.desc}
                   </p>
                   {/* PHASE 7: Hover micro-reveal */}
                   <div className="overflow-hidden mt-6 pt-4 border-t border-[#1A1A1A]/10 max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-60 transition-all duration-700">
                     <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#1A1A1A]">
                       {item.hint}
                     </p>
                   </div>
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* ACT V: The Embrace & Lineage */}
      <section ref={r5} className="relative w-full h-[400vh] z-10 bg-[#F5F4F1] border-t border-[#1A1A1A]/5">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-12 text-[#1A1A1A] bg-[#F5F4F1]">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
               
               {/* Left Side: The Monolith Guarantee */}
               <div className="flex flex-col flex-1 pl-4 md:pl-0 border-l border-[#1A1A1A]/10 md:border-none">
                  <motion.p style={{ opacity: s5Op1 }} className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.3] mb-8">
                    Whether you are a professional seeking stress relief, a leader seeking higher focus, a seasoned athlete, a senior wanting to stay active, or a fitness novice...
                  </motion.p>
                  <motion.p style={{ opacity: s5Op2 }} className="font-serif text-xl md:text-2xl lg:text-3xl leading-[1.4] opacity-70 italic">
                    I am here to meet you where you are and guide you in cultivating a profound and sustainable practice within the unique universe in which you operate.
                  </motion.p>
               </div>

               {/* Right Side: The Lineage */}
               <div className="flex flex-col flex-1 border-l-2 border-[#1A1A1A]/20 pl-8 md:pl-16">
                  <motion.div style={{ opacity: s5Op3 }} className="mb-12">
                     <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#1A1A1A]/50 font-bold mb-4">The Research</p>
                     <p className="font-serif text-lg leading-relaxed">
                       The material is largely drawn from the <span className="font-bold">Fighting Monkey</span> research, an applied practice for human development through movement founded by my teachers, Linda Kapetanea and Jozef Frucek since 2002.
                     </p>
                  </motion.div>
                  
                  <motion.div style={{ opacity: s5Op4 }}>
                     <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-[#1A1A1A]/50 font-bold mb-4">The Synthesis</p>
                     <p className="font-serif text-lg leading-relaxed">
                       I also share other creative practices and principles based on my own explorations and study of diverse movement arts over the past 10 years, tailored to your context.
                     </p>
                  </motion.div>
               </div>
            </div>
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
                  className="w-full h-[2px] bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)] transition-all duration-500 scale-x-50 group-hover:scale-x-100"
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
