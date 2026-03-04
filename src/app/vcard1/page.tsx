'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaTruck,
    FaWarehouse,
    FaShip,
    FaCubes,
    FaDownload,
    FaQrcode,
    FaWhatsapp,
    FaPaperPlane,
    FaSun,
    FaMoon
} from 'react-icons/fa';
import { IoMdMore, IoMdClose, IoMdSend } from "react-icons/io";
import { MdEmail, MdCall, MdChat } from "react-icons/md";
import { QRCodeCanvas } from 'qrcode.react';

interface Theme {
    bg: string;
    card: string;
    border: string;
    text: string;
    title: string;
    subCard: string;
    subBorder: string;
    accent: string;
    accentHover: string;
    muted: string;
    logoBg: string;
}

const VCard1 = () => {
    const [showQRPopup, setShowQRPopup] = React.useState(false);
    const [showContactForm, setShowContactForm] = React.useState(false);
    const [showFloatingMenu, setShowFloatingMenu] = React.useState(false);
    const [pageUrl, setPageUrl] = React.useState('');
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setPageUrl(window.location.href);
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const theme: Theme = {
        bg: isDarkMode ? 'bg-[#111116]' : 'bg-white',
        card: isDarkMode ? 'bg-[#1e1e26]' : 'bg-gray-50',
        border: isDarkMode ? 'border-[#2d2d3a]' : 'border-gray-200',
        text: isDarkMode ? 'text-gray-300' : 'text-gray-700',
        title: isDarkMode ? 'text-white' : 'text-gray-900',
        subCard: isDarkMode ? 'bg-[#252530]' : 'bg-gray-50',
        subBorder: isDarkMode ? 'border-[#3a3a4a]' : 'border-gray-100',
        accent: 'bg-blue-600',
        accentHover: 'hover:bg-blue-500',
        muted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
        logoBg: isDarkMode ? 'bg-[#252530]' : 'bg-gray-50',
    };

    const companyDetails = {
        name: "Nisha Roadways",
        tagline: "Safety. Speed. Sustainability.",
        since: "Established 1980",
        location: "Navi Mumbai, India",
        email: "business@nisharoadways.com",
        phoneNumbers: ["022 - 41632222", "+91 8976768608", "+91 8976768586"],
        address: "909, Mayuresh cosmos, plot no 37, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614, India",
        socials: [
            { icon: <FaFacebook />, link: "https://www.facebook.com/nisharoadways" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/roadwaysnisha/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/nisha-roadways-pvt-ltd/" },
        ],
        services: [
            {
                title: "Container Transport",
                desc: "Efficient empty and loaded container moving services.",
                icon: <FaTruck className="text-blue-500 text-3xl" />
            },
            {
                title: "Warehousing",
                desc: "Secure storage and distribution solutions for all goods.",
                icon: <FaWarehouse className="text-blue-500 text-3xl" />
            },
            {
                title: "Import & Export",
                desc: "Specialized logistics for international shipping needs.",
                icon: <FaShip className="text-blue-500 text-3xl" />
            },
            {
                title: "Bulk Cargo",
                desc: "Handling over-dimension and specialized chemical cargo.",
                icon: <FaCubes className="text-blue-500 text-3xl" />
            }
        ]
    };

    const downloadVCF = () => {
        const vcfData = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${companyDetails.name}`,
            `ORG:${companyDetails.name}`,
            `TITLE:${companyDetails.tagline}`,
            `TEL;TYPE=WORK,VOICE:${companyDetails.phoneNumbers[0]}`,
            `TEL;TYPE=CELL,VOICE:${companyDetails.phoneNumbers[1]}`,
            `TEL;TYPE=CELL,VOICE:${companyDetails.phoneNumbers[2]}`,
            `EMAIL;TYPE=PREF,INTERNET:${companyDetails.email}`,
            `ADR;TYPE=WORK:;;${companyDetails.address};;;;`,
            `URL:https://nisharoadways.com`,
            `PHOTO;VALUE=URI:https://nisharoadways.com/logo.png`,
            `REV:${new Date().toISOString()}`,
            'END:VCARD'
        ].join('\n');

        const blob = new Blob([vcfData], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${companyDetails.name.replace(/\s+/g, '_')}.vcf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans p-2 md:p-4 flex items-center justify-center relative overflow-x-hidden transition-colors duration-700`}>
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center transition-all duration-700">
                {/* Geometrical patterns only - Glow removed from here and kept only on logo */}

                {/* Centered Pattern Layer - Stays with the card on zoom */}
                <div className="w-full max-w-[1400px] h-full relative">
                    {/* Top Left Pattern - anchored to content width */}
                    <div className="absolute top-0 left-0 -translate-x-[15%] -translate-y-[5%] w-[45vw] max-w-[450px] transition-all duration-700">
                        <Image
                            src="/images/vcard/triangles-top.svg"
                            alt=""
                            width={500}
                            height={500}
                            priority
                            className={`object-contain transition-all duration-700 ${isDarkMode ? 'opacity-40' : 'opacity-80 invert sepia-[0.5] saturate-[5] hue-rotate-[340deg] contrast-125'}`}
                        />
                    </div>
                    {/* Bottom Right Pattern - anchored to content width */}
                    <div className="absolute bottom-0 right-0 translate-x-[15%] translate-y-[5%] w-[40vw] max-w-[400px] transition-all duration-700">
                        <Image
                            src="/images/vcard/triangles-bottom.svg"
                            alt=""
                            width={500}
                            height={500}
                            className={`object-contain transition-all duration-700 ${isDarkMode ? 'opacity-40' : 'opacity-80 invert sepia-[0.5] saturate-[5] hue-rotate-[180deg] contrast-125'}`}
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-stretch">
                {/* Content starts here */}

                <motion.aside
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`lg:w-[260px] shrink-0 ${theme.card} border ${theme.border} rounded-[24px] p-4 flex flex-col items-center shadow-2xl relative overflow-hidden transition-colors duration-500`}
                >
                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-[#252530] text-yellow-400' : 'bg-gray-100 text-blue-600'} border ${theme.subBorder} hover:scale-110 transition-all shadow-sm`}
                    >
                        {isDarkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
                    </button>

                    {/* Subtle top-left triangular accent */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-transparent rotate-45 -translate-x-12 -translate-y-12"></div>

                    {/* Icon/Logo area - Enlarged */}
                    <div className="relative w-28 h-28 mb-4 group">
                        <div className="absolute inset-0 bg-blue-500 rounded-[28px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className={`relative w-full h-full ${theme.logoBg} rounded-[28px] border ${theme.subBorder} overflow-hidden flex items-center justify-center p-4 shadow-inner transition-colors duration-500`}>
                            <Image
                                src="/images/nav-logo.png"
                                alt="Profile"
                                width={110}
                                height={110}
                                className={`object-contain ${isDarkMode ? 'brightness-0 invert' : ''} opacity-90 transition-transform group-hover:scale-110`}
                            />
                        </div>
                    </div>

                    <h1 className={`text-xl font-bold ${theme.title} mb-1 text-center font-serif tracking-tight`}>
                        {companyDetails.name}
                    </h1>
                    <div className={`${isDarkMode ? 'bg-[#2b2b36]' : 'bg-blue-50'} text-[9px] uppercase tracking-widest px-3 py-1 rounded-full text-blue-400 font-bold mb-4 border ${theme.subBorder}`}>
                        {companyDetails.tagline}
                    </div>

                    <div className="flex gap-4 mb-4">
                        {companyDetails.socials.map((social, i) => (
                            <a key={i} href={social.link} className={`${theme.muted} hover:text-blue-400 transition-colors text-base`}>
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Detailed Contact Section */}
                    <div className={`w-full space-y-2 border-t ${theme.border} pt-4 mb-6 transition-colors duration-500`}>
                        <ContactItem
                            icon={<FaCalendarAlt size={14} className="text-blue-500 group-hover:text-white transition-colors" />}
                            text={companyDetails.since}
                            theme={theme}
                            isDarkMode={isDarkMode}
                        />

                        <div className="flex items-start gap-4 w-full group">
                            <div className={`w-10 h-10 ${theme.subCard} rounded-xl flex items-center justify-center p-2 shrink-0 border ${theme.subBorder} group-hover:bg-blue-500 transition-all shadow-md`}>
                                <FaPhone size={14} className="text-blue-500 group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                                {companyDetails.phoneNumbers.map((num, idx) => (
                                    <p key={idx} className={`text-[11px] font-medium ${theme.muted} ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-gray-900'} transition-colors`}>{num}</p>
                                ))}
                            </div>
                        </div>

                        <ContactItem
                            icon={<FaEnvelope size={14} className="text-blue-500 group-hover:text-white transition-colors" />}
                            text={companyDetails.email}
                            theme={theme}
                            isDarkMode={isDarkMode}
                        />

                        <div className="flex items-start gap-4 w-full group">
                            <div className={`w-10 h-10 ${theme.subCard} rounded-xl flex items-center justify-center p-2 shrink-0 border ${theme.subBorder} group-hover:bg-blue-500 transition-all shadow-md`}>
                                <FaMapMarkerAlt size={14} className="text-blue-500 group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                                <p className={`text-[10px] font-medium ${theme.muted} leading-tight ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-gray-900'} transition-colors`}>
                                    {companyDetails.address}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Share QR Section - Redesigned & Modernized */}
                    <div
                        onClick={() => setShowQRPopup(true)}
                        className={`w-full ${theme.subCard} border ${theme.subBorder} rounded-2xl p-3 mb-4 cursor-pointer hover:border-blue-500/50 transition-all group overflow-hidden relative shadow-lg shadow-black/5 duration-500`}
                    >
                        {/* Decorative glow background */}
                        <div className={`absolute -top-12 -right-12 w-24 h-24 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'} blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-all`}></div>

                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <div className="p-1 bg-blue-500/10 rounded-md">
                                <FaQrcode className="text-blue-500 text-[10px]" />
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.muted}`}>Share vCard</span>
                        </div>

                        <div className="bg-white p-2.5 rounded-[20px] flex justify-center relative z-10 shadow-xl group-hover:scale-[1.03] transition-transform duration-300">
                            <QRCodeCanvas
                                value={pageUrl || "https://nisha-roadways-3tm7.vercel.app/vcard1"}
                                size={90}
                                bgColor={"#ffffff"}
                                fgColor={"#1e1e26"}
                                level={"H"}
                            />
                        </div>
                    </div>

                    <button
                        onClick={downloadVCF}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <FaDownload size={14} />
                        Download VCF
                    </button>
                </motion.aside>

                <motion.section
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex-1 ${theme.card} border ${theme.border} rounded-[24px] p-4 md:p-6 lg:p-8 shadow-2xl relative overflow-y-auto custom-scrollbar transition-colors duration-500`}
                >
                    {/* About Section */}
                    <div className="mb-6 lg:mb-8 pr-12 lg:pr-0">
                        <h2 className={`text-xl lg:text-2xl font-bold ${theme.title} mb-3 lg:mb-4 relative inline-block`}>
                            About Nisha Roadways
                            <div className="absolute bottom-[-6px] left-0 w-10 h-0.5 bg-blue-500 rounded-full"></div>
                        </h2>
                        <div className={`mt-4 ${theme.muted} leading-relaxed space-y-2 text-sm`}>
                            <p>
                                Founded in 1980, Nisha Roadways has grown into a cornerstone of the logistics and transportation industry in India.
                                With over four decades of excellence, we specialize in end-to-end supply chain solutions.
                            </p>
                            <p>
                                Our mission is to provide sustainable, safe, and technologically-driven freight services. We don&apos;t just move cargo;
                                we move businesses forward.
                            </p>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h2 className={`text-lg lg:text-xl font-bold ${theme.title} mb-4 lg:mb-6`}>What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                            {companyDetails.services.map((service, i) => (
                                <div key={i} className={`${theme.subCard} border ${theme.subBorder} rounded-2xl p-3 flex items-start gap-4 hover:border-blue-500/50 transition-all group duration-500`}>
                                    <div className={`p-2 ${theme.card} rounded-xl border ${theme.subBorder} group-hover:bg-blue-500/10 transition-colors shrink-0 duration-500`}>
                                        <div className="text-blue-500 text-lg">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={`font-bold ${theme.title} mb-0.5 text-xs lg:text-sm`}>{service.title}</h3>
                                        <p className={`text-[9px] lg:text-[10px] ${theme.muted} leading-tight line-clamp-2 transition-colors duration-500`}>{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form Trigger Section */}
                    <div className={`mt-8 p-6 ${isDarkMode ? 'bg-gradient-to-br from-blue-600/10 to-transparent border-blue-500/20' : 'bg-blue-50/50 border-blue-200'} border rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-500`}>
                        <div>
                            <h3 className={`text-lg font-bold ${theme.title} mb-1`}>Have a custom inquiry?</h3>
                            <p className={`${theme.muted} text-sm`}>Send us a message and we'll get back to you shortly.</p>
                        </div>
                        <button
                            onClick={() => setShowContactForm(true)}
                            className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold text-white shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center gap-2"
                        >
                            <FaPaperPlane size={14} />
                            Contact Form
                        </button>
                    </div>

                    {/* Footer Branding */}
                    <div className={`mt-8 pt-6 border-t ${theme.border} flex justify-between items-center text-[9px] uppercase tracking-widest transition-colors duration-500`}>
                        <span className={theme.muted}>© 2025 Nisha Roadways Pvt. Ltd.</span>
                        <span className={`${isDarkMode ? 'text-blue-500/60' : 'text-blue-600/60'} font-medium`}>Premium Digital Presence</span>
                    </div>
                </motion.section>

            </div>

            {/* QR Popup Modal */}
            <AnimatePresence>
                {showQRPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
                        onClick={() => setShowQRPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className={`${theme.card} border ${theme.border} rounded-[40px] p-10 max-w-xs w-full relative shadow-2xl transition-colors duration-500`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowQRPopup(false)}
                                className={`absolute top-6 right-6 p-2 ${theme.subCard} border ${theme.subBorder} rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all`}
                            >
                                <IoMdClose size={24} />
                            </button>
                            <div className="text-center mb-8">
                                <h3 className={`${theme.title} font-bold text-2xl mb-2`}>Scan & Share</h3>
                                <p className={`${theme.muted} text-xs`}>Share this profile with your network</p>
                            </div>
                            <div className="bg-white p-6 rounded-[30px] flex items-center justify-center mb-6 shadow-xl border border-gray-100">
                                <QRCodeCanvas
                                    value={pageUrl || "https://nisha-roadways-3tm7.vercel.app/vcard1"}
                                    size={200}
                                    bgColor={"#ffffff"}
                                    fgColor={"#1e1e26"}
                                    level={"H"}
                                    includeMargin={true}
                                />
                            </div>
                            <p className={`text-center text-[10px] ${theme.muted} uppercase tracking-widest font-bold`}>
                                Nisha Roadways Digital vCard
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Form Modal */}
            <AnimatePresence>
                {showContactForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setShowContactForm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className={`${theme.card} border ${theme.border} rounded-[32px] overflow-hidden max-w-lg w-full relative shadow-2xl transition-colors duration-500`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-blue-600 p-6 flex items-center justify-between text-white">
                                <div className="flex items-center gap-3">
                                    <FaPaperPlane className="text-2xl" />
                                    <h3 className="text-xl font-bold">Contact Us</h3>
                                </div>
                                <button
                                    onClick={() => setShowContactForm(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <IoMdClose size={24} />
                                </button>
                            </div>

                            <div className="p-8">
                                <p className={`${theme.muted} text-center mb-8`}>Fill out the form and we will contact you shortly</p>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className={`${theme.subCard} border ${theme.subBorder} rounded-xl px-4 py-3 ${theme.title} focus:border-blue-500 outline-none w-full transition-all`}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            className={`${theme.subCard} border ${theme.subBorder} rounded-xl px-4 py-3 ${theme.title} focus:border-blue-500 outline-none w-full transition-all`}
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className={`${theme.subCard} border ${theme.subBorder} rounded-xl px-4 py-3 ${theme.title} focus:border-blue-500 outline-none w-full transition-all`}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className={`${theme.subCard} border ${theme.subBorder} rounded-xl px-4 py-3 ${theme.title} focus:border-blue-500 outline-none w-full transition-all`}
                                    />
                                    <div className="relative">
                                        <select
                                            className={`${theme.subCard} border ${theme.subBorder} rounded-xl px-4 py-3 ${theme.title} focus:border-blue-500 outline-none w-full appearance-none transition-all cursor-pointer`}
                                        >
                                            <option value="" disabled selected>Select Service / Business Type</option>
                                            <option value="transport">Container Transport</option>
                                            <option value="warehousing">Warehousing</option>
                                            <option value="import-export">Import & Export</option>
                                            <option value="bulk-cargo">Bulk Cargo</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            <IoMdMore size={20} className="rotate-90" />
                                        </div>
                                    </div>
                                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 mt-6">
                                        <IoMdSend size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Communication Hub - Moved Left (right-14) for exact match */}
            <div className="fixed bottom-10 right-14 z-[90] flex flex-col items-center gap-4">
                <AnimatePresence>
                    {showFloatingMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex flex-col items-center gap-4 mb-2"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => window.open(`https://wa.me/${companyDetails.phoneNumbers[1].replace(/\D/g, '')}`)}
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#25D366] shadow-xl border border-gray-100 transition-all hover:shadow-green-500/20"
                                title="WhatsApp"
                            >
                                <FaWhatsapp size={26} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => window.location.href = `mailto:${companyDetails.email}`}
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-xl border border-gray-100 transition-all hover:shadow-blue-500/20"
                                title="Email"
                            >
                                <MdEmail size={26} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => window.location.href = `tel:${companyDetails.phoneNumbers[1]}`}
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl border border-gray-100 transition-all hover:shadow-blue-500/20"
                                title="Call"
                            >
                                <MdCall size={26} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
                <button
                    onClick={() => setShowFloatingMenu(!showFloatingMenu)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all ${showFloatingMenu ? 'bg-blue-600 rotate-90' : 'bg-blue-600 animate-pulse-subtle'}`}
                >
                    {showFloatingMenu ? <IoMdClose size={32} /> : <MdChat size={32} />}
                </button>
            </div>
        </div>
    );
};

// Helper component for contact items
const ContactItem = ({ icon, text, theme, isDarkMode }: { icon: React.ReactNode, text: string, theme: Theme, isDarkMode: boolean }) => (
    <div className="flex items-center gap-4 w-full group">
        <div className={`w-10 h-10 ${theme.subCard} rounded-xl flex items-center justify-center p-2 shrink-0 border ${theme.subBorder} group-hover:bg-blue-500 transition-all shadow-md duration-500`}>
            {icon}
        </div>
        <div className="flex-1 overflow-hidden text-left">
            <p className={`text-[11px] font-medium ${theme.muted} ${isDarkMode ? 'group-hover:text-white' : 'group-hover:text-gray-900'} transition-colors`}>
                {text}
            </p>
        </div>
    </div>
);

export default VCard1;
