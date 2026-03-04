'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Don't show navbar on vCard pages or Sanity Studio pages
  if (pathname?.startsWith('/vcard') || pathname?.startsWith('/studio')) {
    return null;
  }

  return <Navbar />;
}