 'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, GraduationCap, Users, Trophy, Bookmark } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Debounced scroll for performance
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback(
    (index) => setActiveDropdown(prev => (prev === index ? null : index)),
    []
  );

  const navItems = useMemo(() => [
    {
      name: 'Find Tutors',
      icon: <GraduationCap className="w-5 h-5" />,
      href: '/tutors',
      subItems: [
        { name: 'Hire a Tutor', href: '/hirecarrer' },
        { name: 'Become a Tutor', href: '/becomeTutor' },
      ],
    },
    {
      name: 'Study Materials',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/materials',
      subItems: Array.from({ length: 7 }, (_, i) => ({
        name: `Class ${i + 6}`,
        href: `/study/class${i + 6}`
      })),
    },
    {
      name: 'Book Exchange',
      icon: <Bookmark className="w-5 h-5" />,
      href: '/books',
      subItems: [
        { name: 'Buy Books', href: '/buybook' },
        { name: 'Sell Books', href: '/sellbook' },
      ],
    },
    { name: 'Weekly Quiz', icon: <Trophy className="w-5 h-5" />, href: '/quiz' },
    { name: 'Toppers', icon: <Users className="w-5 h-5" />, href: '/toppers' },
  ], []);

  const baseButtonClass = "px-3 py-2 rounded-md text-base font-medium";

  // NavItem Component (Reusable)
  const NavItem = ({ item, index, isMobile = false }) => {
    const hasSub = item.subItems && item.subItems.length > 0;

    if (hasSub) {
      return (
        <div className={`${isMobile ? 'mb-2' : 'relative'}`}>
          <button
            onClick={() => toggleDropdown(index)}
            aria-expanded={activeDropdown === index}
            aria-controls={`dropdown-${index}`}
            className={`${baseButtonClass} flex items-center w-full ${isMobile ? 'text-white hover:bg-indigo-700' : activeDropdown === index ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'}`}
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </button>

          <AnimatePresence>
            {activeDropdown === index && (
              <motion.div
                id={`dropdown-${index}`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`${isMobile ? 'pl-8 py-2 space-y-2' : 'absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50'}`}
              >
                {item.subItems.map(sub => (
                  <Link key={sub.name} href={sub.href} passHref>
                    <span
                      onClick={closeMenu}
                      className={`block px-3 py-2 rounded-md ${isMobile ? 'text-indigo-200 hover:bg-indigo-700' : 'text-gray-700 hover:bg-indigo-100'} cursor-pointer`}
                    >
                      {sub.name}
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link href={item.href} passHref>
        <span
          onClick={closeMenu}
          className={`${baseButtonClass} flex items-center ${isMobile ? 'text-white hover:bg-indigo-700' : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'} cursor-pointer`}
        >
          {item.icon}
          <span className="ml-2">{item.name}</span>
        </span>
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-indigo-900 shadow-lg' : 'bg-gradient-to-r from-indigo-900 to-purple-800'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <span onClick={closeMenu} className="flex items-center space-x-2 cursor-pointer">
                <GraduationCap className="h-8 w-8 text-white" />
                <span className="text-white font-bold text-xl md:text-2xl font-mono">Crack_IQ</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <NavItem key={item.name} item={item} index={index} />
            ))}
          </nav>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/blog" passHref>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded-md text-sm font-medium text-indigo-900 bg-white hover:bg-gray-100">
                Blog
              </motion.button>
            </Link>
            <Link href="/aboutus" passHref>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded-md text-sm font-medium text-white bg-pink-500 hover:bg-pink-600">
                About Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-indigo-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <NavItem key={item.name} item={item} index={index} isMobile />
              ))}
            </div>

            <div className="pt-4 pb-6 px-4 space-y-2">
              <Link href="/aboutus" passHref>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 rounded-md text-base font-medium text-white bg-pink-500 hover:bg-pink-600"
                  onClick={closeMenu}
                >
                  About Us
                </motion.button>
              </Link>
              <Link href="/blog" passHref>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 mt-5 rounded-md text-base font-medium text-indigo-900 bg-white hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Blog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
