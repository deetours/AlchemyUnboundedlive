"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LineReveal } from "@/components/line-reveal"
import Link from "next/link"

export default function TheWorkPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-6"
          >
            The Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
          >
            The Work
          </motion.h1>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">What This Is Not</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-12">Let us begin with clarity.</p>
          </ScrollReveal>

          <LineReveal
            lines={[
              "Not quick fixes.",
              "Not motivation hacks.",
              "Not surface-level coaching.",
              "Not another self-improvement program.",
            ]}
            className="space-y-4"
            lineClassName="font-serif text-xl md:text-2xl text-foreground"
            delay={0.3}
          />

          <ScrollReveal delay={0.8}>
            <p className="mt-16 text-muted-foreground leading-relaxed max-w-2xl">
              This work does not promise to fix you because you were never broken. It does not offer shortcuts because
              the path itself is the destination.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What This Is */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">What This Is</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-12">
              A weaving of life, creativity, movement, and consciousness.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-muted-foreground leading-relaxed mb-16 max-w-2xl">
              Nothing exists in isolation, and absolutely everything responds to care and attention. This is the
              foundation of all the work we do together.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {[
              {
                title: "Journey",
                description: "Not a destination to reach, but a path to walk—present to each step.",
              },
              {
                title: "Unfolding",
                description: "Growth that emerges organically, like a flower opening to the sun.",
              },
              {
                title: "Alchemy",
                description: "The transformation of lead into gold—of struggle into wisdom.",
              },
              {
                title: "Integration",
                description: "Bringing together the fragments into a coherent, embodied whole.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={0.3 + index * 0.1}>
                <div className="border-l border-primary pl-6">
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[50vh] relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[url('/golden-light-through-trees-peaceful-transformation.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-background/30" />
      </section>

      {/* How Transformation Happens */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">
              How Transformation Happens
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Transformation is not something we do to you. It is something that happens when the conditions are right.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed mb-16 max-w-2xl">
              As the quality of attention and perception sharpens, you learn to read the book of yourself with all its
              complexity and nuances. Taking responsibility for your growth, you transcend self-imposed barriers,
              allowing life to unfold effortlessly in myriad dimensions.
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Awareness",
                description: "Seeing clearly what is, without judgment or agenda. The foundation of all change.",
              },
              {
                step: "02",
                title: "Embodiment",
                description:
                  "Moving understanding from the head into the body. Knowledge becomes wisdom through lived experience.",
              },
              {
                step: "03",
                title: "Inquiry",
                description: "Questioning assumptions, beliefs, and patterns. Not to find answers, but to open space.",
              },
              {
                step: "04",
                title: "Integration",
                description:
                  "Weaving insights into daily life. Transformation that lasts because it becomes who you are.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={0.1 * index}>
                <div className="flex gap-8 items-start">
                  <span className="font-sans text-sm text-primary tracking-widest">{item.step}</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-lg text-primary mb-16 tracking-widest uppercase">Who This Is For</h2>
          </ScrollReveal>
        </div>
      </section>

      {/* For Creators */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">For Creators</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
              You are a maker, artist, writer, or anyone whose work flows from inner vision. Your creative fire is your
              truth-telling instrument.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The world right now asks creators to perform, optimize, go viral, build audiences. It asks you to split
              yourself between the authentic work and the algorithmic work. To monitor metrics. To shrink your message
              to what's trending.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Many creators reach a point where the split becomes unbearable. Where the performance exhausts the
              authentic work. Where you realize that building an audience through inauthenticity is a slow form of
              creative death.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="font-serif text-lg text-foreground italic">
              This work is about returning to creative integrity. Building visibility without losing yourself.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Entrepreneurs */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">For Entrepreneurs</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
              You have a vision. A problem you want to solve. Something you believe the world needs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The path of entrepreneurship is not just a business problem—it is an identity problem. You are learning
              to lead, to hold complexity, to make decisions with incomplete information, to face failure without it
              destroying you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Many entrepreneurs reach a point where they realize that business skills are not enough. That leadership
              is hollow without self-awareness. That scaling a business while staying fragmented inside is a path to
              burnout, not freedom.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="font-serif text-lg text-foreground italic">
              This work is about building your internal foundation so that your external vision can stand. About
              becoming a leader who remains embodied, clear, and whole.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Changemakers */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">For Changemakers</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
              You care deeply about something larger than yourself. You work toward social, environmental, or cultural
              change. You are driven by purpose, not profit.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The work of transformation, activism, or service comes with a particular burden: burnout from caring too
              much. Moral injury from the gap between vision and reality. Cynicism from years of effort that feel
              insignificant against the scale of the problem.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Many changemakers reach a breaking point where they realize that their effectiveness is only as strong as
              their own inner resilience. That sustainable change work requires that you tend to your own transformation
              first.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="font-serif text-lg text-foreground italic">
              This work is about building practices that sustain you. About deepening resilience without hardening the
              heart. About lasting change that comes from a place of inner wholeness, not depletion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Wholeness Philosophy */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              "I began to perceive the wholeness and interconnectedness of life, realizing that nothing exists in
              isolation."
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed">
              This understanding shapes every aspect of the work—we are always working with the whole person, not just
              the presenting problem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif text-xl md:text-2xl text-foreground mb-12">Ready to explore the paths?</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              href="/offerings"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
            >
              View Offerings
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
