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
        position: "left center"
    },
    {
        title: "Green Energy & Niche Movements",
        image: "/images/specialized-category/f2fa246d392d8c59eb4f5150377fc1278e31b3a4.png",
        icon: <Truck size={20} className="text-[#1556F1]" />,
        link: "/services#green-energy",
        position: "center"
    },
    {
        title: "Alternative Logistics",
        image: "/images/specialized-category/69a37ef413bb85eb082690f43cbdd6198cc6989c.png",
        icon: <Share2 size={20} className="text-[#1556F1]" />,
        link: "/services#alternative",
        position: "center"
    },
    {
        title: "Value-Added Services",
        image: "/images/specialized-category/b4fb62dfb2af8c83e72a534729d5c00446e38c30.png",
        icon: <ShieldCheck size={20} className="text-[#1556F1]" />,
        link: "/services#value-added",
        position: "10% center" // Show more of the right side (hand and icons)
    }
];

const detailedServices = [
    { title: "Empty Container Transportation (ECT)", icon: <Boxes size={20} />, link: "/services/empty-container-transportation" },
    { title: "Export Import Containers", icon: <Globe size={20} />, link: "/services/export-import-containers" },
    { title: "Domestic Cargo In Our Containers", icon: <Truck size={20} />, link: "/services/domestic-cargo-containers" },
    { title: "Solar Panel & Parts Transportation", icon: <Sun size={20} />, link: "/services/solar-panel-transportation" },
    { title: "Over Dimension Cargo (ODC)", icon: <Factory size={20} />, link: "/services/over-dimension-cargo" },
    { title: "Bulk Cargo Transportation", icon: <Warehouse size={20} />, link: "/services/bulk-cargo-solutions" },
    { title: "Rail Services", icon: <Train size={20} />, link: "/services/rail-services" },
    { title: "Coastal Services", icon: <Ship size={20} />, link: "/services/coastal-services" },
    { title: "LCL Consolidation", icon: <Package size={20} />, link: "/services/lcl-consolidation" },
    { title: "Transportation Of High Value Goods", icon: <Shield size={20} />, link: "/services/high-value-goods" },
    { title: "Storage and Warehousing", icon: <Building2 size={20} />, link: "/services/storage-warehousing" },
    { title: "Chemical Transportation in Tank Containers", icon: <FlaskConical size={20} />, link: "/services/chemical-transportation" },
];

const SpecializedCategories = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
                {/* Heading */}
                <div className="text-center mb-12 max-w-[1183px] mx-auto">
                    <h2 className="text-[#000000] text-[30px] leading-[45px] !font-normal font-branding"> {/* Font Weight: 400 */}
                        Nisha Roadways has deep industry expertise across many <br />
                        <span className="text-[#1556F1] !font-medium">specialized categories:</span> {/* Font Weight: 500 */}
                    </h2>
                </div>

                {/* Categories Grid (Main 4) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto justify-items-center mb-6">
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
                                {/* Image Container */}
                                <div className="w-full h-[185px] relative overflow-hidden rounded-[4px]">
                                    <div
                                        className="absolute inset-0 z-10"
                                        style={{
                                            clipPath: 'polygon(0 0, 82% 0, 100% 25%, 100% 100%, 0 100%)',
                                        }}
                                    >
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

                                {/* Info */}
                                <div className="px-[12px] pt-[18px] pb-[12px] flex-1 flex flex-col justify-between">
                                    <h3 className="text-[#000000] text-[18px] leading-[1.2] !font-semibold font-branding"> {/* Font Weight: 600 */}
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

                {/* Detailed Services Grid (12 Cards) */}
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                        {detailedServices.map((service, index) => (
                            <Link href={service.link} key={index} className="block group relative filter drop-shadow-[0_0_3.4px_rgba(0,0,0,0.15)]">
                                <div
                                    className="flex items-center gap-3 py-4 px-4 bg-white transition-all duration-300 hover:bg-gray-50/50 w-[268px] min-h-[72px]"
                                    style={{
                                        clipPath: 'polygon(0 0, 82% 0, 100% 16%, 100% 100%, 0 100%)',
                                    }}
                                >
                                    {/* Icon Container with match to upper UI */}
                                    <div className="flex-shrink-0 w-[40px] h-[40px] rounded-[6px] bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                                        <div className="text-[#1556F1]">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="flex-grow pr-2">
                                        <h4 className="text-[13px] !font-semibold text-[#000000] leading-tight font-branding"> {/* Font Weight: 600 */}
                                            {service.title}
                                        </h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SpecializedCategories;
