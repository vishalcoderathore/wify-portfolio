'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Objective() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-24 bg-gray-900 text-white">
      {/* Left Side - Product Management Quote */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          "Good Product Managers think in terms of delivering value, not just features."
        </h2>
        <p className="text-gray-400 mt-4 text-lg">– Marty Cagan</p>
      </motion.div>

      {/* Right Side - About You */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-start justify-center text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
        <p className="text-lg md:text-xl text-gray-300">
          I’m an <span className="text-blue-400 font-bold">Aspiring Product Manager</span> with a passion for building
          impactful products that drive value. With a background in engineering and a strategic mindset, I love solving
          complex problems, driving innovation, and collaborating with teams to build great experiences.
        </p>

        {/* Link to About Page */}
        <Link href="/about" className="mt-6 text-lg font-semibold text-pink-400 hover:text-pink-500 transition">
          Learn More About Me ↗
        </Link>
      </motion.div>
    </section>
  );
}
