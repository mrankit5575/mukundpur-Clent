 'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMessageSquare, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

const BookModal = ({ book, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === book.photos.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? book.photos.length - 1 : prev - 1));
  };

  // Swipe gestures for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextImage();
    }

    if (touchStart - touchEnd < -50) {
      prevImage();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
        onClick={onClose}
      >
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-30 p-2 rounded-full bg-white/80 shadow-md hover:bg-gray-100 transition-colors"
          >
            <FiX className="h-5 w-5 text-gray-700" />
          </button>

          <div className="flex flex-col sm:flex-row">
            {/* Left: Image Carousel */}
            <div className="w-full sm:w-1/2 relative">
              <div 
                className="relative h-64 sm:h-96 w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={book.photos[currentImageIndex]}
                      alt={`${book.title} - Photo ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev & Next */}
                {book.photos.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <FiChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <FiChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                  </>
                )}
              </div>

              {/* Dots */}
              {book.photos.length > 1 && (
                <div className="flex justify-center mt-2 space-x-2 pb-4">
                  {book.photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`h-2 w-2 rounded-full transition-all ${
                        currentImageIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: Book Details */}
            <div className="w-full sm:w-1/2 p-4 sm:p-6 space-y-4 overflow-y-auto">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{book.title}</h2>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {book.subject}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    {book.classLevel}
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                    {book.condition}
                  </span>
                </div>

                <p className="text-gray-700 text-sm sm:text-base">{book.description}</p>

                <div className="border-t border-b border-gray-200 py-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Price</span>
                    <div className="flex items-center">
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">₹{book.price}</span>
                      {book.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ₹{book.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  {book.discount && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Discount</span>
                      <span className="text-sm font-bold text-green-600">
                        {book.discount}% OFF
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <FiMapPin className="mr-2 flex-shrink-0" />
                  <span className="truncate">{book.location}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${book.whatsappNumber || ''}?text=I'm interested in your book: ${encodeURIComponent(book.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
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