"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


const INSIGHTS = [
    {
        title: "Cost- Effective Solutions For Freight Shipping",
        date: "Mar 19, 2026",
        comments: "4 comments",
        image: "/images/industry-insights/64a225cffc8c16e3592d8b6e2367b33a70ac7030.jpg",
    },
    {
        title: "The Role Of Technology In Modern Air Transportation",
        date: "Mar 21, 2026",
        comments: "2 comments",
        image: "/images/industry-insights/a1405e00a8f824a617041f8b55d1a3297a2013aa.jpg",
    },
    {
        title: "Optimizing Logistics For Faster Cargo Delivery",
        date: "Jun 03, 2026",
        comments: "5+ comments",
        image: "/images/industry-insights/154975eff473f12fb97a64781c528d14f245cdc3.jpg",
    },
    {
        title: "Container Handling Onboard Cranes",
        date: "Jul 11, 2026",
        comments: "3 comments",
        image: "/images/industry-insights/4d1e0a56f73b1da2cb1560505a43bc737c95ccac.jpg",
    }
];

export default function IndustryInsights() {
    return (
        <section className="relative pt-12 pb-16 bg-white overflow-hidden font-branding">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="max-w-[1232px] mx-auto">
                    <div className="flex flex-col mb-8 sm:mb-12">
                        {/* Header: Stack on mobile, side-by-side on desktop */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                            <h2 className="text-[28px] sm:text-[34px] !font-semibold text-black leading-[34px] sm:leading-[40px] max-w-[800px] tracking-normal">
                                Industry Insights & Logistics Trends
                            </h2>
                            <Link
                                href="/blog"
                                className="text-white rounded-full flex items-center justify-center gap-2 text-[14px] !font-semibold hover:opacity-90 transition-all"
                                style={{
                                    background: "linear-gradient(90deg, #1559F8 0%, #193CBB 100%)",
                                    width: "145px",
                                    height: "42px"
                                }}
                            >
                                Sell more
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-[18px] !font-medium text-[#9B9B9B] leading-[27px] max-w-[738px]">
                            Stay updated with the latest in supply chain transformation, container optimization, and logistics innovation.
                        </p>
                    </div>

                    {/* --- MOBILE CARDS CAROUSEL (Base < md) --- */}
                    <div className="md:hidden">
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 py-4 scrollbar-hide">
                            {INSIGHTS.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white flex flex-col flex-shrink-0 w-[75%] xxs:w-[72%] xs:w-[68%] snap-center transition-all duration-300"
                                    style={{
                                        borderRadius: "8.84px",
                                        filter: "drop-shadow(0 0 3.4px rgba(0, 0, 0, 0.25))",
                                        padding: "8px 9px"
                                    }}
                                >
                                    <div
                                        className="relative w-full overflow-hidden"
                                        style={{ height: "200px", borderRadius: "8.84px" }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col flex-1 pt-4 pb-2 px-1">
                                        <h3 className="!font-semibold text-[16px] leading-[20px] text-[#000000] mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="!font-normal text-[12px] leading-[16px] text-[#707070] mb-auto">
                                            {item.date} <span className="mx-1">-</span> {item.comments}
                                        </p>
                                        <Link
                                            href="#"
                                            className="!font-medium text-[12px] leading-[16px] text-[#1556F1] hover:text-[#1040D0] transition-colors mt-3 block"
                                        >
                                            Read more →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- TABLET/DESKTOP GRID (md+) --- */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
                        {INSIGHTS.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white flex flex-col transition-all duration-300 hover:scale-[1.01]"
                                style={{
                                    borderRadius: "8.84px",
                                    filter: "drop-shadow(0 0 3.4px rgba(0, 0, 0, 0.25))",
                                    width: "267.7px",
                                    height: "345.94px",
                                    padding: "8px 9px"
                                }}
                            >
                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{ height: "198.89px", borderRadius: "8.84px" }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col flex-1 pt-4 pb-2 px-1">
                                    <h3 className="!font-semibold text-[17px] leading-[16.97px] text-[#000000] mb-2 line-clamp-3">
                                        {item.title}
                                    </h3>
                                    <p className="!font-normal text-[11.9px] leading-[15.3px] text-[#707070] mb-auto">
                                        {item.date} <span className="mx-1">-</span> {item.comments}
                                    </p>
                                    <Link
                                        href="#"
                                        className="!font-normal text-[9.43px] leading-[15.3px] text-[#707070] hover:text-[#1556F1] transition-colors mt-2 block underline"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
