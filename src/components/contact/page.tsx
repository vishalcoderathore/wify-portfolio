'use client';

import { Textarea } from '@/components/ui/textarea';
import { IoDocumentText } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FiLinkedin } from 'react-icons/fi';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact = () => {
  // State for form fields
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    }

    setLoading(false);
  };

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
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        {/* Name Input */}
        <div>
          <label className="text-gray-300 font-medium">Your Name</label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="mt-2 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="text-gray-300 font-medium">Your Email</label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="mt-2 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="text-gray-300 font-medium">Your Message</label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="mt-2 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-md transition-all duration-300
          hover:bg-pink-600 hover:shadow-[0_0_15px_5px] hover:shadow-pink-400 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Status Message */}
        {status && <p className="text-center text-sm text-gray-300 mt-2">{status}</p>}
      </motion.form>

      {/* Links to LinkedIn & Resume */}
      <div className="flex flex-col items-center space-y-4 text-gray-300">
        {/* LinkedIn */}
        <Link
          href={new URL(process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/annandita-bhati')}
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-400 transition">
          <FiLinkedin className="h-5 w-5" />
          <span>Connect on LinkedIn</span>
        </Link>

        {/* Resume Download */}
        <Link
          href={new URL(process.env.NEXT_PUBLIC_RESUME_URL || 'https://drive.google.com/your-resume-link')}
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
