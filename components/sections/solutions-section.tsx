import Image from "next/image"

const solutions = [
  {
    img: "/images/index/solutions-1.png",
    icon: "/images/index/solutions-icon-1.png",
    title: "本地快递服务",
    text: "合作DPD、Royal Mail、UPS等，实现高效配送",
  },
  {
    img: "/images/index/solutions-2.png",
    icon: "/images/index/solutions-icon-2.png",
    title: "次日达 & 标准配送",
    text: "供灵活配送方案，满足客户不同需求",
  },
  {
    img: "/images/index/solutions-3.png",
    icon: "/images/index/solutions-icon-3.png",
    title: "Pallet大件货物配送",
    text: "支持托盘配送，适用于B2B批发或大件商品运输",
  },
  {
    img: "/images/index/solutions-4.png",
    icon: "/images/index/solutions-icon-4.png",
    title: "跨境转运",
    text: "可将货物从英国海外仓直接转运至欧洲其他国家",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            {"英国 & 欧洲"}
          </h2>
          <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
            本地配送
          </p>
        </div>
        <p className="mb-10 text-base text-muted-foreground">
          覆盖广泛，快速送达
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-card shadow-md transition-transform hover:scale-[1.02]"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />
              <div className="flex items-start gap-3 p-4">
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="mt-1 shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
