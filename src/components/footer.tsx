'use client';

import { usePathname } from 'next/navigation';
import { FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Annandita Bhati</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center Section: Quick Links */}
        <nav className="my-4 md:my-0">
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <a
                href={pathname === '/' ? '#hero' : '/'}
                onClick={e => {
                  if (pathname === '/') {
                    e.preventDefault();
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.replaceState(null, '', '/');
                  }
                }}
                className="hover:text-blue-400 transition cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <Link href="/#work" className="hover:text-blue-400 transition">
                Work
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400 transition opacity-50 pointer-events-none">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Section: Social Links */}
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com/in/annandita-bhati/"
            target="_blank"
            className="hover:text-blue-400 transition">
            <FiLinkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
