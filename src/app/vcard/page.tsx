'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import VCardPopupForm from '../../components/VCardPopupForm';
import FloatingActionButton from '../../components/FloatingActionButton';

export default function VCardPage() {
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(false);

  // Auto-popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownAutoPopup) {
        setShowContactForm(true);
        setHasShownAutoPopup(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShownAutoPopup]);

  const handleDownloadVCF = () => {
    const link = document.createElement('a');
    link.href = '/images/vcard/vcf.vcf';
    link.download = 'nisha-roadways-contact.vcf';
    link.setAttribute('type', 'text/vcard');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden"
      style={{
        containerType: 'inline-size',
        minHeight: '100dvh'
      }}
    >
      {/* Fixed Background Pattern */}
      <div
        className="fixed inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url('/images/vcard/page-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Fluid Geometric Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div
            className="absolute border-2 border-pink-500 opacity-30 rotate-45"
            style={{
              top: 'clamp(2.5rem, 5vw, 5rem)',
              left: 'clamp(1.25rem, 2.5vw, 2.5rem)',
              width: 'clamp(4rem, 8vw, 8rem)',
              height: 'clamp(4rem, 8vw, 8rem)'
            }}
          />
          <div
            className="absolute border-2 border-cyan-400 opacity-30 rotate-12"
            style={{
              bottom: 'clamp(2.5rem, 5vw, 5rem)',
              right: 'clamp(1.25rem, 2.5vw, 2.5rem)',
              width: 'clamp(3rem, 6vw, 6rem)',
              height: 'clamp(3rem, 6vw, 6rem)'
            }}
          />
          <div
            className="absolute border-2 border-purple-400 opacity-40 rotate-45"
            style={{
              top: '50%',
              left: 'clamp(0.5rem, 1.25vw, 1.25rem)',
              width: 'clamp(2rem, 4vw, 4rem)',
              height: 'clamp(2rem, 4vw, 4rem)',
              transform: 'translateY(-50%) rotate(45deg)'
            }}
          />
          <div
            className="absolute border-2 border-blue-400 opacity-30 rotate-12"
            style={{
              top: '33.333%',
              right: 'clamp(0.5rem, 1.25vw, 1.25rem)',
              width: 'clamp(2.5rem, 5vw, 5rem)',
              height: 'clamp(2.5rem, 5vw, 5rem)'
            }}
          />
        </div>
      </div>

      {/* Main Content with CSS Grid */}
      <div className="relative z-10 min-h-screen grid place-items-center" style={{ padding: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
        {/* Card Container with Fluid Width */}
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: 'clamp(300px, 90vw, 400px)',
            containerType: 'inline-size'
          }}
        >
          {/* Business Card with Fluid Aspect Ratio */}
          <div
            className="relative w-full rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500"
            style={{
              aspectRatio: '17 / 10',
              borderRadius: 'clamp(0.5rem, 1.5vw, 1rem)'
            }}
          >
            <div
              className="absolute inset-0 bg-contain"
              style={{
                backgroundImage: `url('/images/vcard/nisha.png')`
              }}
            />

            {/* Blue Overlay Layer */}
            {/* <div className="absolute inset-0 bg-blue-600/30"></div> */}

            {/* Card Content Overlay with Flexbox */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60">
              <div
                className="flex flex-col justify-between h-full"
                style={{ padding: 'clamp(0.75rem, 3vw, 1.5rem)' }}
              >
                {/* Logo Section with Fluid Sizing */}
                {/* <div className="flex justify-center items-center relative z-10" style={{ marginBottom: 'clamp(-5rem, -12vw, -3.5rem)' }}>
                  <div 
                    className="relative"
                    style={{
                      width: 'clamp(12.5rem, 25vw, 15rem)',
                      height: 'clamp(12.5rem, 25vw, 15rem)'
                    }}
                  >
                    <Image
                      src="/images/vcard/nisha-logo.png"
                      alt="Nisha Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Contact Information Card with Fluid Design */}
          <div
            className="bg-white rounded-xl shadow-xl"
            style={{
              marginTop: 'clamp(0.75rem, 3vw, 1.5rem)',
              padding: 'clamp(0.75rem, 4vw, 1.5rem)',
              borderRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
              minHeight: 'clamp(280px, 70vw, 340px)'
            }}
          >
            {/* Header with Fluid Typography */}
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}
            >
              <div
                className="flex items-center"
                style={{ gap: 'clamp(0.375rem, 1.5vw, 0.75rem)' }}
              >
                <div
                  className="bg-gray-800 rounded-lg flex items-center justify-center"
                  style={{
                    width: 'clamp(1.25rem, 4vw, 2rem)',
                    height: 'clamp(1.25rem, 4vw, 2rem)',
                    borderRadius: 'clamp(0.25rem, 1vw, 0.5rem)'
                  }}
                >
                  <svg
                    className="text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      width: 'clamp(0.625rem, 2.5vw, 1.25rem)',
                      height: 'clamp(0.625rem, 2.5vw, 1.25rem)'
                    }}
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <h3
                  className="font-semibold text-gray-800"
                  style={{ fontSize: 'clamp(0.75rem, 3vw, 1.125rem)' }}
                >
                  Contact Us
                </h3>
              </div>
            </div>

            {/* Contact Sections with CSS Grid */}
            <div
              className="grid gap-4"
              style={{
                gap: 'clamp(0.75rem, 3vw, 1.5rem)',
                gridTemplateRows: 'repeat(3, auto)'
              }}
            >
              {/* Call Us Section */}
              <div>
                <div
                  className="flex items-center"
                  style={{
                    gap: 'clamp(0.375rem, 1.5vw, 0.75rem)',
                    marginBottom: 'clamp(0.375rem, 1.5vw, 0.75rem)'
                  }}
                >
                  <div
                    className="bg-green-500 rounded-full flex items-center justify-center"
                    style={{
                      width: 'clamp(0.75rem, 3vw, 1.25rem)',
                      height: 'clamp(0.75rem, 3vw, 1.25rem)'
                    }}
                  >
                    <svg
                      className="text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        width: 'clamp(0.375rem, 1.5vw, 0.75rem)',
                        height: 'clamp(0.375rem, 1.5vw, 0.75rem)'
                      }}
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <h4
                    className="font-medium text-gray-700"
                    style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
                  >
                    Call Us
                  </h4>
                </div>
                <div
                  className="grid gap-1"
                  style={{ gap: 'clamp(0.125rem, 0.5vw, 0.5rem)' }}
                >
                  {['022 - 41632222', '+91 8976768608', '+91 8976768586'].map((phone, index) => (
                    <p
                      key={index}
                      className="text-gray-600"
                      style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
                    >
                      {phone}
                    </p>
                  ))}
                </div>
              </div>

              {/* Email Section */}
              <div>
                <div
                  className="flex items-center"
                  style={{
                    gap: 'clamp(0.375rem, 1.5vw, 0.75rem)',
                    marginBottom: 'clamp(0.375rem, 1.5vw, 0.75rem)'
                  }}
                >
                  <div
                    className="bg-blue-500 rounded-full flex items-center justify-center"
                    style={{
                      width: 'clamp(0.75rem, 3vw, 1.25rem)',
                      height: 'clamp(0.75rem, 3vw, 1.25rem)'
                    }}
                  >
                    <svg
                      className="text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        width: 'clamp(0.375rem, 1.5vw, 0.75rem)',
                        height: 'clamp(0.375rem, 1.5vw, 0.75rem)'
                      }}
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <h4
                    className="font-medium text-gray-700"
                    style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
                  >
                    Email
                  </h4>
                </div>
                <p
                  className="text-gray-600"
                  style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
                >
                  business@nisharoadways.com
                </p>
              </div>

              {/* Address Section */}
              <div>
                <div
                  className="flex items-center"
                  style={{
                    gap: 'clamp(0.375rem, 1.5vw, 0.75rem)',
                    marginBottom: 'clamp(0.375rem, 1.5vw, 0.75rem)'
                  }}
                >
                  <div
                    className="bg-red-500 rounded-full flex items-center justify-center"
                    style={{
                      width: 'clamp(0.75rem, 3vw, 1.25rem)',
                      height: 'clamp(0.75rem, 3vw, 1.25rem)'
                    }}
                  >
                    <svg
                      className="text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{
                        width: 'clamp(0.375rem, 1.5vw, 0.75rem)',
                        height: 'clamp(0.375rem, 1.5vw, 0.75rem)'
                      }}
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h4
                    className="font-medium text-gray-700"
                    style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
                  >
                    Address
                  </h4>
                </div>
                <div
                  className="grid gap-1"
                  style={{ gap: 'clamp(0.125rem, 0.5vw, 0.25rem)' }}
                >
                  {[
                    '909, Mayuresh cosmos,',
                    'plot no 37, Sector 11, CBD Belapur,',
                    'Navi Mumbai, Maharashtra 400614',
                    'India'
                  ].map((line, index) => (
                    <p
                      key={index}
                      className="text-gray-600"
                      style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Form Button with Fluid Design */}
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-[#1556F1] text-white rounded-lg font-medium flex items-center justify-center hover:bg-[#0d47d1] transition-colors"
                  style={{
                    marginTop: 'clamp(0.5rem, 2vw, 1rem)',
                    padding: 'clamp(0.5rem, 2vw, 0.75rem)',
                    fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
                    gap: 'clamp(0.25rem, 1vw, 0.5rem)',
                    borderRadius: 'clamp(0.25rem, 1vw, 0.5rem)'
                  }}
                >
                  <svg
                    className="text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      width: 'clamp(0.75rem, 2.5vw, 1rem)',
                      height: 'clamp(0.75rem, 2.5vw, 1rem)'
                    }}
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>Contact Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Button - Fluid Positioning */}
      <button
        onClick={() => setShowQRPopup(true)}
        className="fixed bg-white rounded-full shadow-lg z-20 hover:scale-110 transition-transform duration-200"
        style={{
          bottom: 'clamp(0.75rem, 2vw, 1rem)',
          left: 'clamp(0.25rem, 1vw, 1rem)',
          width: 'clamp(2.5rem, 8vw, 4rem)',
          height: 'clamp(2.5rem, 8vw, 4rem)',
          padding: 'clamp(0.375rem, 1.5vw, 0.75rem)'
        }}
      >
        <Image
          src="/images/vcard/qr1.png"
          alt="QR Code"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </button>

      {/* Add to Contact Button - Fluid Positioning */}
      <button
        onClick={handleDownloadVCF}
        className="fixed bg-white rounded-full shadow-lg z-20 hover:scale-105 transition-transform duration-200 flex items-center"
        style={{
          bottom: 'clamp(0.75rem, 2vw, 1rem)',
          right: 'clamp(0.25rem, 1vw, 2rem)',
          padding: 'clamp(0.375rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem)',
          gap: 'clamp(0.125rem, 0.5vw, 0.5rem)',
          borderRadius: 'clamp(1.25rem, 4vw, 2rem)'
        }}
      >
        <svg
          className="text-gray-800"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{
            width: 'clamp(0.75rem, 2.5vw, 1.25rem)',
            height: 'clamp(0.75rem, 2.5vw, 1.25rem)'
          }}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
        <span
          className="text-gray-800 font-medium"
          style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
        >
          Add to Contact
        </span>
      </button>

      {/* QR Code Full Screen Popup */}
      {showQRPopup && (
        <div
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          style={{ padding: 'clamp(0.5rem, 2vw, 1.5rem)' }}
        >
          <button
            onClick={() => setShowQRPopup(false)}
            className="absolute bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            style={{
              top: 'clamp(0.25rem, 1vw, 1rem)',
              right: 'clamp(0.25rem, 1vw, 1rem)',
              width: 'clamp(1.5rem, 5vw, 2.5rem)',
              height: 'clamp(1.5rem, 5vw, 2.5rem)'
            }}
          >
            <svg
              className="text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                width: 'clamp(0.75rem, 2.5vw, 1.5rem)',
                height: 'clamp(0.75rem, 2.5vw, 1.5rem)'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <Image
              src="/images/vcard/qr1.png"
              alt="QR Code"
              width={250}
              height={250}
              className="object-contain"
              style={{
                width: 'clamp(12rem, 60vw, 20rem)',
                height: 'clamp(12rem, 60vw, 20rem)'
              }}
            />
          </div>
        </div>
      )}

      {/* VCard Popup Form */}
      <VCardPopupForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}