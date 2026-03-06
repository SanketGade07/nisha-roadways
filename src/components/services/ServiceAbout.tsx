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
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
                <div className="max-w-[1247px] min-h-[488px] mx-auto bg-[#EDEFF8] border border-[#DCDCDC] rounded-[20px] p-8 lg:p-12 flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

                        {/* Left Column Card */}
                        <div
                            className="relative w-full max-w-[585px] aspect-[585/433] rounded-[20px] overflow-hidden"
                        >
                            {/* 
                                LAYER 1: Base Linear Gradient 
                                Matches Figma exactly: linear-gradient(277.62deg, #151F33, #252F56, #1E3151, #141E32) at 80% opacity.
                                This provides the core colors that "spread" across the card.
                            */}
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(277.62deg, rgba(21, 31, 51, 0.8) 0.14%, rgba(37, 47, 86, 0.8) 41.91%, rgba(30, 49, 81, 0.8) 64.98%, rgba(20, 30, 50, 0.8) 100%)" }}
                            ></div>

                            {/* 
                                LAYER 2: Background Image with Overlay Blend
                                - mix-blend-overlay: Merges the image details with the colors from Layer 1.
                                - opacity-30: REDUCE this (e.g., to 0.2) to make colors spread MORE. INCREASE (e.g., to 0.5) for more photo detail.
                            */}
                            <Image
                                src="/images/specialized-solor-transportation/why-solor-cargo-bg.png"
                                alt="Why Solar Cargo Needs Specialists"
                                fill
                                className="object-cover mix-blend-overlay opacity-40 object-[10%_center]"
                            />

                            {/* 
                                LAYER 3: Vignette Effect (Dark on Left/Right)
                                - transparent_40%: The clean center area. Increase to 50% for a wider clear area.
                                - rgba(0,0,0,0.5)_110%: The dark intensity at the edges. 
                                  Change 0.5 to 0.7 for darker edges. Change 110% to 90% to bring the darkness closer to the center.
                            */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.5)_110%)] pointer-events-none z-0"></div>

                            {/* LAYER 4: Content Layer */}
                            <div className="absolute inset-0 p-10 flex flex-col items-start z-10">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-3 w-[192px] h-[39px] rounded-full border border-white bg-[#485776] px-4">
                                    <Headphones className="w-[24px] h-[24px] text-white" />
                                    <span className="text-[13px] font-medium text-white">About This Service</span>
                                </div>

                                {/* Title - Positioned below badge */}
                                <h2 className="mt-8 text-[40px] font-semibold text-white leading-[50px] max-w-[503px]">
                                    {title}
                                </h2>

                                {/* Stats - Positioned at bottom */}
                                {stats && stats.length > 0 && (
                                    <div className="grid grid-cols-2 gap-30 mt-auto mb-8">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="flex flex-col">
                                                <div className="text-[40px] font-normal text-white leading-[50px]">
                                                    {stat.value}
                                                </div>
                                                <div className="text-[13px] font-medium text-[#EAEAEA] uppercase leading-[40px] mt-[-15px]">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column Description */}
                        <div
                            className="flex flex-col gap-6 self-stretch justify-start py-2"
                        >
                            <p className="text-[18px] font-medium text-[#1C1C1C] leading-[40px] text-justify max-w-[547px]">
                                {description}
                            </p>

                            {/* Trusted By Badge */}
                            <div className="w-full max-w-[547px] h-[101px] flex items-center gap-6 px-8 rounded-[20px] border border-[#D0D9F0] bg-white shadow-sm">
                                <div className="flex -space-x-[28px]">
                                    {[
                                        { color: "#D9D9D9", z: 10 },
                                        { color: "#A1A0A0", z: 20 },
                                        { color: "#838080", z: 30 },
                                        { color: "#686666", z: 40 }
                                    ].map((circle, i) => (
                                        <div
                                            key={i}
                                            className="w-[46px] h-[46px] rounded-full relative shrink-0"
                                            style={{ backgroundColor: circle.color, zIndex: circle.z }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-[16px] font-semibold text-[#1557F3] leading-[40px] h-[27px] flex items-center">
                                        Trusted by 500+ businesses
                                    </div>
                                    <div className="text-[12px] font-medium text-[#3E3E3E] leading-[40px] h-[27px] flex items-center">
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

