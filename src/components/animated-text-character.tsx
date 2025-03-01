'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface AnimatedTextCharacterProps {
  text: string;
}

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  // Extract initials
  const getInitials = (fullText: string) =>
    fullText
      .split(' ')
      .map(word => word.charAt(0))
      .join(''); // Get first letter of each word

  const fullTextArray = Array.from(text);
  const initialsArray = Array.from(getInitials(text));

  // Variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 },
    },
  };

  // Animation for appearing letters
  const childAppear = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -5,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // **Fix:** Stagger each letter's disappearance properly
  const childDisappear = {
    exit: (index: number) => ({
      opacity: 0,
      x: 5, // Moves right when disappearing
      transition: {
        duration: 0.03,
        delay: index * 0.03, // **Ensures each character disappears one by one**
      },
    }),
  };

  return (
    <motion.div
      onHoverStart={() => {
        setIsHovered(true);
        setIsRemoving(false);
      }}
      onHoverEnd={() => {
        setIsRemoving(true);
        setTimeout(() => {
          setIsHovered(false);
          setIsRemoving(false);
        }, fullTextArray.length * 30); // Delay showing "AB" until full text disappears
      }}
      className="relative flex items-center cursor-pointer"
      style={{ height: '2.5rem' }} // Fixed height to prevent layout shift
    >
      {/* **Fix:** Keep "AB" visible, but hidden when expanded */}
      <motion.div
        key="initials"
        className="absolute flex font-bold text-3xl leading-tight tracking-wide"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }} // Instantly fade in "AB" after hover out
        transition={{ duration: 0.2 }}>
        {initialsArray.map((letter, index) => (
          <motion.span variants={childAppear} key={`init-${index}`}>
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <AnimatePresence>
        {/* **On Hover:** Expand full text */}
        {isHovered && !isRemoving && (
          <motion.div
            key="fullText"
            variants={container}
            initial="hidden"
            animate="visible"
            className="absolute flex font-bold text-3xl leading-tight tracking-wide">
            {fullTextArray.map((letter, index) => (
              <motion.span variants={childAppear} key={`full-${index}`}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* **On Hover Out:** Remove text letter by letter */}
        {isRemoving && (
          <motion.div key="removeText" className="absolute flex font-bold text-3xl leading-tight tracking-wide">
            {fullTextArray.map((letter, index) => (
              <motion.span key={`remove-${index}`} custom={index} variants={childDisappear} exit="exit">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedTextCharacter;
