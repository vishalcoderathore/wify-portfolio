'use client';

import { Button } from '@/components/ui/button';
import Objective from '@/components/objective';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Work from '@/components/work';

export default function HomePage() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="w-full h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* Objective Section */}
      <section id="objective" className="w-full min-h-screen flex items-center justify-center">
        <Objective />
      </section>

      {/* Work Section - Add ID for Direct Linking */}
      <section id="work" className="w-full min-h-screen flex items-center justify-center scroll-mt-20">
        <Work />
      </section>

      {/* Call to Action Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Let's build something great together!</h2>
        <Button className="mt-5" variant="default">
          <a href="#work">View My Work</a>
        </Button>
      </section>

      <Footer />
    </main>
  );
}
