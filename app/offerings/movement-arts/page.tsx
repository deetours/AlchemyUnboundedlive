"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Dynamically import the content component with SSR disabled
const MovementArtsContent = dynamic(
  () => import("@/components/offerings/movement-arts-content"),
  { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-[#EBE8E4] animate-pulse" />
  }
)

export default function MovementArtsPage() {
  return (
    <main className="bg-[#EBE8E4] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#EBE8E4]">
      <Navigation />
      <MovementArtsContent />
      <Footer />
    </main>
  )
}
