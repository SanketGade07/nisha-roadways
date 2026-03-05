"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-[20px] overflow-hidden min-h-[450px] p-10 flex flex-col justify-between">
                            {/* Background Image with Dark Overlay */}
                            <Image
                                src="/images/specialized-solor-transportation/solor-transport-main.png"
                                alt="About Solar Transport"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#000000]/60"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-[2px] bg-[#1557F3]"></div>
                                    <span className="text-[14px] text-white/80 !font-medium uppercase tracking-wider">About This Service</span>
                                </div>
                                <h2 className="text-[34px] !font-bold text-white leading-tight">
                                    {title}
                                </h2>
                            </div>

                            {/* Stats */}
                            {stats && stats.length > 0 && (
                                <div className="relative z-10 grid grid-cols-2 gap-8 border-t border-white/20 pt-8">
                                    {stats.map((stat, index) => (
                                        <div key={index}>
                                            <div className="text-[40px] !font-black text-white leading-none mb-2">
                                                {stat.value}
                                            </div>
                                            <div className="text-[14px] !font-semibold text-white/60 uppercase tracking-widest">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 pt-4"
                    >
                        <p className="text-[18px] text-[#62748E] leading-[32px] font-branding !font-normal">
                            {description}
                        </p>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-[#1557F3]" />
                                </div>
                                <div>
                                    <h4 className="text-[18px] !font-bold text-black mb-1">Tailored Solutions</h4>
                                    <p className="text-[14px] text-[#62748E]">Customized transport plans for every project size.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-[#1557F3]" />
                                </div>
                                <div>
                                    <h4 className="text-[18px] !font-bold text-black mb-1">Secure Transit</h4>
                                    <p className="text-[14px] text-[#62748E]">GPS tracking and professional lashing for safety.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
