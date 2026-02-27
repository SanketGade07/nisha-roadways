"use client";

import Image from "next/image";
import { useRef } from "react";


type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const TOP_ROW: Testimonial[] = [
  {
    name: "Aditya Bhardwaj",
    role: "Ops Lead, Crescent Logistics",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    quote:
      "Nisha Roadways provides essential tools for scaling our ops. Processes are streamlined and our team is always aligned. Their ability to handle complex ODC movements while maintaining strict schedules is exactly what our industry needs.",
  },
  {
    name: "Ashish Dwivedi",
    role: "Director, Orbit Systems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    quote:
      "The expert team at Nisha integrates easily into our supply chain routine. Their specialized handling of solar components has reduced our transit damage to near zero. What impressed me most is their proactive approach during peak seasons.",
  },
  {
    name: "Mozammil Khan",
    role: "ExIm Manager, GreenPath",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    quote:
      "Their port-to-factory logistics cleared a massive backlog for us during the last quarter. I rely on their multimodal network daily for high-stakes shipments. The transparency they offer is the most reliable partner we've had.",
  },
  {
    name: "Ramachandran R S",
    role: "Supply Chain Head, BrightWave",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    quote:
      "Every shipment is tracked with precision. Our logistics efficiency improved noticeably after switching to Nisha. Their pan-India network provides us with the localized presence we need without capital investment.",
  },
];

const BOTTOM_ROW: Testimonial[] = [
  {
    name: "Sonia Bhatti",
    role: "Operations Manager, UrbanNest",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote:
      "Logistics coordination improved dramatically. Everyone is aligned and we support our end-customers better. The way they handle high-value goods transport is exceptional, providing a level of security that is rare.",
  },
  {
    name: "Vachan Kudmule",
    role: "Logistics Analyst, Horizon",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote:
      "Powerful route optimization and a modern fleet help us scale consistently across rural Tier-3 cities. Their fleet management technology ensures our delivery performance is maximized while cost is minimized.",
  },
  {
    name: "Macsen Jose",
    role: "Growth Head, Northwind Retail",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    quote:
      "Empty container turnaround made easy and our team loves the reliability. Nisha Roadways simplified what used to be a major cost burden for our export business. Their professional attitude is top-notch.",
  },
  {
    name: "Vinit Mehta",
    role: "Logistics Coordinator, K-Tech",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop",
    quote:
      "Simple to work with and gets the job done—fast. Their 24/7 expert support and dedication to client success were evident from our first interaction. Even for smaller consignments, the attention to detail is the same.",
  },
];

function MarqueeRow({ items, direction, speed = 40 }: { items: Testimonial[]; direction: "left" | "right", speed?: number }) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless scroll
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">
      <div
        ref={marqueeRef}
        className={`flex whitespace-nowrap ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          width: 'max-content',
        }}
        onMouseEnter={() => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'paused' }}
        onMouseLeave={() => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'running' }}
      >
        {duplicatedItems.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="w-[260px] sm:w-[400px] flex-shrink-0 mx-2 sm:mx-4"
          >
            <div className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
              <div>

                <blockquote className="text-slate-600 text-xs sm:text-base leading-relaxed italic whitespace-normal mb-4 sm:mb-6">
                  &quot;{t.quote}&quot;
                </blockquote>
              </div>
              <figcaption className="flex items-center gap-4 border-t border-slate-50 pt-4">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-slate-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-bold text-slate-900 truncate">{t.name}</div>
                  <div className="text-xs font-semibold text-blue-600/70 truncate">{t.role}</div>
                </div>
              </figcaption>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials({ hideHeader = false, hideStats = false, singleRow = false }: { hideHeader?: boolean; hideStats?: boolean; singleRow?: boolean }) {
  return (
    <section id="testimonials" className="relative py-12 sm:py-24 bg-slate-50 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {!hideHeader && (
          <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-slate-200 rounded-full mb-4 sm:mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 translate-y-[-0.5px]"></span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-widest">
                Client Testimonials
              </span>
            </div>

            <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
              Trusted by Leaders <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black">
                Across Every Industry Sector.
              </span>
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover why India's most innovative companies choose Nisha Roadways to orchestrate their complex supply chains.
            </p>
          </div>
        )}

        <div className=" space-y-2">
          {singleRow ? (
            <MarqueeRow items={[...TOP_ROW, ...BOTTOM_ROW]} direction="right" speed={80} />
          ) : (
            <>
              {/* First row moving left */}
              <MarqueeRow items={TOP_ROW} direction="left" speed={45} />
              {/* Second row moving right */}
              <MarqueeRow items={BOTTOM_ROW} direction="right" speed={40} />
            </>
          )}
        </div>

        {/* Trust Stats below marquee */}
        {!hideStats && (
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 border-t border-slate-200 pt-12">
            {[
              { label: "Client Retention", value: "98%" },
              { label: "Active Partners", value: "300+" },
              { label: "Years Experience", value: "43+" },
              { label: "States Covered", value: "All" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}