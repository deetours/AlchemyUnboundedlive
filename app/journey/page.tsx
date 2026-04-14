"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExpandableSection } from "@/components/expandable-section"
import Link from "next/link"

export default function JourneyPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-6"
          >
            The Path That Shaped This Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8"
          >
            My Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed max-w-xl"
          >
            A path forged amidst the intricate landscape of a rich inner world
          </motion.p>
        </div>
      </section>

      {/* Invitation to Read */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-muted-foreground leading-relaxed text-center italic">
              If you'd like to know more about the path that shaped this work, you're welcome to read on.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Entering the Shadows */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="font-sans text-sm text-primary tracking-widest uppercase mb-8 block">01</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">Entering the Shadows</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ExpandableSection
              preview={
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    My path was forged amidst the intricate landscape of my rich inner world—a journey marked by intense
                    experiences in my formative years. I delved deep into the shadows of human existence, grappling with
                    existential sorrow and enduring the burden of anxiety, shame, and guilt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I navigated through confusion and emptiness, feeling adrift like a boat in a storm and as parched as
                    a well in a desert. Loneliness, frustration, rage, and feeling misunderstood were familiar
                    companions.
                  </p>
                </div>
              }
              expanded={
                <div className="space-y-6 mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Disconnection with myself and others plagued my relationships, leading to emotional turmoil. I have
                    swum in the ocean of boredom and the lack of meaning and purpose. I have confronted many dark nights
                    of the soul where the notion of ending it all surfaced.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Yet, in reflection, I hold no regrets. These trials, tribulations and challenges were pivotal in
                    guiding me towards a journey of profound inner work, healing, self-discovery, transformation, and
                    spiritual evolution since my mid-twenties.
                  </p>
                </div>
              }
              expandLabel="Go deeper"
              collapseLabel="Close"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Turning Inward */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="font-sans text-sm text-primary tracking-widest uppercase mb-8 block">02</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">Turning Inward</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ExpandableSection
              preview={
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    As the quality of my attention and perception sharpened over the years, I learned to read the book
                    of myself with all its complexity and nuances. Gradually, the darkness of my younger years was
                    naturally washed away.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    An overwhelming sense of ease permeated both my inner world and external facets of life. I began to
                    perceive the wholeness and interconnectedness of life, realizing that nothing exists in isolation.
                  </p>
                </div>
              }
              expanded={
                <div className="space-y-6 mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    I discovered that absolutely everything responds to care and attention. Taking responsibility for my
                    growth, I transcended self-imposed barriers, allowing life to unfold effortlessly in myriad
                    dimensions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This wasn't about fixing what was broken. It was about discovering what was always whole, buried
                    beneath layers of conditioning and fear.
                  </p>
                </div>
              }
              expandLabel="Go deeper"
              collapseLabel="Close"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: The Body Remembers */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="font-sans text-sm text-primary tracking-widest uppercase mb-8 block">03</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">The Body Remembers</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ExpandableSection
              preview={
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    In my early thirties, burdened by being grossly overweight and unhealthy, I embarked on a
                    transformative journey. What unfolded was beyond what I could have imagined—shedding 100 pounds in
                    less than 10 months.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This metamorphosis went beyond the physical. It symbolized emotional and psychological rebirth,
                    granting me uninhibited freedom and boundless vitality to embrace life's dance with grace.
                  </p>
                </div>
              }
              expanded={
                <div className="space-y-6 mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    The body became a home again, not a prison. This is why movement arts became central to the work I
                    offer—not as exercise, but as embodiment. The body holds wisdom the mind cannot access through
                    thought alone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Integration happens when we include all of ourselves—mind, heart, and the flesh and bone that
                    carries us through this life.
                  </p>
                </div>
              }
              expandLabel="Go deeper"
              collapseLabel="Close"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Choosing the Unknown */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="font-sans text-sm text-primary tracking-widest uppercase mb-8 block">04</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">Choosing the Unknown</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ExpandableSection
              preview={
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A Mechanical Engineering graduate from Purdue University by education, and a seasoned SAP Logistics
                    and Supply Chain consultant in the US corporate world for several years by profession—I organically
                    walked away from my successful career in my late thirties.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I chose to wander aimlessly in search of the miraculous. Life was calling me in a certain direction,
                    and I surrendered to this calling as clarity about my life's work and vision began to take shape.
                  </p>
                </div>
              }
              expanded={
                <div className="space-y-6 mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Stepping into the unknown, I joyously embraced the path less-traveled, without looking back, in
                    service of my larger vision and purpose.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The unknown has its own intelligence. When we step into it honestly, it meets us with what we need.
                  </p>
                </div>
              }
              expandLabel="Go deeper"
              collapseLabel="Close"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: What Emerged */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="font-sans text-sm text-primary tracking-widest uppercase mb-8 block">05</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">What Emerged</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Since then, my life has unfolded as a symphony of boundless exploration, experimentation, expression,
                nourishment, and creative transformation. Guided by the invisible thread of grace, I explored the depths
                of my own shadow and channeled it into a joyful and creative dance with the universe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through all my years of self-discovery and feeding my inner spirit, I realized that I am a helper,
                healer, nurturer, connector, and teacher at heart.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My gifts lie in working with people to bring about joy, harmony, balance, clarity and contentment in
                life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pulled Quote */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
              "I've been there. I can walk with you."
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* The Client Experience */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-16 text-center">
              What It's Like to Work Together
            </h2>
          </ScrollReveal>

          <div className="space-y-16">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-8 md:gap-16 items-start">
                <span className="font-sans text-sm text-primary tracking-widest shrink-0">01</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4">Before We Begin</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A quiet reaching out. Perhaps a form filled, perhaps an email sent. No pressure, no expectations.
                    Just a gentle first step toward connection.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-8 md:gap-16 items-start">
                <span className="font-sans text-sm text-primary tracking-widest shrink-0">02</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4">The First Conversations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A discovery call—not to sell, but to listen. To feel into whether there is resonance. To sense if
                    this space is right for you, and you for it.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-8 md:gap-16 items-start">
                <span className="font-sans text-sm text-primary tracking-widest shrink-0">03</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4">The Ongoing Work</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regular sessions held with care and presence. Each conversation building on the last, yet always
                    meeting you exactly where you are in this moment.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-8 md:gap-16 items-start">
                <span className="font-sans text-sm text-primary tracking-widest shrink-0">04</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4">Integration Into Daily Life</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    What emerges in sessions begins to weave into your everyday. Not through force, but through the
                    natural unfolding of awareness into action.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex gap-8 md:gap-16 items-start">
                <span className="font-sans text-sm text-primary tracking-widest shrink-0">05</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4">Completion or Continuation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    There is no prescribed end point. Some journeys complete naturally. Others evolve into new forms.
                    Both are honored equally.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              "You don't need to have it all figured out."
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed">
              Come as you are. With your questions, your doubts, your hopes. This space is designed to meet you
              there—not to push you somewhere else.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-foreground mb-12">
              Curious what others have experienced?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/voices"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
              >
                Read Reflections
                <span>→</span>
              </Link>
              <Link
                href="/begin"
                className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-700 font-sans text-sm tracking-widest uppercase"
              >
                Begin
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
