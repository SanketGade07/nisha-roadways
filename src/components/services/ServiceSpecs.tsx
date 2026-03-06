"use client";

import Image from "next/image";

interface Spec {
    title: string;
    description: string;
    image?: string;
}

interface ServiceSpecsProps {
    specs: Spec[];
}

export default function ServiceSpecs({ specs }: ServiceSpecsProps) {
    return (
        <section id="specs" className="relative py-20 bg-white overflow-hidden font-branding scroll-mt-32">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-10">
                    <h2 className="text-[40px] font-semibold text-[#000000] leading-[40px] mb-2">
                        Specifications &amp; Details
                    </h2>
                    <p className="text-[16px] font-medium text-[#62748E] leading-[40px] max-w-[645px]">
                        Everything you need to know about our service capabilities.
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className="relative filter drop-shadow-[0_0_3.4px_rgba(0,0,0,0.15)]"
                        >
                            <div
                                className="w-full bg-white p-[8px] flex flex-col"
                                style={{
                                    clipPath: 'polygon(0 0, 82% 0, 100% 16%, 100% 100%, 0 100%)',
                                }}
                            >
                                {/* Image Container — fixed height matching SpecializedCategories */}
                                <div className="w-full h-[185px] relative overflow-hidden rounded-[4px] flex-shrink-0">
                                    <div
                                        className="absolute inset-0 z-10"
                                        style={{
                                            clipPath: 'polygon(0 0, 82% 0, 100% 25%, 100% 100%, 0 100%)',
                                        }}
                                    >
                                        <Image
                                            src={spec.image || "/images/use-everywhere/images1.png"}
                                            alt={spec.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Info — fixed height so all cards align */}
                                <div className="px-[12px] pt-[18px] pb-[12px] min-h-[113px]">
                                    <h3
                                        className="text-[#000000] font-semibold mb-[6px]"
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            lineHeight: '19px',
                                        }}
                                    >
                                        {spec.title}
                                    </h3>
                                    <p
                                        className="text-[#757679]"
                                        style={{
                                            fontSize: '10px',
                                            fontWeight: 500,
                                            lineHeight: '15.3px',
                                        }}
                                    >
                                        {spec.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
