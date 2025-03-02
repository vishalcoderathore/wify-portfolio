'use client';

import Contact from '@/components/contact/page';
import Objective from '@/components/objective';
import Projects from '@/components/projects';
import Work from '@/components/work/page';
import Footer from '@/components/footer';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
        {/* Hero Section */}
        <section id="hero" className="w-full h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* Objective Section */}
        <section id="objective" className="w-full min-h-screen flex items-center justify-center">
          <Objective />
        </section>

        {/* Work Section */}
        <section id="work" className="w-full min-h-screen flex items-center justify-center scroll-mt-20">
          <Work />
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full min-h-screen flex items-center justify-center scroll-mt-20">
          <Projects />
        </section>

        {/* Call to Action Section */}
        <section id="contact" className="w-full h-screen flex flex-col items-center justify-center text-center">
          <Contact />
        </section>
      </main>
      {/* Footer Section */}
      <Footer />
    </>
  );
}
