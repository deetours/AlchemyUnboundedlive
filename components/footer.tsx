"use client"

import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <footer className="bg-background py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="h-px w-full bg-foreground/5 mb-24" />
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-24">
            <div>
              <Link href="/" className="inline-block mb-12">
                <span className="font-serif text-3xl tracking-tighter text-foreground group">
                  Alchemy <span className="text-primary italic">Unbounded</span>
                </span>
              </Link>
              <div className="space-y-4">
                <div className="h-0.5 w-12 bg-primary" />
                <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-muted-foreground leading-relaxed font-bold">
                  Capability. <br /> Recovered.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="font-sans text-[10px] tracking-[0.6em] uppercase text-foreground/40 font-bold">The Journey</h4>
              <nav className="flex flex-col gap-6">
                {[
                  { label: "The Path", href: "/offerings" },
                  { label: "The Philosophy", href: "/about" },
                  { label: "The Outcomes", href: "/voices" },
                  { label: "The Invitation", href: "/begin" }
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-all duration-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-12">
              <h4 className="font-sans text-[10px] tracking-[0.6em] uppercase text-foreground/40 font-bold">Initiation</h4>
              <Link
                href="/begin"
                className="font-serif text-xl text-foreground hover:text-primary transition-colors duration-700 italic underline-offset-8 underline decoration-primary/30"
              >
                Begin a conversation
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-32 pt-16 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] font-sans tracking-widest text-muted-foreground uppercase font-bold">
              © {new Date().getFullYear()} Alchemy Unbounded
            </p>
            <div className="flex gap-12">
              <span className="text-[9px] font-sans tracking-widest text-muted-foreground uppercase font-bold cursor-pointer hover:text-foreground">Privacy</span>
              <span className="text-[9px] font-sans tracking-widest text-muted-foreground uppercase font-bold cursor-pointer hover:text-foreground">Terms</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
