'use client';

import AnimatedTextCharacter from '@/components/animated-text-character';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full absolute top-0 left-0 z-50 bg-transparent text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Animated Brand Name */}
          <Link href="/" className="cursor-pointer">
            <AnimatedTextCharacter text={'Annandita Bhati'} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/#work">Work</NavLink>
            <NavLink href="/education">Education</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative w-8 h-8 z-50" onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center">
                  <X className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center">
                  <Menu className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu (Moved outside navbar for proper rendering) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-40">
            <div className="flex flex-col space-y-6 text-center text-xl text-white">
              <NavLink href="/about" onClick={() => setIsOpen(false)}>
                About
              </NavLink>
              <NavLink href="/#work" onClick={() => setIsOpen(false)}>
                Work
              </NavLink>
              <NavLink href="/education" onClick={() => setIsOpen(false)}>
                Education
              </NavLink>
              <NavLink href="/#projects" onClick={() => setIsOpen(false)}>
                Projects
              </NavLink>
              <NavLink href="/#contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="text-white text-lg hover:text-blue-400 transition" onClick={onClick}>
      {children}
    </Link>
  );
}
