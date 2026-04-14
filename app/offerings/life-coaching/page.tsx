"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Dynamically import the content component with SSR disabled
const LifeCoachingContent = dynamic(
  () => import("@/components/offerings/life-coaching-content"),
  { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-[#F5F4F1] animate-pulse" />
  }
)

export default function LifeCoachingPage() {
  return (
    <main className="bg-[#F5F4F1] text-foreground selection:bg-[#FFC908]">
      <Navigation />
      <LifeCoachingContent />
      <Footer />
    </main>
  )
}
