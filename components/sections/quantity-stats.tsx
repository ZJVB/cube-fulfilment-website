"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const stats = [
  {
    icon: "/images/index/quantity-icon-1.png",
    target: 3,
    suffix: "+海外仓",
    text: "曼彻斯特、利物浦、伦敦建有海外仓",
    step: 0.5,
    interval: 120,
  },
  {
    icon: "/images/index/quantity-icon-2.png",
    target: 10000,
    suffix: "+平米",
    text: "仓库空间充足",
    step: 500,
    interval: 100,
  },
  {
    icon: "/images/index/quantity-icon-3.png",
    target: 5000,
    suffix: "+订单",
    text: "日均处理订单量",
    step: 100,
    interval: 100,
  },
  {
    icon: "/images/index/quantity-icon-4.png",
    target: 50,
    suffix: "+物流商合作",
    text: "与多家国际知名物流企业达成合作关系",
    step: 5,
    interval: 100,
  },
]

function useCountUp(target: number, step: number, interval: number) {
  const [count, setCount] = useState(0)
  const started = useRef(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const timer = setInterval(() => {
            setCount((prev) => {
              const next = prev + step
              if (next >= target) {
                clearInterval(timer)
                return target
              }
              return next
            })
          }, interval)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, step, interval])

  return { count, ref }
}

export function QuantityStats() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(
              stat.target,
              stat.step,
              stat.interval
            )
            return (
              <div
                key={index}
                ref={ref}
                className="flex flex-col items-center gap-3 rounded-lg bg-card p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.11)] transition-all hover:scale-[1.01] hover:shadow-[0_1px_19px_0_rgba(0,0,0,0.21)]"
              >
                <Image
                  src={stat.icon}
                  alt={stat.suffix}
                  width={54}
                  height={54}
                />
                <div className="text-center text-3xl font-black text-accent">
                  <span>{count}</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-center text-sm font-medium text-foreground">
                  {stat.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
