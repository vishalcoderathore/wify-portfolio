'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: ['React', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Project Two',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Project Three',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    skills: ['GraphQL', 'Apollo', 'PostgreSQL'],
  },
  {
    title: 'Project Four',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    skills: ['Python', 'Django', 'REST API'],
  },
  {
    title: 'Project Five',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    skills: ['TailwindCSS', 'ShadCN', 'Framer Motion'],
  },
  {
    title: 'Project Six',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: ['Azure', 'Docker', 'Kubernetes'],
  },
];

const Projects = (): ReactElement => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-start gap-12 py-24 px-6 md:px-24 bg-gray-900 text-white"
      id="projects">
      <motion.div className="text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          💡 Bringing Ideas to Life
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}>
          Exploring new technologies, refining product experiences, and learning along the way.
        </motion.p>
      </motion.div>

      {/* Grid Container Animates When in View */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 }, // Stagger effect for cards
          },
        }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            <Card className="bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="default"
                      className="relative px-3 py-1 text-white bg-blue-500 rounded-md shadow-lg shadow-blue-500/50
             hover:shadow-blue-400/80 transition-all duration-300 hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
