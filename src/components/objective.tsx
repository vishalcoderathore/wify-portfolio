import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Objective() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-24 px-6 md:px-24 bg-gray-900 text-white">
      {/* Left Side */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-end justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <Image
          src="/avatar.png"
          width={512}
          height={512}
          layout="intrinsic"
          alt="Annandita's Avatar"
          className="object-cover rounded-full self-end ml-auto"
        />
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col md:items-start justify-center text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
        <h2 className="text-4xl text-gray-300">👋 Meet Annandita</h2>
        <p className="text-lg md:text-xl text-gray-300 mt-6">
          Hi I’m Annandita, an <span className="text-blue-400 font-bold">Aspiring Product Manager</span> with a passion
          for building impactful products that drive value. With a background in engineering and a strategic mindset, I
          love solving complex problems, driving innovation, and collaborating with teams to build great experiences.
        </p>
        {/* Link to About Page */}
        <Link href="/about" className="mt-6 text-lg font-semibold text-pink-400 hover:text-pink-500 transition">
          Learn More About Me ↗
        </Link>
      </motion.div>
    </section>
  );
}
