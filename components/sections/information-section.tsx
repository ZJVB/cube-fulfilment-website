"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  {
    image: "/images/index/information-1.png",
    title: "普货仓",
    text: "存放服饰等普通货品",
  },
  {
    image: "/images/index/information-2.png",
    title: "温控仓",
    text: "存放对温度有要求的货品",
  },
  {
    image: "/images/index/information-3.png",
    title: "xx仓",
    text: "Explore this area3",
  },
  {
    image: "/images/index/information-4.png",
    title: "xx仓",
    text: "Explore this area4",
  },
]

export function InformationSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "center",
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="information" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            仓库
          </h2>
          <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
            实景图
          </p>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_280px] lg:flex-[0_0_320px]"
                >
                  <div className="overflow-hidden rounded-xl bg-card shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={320}
                      height={220}
                      className="h-52 w-full object-cover"
                    />
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-lg transition-colors hover:bg-muted"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-lg transition-colors hover:bg-muted"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
