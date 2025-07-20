// app/topper/page.jsx
'use client'

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const TopperPage = () => {
  // Sample toppers data (in real app, fetch from API)
  const toppers = [
    {
      id: 1,
      name: "Rahul Sharma",
      rank: 1,
      score: "98%",
      image: "/images/toppers/topper1.jpg",
      quote: "Consistency is the key to success"
    },
    {
      id: 2,
      name: "Priya Patel",
      rank: 2,
      score: "96%",
      image: "/images/toppers/topper2.jpg",
      quote: "Smart work beats hard work when hard work is done smartly"
    },
    {
      id: 3,
      name: "Amit Singh",
      rank: 3,
      score: "95%",
      image: "/images/toppers/topper3.jpg",
      quote: "Every small step counts towards big achievements"
    }
  ];

  return (
    <>
      <Head>
        <title>Become the Next Topper | Crack_IQ</title>
        <meta name="description" content="Commit to your success and join our weekly quiz challenge to become the next topper" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 mt-10"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Become the Next Topper
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Commit to your commitment and join our elite group of top performers
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/quiz">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Journey Now
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Current Toppers Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our <span className="text-indigo-600">Current Toppers</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {toppers.map((topper, index) => (
                <motion.div
                  key={topper.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <img 
                      src={topper.image} 
                      alt={topper.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full text-sm">
                        Rank #{topper.rank}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{topper.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">Score: {topper.score}</p>
                    <p className="text-gray-600 italic">"{topper.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Weekly Quiz Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          >
            <div className="md:flex">
              <div className="md:w-1/2 bg-indigo-600 p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Weekly Quiz Challenge
                  </h2>
                  <p className="text-indigo-100 mb-6">
                    Test your knowledge every week and climb the leaderboard to become our next topper!
                  </p>
                  <div className="bg-white/10 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-white font-medium">Next Quiz Starts On:</p>
                        <p className="text-yellow-400 font-bold text-xl">Sunday, 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/quiz">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow hover:shadow-md transition"
                    >
                      Set Reminder
                    </motion.button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 md:p-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How It Works</h3>
                <ul className="space-y-4">
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Weekly quizzes start every Sunday at 10:00 AM</span>
                  </motion.li>
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Top 3 performers featured on this page</span>
                  </motion.li>
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Special rewards for monthly toppers</span>
                  </motion.li>
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Detailed performance analysis after each quiz</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Motivation Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Your <span className="text-indigo-600">Success Formula</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-8 text-lg">
                Becoming a topper isn't about being the smartest - it's about being the most committed. 
                Our weekly quiz system is designed to help you build consistency, track your progress, 
                and compete with yourself more than others.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-block"
              >
                <Link href="/quiz">
                  <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow hover:shadow-md transition">
                    Join the Next Challenge
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What Our <span className="text-indigo-600">Toppers Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img src="/images/toppers/topper1.jpg" alt="Rahul Sharma" className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">Rahul Sharma</h4>
                    <p className="text-indigo-600 text-sm">Weekly Topper (3 times)</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The weekly quiz challenge kept me motivated throughout my preparation. 
                  Seeing my name on the topper's page was an incredible feeling that pushed me to work harder."
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img src="/images/toppers/topper2.jpg" alt="Priya Patel" className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">Priya Patel</h4>
                    <p className="text-indigo-600 text-sm">Monthly Topper</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The detailed performance analysis after each quiz helped me identify my weak areas. 
                  I improved my score by 15% in just two months with this systematic approach."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to <span className="text-indigo-600">Become Our Next Topper?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Commit to your success today. Join thousands of students who are transforming their learning journey with our weekly challenges.
            </p>
            <Link href="/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default TopperPage;