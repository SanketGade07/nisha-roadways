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
        <section className="relative pt-40 pb-20 bg-white overflow-hidden font-branding">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content Column */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col space-y-4"
                        >
                            {/* Premium Badge */}
                            <span className="text-[15px] !font-normal text-[#1557F3] leading-[40px]">
                                Nisha Roadways Certified
                            </span>

                            <h1 className="text-[50px] !font-semibold text-black leading-[55px] tracking-tight max-w-[529px]">
                                {title}
                            </h1>

                            <p className="text-[16px] text-[#62748E] leading-[27px] max-w-[535px] !font-medium pt-2">
                                {subtitle}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-10"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 text-white !font-bold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
                                style={{
                                    background: "linear-gradient(90deg, #1559F8 0%, #193CBB 100%)",
                                    padding: "12px 32px",
                                    height: "45px"
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

                    {/* Right Image Column */}
                    <div className="relative flex justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <div
                                className="relative overflow-hidden shadow-[0px_20px_50px_rgba(0,0,0,0.1)]"
                                style={{ width: '574px', height: '499px', borderRadius: '20px' }}
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

                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
