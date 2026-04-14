"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  location: string
  service?: string
  delay?: number
}

export function TestimonialCard({ quote, name, role, location, service, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="p-8 md:p-10 bg-background border border-border"
    >
      <p className="font-serif text-lg text-foreground leading-relaxed mb-8 italic">"{quote}"</p>
      <div className="space-y-1">
        <p className="font-sans text-sm text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">
          {role}, {location}
        </p>
        {service && <p className="text-xs text-primary/70 italic mt-2">{service}</p>}
      </div>
    </motion.div>
  )
}

export function TestimonialCardCompact({
  quote,
  name,
  role,
  location,
  delay = 0,
}: Omit<TestimonialCardProps, "service">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">"{quote}"</p>
      <p className="text-sm text-muted-foreground">
        — {role}, {location}
      </p>
    </motion.div>
  )
}
