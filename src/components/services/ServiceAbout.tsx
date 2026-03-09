"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import Image from "next/image";

interface Stat {
    value: string;
    label: string;
}

interface ServiceAboutProps {
    title: string;
    description: string;
    stats?: Stat[];
}

export default function ServiceAbout({ title, description, stats }: ServiceAboutProps) {
    return (
        <section id="about" className="relative py-20 bg-white overflow-hidden font-branding scroll-mt-32">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
                <div className="max-w-[1247px] min-h-[auto] lg:min-h-[488px] mx-auto bg-[#EDEFF8] border border-[#DCDCDC] rounded-[20px] p-4 sm:p-8 lg:p-12 flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

                        {/* Card Section - Top on mobile */}
                        <div
                            className="relative w-full max-w-[585px] aspect-[585/433] rounded-[20px] overflow-hidden mx-auto lg:mx-0 shadow-lg lg:shadow-none"
                        >
                            {/* LAYER 1: Base Linear Gradient */}
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(277.62deg, rgba(21, 31, 51, 0.8) 0.14%, rgba(37, 47, 86, 0.8) 41.91%, rgba(30, 49, 81, 0.8) 64.98%, rgba(20, 30, 50, 0.8) 100%)" }}
                            ></div>

                            {/* LAYER 2: Background Image */}
                            <Image
                                src="/images/specialized-solor-transportation/why-solor-cargo-bg.png"
                                alt="Why Solar Cargo Needs Specialists"
                                fill
                                className="object-cover mix-blend-overlay opacity-40 object-[10%_center]"
                            />

                            {/* LAYER 3: Vignette Effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.5)_110%)] pointer-events-none z-0"></div>

                            {/* LAYER 4: Content Layer */}
                            <div className="absolute inset-0 p-5 sm:p-10 flex flex-col items-start z-10">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-3 w-fit h-[34px] sm:h-[39px] rounded-full border border-white bg-[#485776] px-3 sm:px-4 whitespace-nowrap">
                                    <Headphones className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-white" />
                                    <span className="text-[11px] sm:text-[13px] font-medium text-white">About This Service</span>
                                </div>

                                {/* Title - Positioned below badge */}
                                <h2 className="mt-4 sm:mt-8 text-[24px] sm:text-[34px] lg:text-[40px] font-semibold text-white leading-[28px] sm:leading-[40px] lg:leading-[44px] max-w-[503px]">
                                    {title}
                                </h2>

                                {/* Stats - Positioned at bottom */}
                                {stats && stats.length > 0 && (
                                    <div className="grid grid-cols-2 gap-x-8 sm:gap-x-20 mt-4 sm:mt-auto mb-2 sm:mb-8">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="flex flex-col">
                                                <div className="text-[28px] sm:text-[40px] font-normal text-white leading-none sm:leading-[50px]">
                                                    {stat.value}
                                                </div>
                                                <div className="text-[10px] sm:text-[13px] font-medium text-[#EAEAEA] uppercase leading-normal mt-1 sm:mt-[-15px] tracking-wide">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Section - Bottom on mobile */}
                        <div
                            className="flex flex-col gap-6 self-stretch justify-start py-2"
                        >
                            <p className="text-[15px] sm:text-[18px] font-medium text-[#1C1C1C] leading-[26px] sm:leading-[35px] lg:leading-[40px] text-left lg:text-justify max-w-[547px]">
                                {description}
                            </p>

                            {/* Trusted By Badge */}
                            <div className="w-full max-w-[547px] min-h-[85px] sm:h-[101px] flex flex-row items-center gap-3 sm:gap-6 px-4 sm:px-8 py-3 sm:py-0 rounded-[20px] border border-[#D0D9F0] bg-white shadow-sm overflow-hidden">
                                <div className="flex -space-x-[26px] scale-90 sm:scale-100 origin-left">
                                    {[
                                        { src: "/images/partners/orient_overseas_conatainer_line-removebg-preview.png", z: 10 },
                                        { src: "/images/partners/msc_cruises-removebg-preview.png", z: 20 },
                                        { src: "/images/partners/DP_World_2021_logo.svg", z: 30 },
                                        { src: "/images/partners/tvs-removebg-preview.png", z: 40 }
                                    ].map((logo, i) => (
                                        <div
                                            key={i}
                                            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden shadow-sm relative shrink-0"
                                            style={{ zIndex: logo.z }}
                                        >
                                            <div className="relative w-7 h-7 sm:w-9 sm:h-9">
                                                <Image
                                                    src={logo.src}
                                                    alt="Partner Logo"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col justify-center min-w-0">
                                    <div className="text-[13px] sm:text-[16px] font-semibold text-[#1557F3] leading-tight sm:leading-[40px] h-auto sm:h-[27px] flex items-center whitespace-nowrap">
                                        Trusted by 500+ businesses
                                    </div>
                                    <div className="text-[10px] sm:text-[12px] font-medium text-[#3E3E3E] leading-tight sm:leading-[40px] h-auto sm:h-[27px] flex items-center mt-0.5 sm:mt-0">
                                        Across India
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

