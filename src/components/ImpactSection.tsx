"use client";

import React, { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration = 3000 }: { end: number; duration?: number }) => {
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

    return <span ref={elementRef}>{count}</span>;
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
        number: 10,
        suffix: "B",
        label: "Invested in global logistics network",
    },
    {
        prefix: "",
        number: 65,
        suffix: "%",
        label: "Electricity sourced from renewable energy projects in 2024",
    },
];

export default function ImpactSection() {
    return (
        <section
            style={{
                background: "linear-gradient(to bottom right, oklch(27.9% 0.041 260.031) 0%, oklch(37.9% 0.146 265.522) 50%, oklch(35.9% 0.144 278.697) 100%)"
            }}
            className="pt-16 sm:pt-20 pb-24 sm:pb-32 text-white overflow-hidden"
        >
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Header Content */}
                <div className="text-center mb-10 sm:mb-12">
                    <p className="text-[14px] font-semibold tracking-[0.2em] mb-5 uppercase">
                        MAKE AN IMPACT
                    </p>
                    <h2 className="text-3xl sm:text-5xl md:text-[64px] font-[900] leading-[1.1] mb-6 max-w-7xl mx-auto uppercase tracking-tighter flex flex-col items-center">
                        <span>WE MOVE 10% OF GLOBAL</span>
                        <span>TRADE DAILY</span>
                    </h2>
                    <p className="text-white text-[18px] sm:text-[20px] font-normal max-w-4xl mx-auto leading-relaxed opacity-90 flex flex-col items-center">
                        <span>Nisha Roadways plays a vital role in keeping global trade moving by connecting economies,</span>
                        <span>industries and businesses worldwide.</span>
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-12 gap-0">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center py-10 md:py-12 px-6 relative"
                        >
                            {/* Vertical Line Divider */}
                            {index !== stats.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-48 bg-gradient-to-b from-transparent via-[#d5d5dd]/50 to-transparent"></div>
                            )}

                            <div className="flex flex-col items-center">
                                <div className="flex items-start mb-3">
                                    {stat.prefix && (
                                        <span className="text-3xl lg:text-[45px] font-bold leading-none mr-1 mt-3">
                                            {stat.prefix}
                                        </span>
                                    )}
                                    <span className="text-6xl lg:text-[100px] font-bold tracking-tighter leading-none">
                                        <Counter end={stat.number} />
                                    </span>
                                    {stat.suffix && (
                                        <span className="text-3xl lg:text-[45px] font-bold ml-1 self-end leading-none pb-4 uppercase">
                                            {stat.suffix}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[16px] lg:text-[18px] font-normal leading-snug max-w-[220px] opacity-100 italic sm:not-italic">
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

