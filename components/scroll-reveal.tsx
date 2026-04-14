"use client"

import { motion, useInView } from "framer-motion"
import React, { useRef, useState, useEffect, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  scale?: number
}

export function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  scale = 1
}: ScrollRevealProps) {
  
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        filter: "blur(10px)",
        scale,
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        filter: "blur(0px)",
        scale: 1,
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
