 'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMessageSquare, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

const BookModal = ({ book, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === book.photos.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? book.photos.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60"
      >
        {/* Background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative z-10 bg-white rounded-xl shadow-lg w-full max-w-4xl overflow-hidden"
        >
          {/* Close Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex">
            {/* Left: Image Carousel */}
            <div className="sm:w-1/2 relative">
              <div className="relative h-96 w-full">
                <Image
                  src={book.photos[currentImageIndex]}
                  alt={`${book.title} - Photo ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Prev & Next */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <FiChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <FiChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-2 space-x-1 pb-4">
                {book.photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2 w-2 rounded-full ${
                      currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Book Details */}
            <div className="sm:w-1/2 p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">{book.title}</h2>

              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                  {book.subject}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                  {book.classLevel}
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                  {book.condition}
                </span>
              </div>

              <p className="text-gray-700">{book.description}</p>

              <div className="border-t border-b border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Price</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600">₹{book.price}</span>
                    {book.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ₹{book.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                {book.discount && (
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Discount</span>
                    <span className="text-sm font-bold text-green-600">
                      {book.discount}% OFF
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <FiMapPin className="mr-2" />
                <span>{book.location}</span>
              </div>

              <div className="mt-4">
                <a
                  href={`https://wa.me/${book.whatsappNumber || ''}?text=I'm interested in your book: ${book.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg"
                >
                  <FiMessageSquare className="mr-2" />
                  Contact Seller
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookModal;
