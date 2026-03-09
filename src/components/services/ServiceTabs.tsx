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
        <div className="w-full bg-white border-y border-[#8D8D8D]/50 sticky top-[60px] sm:top-[80px] z-30 font-branding">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-6 sm:gap-[28px] h-[55px] sm:h-[59px] min-w-max">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={`relative h-full text-[14px] sm:text-[15px] whitespace-nowrap transition-colors hover:text-black ${activeTab === tab.id ? "text-black font-semibold" : "text-[#414141] font-normal"
                                }`}
                            onClick={() => {
                                const element = document.getElementById(tab.id);
                                if (element) {
                                    const tabsHeight = window.innerWidth < 640 ? 55 : 59;
                                    const navbarHeight = window.innerWidth < 640 ? 60 : 80;
                                    const offset = navbarHeight + tabsHeight;
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
                                <div className="absolute bottom-[-1px] left-0 w-full h-[3px] sm:h-[4px] bg-[#000000] rounded-full"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

