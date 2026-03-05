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
        <div className="w-full bg-white border-b border-gray-200 sticky top-[80px] z-30 font-branding">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20">
                <div className="flex items-center gap-12 h-16">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={`relative h-full text-[14px] !font-semibold transition-colors hover:text-[#1557F3] ${activeTab === tab.id ? "text-black" : "text-[#707070]"
                                }`}
                            onClick={() => {
                                const element = document.getElementById(tab.id);
                                if (element) {
                                    const offset = 144; // Navbar (80) + Tabs (64)
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
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1557F3]"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
