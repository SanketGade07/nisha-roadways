"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    heroImage: string;
}

export default function ServiceHero({ title, subtitle, ctaText, heroImage }: ServiceHeroProps) {
    return (
        <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 bg-white overflow-hidden font-branding">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* Image Column - Top on mobile, Right on lg */}
                    <div className="relative flex justify-center lg:justify-end lg:order-last">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full max-w-[574px]"
                        >
                            <div
                                className="relative overflow-hidden shadow-[0px_20px_50px_rgba(0,0,0,0.1)] aspect-[574/499] lg:h-[499px]"
                                style={{ borderRadius: '20px' }}
                            >
                                <Image
                                    src={heroImage}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Column - Bottom on mobile, Left on lg */}
                    <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col space-y-3 sm:space-y-4"
                        >
                            {/* Premium Badge */}
                            <span className="text-[14px] sm:text-[15px] !font-normal text-[#1557F3] leading-normal sm:leading-[40px] tracking-wide sm:tracking-normal">
                                Nisha Roadways Certified
                            </span>

                            <h1 className="text-[32px] sm:text-[42px] lg:text-[50px] !font-bold sm:!font-semibold text-black leading-[38px] sm:leading-[50px] lg:leading-[55px] tracking-tight max-w-[529px] uppercase lg:normal-case">
                                {title}
                            </h1>

                            <p className="text-[15px] sm:text-[16px] text-[#62748E] leading-[22px] sm:leading-[27px] max-w-[535px] !font-medium pt-1 sm:pt-2">
                                {subtitle}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-8 sm:mt-10"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 text-white !font-bold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] w-fit"
                                style={{
                                    background: "linear-gradient(90deg, #1559F8 0%, #193CBB 100%)",
                                    padding: "12px 32px",
                                    height: "48px"
                                }}
                            >
                                <span className="text-[14px]">
                                    {ctaText}
                                </span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
