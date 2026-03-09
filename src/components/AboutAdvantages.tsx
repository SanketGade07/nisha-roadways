"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";


/* ── Service cards: actual Nisha Roadways services with FILLED blue bg + WHITE icons ── */
const serviceCards = [
    {
        title: "Container\nSolutions",
        link: "/services#container-logistics",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M2 11h20" />
                <path d="M7 7v14M12 7v14M17 7v14" />
                <path d="M6 4h12l2 3H4l2-3z" />
            </svg>
        ),
    },
    {
        title: "Specialized\nTransport",
        link: "/services#specialized-cargo",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="8" width="15" height="10" rx="1.5" />
                <path d="M16 11h4l3 3.5V18h-7v-7z" />
                <circle cx="7" cy="20" r="2.5" />
                <circle cx="20" cy="20" r="2.5" />
                <path d="M9.5 18h8" />
            </svg>
        ),
    },
    {
        title: "Integrated\nLogistics",
        link: "/services#multimodal-transport",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="3" />
                <circle cx="5" cy="19" r="3" />
                <circle cx="19" cy="19" r="3" />
                <path d="M12 8v4" />
                <path d="M12 12l-5.5 5M12 12l5.5 5" />
            </svg>
        ),
    },
    {
        title: "Value-Added\nCare",
        link: "/services#value-added-services",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6l3-6z" />
                <circle cx="12" cy="13" r="3" />
                <path d="M10.5 13l1 1L14 12" />
            </svg>
        ),
    },
];

export default function AboutAdvantages() {
    return (
        <section className="relative bg-[#EEF1F8] overflow-hidden">
            {/* Decorative diagonal shape on right */}
            <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none z-0">
                <Image
                    src="/images/about-us/678215411cc0535fd176d9c1_flat-cut-shape-light.png"
                    alt=""
                    fill
                    className="object-cover object-left opacity-60"
                    aria-hidden="true"
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0">

                    {/* ── Left: Image ── */}
                    <div className="w-full lg:w-[34%] xl:w-[32%] p-5 sm:p-8 lg:py-16 xl:py-20 lg:pl-10 xl:pl-14 lg:pr-0 flex-shrink-0">
                        <div className="relative w-full aspect-[4/3] lg:aspect-[7/10] rounded-[24px] lg:rounded-[20px] overflow-hidden image-cut-shape shadow-xl">
                            <Image
                                src="/images/about-us/67ad81ac2eca706a195e8672_Home2-about-img.jpg"
                                alt="Nisha Roadways team members discussing logistics"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 100vw, 34vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* ── Center + Right content ── */}
                    <div className="relative flex-1 flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-14 px-6 sm:px-10 lg:pl-10 xl:pl-14 lg:pr-10 xl:pr-16 lg:py-16 xl:py-20 pb-12 sm:pb-10">


                        {/* ── Center: Text Content ── */}
                        <div className="flex-1 space-y-6 lg:space-y-7 flex flex-col justify-start relative z-10">

                            {/* About Us badge */}
                            <div className="inline-flex items-center gap-3">
                                <div className="w-[36px] h-[36px] bg-[#2563EB] rounded-[10px] flex items-center justify-center shadow-lg shadow-blue-500/30">
                                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                                        <path d="M9 2L3 5.5v7L9 16l6-3.5v-7L9 2z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                                        <path d="M9 9l6-3.5M9 9v7M9 9L3 5.5" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-[18px] font-semibold text-[#1E293B]">
                                    About Us
                                </span>
                            </div>

                            {/* Heading */}
                            <h2
                                className="text-[2rem] sm:text-[2.5rem] lg:text-[3.15rem] xl:text-[3.65rem] font-black text-[#0F172A] tracking-tight uppercase lg:normal-case"
                                style={{ lineHeight: 1.1 }}
                            >
                                <span className="block mb-1 opacity-90">The Advantages of</span>
                                <span className="text-[#2563EB]">
                                    Our Transport.
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] max-w-[440px] font-medium opacity-90">
                                We have a long and proud history giving emphasis to
                                environmental and economic outcomes for our clients.
                            </p>

                            {/* Know More button */}
                            <div className="pt-2">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white pl-8 pr-6 py-4 rounded-xl text-[16px] font-bold transition-all duration-300 group shadow-lg shadow-blue-600/20 active:scale-95"
                                >
                                    Know More
                                    <span className="h-5 w-[1px] bg-white/40" />
                                    <ArrowUpRight className="w-5 h-5 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </div>

                            {/* SINCE 1980 - OUTLINED text (stroke only) */}
                            <div className="pt-2">
                                <p className="about-since-text text-[2.5rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-black leading-none tracking-tight opacity-100">
                                    SINCE 1980
                                </p>
                            </div>
                        </div>

                        {/* ── Right: Service Cards ── */}
                        <div className="w-full lg:w-[280px] xl:w-[320px] 2xl:w-[360px] flex-shrink-0 space-y-4 flex flex-col justify-center relative z-10">
                            {/* Mobile Service Header */}
                            <div className="lg:hidden flex items-center gap-3 mb-2">
                                <div className="h-[1px] flex-1 bg-blue-600/10"></div>
                                <span className="text-[12px] font-black text-blue-600/40 uppercase tracking-[0.2em] whitespace-nowrap">Our Solutions</span>
                                <div className="h-[1px] flex-1 bg-blue-600/10"></div>
                            </div>
                            {serviceCards.map((card, index) => (
                                <Link
                                    href={card.link}
                                    key={index}
                                    className="group flex items-center gap-4 sm:gap-5 bg-white/80 backdrop-blur-md rounded-[16px] sm:rounded-[20px] px-4 py-4 sm:px-5 sm:py-5 border border-white/40 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] bg-[#2563EB] rounded-[12px] sm:rounded-[14px] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:bg-[#1D4ED8] transition-all">
                                        <div className="scale-90 sm:scale-100">{card.icon}</div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="flex-1 text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-[#0F172A] leading-tight whitespace-pre-line">
                                        {card.title}
                                    </h3>

                                    {/* Arrow circle */}
                                    <div className="flex-shrink-0 w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full border border-[#E2E8F0] bg-gray-50/50 group-hover:border-blue-500 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300">
                                        <ArrowRight className="w-[14px] h-[14px] sm:w-[16px] h-[16px] text-[#94A3B8] group-hover:text-white transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Outlined text style for SINCE 1980 */}
            <style jsx>{`
            .about-since-text {
                color: transparent;
                -webkit-text-stroke: 2px #2563EB;
                text-stroke: 2px #2563EB;
            }

            .image-cut-shape {
                clip-path: polygon(0 0, 88% 0, 100% 11%, 100% 100%, 0 100%);
            }

            @media (min-width: 1024px) {
                .about-since-text {
                    -webkit-text-stroke: 2.5px #2563EB;
                    text-stroke: 2.5px #2563EB;
                }
            }
        `}</style>
        </section>
    );
}
