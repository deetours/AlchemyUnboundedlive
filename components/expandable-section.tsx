"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface ExpandableSectionProps {
  preview: React.ReactNode
  expanded: React.ReactNode
  expandLabel?: string
  collapseLabel?: string
}

export function ExpandableSection({
  preview,
  expanded,
  expandLabel = "Read more",
  collapseLabel = "Show less",
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      {preview}

      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            {expanded}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-8 text-primary font-sans text-sm tracking-widest uppercase hover:opacity-70 transition-opacity duration-500 flex items-center gap-2"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded ? collapseLabel : expandLabel}
        <span className={`transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}>↓</span>
      </motion.button>
    </div>
  )
}
