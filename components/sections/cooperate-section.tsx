import Image from "next/image"

export function CooperateSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            多平台无缝对接
          </h2>
          <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
            一键管理全渠道订单
          </p>
        </div>
        <p className="mx-auto mb-10 max-w-4xl text-center text-base text-muted-foreground">
          Cube支持多平台、多渠道订单管理，确保所有订单数据在一个系统内高效整合：集成Amazon、eBay、Shopify、Temu、TikTok等平台，实现库存和订单信息实时同步
        </p>
      </div>
      <div className="overflow-hidden">
        <Image
          src="/images/index/platform.png"
          alt="Platform integrations"
          width={1400}
          height={200}
          className="mx-auto h-auto w-full max-w-6xl"
        />
      </div>
    </section>
  )
}
