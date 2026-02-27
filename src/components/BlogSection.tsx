"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

const BLOG_POSTS = [
  {
    title: "The Guide On How to Ship Oversize Loads",
    date: "JAN 23, 2025",
    author: "BY ADMIN",
    image: "/images/blog/ship.jpg",
  },
  {
    title: "Five reasons you can deliver best enterprise",
    date: "FEB 13, 2025",
    author: "BY ADMIN",
    image: "/images/blog/people.jpg",
  },
  {
    title: "Three reasons you can visible in supply chain",
    date: "JAN 23, 2025",
    author: "BY ADMIN",
    image: "/images/blog/truck.jpg",
  },
  {
    title: "COVID-19 How We Can Help your Logistics",
    date: "JAN 23, 2025",
    author: "BY ADMIN",
    image: "/images/blog/warehouse.png",
  },
  {
    title: "Making innovation for globalization possible",
    date: "JAN 23, 2025",
    author: "BY ADMIN",
    image: "/images/blog/train.png",
  },
  {
    title: "Delivering the best global logistics services",
    date: "JAN 23, 2025",
    author: "BY ADMIN",
    image: "/images/blog/crane.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="relative py-12 bg-[#EEF1F8] overflow-hidden">
      {/* Decorative diagonal shape on right */}
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none z-0">
        <Image
          src="/images/about-us/678215411cc0535fd176d9c1_flat-cut-shape-light.png"
          alt=""
          fill
          className="object-cover object-left opacity-60"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-[36px] h-[36px] bg-[#2563EB] rounded-[10px] flex items-center justify-center p-2">
              <Image
                src="/images/blog/67761af397573ca47fb7f6cb_subtitle-icon.png"
                alt=""
                width={20}
                height={20}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <span className="text-[18px] font-semibold text-[#1E293B]">
              Our Blog
            </span>
          </div>

          <h2 className="text-[34px] md:text-[48px] font-semibold text-slate-950 leading-[1.1] md:leading-[52px] tracking-[-1.25px]">
            Latest from <span className="text-blue-600">our blog</span> post <br className="hidden md:block" /> update here
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[1400px] mx-auto">
          {BLOG_POSTS.map((post, index) => (
            <div
              key={index}
              className="bg-white p-4 flex flex-col sm:flex-row items-center gap-5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] card-cut-shape group cursor-pointer hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 border border-slate-50"
            >
              {/* Image */}
              <div className="relative w-full sm:w-[120px] h-[120px] flex-shrink-0 rounded-[16px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 group-hover:text-blue-600 uppercase tracking-wide transition-colors">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h4 className="text-[18px] sm:text-[20px] font-bold text-slate-900 leading-[1.25] group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
                /* ↓ Edit Card Cut Dimensions Here ↓ */
                .card-cut-shape {
                    clip-path: polygon(0 0, 94% 0, 100% 35%, 100% 100%, 0 100%);
                }
                @media (max-width: 640px) {
                    .card-cut-shape {
                        clip-path: none;
                        border-radius: 20px;
                    }
                }
            `}</style>
    </section>
  );
}
