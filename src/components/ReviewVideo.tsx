"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, X } from "lucide-react";
import Image from 'next/image';

interface VideoCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string; // Add thumbnail URL
  timestamp: string;
  transcript: string;
  reviewerName: string;
  rating: number;
}

const videos: VideoCard[] = [
  {
    id: 1,
    title: "SUPPLY CHAIN EXCELLENCE",
    subtitle: "MANUFACTURING PARTNER",
    description: "A comprehensive look at how our strategic logistics planning transformed their distribution network, reducing turnaround times by 30% across major industrial hubs.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%203.57.12%20PM.mp4",
    thumbnailUrl: "/images/review-video/thumbnail/1.png",
    timestamp: "0:15",
    transcript: "Working with Nisha Roadways has been a game-changer for our national distribution. Their ability to handle complex ODC movements while maintaining strict schedules is exactly what our industry needs. The level of professionalism and real-time tracking they provide gives us complete peace of mind.",
    reviewerName: "Amit Sharma",
    rating: 5
  },
  {
    id: 2,
    title: "PORT-TO-FACTORY SUCCESS",
    subtitle: "IMPORT/EXPORT DIRECTOR",
    description: "Highlighting our specialized container solutions and ExIm transport expertise that cleared a massive backlog and optimized port-to-factory logistics during peak season.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%203.57.37%20PM.mp4",
    thumbnailUrl: "/images/review-video/thumbnail/2.png",
    timestamp: "0:18",
    transcript: "The transition to Nisha Roadways for our cargo movements was seamless. Their team's expertise in handling delicate solar panel components and over-dimension cargo is unparalleled. We've seen a significant reduction in transit damage and a much smoother customs clearance process through their network.",
    reviewerName: "Priya Iyer",
    rating: 5
  },
  {
    id: 3,
    title: "INTELLIGENT LOGISTICS SOLUTIONS",
    subtitle: "OPERATIONS MANAGER",
    description: "A deep dive into how our multimodal transport strategies provided a cost-effective and reliable alternative to traditional road-only transport for long-haul shipments.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%203.58.00%20PM.mp4",
    thumbnailUrl: "/images/review-video/thumbnail/3.png",
    timestamp: "0:20",
    transcript: "What sets Nisha Roadways apart is their proactive approach to problem-solving. When we faced major rail disruptions, they immediately pivoted to a multimodal solution that kept our production line running. Their 24/7 support and dedication to our success make them more than just a vendor; they are a true partner.",
    reviewerName: "Vikram Mehta",
    rating: 5
  },
  {
    id: 4,
    title: "RELIABLE EMPTY CONTAINER TECH",
    subtitle: "LOGISTICS COORDINATOR",
    description: "Showcasing how our Empty Container Transportation (ECT) optimization helped a major exporter save significant costs on container repositioning through our intelligent network.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%204.02.02%20PM.mp4",
    thumbnailUrl: "/images/review-video/thumbnail/4.png",
    timestamp: "0:16",
    transcript: "The efficiency of their ECT service is remarkable. We used to struggle with container availability and high repositioning costs, but Nisha's managed network solved that for us nearly overnight. Their digital tracking system is intuitive and gives us the data we need to make informed decisions.",
    reviewerName: "Rahul Deshmukh",
    rating: 5
  },
  {
    id: 5,
    title: "COMPLEX ODC EXECUTION",
    subtitle: "PROJECT MANAGER",
    description: "Atul explains the intricate details of moving massive hydroelectric turbines across 1,500km, overcoming geographical and infrastructure challenges with our expert team.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%204.03.54%20PM.mp4",
    thumbnailUrl: "/images/review-video/thumbnail/5.png",
    timestamp: "0:25",
    transcript: "Moving 100-ton turbine components requires precision engineering and experience. Nisha Roadways handled every aspect, from route surveys to last-mile delivery, with absolute technical competence. They are the only team we trust with our high-value oversized cargo in this region.",
    reviewerName: "Atul Kulkarni",
    rating: 5
  },
  {
    id: 6,
    title: "NATIONWIDE WAREHOUSING INTEGRATION",
    subtitle: "SUPPLY CHAIN HEAD",
    description: "Exploring the seamless integration between our storage solutions and transportation network, creating a highly responsive and localized supply chain for their FMCG products.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%204.04.36%20PM.mp4",
    thumbnailUrl: "/images/review-video/thumbnail/6.png",
    timestamp: "0:30",
    transcript: "Our partnership with Nisha has allowed us to scale our operations into five new states in just under a year. Their integrated warehousing and transport solutions provided us with the local presence we needed without the heavy capital investment. Their commitment to safety and quality is visible in every aspect of their operation.",
    reviewerName: "Gaurav Singh",
    rating: 5
  },
  {
    id: 7,
    title: "SUSTAINABLE LOGISTICS PARTNER",
    subtitle: "ESG DIRECTOR",
    description: "How our fleet optimization and fuel-efficient practices helped their company achieve its carbon reduction targets while improving delivery performance across the South India network.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%204.04.46%20PM.mp4",
    thumbnailUrl: "/images/review-video/thumbnail/7.png",
    timestamp: "0:22",
    transcript: "Finding a logistics partner who takes sustainability as seriously as we do was a challenge until we found Nisha Roadways. Their modern fleet and route optimization tech have significantly lowered our carbon footprint. They prove that being efficient and being profitable go hand-in-hand in modern logistics.",
    reviewerName: "Siddharth Verma",
    rating: 5
  }
];

// Duplicate data for seamless looping (multi-copy for bi-directional loop)
const COPIES = 4;
const duplicatedVideos = Array.from({ length: COPIES }).flatMap(() => videos);

export default function ReviewVideo({ hideHeader = false }: { hideHeader?: boolean }) {
  // Add CSS for line-clamp utility
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const translateX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalWidth = useRef(0);
  const scrollSpeed = 0.5; // Adjust speed as needed

  // Calculate width of one logical set and position to middle copy for bi-directional scroll
  const calculateWidth = useCallback(() => {
    if (!containerRef.current) return;
    const fullScrollWidth = containerRef.current.scrollWidth;
    totalWidth.current = fullScrollWidth / COPIES;
    // Start at second copy so we can go both directions seamlessly
    translateX.current = -totalWidth.current;
    containerRef.current.style.transform = `translateX(${translateX.current}px)`;
  }, []);

  // Keep translateX within bounds across both directions
  const wrapTranslateX = useCallback(() => {
    if (!containerRef.current) return;
    if (translateX.current >= 0) {
      translateX.current -= totalWidth.current;
    }
    if (translateX.current <= -totalWidth.current * (COPIES - 1)) {
      translateX.current += totalWidth.current;
    } else if (translateX.current <= -totalWidth.current) {
      while (translateX.current <= -totalWidth.current * 2) {
        translateX.current += totalWidth.current;
      }
    }
  }, []);

  // Animation Loop
  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;
      wrapTranslateX();
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, wrapTranslateX]);

  // Handle Pointer Events (Mouse & Touch)
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    setIsPaused(true);
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    startX.current = clientX;
    scrollLeft.current = translateX.current;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const walk = (clientX - startX.current) * 2; // Adjust sensitivity
    translateX.current = scrollLeft.current + walk;
    wrapTranslateX();
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;

  };

  // Handle wheel events for trackpad/trackball horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    // Check if it's a horizontal scroll (deltaX) or vertical scroll (deltaY)
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

    if (isHorizontalScroll) {
      // Only handle horizontal scroll - prevent default and scroll
      e.preventDefault();
      e.stopPropagation();

      const scrollAmount = e.deltaX * 0.5; // Adjust sensitivity
      translateX.current -= scrollAmount;

      // Infinite scroll - seamless looping in both directions
      wrapTranslateX();

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${translateX.current}px)`;
      }
    }
    // Ignore vertical scrolling - let it work normally for page scrolling
  };


  // Handle play button click
  const handlePlayClick = (video: VideoCard) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };


  // Start Animation & Recalculate on Resize
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    animationRef.current = requestAnimationFrame(animate);

    // Add wheel event listener to prevent browser navigation only for horizontal scroll
    const handleWheelCapture = (e: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        // Only prevent default for horizontal scrolling
        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (isHorizontalScroll) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    // Use passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheelCapture, { passive: false });

    return () => {
      window.removeEventListener("resize", calculateWidth);
      document.removeEventListener('wheel', handleWheelCapture);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, calculateWidth]);


  return (
    <>
      <section className="w-full bg-white py-6 sm:py-10 md:py-16 lg:py-20 xl:py-10 xl:pt-20 overflow-hidden md:-mt-25 md:-mb-16 -mt-4 -mb-6 relative">


        <div className="w-full relative z-10">
          {/* Section Heading */}
          {!hideHeader && (
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
              <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-gray-900 tracking-tight mb-4 sm:mb-6">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">India's Leading Companies</span>
              </h2>
              <div className="w-16 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full mb-4 sm:mb-6"></div>
              <p className="text-xs sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Here's what industry leaders say about working with us.
              </p>
            </div>
          )}
          {/* Scrolling Video Container */}
          <div
            className="mt-12 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onWheel={handleWheel}
          >
            <div
              ref={containerRef}
              className="flex w-max will-change-transform cursor-grab active:cursor-grabbing gap-6"
            >
              {duplicatedVideos.map((video, index) => {
                const videoId = `${index}-${video.id}`;

                return (
                  <VideoCard
                    key={videoId}
                    video={video}
                    videoId={videoId}
                    onPlayClick={handlePlayClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Video Content */}
              <div className="lg:col-span-2 relative">
                <video
                  ref={modalVideoRef}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onLoadedData={() => {
                    // Unmute and play when video loads
                    if (modalVideoRef.current) {
                      modalVideoRef.current.muted = false;
                      modalVideoRef.current.play().catch(() => {
                        // If autoplay fails, user will need to click play manually
                        console.log('Autoplay prevented by browser');
                      });
                    }
                  }}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Review Details Sidebar */}
              <div className="lg:col-span-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 overflow-y-auto max-h-[90vh] flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(selectedVideo.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Reviewer Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{selectedVideo.reviewerName}</h3>
                    <p className="text-base text-blue-600 font-semibold">{selectedVideo.title}</p>
                    <p className="text-sm text-gray-600">{selectedVideo.subtitle}</p>
                  </div>

                  {/* Full Transcript */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">What They Said</h4>
                    <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/30 shadow-sm">
                      <p className="text-sm text-gray-700 leading-relaxed italic">
                        &quot;{selectedVideo.transcript}&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fixed Call to Action Button at Bottom */}
                <div className="mt-4 pt-4 border-t border-gray-200 flex-shrink-0">
                  <button
                    onClick={() => {
                      handleCloseModal();
                      // Navigate to contact page
                      setTimeout(() => {
                        window.location.href = '/contact';
                      }, 100);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Connect with Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// VideoCard component - Now using thumbnails instead of autoplay videos
const VideoCard: React.FC<{
  video: VideoCard;
  videoId: string;
  onPlayClick: (video: VideoCard) => void;
}> = ({ video, onPlayClick }) => {

  return (
    <div
      className="flex-shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden h-[280px] sm:h-[350px] md:h-[450px] lg:h-[520px] xl:h-[450px] w-[180px] sm:w-[350px] md:w-[320px] lg:w-[380px] xl:w-[330px] group mx-1 sm:mx-2 hover:translate-y-[-10px] mt-[10px] duration-300 transition-all shadow-lg select-none cursor-pointer"
      data-card="true"
      draggable={false}
      onClick={() => onPlayClick(video)}
      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
    >
      {/* Thumbnail Background - No autoplay, no preload */}
      <Image
        src={video.thumbnailUrl}
        alt={`${video.reviewerName} testimonial thumbnail`}
        fill
        sizes="(max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        draggable={false}
        unoptimized
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Play Button - Clickable */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPlayClick(video);
        }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group-hover:scale-110 z-20"
      >
        <Play className="w-8 h-8" fill="white" />
      </button>

      {/* Text Review Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 select-none">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-2 select-none">
          {[...Array(video.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Reviewer Name and Title */}
        <div className="mb-2 select-none">
          <h4 className="font-bold text-sm sm:text-base mb-1 select-none">{video.reviewerName}</h4>
          <p className="text-xs sm:text-sm text-gray-200 font-medium select-none">{video.title}</p>
        </div>

        {/* Transcript Preview */}
        <div className="relative select-none">
          <p className="text-xs sm:text-sm leading-relaxed line-clamp-3 opacity-90 select-none">
            &quot;{video.transcript}&quot;
          </p>

          {/* Read More Gradient */}
          <div className="absolute bottom-0 right-0 w-8 h-4 bg-gradient-to-l from-black/80 to-transparent" />
        </div>

        {/* Hover State - Brief Preview */}
        <div className="absolute inset-0 bg-black/90 pt-2 pb-4 px-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-start select-none">
          <div className="text-center select-none">
            <div className="flex items-center justify-center gap-1 mb-2 select-none">
              {[...Array(video.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h4 className="font-bold text-base mb-1 select-none">{video.reviewerName}</h4>
            <p className="text-xs text-gray-300 mb-2 select-none">{video.title}</p>
            <p className="text-xs leading-relaxed text-gray-200 line-clamp-2 mb-3 select-none">
              &quot;{video.transcript.length > 80 ? video.transcript.substring(0, 80) + '...' : video.transcript}&quot;
            </p>
            <div className="mt-1 flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayClick(video);
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 select-none"
              >
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
