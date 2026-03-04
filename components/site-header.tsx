"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { label: "首页", href: "#" },
  { label: "服务", href: "#service" },
  { label: "信息化", href: "#information" },
  { label: "关于", href: "#about" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-md"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="block w-28 shrink-0">
            <Image
              src="/images/top-logo.png"
              alt="CUBE Logo"
              width={116}
              height={40}
              className="h-auto w-full"
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-normal text-foreground transition-colors hover:font-semibold hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="cursor-pointer text-sm text-foreground">中文 / EN</span>
        </div>
      </div>
    </header>
  )
}
