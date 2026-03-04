"use client"

import { useState } from "react"

export function ExperienceSection() {
  const [phone, setPhone] = useState("")

  return (
    <section className="bg-foreground py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
          Start Your Intelligent Overseas Warehouse Upgrade Today
        </h2>
        <p className="mt-4 text-base text-primary-foreground/70">
          Try it for free, or reach out to our solution experts to see how CUBE
          can help you move forward.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="h-12 w-full max-w-sm rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary sm:flex-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="h-12 rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
