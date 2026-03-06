"use client";

import { motion } from "framer-motion";
import { Zap, Check } from "lucide-react";

interface Step {
    title: string;
    description: string;
}

interface ServiceProcessProps {
    steps: Step[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
    return (
        <section id="process" className="relative py-24 bg-white overflow-hidden font-branding scroll-mt-32">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F1F4FD] border border-[#1557F3]/10 rounded-full mb-6">
                        <Zap className="w-4 h-4 text-[#1557F3]" />
                        <span className="text-[14px] font-semibold text-[#1557F3] uppercase tracking-wider">
                            Our Process
                        </span>
                    </div>
                    <h2 className="text-[48px] font-bold text-[#141E32] leading-tight mb-6">
                        Step-by-Step Logistics
                    </h2>
                    <p className="text-[18px] text-[#62748E] leading-relaxed max-w-2xl">
                        A systematic approach developed through years of experience, ensuring every solar module is handled with precision.
                    </p>
                </motion.div>

                {/* Process Steps List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="h-full bg-[#F8FAFF] border border-[#E5EBFD] rounded-[24px] p-8 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                                {/* Number and Icon */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-[20px] font-bold text-[#1557F3] group-hover:bg-[#1557F3] group-hover:text-white transition-all duration-300">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-[#1557F3]" />
                                    </div>
                                </div>

                                <h3 className="text-[22px] font-bold text-[#141E32] mb-4 group-hover:text-[#1557F3] transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-[16px] text-[#62748E] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

