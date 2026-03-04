"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCounter(target: number, step: number, interval: number, trigger: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let current = 0
    const id = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(id)
      }
      setValue(current)
    }, interval)
    return () => clearInterval(id)
  }, [target, step, interval, trigger])
  return value
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */
function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <span className="text-xl font-bold tracking-tight text-primary">CUBE UK</span>
        <nav className="hidden gap-8 md:flex">
          {["Home", "Services", "Information", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-4 py-6 md:hidden">
          {["Home", "Services", "Information", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-base font-medium text-foreground/70 hover:text-primary">
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero Banner – static grid instead of Swiper                        */
/* ------------------------------------------------------------------ */
function HeroBanner() {
  const slides = [
    {
      title: "Cross-Border E-Commerce",
      highlight: "'One-Stop'",
      subtitle: "Warehousing & Logistics Solutions",
      description: "CUBE UK overseas warehouse provides efficient, flexible, and customized warehousing and logistics services for cross-border e-commerce enterprises.",
    },
    {
      title: "Full-Chain",
      highlight: "'Automated'",
      subtitle: "Order Management",
      description: "Orders auto-sync across global e-commerce platforms, real-time inventory deduction, smart rules for nearest warehouse dispatch.",
    },
    {
      title: "Brand",
      highlight: "'Customized'",
      subtitle: "Value-Added Services",
      description: "Custom brand packaging design, multi-SKU combined shipping, flexible seasonal promotional packaging from warehouse to delivery.",
    },
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [slides.length])

  const slide = slides[active]

  return (
    <section id="home" className="relative flex min-h-[480px] items-center overflow-hidden bg-foreground/5 lg:min-h-[560px]">
      <Image src="https://placehold.co/1920x600/1a1a2e/ffffff?text=CUBE+UK+Warehouse" alt="Banner" fill className="object-cover opacity-30" unoptimized />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-balance text-4xl font-black leading-tight text-foreground lg:text-6xl">
          {slide.title} <span className="text-accent">{slide.highlight}</span>
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-foreground lg:text-4xl">{slide.subtitle}</h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg">{slide.description}</p>
        <div className="mt-8 flex gap-3">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-primary" : "w-6 bg-border"}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Quantity / Stats                                                   */
/* ------------------------------------------------------------------ */
function QuantityStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const n1 = useCounter(3, 1, 300, visible)
  const n2 = useCounter(10000, 500, 50, visible)
  const n3 = useCounter(5000, 250, 50, visible)
  const n4 = useCounter(50, 5, 100, visible)

  const stats = [
    { value: `${n1}+`, label: "Overseas Warehouses", desc: "Warehouses in Manchester, Liverpool, London" },
    { value: `${n2.toLocaleString()}+`, label: "Sq. Metres", desc: "Ample warehouse space" },
    { value: `${n3.toLocaleString()}+`, label: "Daily Orders", desc: "Daily order processing volume" },
    { value: `${n4}+`, label: "Logistics Partners", desc: "Cooperating with international logistics enterprises" },
  ]

  return (
    <section ref={ref} className="bg-background py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center rounded-lg bg-card p-8 text-center shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg">
            <Image src={`https://placehold.co/54x54/ff4400/ffffff?text=${i + 1}`} alt={s.label} width={54} height={54} className="mb-3" unoptimized />
            <span className="text-3xl font-black text-accent">{s.value}</span>
            <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
            <span className="mt-1 text-xs text-muted-foreground">{s.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Introduce Section                                                  */
/* ------------------------------------------------------------------ */
function IntroduceSection() {
  const blocks = [
    {
      title: "SKU Inventory Management - Precise Control of Every Product",
      subtitle: "Different product categories require different warehousing management. CUBE uses a multi-SKU management system for refined inventory management:",
      points: [
        "Multi-platform SKU sync - Seamlessly connect Amazon, eBay, Shopify, TikTok, auto-update inventory data",
        "Multi-category inventory classification - Different storage methods for fragile, oversized, temperature-controlled goods",
        "Inventory batch management - Smart zoning based on production date, batch, expiry date",
      ],
      imageRight: true,
    },
    {
      title: "Real-Time Data Sync - Visual Inventory Management, Reduce Risk",
      subtitle: "CUBE warehouse system uses full-chain data visualization to make inventory status clear at a glance:",
      points: [
        "Precise inventory tracking - Real-time inventory changes via WMS, reducing human error",
        "Automatic inventory alerts - System calculates consumption speed, sets low-stock reminders",
        "Order fulfillment monitoring - Full-process data visualization from receipt to dispatch",
      ],
      imageRight: false,
    },
  ]
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">Intelligent Warehouse Management</h2>
          <p className="mt-1 text-lg font-semibold text-primary">Precise Inventory Control</p>
        </div>
        <div className="flex flex-col gap-20">
          {blocks.map((b, i) => (
            <div key={i} className={`flex flex-col items-center gap-10 lg:flex-row ${!b.imageRight ? "lg:flex-row-reverse" : ""}`}>
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg lg:w-5/12">
                <div className="absolute left-0 top-10 h-60 w-2.5 rounded-r bg-primary" />
                <Image src={`https://placehold.co/500x340/eaeaea/333333?text=Warehouse+${i + 1}`} alt={b.title} width={500} height={340} className="w-full" unoptimized />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-4 border-b-2 border-border pb-2 text-xl font-semibold text-foreground">{b.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{b.subtitle}</p>
                {b.points.map((p, j) => (
                  <p key={j} className="mb-2 text-sm leading-relaxed text-muted-foreground">{p}</p>
                ))}
                <div className="mt-6 flex gap-4">
                  <button className="h-10 rounded bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Request a Demo</button>
                  <button className="h-10 rounded border border-primary bg-transparent px-6 text-sm font-medium text-primary transition-colors hover:bg-primary/5">More info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Service Section                                                    */
/* ------------------------------------------------------------------ */
function ServiceSection() {
  const services = [
    { name: "Short-Term Storage", desc: "Fast-turnover products, flexible dispatch, lower warehousing costs" },
    { name: "Long-Term Storage", desc: "Bulk purchasing, seasonal product storage, optimized supply chain costs" },
    { name: "Temperature-Controlled", desc: "Food, cosmetics, medical products with special storage requirements" },
    { name: "Large & Pallet Storage", desc: "Professional storage for furniture, appliances, machinery equipment" },
    { name: "Omnichannel Storage", desc: "Deep integration with Amazon, independent sites, real-time inventory sync" },
    { name: "Value-Added Integrated", desc: "Relabeling, custom packaging, return refurbishment, closed-loop storage" },
  ]
  return (
    <section id="services" className="bg-secondary py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:flex-row">
        <div className="w-full overflow-hidden rounded-lg lg:w-5/12">
          <Image src="https://placehold.co/500x600/cccccc/333333?text=Storage+Solutions" alt="Storage" width={500} height={600} className="h-full w-full object-cover" unoptimized />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-foreground">
            Flexible Storage Solutions{" "}
            <span className="text-primary">Meeting Different Business Needs</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Different sellers have different operating models. CUBE provides personalized warehousing solutions to ensure your goods are stored under optimal conditions:</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <Image src={`https://placehold.co/48x48/ff4400/ffffff?text=${i + 1}`} alt={s.name} width={48} height={48} className="shrink-0 rounded" unoptimized />
                <div>
                  <h4 className="text-base font-bold text-foreground">{s.name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Solutions Section                                                  */
/* ------------------------------------------------------------------ */
function SolutionsSection() {
  const solutions = [
    { name: "Local Courier Service", desc: "Partnering with DPD, Royal Mail, UPS for efficient delivery" },
    { name: "Next-Day & Standard Delivery", desc: "Flexible delivery options to meet different customer needs" },
    { name: "Pallet / Large Goods", desc: "Pallet delivery for B2B wholesale or large item transport" },
    { name: "Cross-Border Transfer", desc: "Transfer goods from UK warehouse directly to other European countries" },
  ]
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">UK & Europe <span className="text-primary">Local Delivery</span></h2>
        <p className="mt-3 text-sm text-muted-foreground">Wide coverage, fast delivery</p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <div key={i} className="group overflow-hidden rounded-lg bg-card shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg">
              <Image src={`https://placehold.co/320x200/e8e8e8/333333?text=Delivery+${i + 1}`} alt={s.name} width={320} height={200} className="w-full" unoptimized />
              <div className="flex items-center gap-2 p-4">
                <Image src={`https://placehold.co/40x40/ff4400/ffffff?text=D`} alt="" width={40} height={40} className="shrink-0 rounded" unoptimized />
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-foreground">{s.name}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Product Section – expandable cards                                 */
/* ------------------------------------------------------------------ */
function ProductSection() {
  const [active, setActive] = useState(1)
  const products = [
    { label: "Land Transport", big: "https://placehold.co/800x500/1a1a2e/ffffff?text=Land+Transport", small: "https://placehold.co/400x500/2a2a3e/ffffff?text=Land" },
    { label: "Air Freight", big: "https://placehold.co/800x500/1a1a2e/ffffff?text=Air+Freight", small: "https://placehold.co/400x500/2a2a3e/ffffff?text=Air" },
    { label: "Sea Freight", big: "https://placehold.co/800x500/1a1a2e/ffffff?text=Sea+Freight", small: "https://placehold.co/400x500/2a2a3e/ffffff?text=Sea" },
  ]
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">Transport <span className="text-primary">Modes</span></h2>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl gap-4 px-4">
        {products.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-600 ease-[cubic-bezier(.5,1,.89,1)]"
            style={{
              flex: active === i ? 3 : 1,
              height: 500,
              backgroundImage: `url(${active === i ? p.big : p.small})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {active === i && (
              <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-end justify-center bg-gradient-to-t from-primary/70 to-transparent pb-16">
                <span className="text-4xl font-bold text-primary-foreground lg:text-6xl">{p.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Device / Supported Goods Section                                   */
/* ------------------------------------------------------------------ */
function DeviceSection() {
  const items = ["Cosmetics", "Electronics", "Furniture & Home", "Apparel", "Food", "Beverages"]
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">Supported <span className="text-primary">Goods</span></h2>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <Image src={`https://placehold.co/280x200/e0e0e0/333333?text=${item.replace(/ /g, "+")}`} alt={item} width={280} height={200} className="w-full rounded-lg" unoptimized />
              <span className="text-base font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Testimonial Section                                                */
/* ------------------------------------------------------------------ */
function TestimonialSection() {
  const testimonials = [
    { quote: "Shipboxs works great, very easy and cheap. The UPS label is a great deal and I would go with it all the time.", name: "Lauren", role: "Amazon Personal Seller" },
    { quote: "Shipboxs works great, very easy and cheap. The UPS label is a great deal and I would go with it all the time.", name: "Lauren", role: "Amazon Personal Seller" },
  ]
  return (
    <section className="relative overflow-hidden bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">Why Choose <span className="text-primary">CUBE</span></h2>
        <p className="mt-2 text-base text-foreground">Hear what our customers say!</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg bg-card p-6 text-left shadow">
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{`"${t.quote}"`}</p>
              <div className="flex items-center gap-3">
                <Image src={`https://placehold.co/48x48/ff4400/ffffff?text=${t.name[0]}`} alt={t.name} width={48} height={48} className="rounded-full" unoptimized />
                <div>
                  <span className="block text-sm font-bold text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Cooperate / Platform Section                                       */
/* ------------------------------------------------------------------ */
function CooperateSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">Multi-Platform Seamless Integration</h2>
        <p className="mt-1 text-lg font-semibold text-primary">One-Click All-Channel Order Management</p>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
          CUBE supports multi-platform, multi-channel order management. Integrated with Amazon, eBay, Shopify, Temu, TikTok and more for real-time inventory and order sync, unified multi-store order management, and API smart connections to enterprise ERP systems.
        </p>
        <div className="mt-10">
          <Image src="https://placehold.co/1200x300/f8f8f8/333333?text=Platform+Integrations:+Amazon+|+eBay+|+Shopify+|+Temu+|+TikTok" alt="Platform integrations" width={1200} height={300} className="mx-auto w-full max-w-4xl rounded-lg" unoptimized />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Information / Warehouse Photos                                     */
/* ------------------------------------------------------------------ */
function InformationSection() {
  const items = [
    { title: "General Warehouse", desc: "Storing apparel and general goods" },
    { title: "Temperature-Controlled", desc: "Storing temperature-sensitive goods" },
    { title: "Processing Area", desc: "Order packing and labeling" },
    { title: "Dispatch Zone", desc: "Sorting and shipping logistics" },
  ]
  return (
    <section id="information" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-foreground">Warehouse <span className="text-primary">Gallery</span></h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-lg bg-card shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="relative">
                <Image src={`https://placehold.co/400x280/cccccc/333333?text=Warehouse+${i + 1}`} alt={item.title} width={400} height={280} className="w-full" unoptimized />
                <span className="absolute bottom-3 left-3 text-lg font-bold text-primary-foreground drop-shadow-md">{item.title}</span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CTA / CUBE Advantages                                              */
/* ------------------------------------------------------------------ */
function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold">CUBE Advantages</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-primary-foreground/70">
          CUBE UK overseas warehouse leverages an advanced Warehouse Management System (WMS) to provide intelligent inventory management and flexible storage solutions, ensuring sellers can efficiently control inventory status, reduce overstock and stockout risks, and improve supply chain operational efficiency.
        </p>
        <button className="mt-8 h-12 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">About Us</button>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Experience / Demo CTA                                              */
/* ------------------------------------------------------------------ */
function ExperienceSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">Start Your Intelligent Overseas Warehouse Upgrade Today</h2>
        <p className="mt-3 text-sm text-muted-foreground">Try it for free, or reach out to our solution experts to see how CUBE can help you move forward.</p>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input type="tel" placeholder="Enter your phone number" className="h-12 flex-1 rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none focus:border-primary" />
          <button className="h-12 shrink-0 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Schedule a Demo</button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function SiteFooter() {
  return (
    <footer id="about" className="bg-foreground py-12 text-primary-foreground/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-3">
        <div>
          <h4 className="mb-4 text-sm font-bold text-primary-foreground">Page Navigation</h4>
          {["Home", "Services", "Information", "About"].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="mb-2 block text-sm hover:text-primary">{n}</a>
          ))}
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold text-primary-foreground">Useful Links</h4>
          {["17track", "51tracking", "Exchange Rate Query", "Flight Search", "HS Code Lookup"].map((n) => (
            <a key={n} href="#" className="mb-2 block text-sm hover:text-primary">{n}</a>
          ))}
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold text-primary-foreground">Contact Information</h4>
          <p className="mb-2 text-sm">UK Head Office: 109 Portland Street, Manchester, M1 6DN</p>
          <p className="mb-2 text-sm">{"contact@bnj-global.com"}</p>
          <p className="mb-2 text-sm">Sales Tel: 18516101845</p>
          <p className="text-sm">Phone: 18621373216</p>
        </div>
      </div>
      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        CUBE Fulfilment. All rights reserved.
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <HeroBanner />
        <QuantityStats />
        <IntroduceSection />
        <ServiceSection />
        <SolutionsSection />
        <ProductSection />
        <DeviceSection />
        <TestimonialSection />
        <CooperateSection />
        <InformationSection />
        <CtaSection />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </>
  )
}
