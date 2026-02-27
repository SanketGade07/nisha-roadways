'use client';

import React from 'react';
import Image from 'next/image';

const CtaBanner: React.FC = () => {
  return (
    <section className="w-full h-[369px] relative overflow-hidden">
      {/* Background Image - Absolute Full Width & Height */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/footer/crosslink-desktop-01c1f723fae24a4fa348d106c98bf8ad.avif"
          alt="Talk to a Logistics Expert"
          fill
          className="object-cover"
          priority
        />
        {/* Responsive Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[191px]">
          <div className="max-w-[551px] text-left">
            <h2 className="text-white text-[28px] sm:text-[36px] md:text-[45px] font-semibold leading-[1.1] md:leading-[45px] uppercase mb-[15px]">
              TALK TO A LOGISTICS<br className="hidden sm:block" />EXPERT
            </h2>
            <p className="text-[#DFD9D9] text-[15px] sm:text-[16px] md:text-[18px] font-medium leading-[1.4] md:leading-[27px] mb-[30px] max-w-[544px]">
              Get solutions that fit your business needs Talk to a supply chain expert today.
            </p>

            <button className="inline-flex items-center bg-white rounded-full px-[20px] py-[10px] gap-[8px] hover:shadow-xl transition-all duration-300 group">
              <span className="text-[#1556F1] font-semibold text-[16px] leading-[20px]">
                Contact Us
              </span>
              <div className="w-[24px] h-[24px] bg-[#1556F1] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;