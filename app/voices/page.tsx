"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// --- THE EDITORIAL DATA ---
const RAW_TESTIMONIALS = {
  life: [
    {
      quote: "Working with Harish has been one of the most transformative experiences of my life. Harish's approach is not formulaic—it's deeply personal, intuitive, and anchored in truth. If you're looking for a coach who can help you evolve not just professionally but as a human being, Harish is that guide.",
      name: "Kapildev Verma",
      role: "Head - Client Servicing, Marcellus Investment Managers",
      location: "India",
    },
    {
      quote: "Harish has a remarkable ability to connect you with your inner wisdom, guiding you to answers you already have within. Through his gentle yet powerful presence, I've been able to unlock new levels of my vision for my life.",
      name: "M.R.",
      role: "Founder, Personal Growth Company",
      location: "US",
    },
    {
      quote: "Harish helped me identify hidden doubts, their root causes, creating a space to be myself, transforming my personal and professional life.",
      name: "Aashish Agrawal",
      role: "Chief Business Officer, Reddy Realty",
      location: "India",
    },
    {
      quote: "True to his name, Harish embodies the one who removes darkness, illusion, and all obstacles in the path of life and personal evolution.",
      name: "Neha Agarwal",
      role: "Fashion Designer",
      location: "India",
    },
    {
      quote: "After a year and half of receiving life coaching services from Harish, I found the strength and clarity to completely change my life.",
      name: "Katy Haldiman",
      role: "Health Care Professional & Photographer",
      location: "US",
    },
    {
      quote: "After working with Harish, I have seen a significant change in myself. I've been able to handle many situations that I could not handle before in a much more calm manner, be it my exams, my work or my professional and personal relationships.",
      name: "Shradha Vijay",
      role: "Doctor",
      location: "India",
    },
    {
      quote: "He has given me the tools to situate me better in my landscape and find solutions to some long term problems, or a different view on them.",
      name: "Dario Feola",
      role: "Senior Railroad Engineer & Capoiera Teacher",
      location: "Italy",
    },
    {
      quote: "Harish always talks about seeing potential in others. He has an innate ability to see what we could be instead of what we currently are.",
      name: "Emily Rose",
      role: "Health Care Professional",
      location: "US",
    },
    {
      quote: "Harish took the time to truly understand my essence, helping me identify and uncover my unique abilities, strengths, and weaknesses.",
      name: "Sandeesh Reddy",
      role: "E-Commerce & Digital Leader",
      location: "US",
    },
    {
      quote: "It was only when I made the decision to fully embrace a series of coaching sessions with Harish that I began to see profound changes.",
      name: "Aravindh Dorappa",
      role: "Senior Systems Architect, Ushur",
      location: "India",
    },
    {
      quote: "Harish is unparalleled as a coach & mentor and brings a deep presence to the sessions. He's invested in people and their pain-free living.",
      name: "Manisha Shukla",
      role: "Artist & Healer",
      location: "India",
    },
    {
      quote: "Harish's guidance has given me a new perspective and the tools to live my life with greater grace and balance.",
      name: "Dr. Janani K.",
      role: "Assistant Professor, Manipal Institute of Technology",
      location: "India",
    },
    {
      quote: "If you are looking for someone genuine and loving to work with as a life coach, I would recommend hopping on a discovery call with Harish.",
      name: "Kelly Graham",
      role: "Communications Specialist",
      location: "US",
    },
    {
      quote: "Harish is a very intuitive person with deep focus and the ability to draw connections between seemingly random things.",
      name: "Berny Lobo",
      role: "Communication Consultant & Visual Storyteller",
      location: "India",
    },
  ],
  creativity: [
    {
      quote: "Each of our creativity coaching sessions is the discovery of a new location on the map of my own inner world.",
      name: "Katerina Svetkova",
      role: "Creative Director & Dancer",
      location: "Russia",
    },
    {
      quote: "Harish helped me embody the quality of a flower – expressing & becoming a channel for my own colourful bloom!",
      name: "Dean Philp",
      role: "AI Researcher, Movement Practitioner & Parkour Instructor",
      location: "Australia",
    },
    {
      quote: "Harish helped me see that I was going through a period of change and I needed patience and trust in my work and myself during this time.",
      name: "Cordula Kagemann",
      role: "Visual Artist & Educator",
      location: "Germany",
    },
    {
      quote: "When I work with Harish, I feel heard, seen, and understood. I feel encouraged, supported, and excited about my work.",
      name: "Lisa Colburn",
      role: "Writer",
      location: "US",
    },
    {
      quote: "What stood out was how Harish seamlessly transitioned from a friend to a coach. His exercises were unique and creative, which helped me see my strengths and where I could work if I wished to, keeping my dreams and goals in mind.",
      name: "Shilpa Wadhwa",
      role: "Founder, Wishbox Studio",
      location: "India",
    },
    {
      quote: "Harish has a unique ability to look at creativity and life from multiple perspectives and that makes his coaching different and relatable.",
      name: "Rohan Anthony Solomon",
      role: "Senior Copywriter, AVDS",
      location: "India",
    },
    {
      quote: "Harish is committed to making a difference and is always accessible and non judgmental, creating a safe space for the sessions.",
      name: "Sudipta Dhruva",
      role: "Storyteller, Trainer & Social Transformer",
      location: "India",
    },
    {
      quote: "What I loved the most about Harish's sessions is the way he is able to weave deeper spiritual truths into our discussions.",
      name: "Amy S.",
      role: "Writer",
      location: "US",
    },
    {
      quote: "I've been under the guidance of Harish's creativity coaching for over a year now, and the experience has been life-changing.",
      name: "Miguel Viero",
      role: "Movement Educator & Teacher",
      location: "Spain",
    },
    {
      quote: "Harish gives me little words of wisdom, reminds me that there's joy to be had.",
      name: "Jennigan",
      role: "Small Business Owner",
      location: "US",
    },
    {
      quote: "Harish definitely knows and feels how to ask a question that will bring the answer from the depth of your heart.",
      name: "Julia Egorova",
      role: "Dancer & Movement Teacher",
      location: "Belarus",
    },
    {
      quote: "He coaches with his heart, life wisdom, and originality in a way you feel completely taken care of.",
      name: "Jill Badonsky",
      role: "Creator & Teacher of Kaizen-Muse Creativity Coaching Training",
      location: "US",
    },
    {
      quote: "Harish's sessions opened my eyes, ears, and mind to new ideas and ways of thinking and seeing.",
      name: "Veeru Kankatala",
      role: "Technology Consultant, Founder & CEO of Acroplans",
      location: "US",
    },
    {
      quote: "He is fully present during the live sessions and still able to create wonderful summaries that enhance the experience.",
      name: "Eduardo Sacco Caprotti",
      role: "Movement Coach",
      location: "Italy",
    },
    {
      quote: "After working with Harish, I have arrived at a place where I feel more in tune with, and trusting of, my own inner wisdom.",
      name: "Katy Haldiman",
      role: "Health Care Professional & Photographer",
      location: "US",
    },
    {
      quote: "When I started with Harish's creativity coaching I didn't know what to expect. I had hit a brick wall with marketing my art on social media.",
      name: "Genny Entezari",
      role: "Artist",
      location: "US",
    },
    {
      quote: "Working with Harish has helped me make significant strides on all my challenges in an organic way, and also boosted my self-confidence.",
      name: "Bianca Alegria",
      role: "Dancer & Yogic Therapist",
      location: "Portugal",
    },
  ],
  movement: [
    {
      quote: "The physical benefits are undeniable, but more importantly, Harish's approach instilled in me a sense of body awareness and self-confidence.",
      name: "Bharath",
      role: "Movement Practitioner",
      location: "US",
    },
    {
      quote: "As a teacher, Harish excels. His approach is marked by patience, humility, and a genuine concern for his client's well-being.",
      name: "Sumedha Sharma",
      role: "Country Director, iPartner India",
      location: "India",
    },
    {
      quote: "Harish is a highly methodical and patient instructor, which creates a sense of calm while performing the movements. Moreover, his techniques not only enhance present well-being but also help in preparing for a healthier and more balanced future.",
      name: "Mousumi Mandal",
      role: "Product Development Manager, FIS",
      location: "India",
    },
  ],
}

// Helper to determine path name
const getPathName = (category: string) => {
  if (category === 'life') return "THE DESCENT";
  if (category === 'creativity') return "THE SIGNAL";
  return "THE VESSEL";
}

// Determine image aesthetic dynamically based on index to keep it looking surreal and varied
const getPlaceholderImage = (index: number) => {
  const aestheticImages = [
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop&grayscale",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop&grayscale",
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2000&auto=format&fit=crop&grayscale",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop&grayscale",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop&grayscale",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2000&auto=format&fit=crop&grayscale",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2000&auto=format&fit=crop&grayscale"
  ];
  return aestheticImages[index % aestheticImages.length];
}

// Transforming raw data into the Monograph format
const ALL_VOICES = [
  ...RAW_TESTIMONIALS.life.map(t => ({ ...t, category: 'life' })),
  ...RAW_TESTIMONIALS.creativity.map(t => ({ ...t, category: 'creativity' })),
  ...RAW_TESTIMONIALS.movement.map(t => ({ ...t, category: 'movement' }))
].map((item, index) => {
  // If the quote is very long, make a shorter pull quote by extracting the first sentence.
  const pullQuote = item.quote.split('.')[0] + '.';
  return {
    id: `voice-${index}`,
    name: item.name,
    role: item.role,
    path: getPathName(item.category),
    pullQuote: pullQuote.length < item.quote.length ? pullQuote : item.quote,
    fullReview: item.quote,
    outcome: `Transformed space via ${getPathName(item.category)}`, // Optional synthetic outcome marker
    image: getPlaceholderImage(index)
  }
});

// Using a seeded sort to mix categories beautifully but consistently, favoring the longest most detailed reviews at the top
ALL_VOICES.sort((a, b) => b.fullReview.length - a.fullReview.length);

export default function VoicesPage() {
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4); // the progressive limit
  
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null;

  const currentVoices = ALL_VOICES.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_VOICES.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, ALL_VOICES.length));
  };

  return (
    <main className="bg-[#F5F4F1] min-h-screen text-foreground selection:bg-primary/30">
      <Navigation />

      {/* ACT I: THE SILENCE (Entry) */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground max-w-3xl leading-snug italic opacity-80"
        >
          &quot;Do not merely listen to what we say. Witness what remains when the work is done.&quot;
        </motion.p>
      </section>

      {/* ACT II: THE VIGNETTES (The Living Portraits - Progressive Reveal) */}
      <div className="flex flex-col gap-[30vh] pb-[10vh]">
        <AnimatePresence mode="popLayout">
          {currentVoices.map((voice, idx) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <VoiceVignette voice={voice} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progressive Load Trigger */}
      {hasMore && (
        <div className="w-full flex justify-center pb-[20vh]">
          <button 
            onClick={loadMore}
            className="group flex flex-col items-center hover:scale-105 transition-transform duration-500"
          >
            <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-muted-foreground group-hover:text-foreground transition-all duration-700 font-bold mb-4">
              Reveal Deeper Voices
            </span>
            <div className="h-[2px] w-6 group-hover:w-full bg-[#FFC908] transition-all duration-700" />
            <span className="font-sans text-[9px] tracking-widest text-[#946DE3] uppercase mt-4">
              ({ALL_VOICES.length - visibleCount} Remaining)
            </span>
          </button>
        </div>
      )}

      {/* ACT III: THE RESOLVE */}
      <section className="h-screen flex items-center justify-center bg-white border-t border-foreground/5">
        <div className="flex flex-col items-center space-y-12 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground text-center"
          >
            Your voice is the only one missing.
          </motion.h2>
          
          <Link href="/begin" className="group flex flex-col items-center">
            <span className="font-sans text-[10px] tracking-[0.8em] uppercase text-muted-foreground group-hover:text-foreground transition-all duration-700 font-bold mb-4">
              INITIATE THE DIALOGUE
            </span>
            <div className="h-[2px] w-0 group-hover:w-full bg-[#FFC908] shadow-[0_0_15px_rgba(255,201,8,0.5)] transition-all duration-700" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// --- SURREAL MONOGRAPH COMPONENT ---
function VoiceVignette({ voice }: { voice: typeof ALL_VOICES[0] }) {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true) }, []);

  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start end", "end start"]
  });

  // Surreal optical zoom on the background image as you scroll past
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.15]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex items-center justify-center px-4 md:px-12">
      <div className={`relative w-full max-w-7xl mx-auto flex flex-col transition-all duration-1000 ease-[0.16,1,0.3,1] ${isExpanded ? 'lg:flex-row gap-8 lg:gap-16 items-start' : 'items-center justify-center'}`}>
        
        {/* LEFT/TOP: The Anchor (Image + Pull Quote) */}
        <motion.div 
          layout
          className={`relative overflow-hidden transition-all duration-1000 ease-[0.16,1,0.3,1] bg-[#1A1A1A] ${isExpanded ? 'w-full lg:w-1/3 aspect-[3/4] lg:sticky lg:top-32' : 'w-full aspect-[16/9] md:aspect-[21/9]'}`}
          onClick={() => !isExpanded && setIsExpanded(true)}
          style={{ cursor: isExpanded ? 'default' : 'pointer' }}
        >
          {/* Background Cinematic Portrait */}
          <motion.div 
            style={{ backgroundImage: `url(${voice.image})`, scale: imgScale }}
            className="absolute inset-0 bg-cover bg-center brightness-[0.7] contrast-125 transition-all duration-1000 grayscale origin-center"
          />
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${isExpanded ? 'opacity-80' : 'opacity-40 hover:opacity-20'}`} />

          {/* The Pull Quote String (Only visible when NOT expanded) */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div 
                initial={{ opacity: 0, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1 }
                }}
                viewport={{ once: true, margin: "-20%" }}
                className="absolute inset-0 flex items-center justify-center p-8 md:p-16 text-center z-10"
              >
                <h3 className="font-serif text-3xl md:text-5xl lg:text-5xl text-white leading-tight drop-shadow-2xl">
                  "{voice.pullQuote}"
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* The Interaction Trigger (Or The Identity Block when expanded) */}
        <motion.div layout className={`z-20 transition-all duration-1000 ${isExpanded ? 'w-full lg:w-2/3 h-full flex flex-col justify-start py-8 lg:py-16' : 'absolute bottom-8 left-8 md:bottom-12 md:left-16'}`}>
          <div className={`flex flex-col items-start gap-2 mb-8 ${isExpanded ? 'pointer-events-none' : 'pointer-events-none'}`}>
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#946DE3] font-bold drop-shadow-sm bg-[#F5F4F1]/90 px-3 py-1">
              {voice.path}
            </span>
            <div className={`bg-[#F5F4F1]/90 px-4 py-2 flex flex-col transition-all ${isExpanded ? 'bg-transparent px-0 py-0' : ''}`}>
              <h4 className={`font-serif ${isExpanded ? 'text-3xl lg:text-4xl text-foreground' : 'text-xl text-foreground'}`}>{voice.name}</h4>
              <p className="font-sans text-[10px] tracking-widest text-muted-foreground uppercase">{voice.role}</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(true)}
                className="group flex flex-col items-start bg-[#F5F4F1]/90 px-4 py-3 mt-4 w-max"
              >
                <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-foreground group-hover:text-foreground transition-colors font-bold mb-1">
                  + Unfold Chronicle
                </span>
                <div className="h-[2px] w-0 group-hover:w-full bg-[#FFC908] transition-all duration-500" />
              </motion.button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col space-y-8 max-w-2xl"
              >
                <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
                  "{voice.fullReview}"
                </p>
                <div className="pt-8 border-t border-foreground/10">
                  <p className="font-serif text-sm md:text-lg text-foreground/70 italic border-l-2 border-[#FFC908] pl-6 py-2">
                    {voice.outcome}
                  </p>
                </div>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-colors self-start mt-12 py-4"
                >
                  — Minimize Window
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
