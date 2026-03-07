'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight, Box, Truck, Share2, ShieldCheck,
    Boxes, Globe, Sun, Factory, Warehouse,
    Train, Ship, Package, Shield, Building2, FlaskConical
} from 'lucide-react';

const categories = [
    {
        title: "Container Solutions",
        image: "/images/specialized-category/28efb12dbe6a0f700a654126fa8a8afd3f5bd3bd.png",
        icon: <Box size={20} className="text-[#1556F1]" />,
        link: "/services#container",
        position: "left center",
        subServices: [0, 1, 2] // indices from detailedServices
    },
    {
        title: "Green Energy & Niche",
        image: "/images/specialized-category/f2fa246d392d8c59eb4f5150377fc1278e31b3a4.png",
        icon: <Truck size={20} className="text-[#1556F1]" />,
        link: "/services#green-energy",
        position: "center",
        subServices: [3, 4, 5]
    },
    {
        title: "Alternative Logistics",
        image: "/images/specialized-category/69a37ef413bb85eb082690f43cbdd6198cc6989c.png",
        icon: <Share2 size={20} className="text-[#1556F1]" />,
        link: "/services#alternative",
        position: "center",
        subServices: [6, 7, 8]
    },
    {
        title: "Value-Added Services",
        image: "/images/specialized-category/b4fb62dfb2af8c83e72a534729d5c00446e38c30.png",
        icon: <ShieldCheck size={20} className="text-[#1556F1]" />,
        link: "/services#value-added",
        position: "10% center",
        subServices: [9, 10, 11]
    }
];

const detailedServices = [
    { title: "ECT Solutions", icon: <Boxes size={20} />, link: "/services/empty-container-transportation" },
    { title: "Export Import Containers", icon: <Globe size={20} />, link: "/services/export-import-containers" },
    { title: "Domestic ISO Cargo", icon: <Truck size={20} />, link: "/services/domestic-cargo-containers" },
    { title: "Solar Transportation", icon: <Sun size={20} />, link: "/services/solar-panel-transportation" },
    { title: "ODC Management", icon: <Factory size={20} />, link: "/services/over-dimension-cargo" },
    { title: "Bulk Cargo Storage", icon: <Warehouse size={20} />, link: "/services/bulk-cargo-solutions" },
    { title: "Rail Services", icon: <Train size={20} />, link: "/services/rail-services" },
    { title: "Coastal Shipping", icon: <Ship size={20} />, link: "/services/coastal-services" },
    { title: "LCL Consolidation", icon: <Package size={20} />, link: "/services/lcl-consolidation" },
    { title: "High-Value Escort", icon: <Shield size={20} />, link: "/services/high-value-goods" },
    { title: "Smart Warehousing", icon: <Building2 size={20} />, link: "/services/storage-warehousing" },
    { title: "Tank Chemicals", icon: <FlaskConical size={20} />, link: "/services/chemical-transportation" },
];

const SpecializedCategories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const carouselRef = React.useRef<HTMLDivElement>(null);

    // Track scroll position to update active category
    const handleScroll = () => {
        if (!carouselRef.current) return;
        const scrollLeft = carouselRef.current.scrollLeft;
        const width = carouselRef.current.offsetWidth * 0.85; // card width is ~85%
        const index = Math.round(scrollLeft / width);
        if (index !== activeIndex && index >= 0 && index < categories.length) {
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-12 sm:py-20 bg-[#F8FAFC] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-12">
                {/* Heading */}
                <div className="text-left md:text-center mb-10 max-w-[1183px] mx-auto">
                    <h2 className="text-[#000000] text-[24px] xxs:text-[28px] xs:text-[30px] leading-[1.3] sm:leading-[45px] !font-normal font-branding">
                        Nisha Roadways has deep industry <br className="hidden xs:block" />
                        expertise across many <br className="xs:hidden" />
                        <span className="text-[#1556F1] !font-medium">specialized categories:</span>
                    </h2>
                </div>

                {/* --- MOBILE LAYOUT (Base < md) --- */}
                <div className="block md:hidden">
                    {/* Main Categories Carousel */}
                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-hide"
                    >
                        {categories.map((cat, index) => (
                            <div key={index} className="min-w-[85%] snap-center">
                                <Link
                                    href={cat.link}
                                    className={`relative block transition-all duration-500 ease-out filter drop-shadow-[0_0_3.4px_rgba(0,0,0,0.15)] ${activeIndex === index ? 'scale-100' : 'scale-[0.96] opacity-60'}`}
                                >
                                    <div
                                        className="w-full h-[280px] bg-white p-[6px] flex flex-col transition-all duration-300"
                                        style={{
                                            clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                                        }}
                                    >
                                        {/* Image Container - Properly cut */}
                                        <div className="w-full h-[155px] relative overflow-hidden rounded-[4px]">
                                            <div className="absolute inset-0 z-10" style={{ clipPath: 'polygon(0 0, 91% 0, 100% 15%, 100% 100%, 0 100%)' }}>
                                                <Image
                                                    src={cat.image}
                                                    alt={cat.title}
                                                    fill
                                                    className="object-cover"
                                                    style={{ objectPosition: cat.position }}
                                                />
                                            </div>
                                            <div className="absolute bottom-2 left-2 w-[30px] h-[30px] bg-white rounded-[6px] flex items-center justify-center shadow-lg z-30 border border-gray-100">
                                                {cat.icon}
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="px-3 pt-4 pb-2 flex-1 flex flex-col justify-center">
                                            <h3 className="text-[#111827] text-[18px] leading-tight font-branding !font-bold mb-1">
                                                {cat.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-[#1556F1] text-[13px] font-branding !font-medium">
                                                Explore <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* DYNAMIC SUB-CATEGORIES (User requested layout) */}
                    <div className="mt-4 space-y-3 transition-all duration-500">
                        <div className="flex items-center justify-between px-1">
                            <p className="text-[12px] font-bold text-blue-600/60 uppercase tracking-[0.2em]">
                                Specialized Solutions
                            </p>
                            <div className="flex gap-1">
                                {categories.map((_, i) => (
                                    <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-4 bg-blue-600' : 'w-1 bg-gray-200'}`} />
                                ))}
                            </div>
                        </div>

                        {/* Sub-cards - Width matched to main cards (about 85%) */}
                        <div className="space-y-3 flex flex-col items-center">
                            {categories[activeIndex].subServices.map((id) => (
                                <Link
                                    key={id}
                                    href={detailedServices[id].link}
                                    className="group block relative active:scale-[0.97] transition-all w-[85%] filter drop-shadow-[0_0_3.4px_rgba(0,0,0,0.15)]"
                                >
                                    <div
                                        className="flex items-center gap-4 py-3.5 px-4 bg-white w-full min-h-[72px] transition-all duration-300"
                                        style={{
                                            clipPath: 'polygon(0 0, 90% 0, 100% 25%, 100% 100%, 0 100%)',
                                        }}
                                    >
                                        <div className="flex-shrink-0 w-[42px] h-[42px] rounded-[10px] bg-white flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] border border-gray-50">
                                            <div className="text-[#1556F1] scale-75">
                                                {detailedServices[id].icon}
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-[14px] font-branding !font-bold text-[#111827] leading-tight">
                                                {detailedServices[id].title}
                                            </h4>
                                        </div>
                                        <ArrowRight size={14} className="text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- TABLET/DESKTOP GRID (md+) --- */}
                <div className="hidden md:block">
                    {/* Categories Grid (Main 4) */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto justify-items-center mb-6">
                        {categories.map((cat, index) => (
                            <Link
                                key={index}
                                href={cat.link}
                                className="relative block filter drop-shadow-[0_0_3.4px_rgba(0,0,0,0.15)] group cursor-pointer"
                            >
                                <div
                                    className="w-[268px] h-[306px] bg-white p-[8px] flex flex-col transition-all duration-300 hover:bg-gray-50/50"
                                    style={{
                                        clipPath: 'polygon(0 0, 82% 0, 100% 16%, 100% 100%, 0 100%)',
                                    }}
                                >
                                    <div className="w-full h-[185px] relative overflow-hidden rounded-[4px]">
                                        <div className="absolute inset-0 z-10" style={{ clipPath: 'polygon(0 0, 82% 0, 100% 25%, 100% 100%, 0 100%)' }}>
                                            <Image
                                                src={cat.image}
                                                alt={cat.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                style={{ objectPosition: cat.position }}
                                            />
                                        </div>
                                        <div className="absolute bottom-3 left-3 w-[36px] h-[36px] bg-white rounded-[6px] flex items-center justify-center shadow-lg z-30 border border-gray-100">
                                            {cat.icon}
                                        </div>
                                    </div>

                                    <div className="px-[12px] pt-[18px] pb-[12px] flex-1 flex flex-col justify-between">
                                        <h3 className="text-[#000000] text-[18px] leading-[1.2] !font-semibold font-branding">
                                            {cat.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[#1556F1] text-[13px] !font-medium font-branding">
                                            Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Detailed Services Grid (Tablet/Desktop) */}
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                            {detailedServices.map((service, index) => (
                                <Link href={service.link} key={index} className="block group relative filter drop-shadow-[0_0_3.4px_rgba(0,0,0,0.15)]">
                                    <div
                                        className="flex items-center gap-3 py-4 px-4 bg-white transition-all duration-300 hover:bg-gray-50/50 w-[268px] min-h-[72px]"
                                        style={{
                                            clipPath: 'polygon(0 0, 82% 0, 100% 16%, 100% 100%, 0 100%)',
                                        }}
                                    >
                                        <div className="flex-shrink-0 w-[40px] h-[40px] rounded-[6px] bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                                            <div className="text-[#1556F1]">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className="flex-grow pr-2">
                                            <h4 className="text-[13px] !font-semibold text-[#000000] leading-tight font-branding">
                                                {service.title}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SpecializedCategories;
