'use client';

import { Button } from '@/components/ui/button'; // Importing ShadCN Button
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        Engineering Meets Strategy. <br />I Build Products That Drive Impact.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
        Engineering-backed PM | Data-driven Thinker | Builder at Heart
        <br />
        Currently shaping the future as an <strong>Engineering Management Graduate Student.</strong>
      </motion.p>

      {/* Call to Action using ShadCN Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <Link href="/contact">
          <Button variant="ghost" className="px-6 py-3 text-lg font-semibold">
            Let's Connect
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
