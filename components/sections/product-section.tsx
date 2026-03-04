"use client"

import { useState } from "react"
import Image from "next/image"

const products = [
  {
    big: "/images/index/product-big-1.png",
    small: "/images/index/product-small-1.png",
    title: "陆 运",
  },
  {
    big: "/images/index/product-big-2.png",
    small: "/images/index/product-small-2.png",
    title: "空 运",
  },
  {
    big: "/images/index/product-big-3.png",
    small: "/images/index/product-small-3.png",
    title: "海 运",
  },
]

export function ProductSection() {
  const [active, setActive] = useState(1)

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            运输
          </h2>
          <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
            方式
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ${
                active === index ? "flex-[2]" : "flex-1"
              }`}
              style={{ height: 400 }}
              onMouseEnter={() => setActive(index)}
            >
              <Image
                src={active === index ? product.big : product.small}
                alt={product.title}
                fill
                className="object-cover"
              />
              {active === index && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {product.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
