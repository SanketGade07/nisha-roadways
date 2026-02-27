'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const leftTruckRef = useRef<HTMLDivElement | null>(null);
  const rightTruckRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          if (isVisible) {
            leftTruckRef.current?.classList.add('truck-move-left-to-right');
            rightTruckRef.current?.classList.add('truck-move-right-to-left');
          } else {
            leftTruckRef.current?.classList.remove('truck-move-left-to-right');
            rightTruckRef.current?.classList.remove('truck-move-right-to-left');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer ref={sectionRef} className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white mt-8 sm:mt-12 md:mt-0 overflow-visible">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.1)_75%)] bg-[length:20px_20px]"></div>
        </div>
        {/* Road strip with two trucks */}
        <div className="relative h-24 sm:h-28 md:h-32 lg:h-36 overflow-visible mb-6 sm:mb-8">
          {/* Single lane solid line */}
          <div className="absolute inset-x-0 top-[30%] -translate-y-1/2 h-[2px] sm:h-[3px] "></div>
          {/* Single lane dashed line */}
          <div className="absolute inset-x-2 sm:inset-x-3 top-[30%] -translate-y-1/2 flex justify-between items-center">
            <div className="flex-1 h-[2px] sm:h-[3px] bg-[repeating-linear-gradient(to_right,_transparent,_transparent_12px,_#ffffff_12px,_#ffffff_24px)] sm:bg-[repeating-linear-gradient(to_right,_transparent,_transparent_16px,_#ffffff_16px,_#ffffff_32px)] opacity-70"></div>
          </div>

          {/* Small truck goes right - behind big truck */}
          <div
            ref={leftTruckRef}
            className="pointer-events-none absolute left-[-80px] sm:left-[-100px] md:left-[-120px] -top-[20%] z-10 flex items-center"
          >
            <Image
              src="/images/footer/621dbe2c84d5870bfcca78a1_01.svg"
              alt="Small truck moving right"
              width={120}
              height={60}
              className="drop-shadow-lg w-16 h-8 sm:w-20 sm:h-10 md:w-[120px] md:h-[60px] "
            />
          </div>
          {/* Big truck goes left - in front and moved up */}
          <div
            ref={rightTruckRef}
            className="pointer-events-none absolute right-[-80px] sm:right-[-100px] md:right-[-120px] top-[15%] z-30 flex items-center"
          >
            <Image
              src="/images/footer/62207283e85d0a3ded8b3d3c_05.svg"
              alt="Big truck moving left"
              width={120}
              height={120}
              className="drop-shadow-lg w-16 h-8 sm:w-20 sm:h-10 md:w-[120px] md:h-[100px] "
            />
          </div>
        </div>

        {/* New Footer Content */}
        <div className="w-full text-white pt-0 pb-4 sm:pb-8">
          <div className="max-w-[1400px] mx-auto px-3 sm:px-6">

            {/* Main Footer Content */}
            <div className="mb-6 sm:mb-12">

              {/* Three-column layout with improved spacing */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-4 sm:gap-8 lg:gap-16">

                {/* Left Column - Logo and Contact */}
                <div className="space-y-3 sm:space-y-6">
                  <div className="flex justify-center lg:justify-start -ml-2 sm:-ml-3">
                    <Image
                      src="/images/nav-logo.png"
                      alt="Nisha Roadways"
                      width={200}
                      height={60}
                      className="h-14 sm:h-20 w-auto brightness-0 invert"
                    />
                  </div>

                  {/* Company Address and Contact Information */}
                  <div className="space-y-1 sm:space-y-2 text-gray-400 text-[10px] sm:text-sm">
                    <div className="font-semibold text-white text-xs sm:text-sm">Contact Information</div>
                    <div>909, Mayuresh Cosmos, Plot No. 37, Sector-11</div>
                    <div>CBD Belapur, Navi Mumbai - 400 614</div>
                    <div className="pt-1 sm:pt-2 space-y-0.5 sm:space-y-1">
                      <div>Phone: <a href="tel:+91-22-41632222" className="text-blue-300 hover:text-blue-200 transition-colors">+91-22-41632222</a></div>
                      <div>Mobile: <a href="tel:+91-9820420924" className="text-blue-300 hover:text-blue-200 transition-colors">+91-9820420924</a></div>
                      <div>Email: <a href="mailto:info@nisharoadways.com" className="text-blue-300 hover:text-blue-200 transition-colors">info@nisharoadways.com</a></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-20">
                    {/* Services Column 1 */}
                    <div className="space-y-1 sm:space-y-2">
                      <Link href="/services/empty-container-transportation" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Empty Container Transportation</span>
                      </Link>
                      <Link href="/services/export-import-containers" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Export Import Containers</span>
                      </Link>
                      <Link href="/services/over-dimension-cargo" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Over Dimension Cargo</span>
                      </Link>
                      <Link href="/services/chemical-transportation" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Chemical Transportation</span>
                      </Link>
                      <Link href="/blog" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Blog</span>
                      </Link>
                    </div>

                    {/* Services Column 2 */}
                    <div className="space-y-1 sm:space-y-2">
                      <Link href="/services/bulk-cargo-solutions" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Bulk Cargo Solutions</span>
                      </Link>
                      <Link href="/services/high-value-goods" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">High Value Goods</span>
                      </Link>
                      <Link href="/services/storage-warehousing" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Storage & Warehousing</span>
                      </Link>
                      <Link href="/services/lcl-consolidation" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">LCL Consolidation</span>
                      </Link>
                      <Link href="/academy" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10">Academy</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Column - Why Us and Certifications */}
                <div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-start">
                    {/* Why Us Column */}
                    <div className="space-y-1 sm:space-y-2">
                      <Link href="/about" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10 font-branding">About</span>
                      </Link>
                      <Link href="/team" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10 font-branding">Team</span>
                      </Link>
                      <Link href="/partners" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10 font-branding">Partners</span>
                      </Link>
                      <Link href="/testimonials" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10 font-branding">Testimonials</span>
                      </Link>
                      <Link href="/faq" className="group relative text-white hover:text-blue-300 transition-all duration-300 text-[9px] sm:text-sm py-1.5 sm:py-2 px-2 sm:px-4 border-l-2 sm:border-l-3 border-white hover:border-blue-300 hover:bg-blue-900/20 rounded-r-lg block transform hover:translate-x-2">
                        <span className="relative z-10 font-branding">FAQ</span>
                      </Link>
                    </div>

                    {/* Certifications/Logos Column - Aligned as a proper column */}
                    <div className="flex flex-col items-start justify-start pl-2 sm:pl-4">
                      <div className="flex flex-col space-y-4 sm:space-y-5 items-start">
                        <Image
                          src="/images/footer/gmp.svg"
                          alt="GMP"
                          width={42}
                          height={42}
                          className="w-9 sm:w-[42px] h-auto brightness-0 invert opacity-100 transition-opacity"
                        />
                        <Image
                          src="/images/footer/gsfi.png"
                          alt="GSFI"
                          width={42}
                          height={20}
                          className="w-9 sm:w-[42px] h-auto brightness-0 invert opacity-100 transition-opacity"
                        />
                        <div className="flex flex-col items-start">
                          <Image
                            src="/images/footer/iso.webp"
                            alt="ISO"
                            width={42}
                            height={26}
                            className="w-9 sm:w-[42px] h-auto brightness-0 invert opacity-100 transition-opacity"
                          />
                          <span className="text-[7px] font-bold text-white mt-0.5 opacity-100 tracking-tighter uppercase self-center sm:self-start">27001</span>
                        </div>
                        <Image
                          src="/images/footer/aicpa.webp"
                          alt="AICPA"
                          width={45}
                          height={45}
                          className="w-10 sm:w-[45px] h-auto opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="flex justify-center mt-6 sm:mt-12">
                <div className="flex space-x-4 sm:space-x-6">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/nisha-roadways-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200 p-1.5 sm:p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/roadwaysnisha/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-200 p-1.5 sm:p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="https://www.facebook.com/nisharoadways" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200 p-1.5 sm:p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* WhatsApp/Phone */}
                  <a href="https://wa.me/919820420924" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-200 p-1.5 sm:p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@nisharoadways.com" className="text-white hover:text-yellow-400 transition-colors duration-200 p-1.5 sm:p-2 hover:bg-gray-800 rounded-full">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white pt-4 sm:pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 sm:space-y-6 lg:space-y-0">

                {/* Left Side - Copyright */}
                <div
                  className="relative z-10 text-center lg:text-left order-2 lg:order-1 text-[9px] sm:text-sm text-gray-400 transition-colors duration-200 hover:text-blue-300"
                >
                  <span>© 2025 Nisha Roadways Pvt. Ltd. All rights reserved.</span>
                </div>

                {/* Middle Section - Privacy Policy and Terms of Service */}
                <div
                  className="relative z-10 flex items-center justify-center space-x-3 sm:space-x-6 text-[9px] sm:text-sm text-gray-400 order-3 lg:order-2 transition-colors duration-200 hover:text-blue-300"
                >
                  <a href="#" className="hover:underline">Privacy Policy</a>
                  <a href="#" className="hover:underline">Terms of Service</a>
                </div>

                {/* Right Section - Aneeverse Credit */}
                <div className="text-center lg:text-right order-1 lg:order-3">
                  <a
                    href="https://www.aneeverse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center justify-center lg:justify-end text-[9px] sm:text-sm text-gray-400 transition-all duration-300 hover:text-blue-300"
                  >
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <span className="whitespace-nowrap hover:underline">Designed & Managed by Aneeverse</span>
                      <Image
                        src="/images/aneeverse-logo.svg"
                        alt="Aneeverse"
                        width={16}
                        height={16}
                        className="w-auto h-5 sm:h-7 brightness-0 invert"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes truckLeftToRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes truckRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
        .truck-move-left-to-right {
          animation: truckLeftToRight 14s linear infinite;
        }
        .truck-move-right-to-left {
          animation: truckRightToLeft 14s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Footer;


