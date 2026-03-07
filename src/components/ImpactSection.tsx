"use client";

import React, { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration = 3000, className = "", style = {} }: { end: number; duration?: number; className?: string; style?: React.CSSProperties }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Smoother Cubic Easing
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure we land exactly on the end number
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted, end, duration]);

    return <span ref={elementRef} className={className} style={style}>{count}</span>;
};

const stats = [
    {
        prefix: "",
        number: 102,
        suffix: "M",
        label: "TEU global capacity",
    },
    {
        prefix: "",
        number: 80,
        suffix: "+",
        label: "Countries worldwide",
    },
    {
        prefix: "$",
        number: 5,
        suffix: "B",
        label: "Invested in global logistics network",
    },
    {
        prefix: "",
        number: 55,
        suffix: "%",
        label: "Electricity sourced from renewable energy projects in 2025",
    },
];

export default function ImpactSection() {
    return (
        <section
            style={{
                background: "linear-gradient(277.86deg, #332E86 0%, #1D388E 37.33%, #21378D 58.95%, #1D2A43 100%)",
                minHeight: "485px"
            }}
            className="flex flex-col justify-center text-white overflow-hidden font-branding py-16 lg:py-0"
        >
            <div className="max-w-screen-xl mx-auto px-6 w-full">
                {/* Header Content */}
                <div className="text-center mb-12 sm:mb-8 px-2 md:px-0">
                    <p className="text-[14px] sm:text-[18px] !font-semibold tracking-[0.15em] sm:tracking-[0.05em] mb-6 sm:mb-4 uppercase leading-normal sm:leading-[40px]">
                        MAKE AN IMPACT
                    </p>
                    <h2 className="text-[36px] sm:text-[48px] md:text-[64px] !font-bold leading-[44px] sm:leading-[55px] mb-6 sm:mb-8 max-w-[970px] mx-auto uppercase tracking-normal">
                        WE MOVE 10% OF GLOBAL <br />
                        TRADE DAILY
                    </h2>
                    <p className="text-[#B4B4B4] text-[16px] sm:text-[18px] !font-normal sm:!font-medium max-w-[340px] sm:max-w-[841px] mx-auto leading-[24px] sm:leading-[27px] mb-0 sm:mb-12">
                        Nisha Roadways plays a vital role in keeping global trade moving by connecting <br className="hidden sm:block" />
                        economies, industries and businesses worldwide.
                    </p>
                </div>

                {/* --- MOBILE STATS (Base < md) --- */}
                <div className="md:hidden">
                    {stats.map((stat, index) => (
                        <div key={index} className="w-full">
                            {/* Top divider for the first item */}
                            {index === 0 && <div className="w-full h-[1px] bg-white/20" />}

                            <div className="flex items-center justify-between py-10">
                                {/* Large Number (Left) - Same font as desktop */}
                                <div className="flex items-baseline text-white">
                                    {stat.prefix && (
                                        <span className="text-[20px] leading-[40px] mb-0 mr-1" style={{ fontWeight: 600 }}>
                                            {stat.prefix}
                                        </span>
                                    )}
                                    <span className="text-[60px] tracking-tighter leading-none" style={{ fontWeight: 900 }}>
                                        <Counter end={stat.number} className="text-white" style={{ fontWeight: 900 }} />
                                    </span>
                                    {stat.suffix && (
                                        <span className="text-[20px] ml-1 leading-[40px] uppercase" style={{ fontWeight: 600 }}>
                                            {stat.suffix}
                                        </span>
                                    )}
                                </div>

                                {/* Label (Right) - Same font as desktop */}
                                <div className="text-right max-w-[224px]">
                                    <p className="text-[16px] !font-normal text-[#FFFFFF] leading-[1.2]">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>

                            {/* Divider after item */}
                            <div className="w-full h-[1px] bg-white/20" />
                        </div>
                    ))}
                </div>

                {/* --- TABLET/DESKTOP GRID (md+) --- */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mt-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center px-4 relative py-12"
                        >
                            {/* Vertical Line Divider */}
                            {index !== stats.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/20"></div>
                            )}

                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline mb-2 text-white">
                                    {stat.prefix && (
                                        <span className="text-[20px] leading-[40px] mb-0 mr-1" style={{ fontWeight: 600 }}>
                                            {stat.prefix}
                                        </span>
                                    )}
                                    <span className="text-[60px] tracking-tighter leading-none" style={{ fontWeight: 900 }}>
                                        <Counter end={stat.number} className="text-white" style={{ fontWeight: 900 }} />
                                    </span>
                                    {stat.suffix && (
                                        <span className="text-[20px] ml-1 leading-[40px] uppercase" style={{ fontWeight: 600 }}>
                                            {stat.suffix}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[16px] !font-normal text-[#FFFFFF] max-w-[224px] leading-[1.2]">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

