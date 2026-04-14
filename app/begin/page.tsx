"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function BeginPage() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [friction, setFriction] = useState("");

  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
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
    if (activeStep === 3 && endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeStep]);

  if (!mounted) return null;

  const handleNext = (e: React.KeyboardEvent | React.MouseEvent, nextStep: number, val: string) => {
    if (val.trim() === "") return;
    if ('key' in e && e.key !== 'Enter') return;
    e.preventDefault(); // prevent form submission or newlines
    if (activeStep < nextStep) {
      setActiveStep(nextStep);
    }
  };

  const handleRelease = () => {
    // In production, this would fire to an API endpoint
    setIsSubmitted(true);
  };

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
                     <p className="font-sans text-[9px] tracking-widest text-[#946DE3] uppercase mb-4">
                       If you are ready...
                     </p>
                     <button 
                       onClick={handleRelease}
                       className="group flex flex-col items-center hover:scale-105 transition-transform duration-500"
                     >
                       <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-foreground transition-all duration-700 font-bold mb-4">
                         Release this intention
                       </span>
                       <div className="h-[2px] w-6 group-hover:w-full bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)] transition-all duration-700" />
                     </button>
                   </motion.div>
                 )}
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
               <h1 className="font-serif text-3xl md:text-5xl text-foreground italic mb-12">
                 It is done. We will speak soon.
               </h1>
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
