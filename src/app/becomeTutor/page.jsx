 'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function TutorApplyPage() {
  const adminNumber = "9718659236"; // Replace with your WhatsApp number

  const tutorMessage = encodeURIComponent(`👨‍🏫 Tutor Application:

1️⃣ Photo: [Attach clear profile photo]
2️⃣ ID Proof: [Aadhaar/School/College ID]
3️⃣ Qualification: 
4️⃣ Subjects You Teach: 
5️⃣ Classes You Teach: 
6️⃣ Available Timings: 
7️⃣ Area/City: 
8️⃣ My WhatsApp Number: 

Please verify my tutor details.`);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Apply as Tutor | Educational Marketplace</title>
        <meta name="description" content="Become a tutor and earn by teaching students in your area." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-10 mt-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">👨‍🏫 Apply as a Tutor</h1>
          <p className="text-xl text-gray-600">Looking to teach? Send your details and join our tutor network!</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-10">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Requirements</h2>
            <ul className="space-y-2 text-gray-700 mb-6 list-disc list-inside">
              <li>Profile Photo</li>
              <li>ID Proof (Aadhaar / School or College ID)</li>
              <li>Highest Qualification</li>
              <li>Subjects You Teach</li>
              <li>Classes You Teach</li>
              <li>Available Timings</li>
              <li>City / Area</li>
              <li>Your WhatsApp Number</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm text-blue-700">
                ✅ We will verify and add you to our tutor network.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-yellow-700">
                ❗ If something is missing, our team will reach out on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">💬 Click the button to apply as a tutor</h3>
          <motion.a
            href={`https://wa.me/${adminNumber}?text=${tutorMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span className="mr-2">💬</span> Apply as Tutor via WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
