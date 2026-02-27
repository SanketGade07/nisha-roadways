"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { allPartners, partnerLogos } from '@/data/partners';

function PartnerCard({ partner, index }: { partner: string, index: number }) {
    const logoUrl = partnerLogos[partner];
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 12) * 0.03 }}
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
            className="group relative bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-blue-200 hover:z-10 shadow-sm min-h-[140px]"
        >
            <div className="relative w-full h-12 mb-3 flex items-center justify-center">
                {logoUrl && !imageError ? (
                    <img
                        src={logoUrl}
                        alt={`${partner} logo`}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 font-black text-xl transition-all duration-300 shadow-inner group-hover:scale-110">
                        {partner.charAt(0)}
                    </div>
                )}
            </div>
            <h3 className="text-[9px] sm:text-[10px] font-bold text-slate-600 group-hover:text-blue-700 transition-colors line-clamp-2 uppercase tracking-tight leading-tight">
                {partner}
            </h3>

            {/* Decorative corner tag */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-slate-100 rounded-full group-hover:bg-blue-300 transition-colors"></div>
        </motion.div>
    );
}

export default function PartnerLogosGrid() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const filteredPartners = allPartners.filter(partner =>
        partner.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="py-20 bg-slate-50/50 relative overflow-hidden">
            {/* Background Decorative patterns */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-5 py-2 rounded-full text-[10px] font-black mb-5 uppercase tracking-widest"
                    >
                        Partnership Directory
                    </motion.div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                        Our Extensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Network</span>
                    </h2>
                    <p className="text-slate-500 text-base max-w-2xl mx-auto font-medium mb-8 leading-relaxed">
                        Collaborating with 100+ industry leaders worldwide
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto mb-12 relative group">
                        <input
                            type="text"
                            placeholder="Search partners..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="relative w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-700 text-sm placeholder:text-slate-300"
                        />
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                    {filteredPartners.map((partner, index) => (
                        <PartnerCard key={partner} partner={partner} index={index} />
                    ))}
                </div>

                {filteredPartners.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-slate-400 font-bold text-lg">No partners found matching "{searchQuery}"</p>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-sm font-medium italic">
                        And many other regional and specialized partners...
                    </p>
                </div>
            </div>
        </section>
    );
}
