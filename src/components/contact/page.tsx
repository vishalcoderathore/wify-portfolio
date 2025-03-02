'use client';

import { Textarea } from '@/components/ui/textarea';
import { IoDocumentText } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import Link from 'next/link';

const Contact = (): ReactElement => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start gap-12 py-24 px-6 md:px-24 bg-gray-900 text-white">
      {/* Heading & Subheading */}
      <motion.div className="text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          📬 Let&apos;s Connect
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}>
          Have a question or just want to say hello? Drop me a message, and I&apos;ll get back to you soon!
        </motion.p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        {/* Name Input */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Your Name</label>
          <Input
            type="text"
            placeholder="John Doe"
            className="mt-2 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Your Email</label>
          <Input
            type="email"
            placeholder="you@example.com"
            className="mt-2 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Your Message</label>
          <Textarea
            placeholder="Write your message..."
            className="mt-2 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
          Send Message
        </Button>
      </motion.form>

      {/* Links to LinkedIn & Resume */}
      <div className="flex flex-col items-center space-y-4 text-gray-300">
        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/annandita-bhati/"
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-400 transition">
          <FiLinkedin className="h-5 w-5" />
          <span>Connect on LinkedIn</span>
        </Link>

        {/* Resume Download */}
        <Link
          href="https://drive.google.com/your-resume-link"
          target="_blank"
          className="flex items-center gap-2 hover:text-green-400 transition">
          <IoDocumentText className="h-5 w-5" />
          <span>Download My Resume</span>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
