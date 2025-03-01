import { Button } from '@/components/ui/button';
import Objective from '@/components/objective';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <Hero />

      {/* Objective Section */}
      <Objective />

      {/* Call to Action */}
      <section className="text-center mt-10">
        <h2 className="text-2xl md:text-4xl font-bold">Let's build something great together!</h2>
        <Button className="mt-5" variant="default">
          <a href="/work">View My Work</a>
        </Button>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
