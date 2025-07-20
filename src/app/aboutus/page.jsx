'use client'

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
     <Head>
        <title>About CrackIQ | Who We Are</title>
        <meta name="description" content="Learn more about CrackIQ — our mission, our team, and how we help students succeed." />
        <meta name="keywords" content="about CrackIQ, our team, CrackIQ mission, exam prep" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.crackiq.in/aboutus" />

        {/* Open Graph */}
        <meta property="og:title" content="About CrackIQ" />
        <meta property="og:description" content="Know the story behind CrackIQ and how we support students in competitive exam prep." />
        <meta property="og:image" content="https://www.crackiq.in/about-og.jpg" />
        <meta property="og:url" content="https://www.crackiq.in/aboutus" />
        <meta property="og:type" content="website" />

      </Head>
       

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0C0950] to-[#261FB3] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Empowering students through affordable education and technology
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing education access by connecting students with affordable resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="text-[#261FB3] text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Affordable Education</h3>
            <p className="text-gray-600">
              "Education is the most powerful weapon which you can use to change the world" - Nelson Mandela
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="text-[#261FB3] text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-2">Direct Connections</h3>
            <p className="text-gray-600">
              "Alone we can do so little; together we can do so much" - Helen Keller
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="text-[#261FB3] text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">
              "Innovation distinguishes between a leader and a follower" - Steve Jobs
            </p>
          </motion.div>
        </div>
      </section>

     
        {/* Founders Section */}
<section className="py-16 bg-gradient-to-b from-white to-gray-50 px-4">
  <div className="max-w-6xl mx-auto">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-gray-800 mb-16"
    >
      Meet Our <span className="text-[#261FB3]">Visionary</span> Founders
    </motion.h2>
    
    <div className="grid md:grid-cols-2 gap-16">
      {/* Founder 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#261FB3] to-[#0C0950] opacity-20"></div>
            <Image
              src="/ankit.jpg"
              alt="Ankit Singh"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#261FB3] to-[#0C0950]"></div>
          </div>

          <div className="p-8 md:w-2/3">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800 mr-3">Ankit Singh</h3>
              <span className="px-3 py-1 bg-[#261FB3]/10 text-[#261FB3] text-sm font-medium rounded-full">
                Founder
              </span>
            </div>
            <p className="text-[#261FB3] font-medium mb-4">Tech Visionary & Developer</p>
            <p className="text-gray-600 mb-6">
              A passionate student from Mukundpur, Delhi, revolutionizing education through innovative technology solutions.
            </p>
            
            <div className="border-l-4 border-[#261FB3] pl-4 mb-6">
              <p className="italic text-gray-700">
                "Dream big and dare to fail, because great things never come from comfort zones."
              </p>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/viranshusingh055/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Founder 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#261FB3] to-[#0C0950] opacity-20"></div>
            <Image
              src="/gautam.jpg"
              alt="Gautam Pandey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#261FB3] to-[#0C0950]"></div>
          </div>

          <div className="p-8 md:w-2/3">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800 mr-3">Gautam Pandey</h3>
              <span className="px-3 py-1 bg-[#0C0950]/10 text-[#0C0950] text-sm font-medium rounded-full">
                Co-Founder
              </span>
            </div>
            <p className="text-[#261FB3] font-medium mb-4">Design Innovator</p>
            <p className="text-gray-600 mb-6">
              A creative visionary from Delhi, crafting intuitive educational platforms that bridge the gap between students and resources.
            </p>
            
            <div className="border-l-4 border-[#0C0950] pl-4 mb-6">
              <p className="italic text-gray-700">
                "Design is not just what it looks like, it's how it works to solve real problems."
              </p>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#EA4C89] transition-colors"
                aria-label="Dribbble"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24a12 12 0 100-24 12 12 0 000 24zm9.58-12.29a19.9 19.9 0 00-.16-1.47c-.75.15-1.47.22-2.18.22-1.61 0-3.07-.45-4.42-1.3.6 1.8 1.5 3.6 2.74 5.3 1.56-.6 2.96-1.5 4.02-2.75zM12 10.8a21.9 21.9 0 00-4.5.5 27.6 27.6 0 013.6-5.4 8.7 8.7 0 015.1 3.3c-1.4.6-2.9 1-4.2 1.6zm-5.3-3.5c-.9 1.2-1.6 2.6-2.1 4a19.2 19.2 0 00-2.6-.3 9.7 9.7 0 014.7-3.7zm-4.1 5.7c.3 0 .6 0 .9.1a15.1 15.1 0 012.1 4.5 12 12 0 01-3-4.6zm4.5 5.8c.6-1.2 1.3-2.4 2.1-3.5a16.7 16.7 0 00-2.1-.3 16.9 16.9 0 00 0 3.8zm2.7-5.2c-.8-1.8-1.7-3.5-2.7-5.1a8.4 8.4 0 00-4.1 3.3c1.4.3 2.8.6 4.2 1.1.6-.4 1.2-.8 1.8-1.2.8.5 1.6.9 2.8.9z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/viranshusingh055/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Inspiration Section */}
      <section className="py-16 px-4 bg-[#0C0950] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            Our Inspiration
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#261FB3] p-8 rounded-lg shadow-lg"
          >
            <blockquote className="text-xl italic mb-6">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </blockquote>
            <p className="font-medium">- Malcolm X</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Movement</h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of the revolution making education accessible to every student in India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/sell"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#261FB3] text-white font-medium rounded-lg shadow-lg hover:bg-[#0C0950]"
            >
              Sell Your Books
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#261FB3] font-medium rounded-lg shadow-lg border border-[#261FB3] hover:bg-gray-50"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}