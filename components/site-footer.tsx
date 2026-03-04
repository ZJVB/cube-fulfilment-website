import Image from "next/image"
import Link from "next/link"

const pageNav = [
  { label: "首页", href: "#" },
  { label: "服务", href: "#service" },
  { label: "信息化", href: "#information" },
  { label: "关于", href: "#about" },
]

const usefulLinks = [
  { label: "17track", href: "https://www.17track.net" },
  { label: "51tracking", href: "https://www.51tracking.com" },
  { label: "Exchange Rate Query", href: "#" },
  { label: "Flight Search", href: "#" },
  { label: "HS Code Lookup", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-lg font-bold text-primary uppercase">
              Page Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {pageNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:font-semibold hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-bold text-primary uppercase">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-4">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:font-semibold hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-bold text-primary uppercase">
              Contact Information
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Image
                  src="/images/contact-icon-1.png"
                  alt="Address"
                  width={20}
                  height={20}
                  className="mt-0.5 shrink-0"
                />
                <span>
                  UK Head Office: 109 Portland Street, Manchester, M1 6DN
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Image
                  src="/images/contact-icon-2.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="mt-0.5 shrink-0"
                />
                <span>{"contact@bnj-global.com"}</span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src="/images/contact-icon-3.png"
                  alt="Social 1"
                  width={32}
                  height={32}
                />
                <Image
                  src="/images/contact-icon-4.png"
                  alt="Social 2"
                  width={32}
                  height={32}
                />
                <Image
                  src="/images/contact-icon-5.png"
                  alt="Social 3"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            沪ICP备2023017517号-1
          </a>
        </div>
      </div>
    </footer>
  )
}
