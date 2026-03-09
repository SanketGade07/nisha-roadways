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
                <div className="max-w-3xl mb-8 sm:mb-10 text-center sm:text-left">
                    <h2 className="text-[30px] sm:text-[40px] font-semibold text-[#000000] leading-[36px] sm:leading-[40px] mb-2 uppercase lg:normal-case">
                        Specifications &amp; Details
                    </h2>
                    <p className="text-[15px] sm:text-[16px] font-medium text-[#62748E] leading-normal sm:leading-[40px] max-w-[645px] mx-auto sm:mx-0 px-4 sm:px-0">
                        Everything you need to know about our service capabilities.
                    </p>
                </div>

                {/* Specs Grid / Carousel on Mobile */}
                <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-6 lg:pb-0 scrollbar-hide snap-x snap-mandatory px-4 sm:px-0 -mx-4 sm:mx-0">
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className="relative min-w-[82%] sm:min-w-0 filter drop-shadow-[0_0_3.4px_rgba(0,0,0,0.15)] snap-center first:ml-0"
                        >
                            <div
                                className="w-full bg-white p-[8px] flex flex-col"
                                style={{
                                    clipPath: 'polygon(0 0, 82% 0, 100% 16%, 100% 100%, 0 100%)',
                                }}
                            >
                                {/* Image Container */}
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

                                {/* Info */}
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
                                            fontSize: '11px',
                                            fontWeight: 500,
                                            lineHeight: '16px',
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
