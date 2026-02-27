"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";
import WhyUsMegaMenu from "@/components/WhyUsMegaMenu";
import ResourcesMegaMenu from "@/components/ResourcesMegaMenu";
import {
  Menu,
  X,
  ChevronDown,
  Truck,
  Container,
  Settings,
  Shield,
  Package,
  Lock,
  Warehouse,
  FileText,
  Train,
  Ship,
  Sun,
  Box
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isAnyMenuOpen, setIsAnyMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Track which menus are open
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [whyUsOpen, setWhyUsOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);

  // Update isAnyMenuOpen when any menu changes
  React.useEffect(() => {
    setIsAnyMenuOpen(servicesOpen || whyUsOpen || resourcesOpen);
  }, [servicesOpen, whyUsOpen, resourcesOpen]);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Determine text color based on scroll state, menu state, and pathname
  const getNavColor = () => {
    if (isScrolled || isAnyMenuOpen || pathname !== '/') {
      return { text: '#171717' };
    }
    return { text: '#ffffff' };
  };

  const services = [
    {
      title: "EMPTY CONTAINER TRANSPORTATION",
      desc: "Pioneers in empty container movement across all major ports and ICDs.",
      href: "/services/empty-container-transportation",
      icon: <Truck className="w-5 h-5" />
    },
    {
      title: "EXPORT & IMPORT CONTAINERS",
      desc: "Full-service container logistics for 20ft, 40ft, and 45ft units.",
      href: "/services/export-import-containers",
      icon: <Container className="w-5 h-5" />
    },
    {
      title: "PROJECT CARGO MANAGEMENT",
      desc: "Oversized and heavy machinery transportation.",
      href: "/services/over-dimension-cargo",
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "CHEMICAL TRANSPORTATION",
      desc: "Certified hazardous and non-hazardous chemical transport.",
      href: "/services/chemical-transportation",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "BULK CARGO SOLUTIONS",
      desc: "Steel coils, grains, construction materials transport.",
      href: "/services/bulk-cargo-solutions",
      icon: <Package className="w-5 h-5" />
    },
    {
      title: "HIGH-VALUE GOODS ESCORT",
      desc: "Armed security escort services with GPS tracking.",
      href: "/services/high-value-goods",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "WAREHOUSING & STORAGE",
      desc: "Climate-controlled facilities near major ports.",
      href: "/services/storage-warehousing",
      icon: <Warehouse className="w-5 h-5" />
    },
    {
      title: "LCL CONSOLIDATION",
      desc: "Small package delivery across India.",
      href: "/services/lcl-consolidation",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "DOMESTIC CARGO IN OUR CONTAINERS",
      desc: "Move your domestic cargo in our ISO containers.",
      href: "/services/domestic-cargo-containers",
      icon: <Box className="w-5 h-5" />
    },
    {
      title: "SOLAR PANEL & PARTS TRANSPORTATION",
      desc: "Specialized solar transportation with trained drivers.",
      href: "/services/solar-panel-transportation",
      icon: <Sun className="w-5 h-5" />
    },
    {
      title: "RAIL SERVICES",
      desc: "Cost-effective rail transportation.",
      href: "/services/rail-services",
      icon: <Train className="w-5 h-5" />
    },
    {
      title: "COASTAL SERVICES",
      desc: "Coastal shipping services connecting major ports.",
      href: "/services/coastal-services",
      icon: <Ship className="w-5 h-5" />
    },
  ];

  const whyUs = [
    { title: "About", desc: "Who we are and our mission", href: "/about" },
    { title: "Our team", desc: "Meet the folks behind Nisha", href: "/team" },
    { title: "Collaborated with", desc: "Brands that trust us", href: "/partners" },
    { title: "Testimonials", desc: "What customers say", href: "/testimonials" },
  ];

  const resources = [
    { title: "Blogs", desc: "Insights and updates", href: "/blog" },
    { title: "Nisha Academy", desc: "Logistics education and training", href: "/academy" },
    { title: "FAQ", desc: "Answers to common questions", href: "/faq" },
    { title: "Contact", desc: "Get in touch with us", href: "/contact" },
  ];

  return (
    <>
      {/* Centralized Backdrop Blur for all Mega Menus */}
      {isAnyMenuOpen && (
        <div
          className="fixed inset-0 top-[80px] bg-black/40 backdrop-blur-2xl z-[80] transition-all duration-500"
          onClick={() => {
            setServicesOpen(false);
            setWhyUsOpen(false);
            setResourcesOpen(false);
          }}
        />
      )}

      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isAnyMenuOpen
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'
        : pathname === '/' && !isScrolled && !isAnyMenuOpen
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white border-b border-gray-200/50'
        }`}>
        {/* Subtle gradient overlay - when scrolled or menu open */}
        {(isScrolled || isAnyMenuOpen) && <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/50"></div>}

        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <Image
                  src="/images/nav-logo.png"
                  alt="Nisha"
                  width={140}
                  height={42}
                  className={`h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105 ${isScrolled || isAnyMenuOpen || pathname !== '/' ? 'brightness-100' : 'brightness-0 invert'
                    }`}
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </Link>

            {/* Desktop Navigation - Each mega menu manages its own state */}
            <nav className="hidden lg:flex items-stretch h-full gap-2">
              <ServicesMegaMenu
                color={getNavColor()}
                onOpenChange={setServicesOpen}
              />
              <WhyUsMegaMenu
                color={getNavColor()}
                onOpenChange={setWhyUsOpen}
              />
              <ResourcesMegaMenu
                color={getNavColor()}
                onOpenChange={setResourcesOpen}
              />
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link href="/services">
                <Button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden">
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    DISCOVER SOLUTIONS
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className={`rounded-xl transition-all duration-300 w-12 h-12 ${isScrolled || isAnyMenuOpen || pathname !== '/'
                  ? 'text-gray-900 hover:text-blue-600 hover:bg-gray-100/50'
                  : 'text-white hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation - Full-screen overlay */}
          {
            isMobileMenuOpen && (
              <div className="fixed inset-0 z-[120] lg:hidden w-screen h-[100dvh] bg-gray-900 overflow-hidden">
                <div className="flex flex-col h-full">
                  {/* Top bar with logo and close button */}
                  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700/40">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex-shrink-0">
                      <Image src="/images/nav-logo.png" alt="Nisha" width={120} height={36} className="h-9 w-auto" />
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label="Close menu"
                      className="rounded-xl w-10 h-10 text-white hover:text-blue-400 hover:bg-gray-800/50"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <div className="divide-y divide-gray-700/50 px-2 pb-10 pt-2">
                      {/* Services */}
                      <details className="group">
                        <summary className="list-none flex items-center justify-between px-3 py-4 cursor-pointer text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                          <span>Services</span>
                          <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300 text-blue-400 flex-shrink-0" />
                        </summary>
                        <div className="px-3 pb-4 space-y-2">
                          {/* View All Services Link */}
                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl text-center shadow-lg transition-all duration-300 mb-4"
                          >
                            View All Services
                          </Link>

                          {/* Services List - Compact Design */}
                          <div className="space-y-2">
                            {services.map((i) => (
                              <Link
                                key={i.title}
                                href={i.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-800/60 border border-transparent hover:border-gray-700/50 transition-all duration-200 active:bg-gray-800/70"
                              >
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-lg flex items-center justify-center mt-0.5 transition-colors text-blue-400 group-hover:text-blue-300">
                                  {i.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight mb-1">
                                    {i.title}
                                  </div>
                                  <div className="text-xs text-gray-400 truncate">
                                    {i.desc}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </details>

                      {/* Why us */}
                      <details className="group">
                        <summary className="list-none flex items-center justify-between px-2 py-4 cursor-pointer text-lg font-medium text-white">
                          Why Us
                          <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300 text-blue-400" />
                        </summary>
                        <div className="grid grid-cols-1 gap-3 px-2 pb-6">
                          {whyUs.map((i) => (
                            <Link key={i.title} href={i.href} onClick={() => setIsMobileMenuOpen(false)} className="group rounded-xl px-4 py-3 hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50 transition-all duration-300">
                              <div className="font-semibold text-base text-white group-hover:text-blue-400 transition-colors duration-200">{i.title}</div>
                              <div className="text-sm text-gray-300">{i.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </details>

                      {/* Resources */}
                      <details className="group">
                        <summary className="list-none flex items-center justify-between px-2 py-4 cursor-pointer text-lg font-medium text-white">
                          Resources
                          <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300 text-blue-400" />
                        </summary>
                        <div className="grid grid-cols-1 gap-3 px-2 pb-6">
                          {resources.map((i) => (
                            <Link key={i.title} href={i.href} onClick={() => setIsMobileMenuOpen(false)} className="group rounded-xl px-4 py-3 hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50 transition-all duration-300">
                              <div className="font-semibold text-base text-white group-hover:text-blue-400 transition-colors duration-200">{i.title}</div>
                              <div className="text-sm text-gray-300">{i.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </details>

                      <div className="pt-6 px-2">
                        <Link
                          href="/contact"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="w-full py-4 text-base font-medium bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </header>
    </>
  );
}
