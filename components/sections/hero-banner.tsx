"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "/images/index/banner-icon-1.png",
    title: "跨境电商",
    highlight: "'一站式'",
    subtitle: "仓储与物流解决方案",
    description:
      "Cube英国海外仓专为跨境电商企业提供高效、灵活、定制化的仓储与物流服务，助您在英国及欧洲市场快速增长，优化供应链，提升客户满意度",
  },
  {
    image: "/images/index/banner-icon-2.png",
    title: "全链路",
    highlight: "'自动化'",
    subtitle: "订单管理",
    description:
      "订单自动同步全球电商平台，实时库存联动扣减，智能规则分配就近仓库发货，杜绝超卖缺货风险。系统无缝对接主流ERP/WMS，减少80%人工干预",
  },
  {
    image: "/images/index/banner-icon-3.png",
    title: "品牌",
    highlight: "'定制化'",
    subtitle: "增值服务",
    description:
      "提供专属品牌包装设计（LOGO印刷、定制封箱贴、多语言宣传页），支持多SKU组合发运节省物流成本，灵活适配黑五、圣诞等大促主题包装",
  },
]

export function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    <section className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[2400/802] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 flex items-center">
                  <div className="ml-[10%] w-[40%]">
                    <h1 className="text-4xl font-black leading-tight text-foreground lg:text-6xl xl:text-7xl">
                      {slide.title}
                      <span className="text-accent">{slide.highlight}</span>
                    </h1>
                    <h2 className="text-4xl font-black text-foreground lg:text-6xl xl:text-7xl">
                      {slide.subtitle}
                    </h2>
                    <p className="mt-4 max-w-xl text-base font-medium text-foreground/80 lg:text-xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === selectedIndex
                ? "w-8 bg-primary"
                : "bg-foreground/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
