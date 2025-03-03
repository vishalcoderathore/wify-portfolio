'use client';

import ExpandCollapse from '@/components/ui/expand-collapse';
import { jobExperiences } from './experience-data';
import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

const MotionExpandCollapse = motion(ExpandCollapse);

const Work = (): ReactElement => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-start gap-12 py-24 px-6 md:px-24 bg-gray-900 text-white"
      id="work">
      <motion.div className="text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          🚀 My Journey in Building Impactful Products
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}>
          Passionate about solving complex problems, driving innovation, and crafting great experiences through
          collaboration.
        </motion.p>
      </motion.div>

      {/* Work Experiences */}
      <motion.div
        className="w-full max-w-6xl mx-auto px-4 overflow-hidden space-y-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.4 },
          },
        }}>
        {jobExperiences.map(experience => (
          <MotionExpandCollapse
            key={experience.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            title={experience.title}
            subtitle={experience.company}
            expandedContent={experience.duties}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
