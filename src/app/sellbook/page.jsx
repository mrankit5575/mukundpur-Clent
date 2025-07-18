'use client'


import { motion } from 'framer-motion';
import Head from 'next/head';

export default function SellPage() {
  const adminNumber = "9718659236"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${adminNumber}`;
  const whatsappMessage = encodeURIComponent(`📚 Book Selling Details:

1️⃣ Photos: [Attach 4 clear photos - Front, Back, Spine, Inside]
2️⃣ Class: 
3️⃣ Subject: 
4️⃣ Book Title: 
5️⃣ Selling Price: 
6️⃣ My WhatsApp Number: 

Please verify my book details.`);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head >
        <title>Sell Your Book | Educational Marketplace</title>
        <meta name="description" content="Sell your used educational books through WhatsApp" />
      </Head>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-10 mt-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">📚 Sell Your Book</h1>
          <p className="text-xl text-gray-600">Get cash for your used educational books - quick and easy!</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-10">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
              <div className="space-y-4 text-gray-700">
                <p>1. Send us your book details via WhatsApp (see below)</p>
                <p>2. We'll verify the information and photos</p>
                <p>3. Your book will be listed within 1 hour if complete</p>
                <p>4. Interested buyers will contact you directly</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📝 Required Information</h3>
              <p className="text-gray-600 mb-4">Please send these details in your WhatsApp message:</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">1️⃣</span>
                  <span>4 clear photos of the book (Front, Back, Spine, Inside)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2️⃣</span>
                  <span>Class – Which class is this book for</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3️⃣</span>
                  <span>Subject – e.g. Science, Math, English</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4️⃣</span>
                  <span>Book Title – Name of the book</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5️⃣</span>
                  <span>Selling Price – Your price</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">6️⃣</span>
                  <span>WhatsApp Number – Where we can contact you</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">✅</div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      If everything is correct, your book will be listed within 1 hour
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">❗</div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      If anything is missing, we will contact you via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">💬 Click the button below to send details</h3>
          <motion.a
            href={`${whatsappUrl}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span className="mr-2">💬</span> Send via WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}