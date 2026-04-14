"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Dynamically import the content component with SSR disabled
const CreativityCoachingContent = dynamic(
  () => import("@/components/offerings/creativity-coaching-content"),
  { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-[#F5F4F1] animate-pulse" />
  }
)

export default function CreativityCoachingPage() {
  return (
    <main className="bg-[#F5F4F1] text-foreground selection:bg-[#946DE3] selection:text-white">
      <Navigation />
      <CreativityCoachingContent />
      <Footer />
    </main>
  )
}
