'use client'

import { motion } from "framer-motion";
import { FiSearch, FiBook, FiDollarSign, FiHeart, FiShare2, FiFilter } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const BookMarketplaceSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample book data
  const books = [
    {
      id: 1,
      title: "NCERT Mathematics Class 10",
      author: "NCERT",
      price: 250,
      condition: "Like New",
      category: "academic",
      image: "/books/math-10.jpg",
      seller: "Rahul K.",
      rating: 4.8
    },
    {
      id: 2,
      title: "Concepts of Physics Vol. 1",
      author: "H.C. Verma",
      price: 350,
      condition: "Good",
      category: "competitive",
      image: "/books/hc-verma.jpg",
      seller: "Priya M.",
      rating: 4.9
    },
    {
      id: 3,
      title: "Indian Polity for Civil Services",
      author: "M. Laxmikant",
      price: 400,
      condition: "Excellent",
      category: "civil-services",
      image: "/books/polity.jpg",
      seller: "Amit S.",
      rating: 4.7
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 180,
      condition: "Fair",
      category: "literature",
      image: "/books/mockingbird.jpg",
      seller: "Neha P.",
      rating: 4.5
    },
    {
      id: 5,
      title: "Organic Chemistry for NEET",
      author: "M.S. Chouhan",
      price: 500,
      condition: "New",
      category: "competitive",
      image: "/books/organic-chem.jpg",
      seller: "Vikram J.",
      rating: 4.9
    },
    {
      id: 6,
      title: "History of Modern India",
      author: "Bipan Chandra",
      price: 300,
      condition: "Good",
      category: "civil-services",
      image: "/books/modern-india.jpg",
      seller: "Ananya R.",
      rating: 4.6
    },
  ];

  // Categories
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "academic", name: "Academic Textbooks" },
    { id: "competitive", name: "Competitive Exams" },
    { id: "civil-services", name: "Civil Services" },
    { id: "literature", name: "Literature" },
    { id: "reference", name: "Reference Books" },
  ];

  // Filter books based on search and category
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c0950] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Book Marketplace</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Buy and sell used academic books, competitive exam materials, and literature at affordable prices.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search by book title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto flex items-center gap-2">
              <FiFilter className="text-gray-500" />
              <select
                className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <Link href="/sell-book" passHref >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-[#0c0950] text-white px-6 py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-2"
              >
                <FiBook className="text-lg" />
                Sell Your Book
              </motion.a>
            </Link>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8 overflow-x-auto"
        >
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Book Listings */}
        {filteredBooks.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-lg w-24 h-32 flex items-center justify-center mr-4 overflow-hidden">
                      <FiBook className="text-4xl text-gray-400" />
                      {/* In a real app, you would use an actual book image */}
                      {/* <img src={book.image} alt={book.title} className="w-full h-full object-cover" /> */}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 line-clamp-2">{book.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">by {book.author}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 fill-current ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                          <span className="text-gray-500 text-xs ml-1">{book.rating}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500">Condition: <span className="font-medium">{book.condition}</span></p>
                          <p className="text-xs text-gray-500">Seller: <span className="font-medium">{book.seller}</span></p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="font-bold text-blue-600">₹{book.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 px-4 py-3 flex justify-between items-center bg-gray-50">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <FiHeart className="text-lg" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <FiShare2 className="text-lg" />
                  </button>
                  <Link href={`/books/${book.id}`} passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#0c0950] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1"
                    >
                      <FiDollarSign /> Buy Now
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12 bg-gray-50 rounded-xl"
          >
            <FiBook className="mx-auto text-5xl text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-600">No books found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/books" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white border-2 border-[#0c0950] text-[#0c0950] px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#0c0950] hover:text-white transition-colors"
            >
              View All Books
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BookMarketplaceSection;  