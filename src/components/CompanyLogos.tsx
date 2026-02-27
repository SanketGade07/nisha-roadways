"use client";

import { featuredPartnerLogos } from "@/data/partners";

export default function CompanyLogos() {
  // Use the curated list of logos from partners data
  const logoSet = featuredPartnerLogos;

  return (
    <section className="bg-white py-14 overflow-hidden w-full">
      <div className="w-full">
        {/* Header Text */}
        <div className="text-center mb-10">
          <h2 className="text-[#3F4859] text-[1.75rem] font-semibold tracking-tight">
            1000+ Brands Solved Shipping with Nisha Roadways
          </h2>
        </div>

        {/* Logos Wrapper */}
        <div className="logos-wrapper relative flex items-center overflow-hidden w-full">
          {/* Main Container that animates */}
          <div className="logos-container flex items-center">
            {/* Combined Sets for perfect seamlessness */}
            {[...logoSet, ...logoSet].map((logo, idx) => (
              <div key={`logo-${idx}`} className="logo_item flex-shrink-0 w-[200px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: "40px", width: "100px" }}
                  className="logo_item--img object-contain grayscale opacity-100 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none select-none "
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .logos-wrapper {
          width: 100%;
        }

        .logos-container {
          display: flex;
          width: fit-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .logo_item {
          /* Fixed width is crucial for a smooth loop */
          width: 200px;
        }

        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            /* Moves by exactly half (one full set of logos) */
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
