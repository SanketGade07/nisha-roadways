"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, FileText, Warehouse, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { client, urlFor } from "@/sanity/lib/client";

interface ResourcesMegaMenuProps {
    color?: {
        text: string;
        background?: string;
    };
    onOpenChange?: (isOpen: boolean) => void;
}

interface BlogItem {
    title: string;
    href: string;
    image: string;
}

interface SanityPost {
    title: string;
    slug: string;
    mainImage?: unknown;
}

const ResourcesMegaMenu: React.FC<ResourcesMegaMenuProps> = ({
    color = { text: "#171717" },
    onOpenChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [latestBlogs, setLatestBlogs] = useState<BlogItem[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const query = `*[_type == "post"] | order(publishedAt desc)[0...2] {
                    title,
                    "slug": slug.current,
                    mainImage
                }`;
                const posts: SanityPost[] = await client.fetch(query);
                const formattedPosts = posts.map((post: SanityPost) => ({
                    title: post.title,
                    href: `/blog/${post.slug}`,
                    image: post.mainImage ? urlFor(post.mainImage).url() : "/images/use-everywhere/images1.png"
                }));
                setLatestBlogs(formattedPosts.length > 0 ? formattedPosts : [
                    { title: "5 Reasons Why In-House Creative Teams Often Miss the ROI...", href: "/blog", image: "/images/use-everywhere/images1.png" },
                    { title: "Agency vs Freelancer vs In-House: 5 Reasons Agencies Win For...", href: "/blog", image: "/images/use-everywhere/images2.png" }
                ]);
            } catch (error) {
                console.error("Error fetching blogs in mega menu:", error);
                setLatestBlogs([
                    { title: "5 Reasons Why In-House Creative Teams Often Miss the ROI...", href: "/blog", image: "/images/use-everywhere/images1.png" },
                    { title: "Agency vs Freelancer vs In-House: 5 Reasons Agencies Win For...", href: "/blog", image: "/images/use-everywhere/images2.png" }
                ]);
            }
        };

        fetchBlogs();
    }, []);

    // Notify parent when open state changes
    useEffect(() => {
        onOpenChange?.(isOpen);
    }, [isOpen, onOpenChange]);

    const resources = [
        {
            title: "Blogs",
            desc: "Insights and updates",
            href: "/blog",
            image: "/images/use-everywhere/images1.png",
            baseColor: "#1d4ed8",
            icon: <FileText />,
            style: { background: 'linear-gradient(135deg, #1d4ed8, #1e40af)', color: '#ffffff' },
            hoverStyle: { background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' }
        },
        {
            title: "Nisha Academy",
            desc: "Logistics education and training",
            href: "/academy",
            image: "/images/use-everywhere/images2.png",
            baseColor: "#3b82f6",
            icon: <Warehouse />,
            style: { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#ffffff' },
            hoverStyle: { background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }
        },
        {
            title: "FAQ",
            desc: "Answers to common questions",
            href: "/faq",
            image: "/images/use-everywhere/images3.png",
            baseColor: "#8b5cf6",
            icon: <Zap />,
            style: { background: 'linear-gradient(135deg, #8b5cf6, #f43f5e)', color: '#ffffff' },
            hoverStyle: { background: 'linear-gradient(135deg, #7c3aed, #e11d48)' }
        },
        {
            title: "Contact",
            desc: "Get in touch with us",
            href: "/contact",
            image: "/images/use-everywhere/images4.png",
            baseColor: "#f43f5e",
            icon: <ArrowRight />,
            style: { background: 'linear-gradient(135deg, #f43f5e, #9f1239)', color: '#ffffff' },
            hoverStyle: { background: 'linear-gradient(135deg, #e11d48, #881337)' }
        },
    ];

    const latestPrograms = [
        { title: "Logistics Management Fundamentals", href: "/academy", image: "/images/use-everywhere/images3.png" },
        { title: "Supply Chain Optimization", href: "/academy", image: "/images/use-everywhere/images4.png" }
    ];

    return (
        // ⚠️ CRITICAL: Parent container handles ALL hover events
        <div
            className="flex items-stretch h-full"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Trigger Button */}
            <button
                style={{ color: color.text }}
                className="px-4 cursor-pointer flex items-center group h-full"
            >
                {/* Animated dot indicator */}
                <span
                    style={{ backgroundColor: color.text }}
                    className={`${isOpen ? "mr-[6px] scale-100" : ""} 
            h-[5px] w-[5px] inline-block transition-all 
            group-hover:mr-[6px] duration-300 scale-0 
            group-hover:scale-100 rounded-full`}
                />
                <span className="flex items-center gap-2">
                    Resources
                    <ChevronDown
                        className={`${isOpen ? "-rotate-180" : ""} 
              group-hover:-rotate-180 duration-300 
              transition-all self-center w-4 h-4`}
                    />
                </span>
            </button>

            {/* Mega Menu Dropdown */}
            {isOpen && (
                <>
                    {/* Dropdown content - positioned right below navbar with NO gap */}
                    <motion.div
                        className="fixed left-0 top-[80px] w-full z-[90]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="bg-white shadow-2xl border-t border-gray-100 w-full">
                            <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-6 pb-10 sm:pt-8 sm:pb-12">
                                <div className="flex gap-8">
                                    {/* Left Side - Expanded Navigation */}
                                    <div className="w-72 flex-shrink-0">
                                        <div className="space-y-4">
                                            {resources.map((item) => (
                                                <div key={item.title}>
                                                    <Link
                                                        href={item.href}
                                                        className="group flex flex-col gap-1 px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-md"
                                                        style={{ ...item.style, '--hover-color': item.baseColor } as React.CSSProperties}
                                                        onMouseEnter={(e) => {
                                                            const target = e.currentTarget;
                                                            const hoverStyle = item.hoverStyle;
                                                            if (hoverStyle) {
                                                                target.style.background = hoverStyle.background;
                                                            }
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            const target = e.currentTarget;
                                                            target.style.background = item.style.background || '';
                                                        }}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <div className="flex items-center justify-between font-bold text-base sm:text-lg">
                                                            <div className="flex items-center gap-3">
                                                                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                                                    {item.icon}
                                                                </div>
                                                                <span>{item.title}</span>
                                                            </div>
                                                            <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                                        </div>
                                                        <div className="text-sm opacity-80 font-medium pl-9">
                                                            {item.desc}
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Side - Expanded Content Cards */}
                                    <div className="flex-1 grid grid-cols-2 gap-6">
                                        {/* Blog Section */}
                                        <div>
                                            <Link href="/blog" className="block mb-4 group" onClick={() => setIsOpen(false)}>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Blog</h3>
                                                <p className="text-sm text-gray-500">Latest articles and insights</p>
                                            </Link>
                                            <div className="space-y-3">
                                                {latestBlogs.slice(0, 3).map((blog, index) => (
                                                    <Link
                                                        key={index}
                                                        href={blog.href}
                                                        className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <div className="aspect-[5/2] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                                                            <Image
                                                                src={blog.image}
                                                                alt={blog.title}
                                                                width={400}
                                                                height={160}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-relaxed">
                                                            {blog.title}
                                                        </h4>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Academy Section */}
                                        <div>
                                            <Link href="/academy" className="block mb-4 group" onClick={() => setIsOpen(false)}>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">Academy</h3>
                                                <p className="text-sm text-gray-500">Latest programs and courses</p>
                                            </Link>
                                            <div className="space-y-3">
                                                {latestPrograms.slice(0, 3).map((program, index) => (
                                                    <Link
                                                        key={index}
                                                        href={program.href}
                                                        className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <div className="aspect-[5/2] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                                                            <Image
                                                                src={program.image}
                                                                alt={program.title}
                                                                width={400}
                                                                height={160}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-relaxed">
                                                            {program.title}
                                                        </h4>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default ResourcesMegaMenu;
