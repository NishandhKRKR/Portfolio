import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Tech', href: '#tech' },
    { name: 'About', href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6 pointer-events-none">
        <header
          className={`pointer-events-auto transition-all duration-500 rounded-full border ${
            isScrolled
              ? 'py-3 px-6 bg-background/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
              : 'py-4 px-8 bg-background/30 backdrop-blur-md border-white/5 shadow-none'
          }`}
        >
          <div className="flex items-center gap-6 lg:gap-12">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                StackNova<span className="text-primary group-hover:text-foreground transition-colors">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => {
                  const isActive = location.hash === link.href || (location.hash === '' && link.href === '#home');
                  return (
                    <li key={link.name} className="relative">
                      <a
                        href={link.href}
                        className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors ${
                          isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                        }`}
                      >
                        {link.name}
                      </a>
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-primary/10 rounded-full z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground/80 hover:text-foreground"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <a
                href="#contact"
                className="hidden sm:flex px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-105 transition-transform items-center gap-2"
              >
                Let's Talk
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground/80"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden"
          >
            <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        (location.hash === link.href || (location.hash === '' && link.href === '#home'))
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-foreground/5'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4 mt-2 border-t border-foreground/10">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center w-full px-6 py-4 rounded-xl bg-foreground text-background text-lg font-semibold"
                  >
                    Start a Project
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
