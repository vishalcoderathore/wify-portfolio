'use client';

import { Button } from '@/components/ui/button';
import Objective from '@/components/objective';
import { useEffect, useRef } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';

export default function HomePage() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = sectionsRef.current?.children;
    if (sections) {
      Array.from(sections).forEach(section => observer.observe(section));
    }

    return () => {
      if (sections) {
        Array.from(sections).forEach(section => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <main ref={sectionsRef} className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-screen flex items-center justify-center">
        <Hero />
      </div>

      {/* Objective Section */}
      <div className="w-full h-screen flex items-center justify-center">
        <Objective />
      </div>

      {/* Call to Action Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Let's build something great together!</h2>
        <Button className="mt-5" variant="default">
          <a href="/work">View My Work</a>
        </Button>
      </div>

      <Footer />
    </main>
  );
}
