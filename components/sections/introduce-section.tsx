import Image from "next/image"

const blocks = [
  {
    image: "/images/index/introduce-1.png",
    title: "SKU库存管理——精准掌控每件商品",
    subtitle:
      "不同品类的商品对于仓储管理有着不同的要求，Cube采用多SKU管理系统，确保您的库存得到精细化管理：",
    points: [
      "多平台SKU同步 —— 无缝对接Amazon、eBay、Shopify、TikTok等平台，自动更新库存数据，避免超卖或断货",
      "多类别库存分类 —— 针对普通商品、易碎品、大件货、温控商品等，提供不同存储方式，提高管理效率",
      "库存批次管理 —— 依据生产日期、批次、有效期等，进行智能分区存放，确保产品质量和周转率",
    ],
    imageFirst: true,
  },
  {
    image: "/images/index/introduce-2.png",
    title: "实时数据同步——库存可视化管理，降低风险",
    subtitle:
      "Cube仓库系统采用全链路数据可视化管理，让库存状态一目了然，确保商家可以随时掌握产品动态，做出及时调整：",
    points: [
      "精准库存追踪 —— 通过WMS系统，实时查看库存变动，减少人工误差，提升管理效率",
      "库存自动预警 —— 系统自动计算库存消耗速度，设置低库存提醒，确保补货计划精准执行",
      "订单履约监控 —— 订单状态全程可追踪，从入库、拣货、打包到发货，全流程数据可视化",
    ],
    imageFirst: false,
  },
]

export function IntroduceSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            智能仓储管理
          </h2>
          <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
            精准库存控制
          </p>
        </div>
      </div>
      {blocks.map((block, i) => (
        <div
          key={i}
          className={`mx-auto flex max-w-[66%] flex-col gap-8 py-12 md:flex-row md:items-start ${
            i > 0 ? "" : ""
          }`}
        >
          {block.imageFirst ? (
            <>
              <ImageCard src={block.image} alt={block.title} />
              <TextBlock block={block} />
            </>
          ) : (
            <>
              <TextBlock block={block} />
              <ImageCard src={block.image} alt={block.title} side="right" />
            </>
          )}
        </div>
      ))}
    </section>
  )
}

function ImageCard({
  src,
  alt,
  side = "left",
}: {
  src: string
  alt: string
  side?: "left" | "right"
}) {
  return (
    <div className="relative w-full shrink-0 rounded-lg bg-card p-3 shadow-[2px_4px_14px_0_rgba(0,0,0,0.25)] md:w-[500px]">
      <div
        className={`absolute top-10 h-60 w-2.5 rounded bg-primary ${
          side === "right" ? "-right-2.5 rounded-l" : "-left-2.5 rounded-r"
        }`}
      />
      <Image
        src={src}
        alt={alt}
        width={500}
        height={350}
        className="h-auto w-full rounded"
      />
    </div>
  )
}

function TextBlock({
  block,
}: {
  block: (typeof blocks)[number]
}) {
  return (
    <div className="relative flex flex-1 flex-col gap-4 px-5 py-3">
      <h3 className="text-2xl font-medium text-foreground">{block.title}</h3>
      <p className="text-base text-foreground">{block.subtitle}</p>
      {block.points.map((point, j) => (
        <p
          key={j}
          className="text-base leading-relaxed text-foreground/70"
        >
          {"● "}
          {point}
        </p>
      ))}
      <div className="mt-auto flex gap-4 pt-6">
        <button className="h-10 w-36 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Request a Demo
        </button>
        <button className="h-10 w-36 rounded-md border border-primary bg-transparent text-sm font-medium text-primary transition-colors hover:bg-primary/5">
          More info
        </button>
      </div>
    </div>
  )
}
