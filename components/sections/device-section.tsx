import Image from "next/image"

const devices = [
  { icon: "/images/index/device-icon-1.png", name: "化妆品" },
  { icon: "/images/index/device-icon-2.png", name: "电子产品" },
  { icon: "/images/index/device-icon-3.png", name: "家具用品" },
  { icon: "/images/index/device-icon-4.png", name: "服饰" },
  { icon: "/images/index/device-icon-5.png", name: "食品" },
  { icon: "/images/index/device-icon-6.png", name: "酒水" },
]

export function DeviceSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            支持
          </h2>
          <p className="mt-1 text-2xl font-medium text-primary lg:text-3xl">
            商品
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {devices.map((device, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-lg bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <Image
                src={device.icon}
                alt={device.name}
                width={80}
                height={80}
              />
              <span className="text-base font-medium text-primary">
                {device.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
