import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "CUBE - Cross-Border E-Commerce Warehouse & Logistics",
  description:
    "CUBE UK overseas warehouse provides efficient, flexible, and customized warehousing and logistics services for cross-border e-commerce enterprises.",
  keywords:
    "CUBE,Cube Fulfilment,cross-border logistics,overseas warehouse,WMS,TMS,UK warehouse",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
