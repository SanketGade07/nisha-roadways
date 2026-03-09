"use client";

import Image from "next/image";

interface Benefit {
    title: string;
    description: string;
    image?: string;
}

interface ServiceBenefitsProps {
    benefits: Benefit[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
    // Mapping images to benefits if not provided by data
    const cardImages = [
        "/images/specialized-solor-transportation/why-solor-cargo-card.png",
        "/images/specialized-solor-transportation/equipment-we-use-card.png",
        "/images/specialized-solor-transportation/what-we-transport-card.jpg",
        "/images/specialized-solor-transportation/insurance-card.jpg"
    ];

    // Design Tokens from Figma (Fixed constants to prevent "break")
    const CARD_WIDTH = 627;
    const CARD_HEIGHT = 200;
    const CORNER_RADIUS = 6;
    const CUT_RADIUS = 6;

    // Cut parameters (Applied User's requested 570/60)
    const CUT_X_START = 570;
    const CUT_Y_END = 60;

    // Line slope calculation for parallel cuts
    const m = CUT_Y_END / (CARD_WIDTH - CUT_X_START);

    // Image Container dimensions & offsets
    // We synchronize these EXACTLY with the CSS to prevent the slant from shifting on zoom
    const IMG_WIDTH = 247;
    const IMG_HEIGHT = 182;
    const IMG_OFFSET_TOP = 3;    // As per User's manual edit
    const IMG_OFFSET_RIGHT = 0;  // As per User's manual edit

    // Calculate absolute image boundaries in card space
    const IMG_ABS_RIGHT = CARD_WIDTH - IMG_OFFSET_RIGHT;
    const IMG_ABS_LEFT = IMG_ABS_RIGHT - IMG_WIDTH;
    const IMG_ABS_TOP = IMG_OFFSET_TOP;

    // Intersection points - relative to the image container
    const IMG_CUT_X_REL = (CUT_X_START + (IMG_ABS_TOP / m)) - IMG_ABS_LEFT;
    const IMG_CUT_Y_REL = (m * (IMG_ABS_RIGHT - CUT_X_START)) - IMG_ABS_TOP;

    // Unit vector for the diagonal line for accurate radius Control Points
    const diagLen = Math.sqrt(Math.pow(CARD_WIDTH - CUT_X_START, 2) + Math.pow(CUT_Y_END, 2));
    const ux = (CARD_WIDTH - CUT_X_START) / diagLen;
    const uy = CUT_Y_END / diagLen;

    return (
        <section id="benefits" className="relative py-16 sm:py-24 bg-white overflow-hidden font-branding scroll-mt-32">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-20 relative z-10">

                {/* Section Header */}
                <div className="mb-10 sm:mb-14 text-center lg:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center w-[141px] h-[33px] rounded-[30px] border border-[#677ED3] bg-[#FAFAFA] mb-6 sm:mb-7 shadow-sm">
                        <span className="text-[14px] sm:text-[15px] font-normal text-[#1557F3] leading-none">
                            Key Benefits
                        </span>
                    </div>

                    <h2 className="text-[30px] sm:text-[40px] font-semibold text-[#000000] leading-[36px] sm:leading-[40px] mb-3 sm:mb-2 uppercase lg:normal-case">
                        Why Choose Our Service
                    </h2>

                    <p className="text-[15px] sm:text-[16px] font-medium text-[#62748E] leading-normal sm:leading-[40px] max-w-[645px] mx-auto lg:mx-0">
                        Discover the advantages that set us apart from the competition.
                    </p>
                </div>

                {/* Benefits: Horizontal Carousel on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-6 pb-4 lg:pb-0 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0">
                    {benefits.slice(0, 4).map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative min-w-[300px] sm:min-w-[340px] lg:min-w-0 w-[300px] sm:w-[340px] lg:w-full h-auto lg:h-[200px] lg:max-w-[627px] snap-center shrink-0 lg:shrink"
                        >
                            {/* Desktop Only: Card Background SVG */}
                            <div className="absolute inset-0 z-0 hidden lg:block">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 627 200"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    className="drop-shadow-[0px_1.5px_4px_rgba(0,0,0,0.15)]"
                                >
                                    <path
                                        d={`
                                            M ${CORNER_RADIUS},0 
                                            H ${CUT_X_START - CUT_RADIUS}
                                            Q ${CUT_X_START},0 ${CUT_X_START + (CUT_RADIUS * ux)},${CUT_RADIUS * uy}
                                            L ${CARD_WIDTH - (CUT_RADIUS * ux)},${CUT_Y_END - (CUT_RADIUS * uy)}
                                            Q ${CARD_WIDTH},${CUT_Y_END} ${CARD_WIDTH},${CUT_Y_END + CUT_RADIUS}
                                            V ${CARD_HEIGHT - CORNER_RADIUS}
                                            Q ${CARD_WIDTH},${CARD_HEIGHT} ${CARD_WIDTH - CORNER_RADIUS},${CARD_HEIGHT}
                                            H ${CORNER_RADIUS}
                                            Q 0,${CARD_HEIGHT} 0,${CARD_HEIGHT - CORNER_RADIUS}
                                            V ${CORNER_RADIUS}
                                            Q 0,0 ${CORNER_RADIUS},0
                                            Z
                                        `}
                                        fill="white"
                                        stroke="#E0E0E0"
                                        strokeWidth="1"
                                    />
                                </svg>
                            </div>

                            {/* Mobile Only: Simple Card Background */}
                            <div className="absolute inset-0 bg-white border border-[#E0E0E0] rounded-[16px] shadow-sm lg:hidden"></div>

                            {/* Card Content Wrapper */}
                            <div className="relative z-10 flex flex-col lg:flex-row h-full w-full overflow-hidden rounded-[16px] lg:rounded-none">
                                {/* Image - Top on mobile, Right on desktop */}
                                <div className="relative w-full h-[160px] lg:w-[247px] lg:h-[182px] lg:mt-[9px] lg:mr-[9px] shrink-0 order-1 lg:order-2">
                                    <div
                                        className="relative w-full h-full overflow-hidden"
                                        style={{
                                            clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024
                                                ? `path('M 4,0 H ${IMG_CUT_X_REL - CUT_RADIUS} Q ${IMG_CUT_X_REL},0 ${IMG_CUT_X_REL + (CUT_RADIUS * ux)},${CUT_RADIUS * uy} L ${IMG_WIDTH - (CUT_RADIUS * ux)},${IMG_CUT_Y_REL - (CUT_RADIUS * uy)} Q ${IMG_WIDTH},${IMG_CUT_Y_REL} ${IMG_WIDTH},${IMG_CUT_Y_REL + CUT_RADIUS} V ${IMG_HEIGHT - 4} Q ${IMG_WIDTH},${IMG_HEIGHT} ${IMG_WIDTH - 4},${IMG_HEIGHT} H 4 Q 0,${IMG_HEIGHT} 0,${IMG_HEIGHT - 4} V 4 Q 0,0 4,0 Z')`
                                                : undefined
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                transform: [
                                                    index < 3 ? 'scaleX(-1)' : '',
                                                    index === 1 ? 'scale(1.25)' : '',
                                                ].filter(Boolean).join(' ') || undefined,
                                            }}
                                        >
                                            <Image
                                                src={benefit.image || cardImages[index % cardImages.length]}
                                                alt={benefit.title}
                                                fill
                                                className="object-cover"
                                                priority={index < 2}
                                                unoptimized
                                            />
                                        </div>

                                        {/* Icon Badge Overlay */}
                                        <div className="absolute bottom-[10px] left-[10px] z-30 w-[44.27px] h-[44.27px] bg-white rounded-[9.84px] shadow-md flex items-center justify-center">
                                            <div className="w-[21.64px] h-[21.64px] flex items-center justify-center">
                                                <Image
                                                    src="/images/specialized-solor-transportation/solar-logo-blue.svg"
                                                    alt="Solar logo"
                                                    width={22}
                                                    height={22}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content - Below image on mobile, Left on desktop */}
                                <div className="flex-1 p-5 lg:p-[24px] lg:pr-2 flex flex-col justify-between order-2 lg:order-1">
                                    <div className="space-y-2 lg:space-y-[12px]">
                                        <h3 className="text-[16px] lg:text-[18px] font-bold text-black leading-snug">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-[12px] lg:text-[12px] font-normal text-[#5B5B5B] leading-[18px] lg:leading-[19.68px] text-left lg:text-justify pr-0 lg:pr-6 line-clamp-4 lg:line-clamp-none">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-[6px] text-[11px] lg:text-[10.82px] font-medium text-black mt-4 lg:mt-0">
                                        <div className="w-[16px] h-[16px] lg:w-[16.72px] lg:h-[16.72px] flex items-center justify-center shrink-0">
                                            <Image
                                                src="/images/specialized-solor-transportation/lets-icons_check-ring-round.svg"
                                                alt="Check icon"
                                                width={17}
                                                height={17}
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <span className="leading-none mb-[2px] lg:mb-[5px]">Guaranteed quality</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
