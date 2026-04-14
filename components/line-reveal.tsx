"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface LineRevealProps {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
}

export function LineReveal({ lines, className = "", lineClassName = "", delay = 0 }: LineRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className={className}>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 1.5,
            delay: delay + index * 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={lineClassName}
        >
          {line}
        </motion.p>
      ))}
    </div>
  )
}
