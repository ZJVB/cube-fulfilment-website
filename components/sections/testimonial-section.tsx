import Image from "next/image"

const testimonials = [
  {
    quote:
      "Shipboxs works great, very easy and cheap. the UPS label is a great deal and I would go with it all the time.",
    name: "Lauren",
    address: "Amazon Personal Seller",
    avatar: "/images/index/say-icon-1.png",
  },
  {
    quote:
      "Shipboxs works great, very easy and cheap. the UPS label is a great deal and I would go with it all the time.",
    name: "Lauren",
    address: "Amazon Personal Seller",
    avatar: "/images/index/say-icon-2.png",
  },
]

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            为什么选择
          </h2>
          <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
            CUBE
          </p>
          <p className="mt-2 text-xl text-foreground">
            听听我们的客户这么说!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-xl bg-card p-8 shadow-md"
            >
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.address}</p>
                </div>
                <div className="ml-auto">
                  <Image
                    src="/images/index/say-icon.png"
                    alt="Quote"
                    width={40}
                    height={40}
                    className="opacity-30"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
