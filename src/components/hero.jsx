 'use client';

import { motion } from "framer-motion";
import Head from "next/head";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import { Poppins } from 'next/font/google';
 
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'], display: 'swap' });

// Dynamically import Player with SSR disabled
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>CrackIQ | Learn Smarter, Rank Higher - JEE, NEET, CBSE & Competitive Exams</title>
        <meta name="description" content="Best online learning platform for 6th-12th Science/Commerce, JEE, NEET, CUET & Computer Science. Get NCERT solutions, mock tests, AI-powered practice & expert guidance." />
        <meta name="keywords" content="CrackIQ, Crack IQ,crack iq , crack_iq , JEE preparation, NEET coaching, CBSE Class 6-12, Science notes, Commerce study material, Computer Science learning, NCERT solutions, mock tests for JEE, NEET online coaching, CUET preparation, competitive exam practice, AI learning for students, CBSE board exam tips, PCMB study guide, coding for students" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.crackiq.in/" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="CrackIQ - Top JEE, NEET & CBSE 6th-12th Online Learning" />
        <meta property="og:description" content="Ace JEE, NEET, CBSE & Computer Science with CrackIQ’s smart mock tests, NCERT solutions & AI-powered learning for Class 6-12 Science/Commerce students." />
        <meta property="og:image" content="https://www.crackiq.in/logo.jpg" />
        <meta property="og:url" content="https://www.crackiq.in/" />
        <meta property="og:type" content="website" />
      </Head>
<>
      <main className={poppins.className}>
        <section className="min-h-[90vh] flex items-center bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background circles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100/70" />
            <div className="absolute bottom-1/4 right-20 w-48 h-48 rounded-full bg-blue-50/70" />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-100/70" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 1, y: 0 }} // Immediate visibility for LCP
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }}
              className="space-y-8 text-[#0c0950]"
              >
               <div className="inline-block px-4 py-2 bg-blue-50 backdrop-blur-sm rounded-full border border-blue-200 mb-4">
                <p className="text-sm font-medium text-[#0c0950]">India's Premier Education Platform</p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0c0950] to-blue-700">
                  Buy & Sell Old Books, Hire Top Tutors
                </span><br />
                <span className="text-[#0c0950]">Notes, Materials, Everything in One Place</span>
              </h1>

              <p className="text-lg text-[#0c0950]/80 max-w-lg mt-4">
                India’s smartest educational platform for students of Class 6–12. Sell your old books, connect with verified tutors, download handwritten notes, and study smarter — all in one place.
              </p>

              <div className="block lg:hidden pt-6">
                <Player
                  autoplay
                  loop
                  src="/animation3.json"
                  className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => { document.getElementById('tutor')?.scrollIntoView({ behavior: 'smooth' }) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0c0950] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Find Verified Tutors
                </motion.button>

                <motion.button
                  onClick={() => { document.getElementById('teachers')?.scrollIntoView({ behavior: 'smooth' }) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-blue-50 text-[#0c0950] px-6 py-3 rounded-lg font-medium border border-[#0c0950]/20 shadow-md flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Free Resources
                </motion.button>
              </div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6"
              >
                {[
                  { icon: "🔍", text: "Verified Tutors", color: "text-blue-600" },
                  { icon: "📚", text: "6th-12th Materials", color: "text-blue-700" },
                  { icon: "🏆", text: "Weekly Quizzes", color: "text-[#0c0950]" },
                  { icon: "💬", text: "24/7 Support", color: "text-blue-800" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center text-center p-3 rounded-lg bg-blue-50 border border-blue-100"
                  >
                    <span className={`${item.color} text-2xl mb-1`}>{item.icon}</span>
                    <p className="text-sm font-medium text-[#0c0950]">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Animation */}
            <div className="hidden lg:block">
              <Player
                autoplay
                loop
                src="/animation3.json"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>
      </>

    </>
  );
}
