'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  // Track mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth animation for glow movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <>
      <Navbar />
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center px-24 bg-gray-900 overflow-hidden"
        onMouseMove={handleMouseMove}>
        {/* Glow effect following cursor */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            top: smoothY,
            left: smoothX,
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="absolute inset-0 pointer-events-none bg-transparent">
          <div
            className="w-full h-full opacity-10"
            style={{
              backgroundImage: `url('/neural_network.png')`,
              backgroundSize: 'cover',
            }}
          />
        </div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight text-white relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          Engineering Meets Strategy. <br />I Build Products That Drive Impact.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
          Engineering-backed PM | Data-driven Thinker | Builder at Heart
          <br />
          Currently shaping the future as an <strong>Engineering Management Graduate Student.</strong>
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="mt-6 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          <Link href="/contact">
            <Button
              variant="default"
              className="px-6 py-3 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-200 transition-all shadow-md hover:shadow-lg">
              Let's Connect
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
