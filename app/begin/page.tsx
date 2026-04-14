"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { InlineWidget } from "react-calendly"

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION — Replace with your actual Calendly URL
// ─────────────────────────────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/harish-alchemyunbounded/discovery"

export default function BeginPage() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [friction, setFriction] = useState("");

  // Phase 4 affirmation visibility
  const [showAffirmation1, setShowAffirmation1] = useState(false);
  const [showAffirmation2, setShowAffirmation2] = useState(false);

  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true) }, []);

  // Scrolling logic when advancing steps
  useEffect(() => {
    if (activeStep === 1 && step2Ref.current) {
      step2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (activeStep === 2 && step3Ref.current) {
      step3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (activeStep === 3 && step4Ref.current) {
      step4Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeStep]);

  if (!mounted) return null;

  const handleNext = (e: React.KeyboardEvent | React.MouseEvent, nextStep: number, val: string) => {
    if (val.trim() === "") return;
    if ('key' in e && e.key !== 'Enter') return;
    e.preventDefault();
    if (activeStep < nextStep) {
      setActiveStep(nextStep);
      // Trigger affirmations with a short delay after step advances
      if (nextStep === 1) setTimeout(() => setShowAffirmation1(true), 600);
      if (nextStep === 2) setTimeout(() => setShowAffirmation2(true), 600);
    }
  };

  // Pre-filled Calendly URL with name + email from previous steps
  const prefillCalendlyUrl = `${CALENDLY_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&hide_gdpr_banner=1&hide_event_type_details=1&background_color=F5F4F1&text_color=1A1A1A&primary_color=FFC908`

  return (
    <main className="bg-[#F5F4F1] min-h-screen text-foreground selection:bg-primary/30 relative font-sans">
      
      {/* Minimalist Return Link */}
      <AnimatePresence>
        {!isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed top-8 left-8 z-50"
          >
            <Link href="/" className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              ← Return
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div 
            key="flow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-6 py-[20vh] flex flex-col space-y-[40vh] pb-[40vh]"
          >
            
            {/* The Prelude */}
            <div className="flex flex-col items-center justify-center text-center opacity-60">
              <p className="font-serif text-2xl text-foreground italic mb-4">There is no rush here.</p>
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Take a breath. Scroll down to begin.</p>
              <div className="h-16 w-[1px] bg-foreground/20 mt-12" />
            </div>

            {/* STEP 1: IDENTITY */}
            <StepContainer isActive={activeStep === 0} isVisible={true}>
               <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-12">
                 Before we begin the work, <br/>who am I speaking to?
               </h2>
               <div className="relative group w-full">
                 <input 
                   type="text"
                   autoFocus
                   value={name}
                   onChange={e => setName(e.target.value)}
                   onKeyDown={e => handleNext(e, 1, name)}
                   onFocus={() => setActiveStep(0)}
                   placeholder="Your Name"
                   className="w-full bg-transparent border-none outline-none font-serif text-4xl md:text-6xl text-foreground placeholder:text-foreground/10 focus:ring-0 leading-none pb-4"
                 />
                 <div className="absolute bottom-0 left-0 h-[1px] w-full bg-foreground/10" />
                 <div className={`absolute bottom-0 left-0 h-[2px] bg-[#FFC908] transition-all duration-700 ease-out ${activeStep === 0 ? 'w-full' : 'w-0'}`} />
               </div>
               {activeStep === 0 && name.trim() !== "" && (
                 <motion.button 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   onClick={(e) => handleNext(e, 1, name)}
                   className="mt-8 font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground"
                 >
                   Press Enter ↵
                 </motion.button>
               )}
               {/* PHASE 4: Progressive Affirmation after step 1 */}
               <AnimatePresence>
                 {showAffirmation1 && activeStep > 0 && (
                   <motion.p
                     initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} exit={{ opacity: 0 }}
                     transition={{ duration: 1, ease: "easeOut" }}
                     className="font-serif italic text-base mt-6 text-foreground"
                   >
                     Good. I&apos;m here.
                   </motion.p>
                 )}
               </AnimatePresence>
            </StepContainer>

            {/* STEP 2: CONTACT */}
            <div ref={step2Ref}>
              <StepContainer isActive={activeStep === 1} isVisible={activeStep >= 1}>
                 <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-12">
                   Where should I reach you <br/>when the time is right?
                 </h2>
                 <div className="relative group w-full">
                   <input 
                     type="email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     onKeyDown={e => handleNext(e, 2, email)}
                     onFocus={() => setActiveStep(1)}
                     placeholder="Your Email"
                     className="w-full bg-transparent border-none outline-none font-serif text-3xl md:text-5xl text-foreground placeholder:text-foreground/10 focus:ring-0 leading-none pb-4"
                   />
                   <div className="absolute bottom-0 left-0 h-[1px] w-full bg-foreground/10" />
                   <div className={`absolute bottom-0 left-0 h-[2px] bg-[#FFC908] transition-all duration-700 ease-out ${activeStep === 1 ? 'w-full' : 'w-0'}`} />
                 </div>
                 {activeStep === 1 && email.trim() !== "" && email.includes("@") && (
                   <motion.button 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                     onClick={(e) => handleNext(e, 2, email)}
                     className="mt-8 font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground"
                   >
                     Press Enter ↵
                   </motion.button>
                 )}
                 {/* PHASE 4: Progressive Affirmation after step 2 */}
                 <AnimatePresence>
                   {showAffirmation2 && activeStep > 1 && (
                     <motion.p
                       initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} exit={{ opacity: 0 }}
                       transition={{ duration: 1, ease: "easeOut" }}
                       className="font-serif italic text-base mt-6 text-foreground"
                     >
                       I&apos;ll hold this carefully.
                     </motion.p>
                   )}
                 </AnimatePresence>
              </StepContainer>
            </div>

            {/* STEP 3: THE FRICTION */}
            <div ref={step3Ref}>
              <StepContainer isActive={activeStep >= 2} isVisible={activeStep >= 2}>
                 <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-12">
                   What is the friction <br/>you are carrying into this space?
                 </h2>
                 <div className="relative group w-full">
                   <textarea 
                     value={friction}
                     onChange={e => setFriction(e.target.value)}
                     onFocus={() => setActiveStep(2)}
                     placeholder="Speak freely. There are no limits..."
                     className="w-full bg-transparent border-none outline-none font-serif text-2xl md:text-4xl text-foreground placeholder:text-foreground/10 focus:ring-0 leading-relaxed min-h-[150px] resize-none"
                   />
                   <div className="absolute bottom-0 left-0 h-[1px] w-full bg-foreground/10" />
                   <div className={`absolute bottom-0 left-0 h-[2px] bg-[#FFC908] transition-all duration-700 ease-out ${activeStep === 2 ? 'w-full' : 'w-0'}`} />
                 </div>
                 {activeStep === 2 && friction.trim().length > 10 && (
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                     className="mt-16 flex flex-col items-center"
                     ref={endRef}
                   >
                     {/* PHASE 3: Micro-testimonial whisper above CTA */}
                     <motion.p
                       initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
                       transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                       className="font-serif italic text-base mb-12 text-center text-foreground"
                     >
                       &ldquo;It was here that I found clarity.&rdquo; — Katy Haldiman
                     </motion.p>

                     <p className="font-sans text-[9px] tracking-widest text-[#946DE3] uppercase mb-4">
                       If you are ready...
                     </p>
                     <button 
                       onClick={() => setActiveStep(3)}
                       className="group flex flex-col items-center hover:scale-105 transition-transform duration-500"
                     >
                       <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-foreground transition-all duration-700 font-bold mb-4">
                         Release this intention
                       </span>
                       <div className="h-[2px] w-6 group-hover:w-full bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)] transition-all duration-700" />
                     </button>
                   </motion.div>
                 )}
                 {/* PHASE 4: Affirmation after step 3 submits */}
                 <AnimatePresence>
                   {activeStep === 2 && friction.trim().length > 10 && (
                     <motion.p
                       initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
                       transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                       className="font-serif italic text-base mt-8 text-center text-foreground"
                     >
                       This takes real courage.
                     </motion.p>
                   )}
                 </AnimatePresence>
              </StepContainer>
            </div>

            {/* ─────────────────────────────────────────────────────────────────────────
                PHASE 1: STEP 4 — CALENDLY (The Appointment)
                Exact same StepContainer animation. No new layout. Pure addition.
            ───────────────────────────────────────────────────────────────────────── */}
            <div ref={step4Ref}>
              <StepContainer isActive={activeStep === 3} isVisible={activeStep >= 3}>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-4">
                    One final act.
                  </h2>
                  <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-muted-foreground">
                    Choose your moment.
                  </p>
                </div>

                {/* Calendly Inline Widget — pre-filled with name + email */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="w-full rounded-none overflow-hidden border border-foreground/10"
                  style={{ minHeight: 660 }}
                >
                  <InlineWidget
                    url={prefillCalendlyUrl}
                    styles={{ height: '660px', width: '100%' }}
                    prefill={{
                      name: name,
                      email: email,
                    }}
                    pageSettings={{
                      backgroundColor: 'F5F4F1',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: 'FFC908',
                      textColor: '1A1A1A',
                    }}
                  />
                </motion.div>

                {/* After Calendly — Soft Resolve */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                  className="text-center mt-12"
                >
                  <p className="font-serif italic text-sm text-foreground">
                    A space is being prepared for you.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(true)}
                    className="mt-8 font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    I have scheduled my session →
                  </button>
                </motion.div>
              </StepContainer>
            </div>

          </motion.div>
        ) : (
          /* COMPLETION MOMENT */
          <motion.div 
            key="completion"
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="fixed inset-0 bg-[#F5F4F1] flex items-center justify-center z-50 px-6 text-center"
          >
            <div className="flex flex-col items-center">
               <h1 className="font-serif text-3xl md:text-5xl text-foreground italic mb-4">
                 It is done.
               </h1>
               <p className="font-serif text-xl text-foreground/60 mb-12">
                 Your session is held.
               </p>
               <Link href="/" className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground hover:tracking-[0.5em] transition-all duration-1000">
                 Return Context
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function StepContainer({ children, isActive, isVisible }: { children: React.ReactNode, isActive: boolean, isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3, 
        filter: isActive ? "blur(0px)" : "blur(4px)",
        y: 0 
      }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-2xl mx-auto transition-opacity duration-1000 ${isActive ? '' : 'pointer-events-none'}`}
    >
      {children}
    </motion.div>
  )
}
