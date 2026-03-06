"use client";

import React from "react";

interface ServiceTabsProps {
    activeTab: string;
}

const TABS = [
    { id: "about", label: "About This Service" },
    { id: "benefits", label: "Key Benefits" },
    { id: "specs", label: "Specifications & Details" },
    { id: "process", label: "How It Works" },
];

export default function ServiceTabs({ activeTab }: ServiceTabsProps) {
    return (
        <div className="w-full bg-white border-y border-[#8D8D8D]/50 sticky top-[80px] z-30 font-branding">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20">
                <div className="flex items-center gap-[28px] h-[59px]">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={`relative h-full text-[15px] transition-colors hover:text-black ${activeTab === tab.id ? "text-black font-semibold" : "text-[#414141] font-normal"
                                }`}
                            onClick={() => {
                                const element = document.getElementById(tab.id);
                                if (element) {
                                    const offset = 139; // Navbar (80) + Tabs (59)
                                    const bodyRect = document.body.getBoundingClientRect().top;
                                    const elementRect = element.getBoundingClientRect().top;
                                    const elementPosition = elementRect - bodyRect;
                                    const offsetPosition = elementPosition - offset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                }
                            }}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#000000] rounded-full"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

