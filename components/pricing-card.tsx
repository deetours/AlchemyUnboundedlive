"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface PricingCardProps {
  title: string
  sessions: string
  extras?: string
  priceINR: string
  priceUSD: string
  delay?: number
}

export function PricingCard({ title, sessions, extras, priceINR, priceUSD, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="p-8 bg-background border border-border"
    >
      <h4 className="font-serif text-xl text-foreground mb-4">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed mb-2">{sessions}</p>
      {extras && <p className="text-muted-foreground/70 text-xs leading-relaxed mb-6">{extras}</p>}
      <div className="pt-4 border-t border-border">
        <p className="font-serif text-lg text-primary">{priceINR}</p>
        <p className="text-muted-foreground text-sm">{priceUSD}</p>
      </div>
    </motion.div>
  )
}

export function PricingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-12 text-center"
    >
      <Link
        href="/begin"
        className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-sm tracking-widest uppercase"
      >
        Request a Discovery Call
        <span>→</span>
      </Link>
    </motion.div>
  )
}

export function SlidingScaleNote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="mt-16 pt-8 border-t border-border/50"
    >
      <p className="text-muted-foreground/60 text-xs leading-relaxed max-w-xl mx-auto text-center italic">
        If you feel genuinely drawn to this work but are facing financial constraints, you're welcome to reach out. In
        select cases, a flexible sliding-scale may be available.
      </p>
    </motion.div>
  )
}
