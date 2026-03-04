import Image from "next/image"

export function CtaSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-[320px] items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/images/index/doforyou-back.png)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <div className="max-w-xl py-12">
          <h2 className="mb-4 text-4xl font-bold text-primary-foreground lg:text-5xl">
            {"CUBE的优势"}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/90">
            Cube英国海外仓依托先进的仓储管理系统（WMS），提供智能化库存管理、灵活存储解决方案，确保卖家能够高效控制库存状态，减少滞销与断货风险，提高供应链的运营效率
          </p>
          <button className="h-10 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            About Us
          </button>
        </div>
        <div className="relative hidden h-[300px] w-[430px] shrink-0 lg:block">
          <Image
            src="/images/index/doforyou.png"
            alt="CUBE advantages"
            width={430}
            height={300}
            className="absolute bottom-0 right-0 h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
