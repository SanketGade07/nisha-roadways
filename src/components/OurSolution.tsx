"use client"

import { motion } from "framer-motion"
import { Container, Truck, Share2, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { featuredPartnerLogos } from "@/data/partners"

const SERVICES = [
  {
    key: "container-logistics",
    title: "Container Solutions",
    description: "End-to-end container management from ports to your doorstep.",
    icon: Container,
    link: "/services#container-logistics",
    partners: ["Maersk", "DP World", "MSC", "Hapag Lloyd"],
    partnerLogos: [
      "/images/partners/maersk-logo-5Rmy2WJH_t.jpg",
      "/images/partners/DP_World_2021_logo.svg",
      "/images/partners/msc cruises.jpg",
      "/images/partners/hapag-lloyd.png"
    ]
  },
  {
    key: "specialized-cargo",
    title: "Specialized Transport",
    description: "Expert handling for ODC and delicate solar components.",
    icon: Truck,
    link: "/services#specialized-cargo",
    partners: ["Adani", "TVS", "DHL", "COSCO"],
    partnerLogos: [
      "/images/partners/growth-adani-logo.png",
      "/images/partners/tvs.png",
      "/images/partners/dhl.png",
      "/images/partners/COSCOCS-ver1.svg.png"
    ]
  },
  {
    key: "multimodal-transport",
    title: "Integrated Logistics",
    description: "Seamless multimodal connectivity via rail and coastal routes.",
    icon: Share2,
    link: "/services#multimodal-transport",
    partners: ["Kuehne Nagel", "CMA CGM", "OOCL", "ONE"],
    partnerLogos: [
      "/images/partners/kuehne nagel.png",
      "/images/partners/CMA_CGM_Company_Logo_July_2017.png",
      "/images/partners/orient overseas conatainer line.png",
      "/images/partners/lg-6732affe950d3-Ocean-Network-Express.webp"
    ]
  },
  {
    key: "value-added-services",
    title: "Value-Added Care",
    description: "Precision-targeted warehousing and high-value cargo protection.",
    icon: ShieldCheck,
    link: "/services#value-added-services",
    partners: ["Avana", "Bulk Tainer", "Concor", "TVS"],
    partnerLogos: [
      "/images/partners/Aavana_on-White-BG.png",
      "/images/partners/bulktainer-group-logo.png",
      "/images/partners/Container_Corporation_of_India_logo.svg.png",
      "/images/partners/tvs.png"
    ]
  }
]

export default function OurSolution() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] leading-tight tracking-tight max-w-4xl mx-auto"
          >
            Nisha Roadways has deep industry expertise across many{" "}
            <span className="text-blue-600">specialized categories:</span>
          </motion.h2>
        </div>

        {/* Categories Grid — 4 items in a single row for LG screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.32, 0.9]
                }}
                className="group relative flex flex-col items-center text-center px-6 lg:px-8 pb-8 pt-16 bg-[#f0f4fe] rounded-[1.5rem] hover:shadow-xl transition-all duration-500"
              >
                {/* Category Icon — half top half under, slightly smaller */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-slate-100">
                    <Icon className="w-9 h-9 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-[#0f172a] mb-1.5">
                  {service.title}
                </h3>

                {/* Subtext */}
                <p className="text-xs font-medium text-slate-500 mb-6">
                  We work with
                </p>

                {/* Partner Logos — Forced single line, smaller */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  {service.partnerLogos.map((logo, idx) => (
                    <div key={idx} className="relative w-11 h-5 sm:w-12 sm:h-6">
                      <Image
                        src={logo}
                        alt={service.partners[idx]}
                        fill
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="60px"
                      />
                    </div>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href={service.link}
                  className="mt-auto text-xs font-bold text-blue-600 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-600 hover:text-blue-700 transition-all font-sans"
                >
                  Read more.
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
