"use client"

import { motion } from "framer-motion"
import { Container, Truck, Share2, ShieldCheck, ArrowRight, Boxes, Sun, Train, Package, Globe, Factory, Ship, Shield, Warehouse, Building2, FlaskConical } from "lucide-react"
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
    title: "Green Energy & Niche Movements",
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
    title: "Alternative Logistics",
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
    title: "Value-Added Services",
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

const DETAILED_SERVICES = [
  // CATEGORY 1: CONTAINER SOLUTIONS
  {
    title: "Empty Container Transportation (ECT)",
    description: "Exim and domestic empty container services",
    icon: Boxes,
    link: "/services/empty-container-transportation"
  },
  {
    title: "Export Import Containers",
    description: "Exim transport services for international trade",
    icon: Globe,
    link: "/services/export-import-containers"
  },
  {
    title: "Domestic Cargo In Our Containers",
    description: "Secured cargo in owned ISO containers",
    icon: Truck,
    link: "/services/domestic-cargo-containers"
  },
  // CATEGORY 2: GREEN ENERGY & NICHE MOVEMENTS
  {
    title: "Solar Panel & Parts Transportation",
    description: "Renewable energy components logistics (SolarTransport)",
    icon: Sun,
    link: "/services/solar-panel-transportation"
  },
  {
    title: "Over Dimension Cargo (ODC)",
    description: "Oversized machinery and project cargo",
    icon: Factory,
    link: "/services/over-dimension-cargo"
  },
  {
    title: "Bulk Cargo Transportation",
    description: "Steel coils, grains, construction materials",
    icon: Warehouse,
    link: "/services/bulk-cargo-solutions"
  },
  // CATEGORY 3: ALTERNATIVE LOGISTICS
  {
    title: "Rail Services",
    description: "Container and bulk cargo by rail",
    icon: Train,
    link: "/services/rail-services"
  },
  {
    title: "Coastal Services",
    description: "Maritime shipping across major Indian ports",
    icon: Ship,
    link: "/services/coastal-services"
  },
  {
    title: "LCL Consolidation",
    description: "Less-than-Container-Load optimization",
    icon: Package,
    link: "/services/lcl-consolidation"
  },
  // CATEGORY 4: VALUE-ADDED SERVICES
  {
    title: "Transportation Of High Value Goods",
    description: "GPS-tracked premium cargo with security",
    icon: Shield,
    link: "/services/high-value-goods"
  },
  {
    title: "Storage and Warehousing",
    description: "Comprehensive storage solutions",
    icon: Building2,
    link: "/services/storage-warehousing"
  },
  {
    title: "Chemical Transportation in Tank Containers",
    description: "Safe transport for liquids and gases in ISO tanks",
    icon: FlaskConical,
    link: "/services/chemical-transportation"
  },
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
              <Link href={service.link} key={service.key} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.21, 0.45, 0.32, 0.9]
                  }}
                  className="group relative flex flex-col items-center text-center px-6 lg:px-8 pb-12 pt-16 bg-[#f0f4fe] rounded-[1.5rem] hover:shadow-2xl hover:bg-white transition-all duration-500 min-h-full border border-transparent hover:border-blue-100"
                >
                  {/* Category Icon */}
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 border border-slate-100">
                      <Icon className="w-9 h-9 text-blue-600 group-hover:text-white transition-all duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-[#0f172a] mb-1.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Subtext */}
                  <p className="text-xs font-medium text-slate-500 mb-6">
                    We work with
                  </p>

                  {/* Partner Logos */}
                  <div className="flex items-center justify-center gap-3">
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
                </motion.div>
              </Link>
            )
          })}
        </div>

        {/* Detailed Services Grid */}
        <div className="mt-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4">
            {DETAILED_SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <Link href={service.link} key={index} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                    className="group flex items-center gap-2.5 py-3 px-4 bg-[#f0f4fe] rounded-[1.25rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 min-h-full border border-transparent hover:border-blue-100"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[14px] font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors leading-tight">
                        {service.title}
                      </h4>
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
