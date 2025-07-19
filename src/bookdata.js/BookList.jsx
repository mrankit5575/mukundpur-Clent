 'use client'

import { books } from '@/bookdata.js/book';
import BookCard from './BookCard';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaSearch, FaFilter } from 'react-icons/fa';
import Link from 'next/link';

export default function BookList() {
  const previewBooks = books.slice(0, 8); // Show 8 books

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <FaExchangeAlt className="mr-2" />
            <span className="font-medium">Buy & Sell Pre-Loved Books</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Save Money, <span className="text-blue-600">Save Trees</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find affordable textbooks or sell your old ones to fellow students. 
            Quality books at 40–70% off original prices.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-xl shadow-md mb-10 sticky top-4 z-10"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by book title, subject, or class..."
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto">
                <option>All Classes</option>
                <option>Class 6–8</option>
                <option>Class 9–10</option>
                <option>Class 11–12</option>
              </select>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
                <FaFilter />
                Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-6 mb-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <p className="text-3xl font-bold">{books.length}+</p>
            <p className="text-sm opacity-90">Books Available</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">60%</p>
            <p className="text-sm opacity-90">Average Savings</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">4.8★</p>
            <p className="text-sm opacity-90">Seller Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">24h</p>
            <p className="text-sm opacity-90">Avg. Response Time</p>
          </div>
        </motion.div>

        {/* Book Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {previewBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </motion.div>

        {/* View All Books Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link href="/all-books">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors"
            >
              View All Books ({books.length})
            </motion.button>
          </Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have books to sell?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            List your books in just 2 minutes and connect with buyers in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Sell Your Books Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              How It Works
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
