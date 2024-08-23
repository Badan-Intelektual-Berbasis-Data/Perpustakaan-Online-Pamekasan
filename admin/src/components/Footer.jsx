import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion'

export default function Footer() {

  const footerRef = useRef(null)
  const isInView = useInView(footerRef)

  return (
    <footer ref={footerRef} className="bg-black text-white py-2 w-full fixed bottom-0 left-64">
      <p className="text-xs mr-64 text-center">PERPUSTAKAAN UMUM DAERAH PAMEKASAN</p>
    </footer>
  );
}
