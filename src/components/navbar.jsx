'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, GraduationCap, Users, Trophy, Bookmark } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      name: 'Find Tutors',
      icon: <GraduationCap className="w-5 h-5" />,
      href: '/tutors',
      subItems: [
        { name: 'Hire a Tutor', href: '/hirecarrer' },
        { name: 'Become a Tutor', href: '/becomeTutor' },
        { name: 'Tutor Rates', href: '/tutors/rates' },
      ],
    },
    {
      name: 'Study Materials',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/materials',
      subItems: [
        { name: 'Class 6', href: '/study/class6' },
        { name: 'Class 7', href: '/materials/6-8' },
        { name: 'Class 8', href: '/materials/6-8' },
        { name: 'Class 9', href: '/materials/9-10' },
        { name: 'Class 10', href: '/materials/10' },
        { name: 'Class 11', href: '/materials/10' },
        { name: 'Class 12', href: '/materials/10' },
      ],
    },
    {
      name: 'Book Exchange',
      icon: <Bookmark className="w-5 h-5" />,
      href: '/books',
      subItems: [
        { name: 'Buy Books', href: '/buybook' },
        { name: 'Sell Books', href: '/sellbook' },
        { name: 'Exchange Books', href: '/books/exchange' },
      ],
    },
    {
      name: 'Weekly Quiz',
      icon: <Trophy className="w-5 h-5" />,
      href: '/quiz',
    },
    {
      name: 'Toppers',
      icon: <Users className="w-5 h-5" />,
      href: '/toppers',
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`fixed w-full z-50 ${
        scrolled ? 'bg-indigo-900 shadow-lg' : 'bg-gradient-to-r from-indigo-900 to-purple-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" passHref>
              <span onClick={closeMenu} className="flex items-center space-x-2 cursor-pointer">
                <GraduationCap className="h-8 w-8 text-white" />
                <span className="text-white font-bold text-xl md:text-2xl font-mono">
                  Crack_IQ
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        activeDropdown === index
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'
                      }`}
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
                        >
                          {item.subItems.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href} passHref>
                              <span
                                onClick={closeMenu}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 cursor-pointer"
                              >
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.href} passHref>
                    <motion.div
                      onClick={closeMenu}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white cursor-pointer"
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </motion.div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/aboutus" passHref>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-md text-sm font-medium text-indigo-900 bg-white hover:bg-gray-100"
              >
                                About Us

              </motion.button>
            </Link>
            <Link href="/signup" passHref>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-pink-500 hover:bg-pink-600"
              >
                Login
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="border-b border-indigo-700 last:border-b-0"
                >
                  {item.subItems ? (
                    <div className="mb-2">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700"
                      >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </button>
                      {activeDropdown === index && (
                        <div className="pl-8 py-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href} passHref>
                              <span
                                onClick={closeMenu}
                                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:bg-indigo-700 cursor-pointer"
                              >
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} passHref>
                      <span
                        onClick={closeMenu}
                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700 cursor-pointer"
                      >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </span>
                    </Link>
                  )}
                </motion.div>
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
              <Link href="/signup" passHref>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 rounded-md text-base font-medium text-indigo-900 bg-white hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Sign Up
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
