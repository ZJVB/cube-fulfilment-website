import Image from "next/image"

const services = [
  {
    icon: "/images/index/service-icon-1.png",
    title: "短期存储",
    text: "适用于快速周转商品，灵活出库，降低仓储成本",
  },
  {
    icon: "/images/index/service-icon-2.png",
    title: "长期存储",
    text: "适合大批量进货、季节性商品存储，优化供应链成本",
  },
  {
    icon: "/images/index/service-icon-3.png",
    title: "温控仓储",
    text: "适用于食品、美妆、医疗等对存储环境有特殊要求的产品",
  },
  {
    icon: "/images/index/service-icon-4.png",
    title: "大件 & 托盘存储",
    text: "专为家具、家电、机械设备等大件商品提供专业存储方案",
  },
  {
    icon: "/images/index/service-icon-5.png",
    title: "全渠道平台存储",
    text: "深度对接亚马逊、独立站等销售渠道，实现库存数据实时同步",
  },
  {
    icon: "/images/index/service-icon-6.png",
    title: "增值服务集成存储",
    text: "整合贴标换标、定制包装、退货翻新等增值服务，形成存储-处理-再销售闭环",
  },
]

export function ServiceSection() {
  return (
    <section id="service" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="shrink-0 lg:w-[400px]">
            <Image
              src="/images/index/service-1.png"
              alt="Warehouse service"
              width={400}
              height={500}
              className="h-auto w-full rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              灵活存储方案
            </h2>
            <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
              满足不同业务需求
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              不同卖家的运营模式不同，Cube提供个性化仓储方案，确保您的货物能在最合适的条件下存储：
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="mt-1 shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
