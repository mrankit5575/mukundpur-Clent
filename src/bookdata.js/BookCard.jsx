 
 'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaRupeeSign, FaStar, FaEye, FaBook, FaHeart, FaShare } from 'react-icons/fa';
import { IoLocationOutline, IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';

export default function BookCard({ book }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev === 0 ? book.photos.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex(prev => (prev === book.photos.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Gallery */}
        <div className="relative h-48 sm:h-52 bg-gray-100 cursor-pointer" onClick={() => setShowGallery(true)}>
          {/* Main Image with hover effect */}
          <AnimatePresence mode="wait">
            <motion.img
              key={isHovered ? 'hover' : 'normal'}
              src={book.photos[currentImageIndex]}
              alt={book.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          
          {/* Thumbnail preview on hover */}
          {isHovered && book.photos.length > 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 flex justify-center gap-1"
            >
              {book.photos.slice(0, 4).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </motion.div>
          )}
          
          {/* Photo Count Badge */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
            {book.photos.length} {book.photos.length > 1 ? 'photos' : 'photo'}
          </div>
          
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
            {Math.round((1 - book.price/book.originalPrice) * 100)}% OFF
          </div>
          
          {/* Wishlist Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className={`absolute top-2 right-2 p-2 rounded-full ${isWishlisted ? 'text-red-500 bg-white shadow-md' : 'text-gray-500 bg-white/90 backdrop-blur-sm'}`}
          >
            <FaHeart className={isWishlisted ? 'fill-current' : ''} size={14} />
          </button>
        </div>

        {/* Book Details */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base sm:text-lg text-gray-900 line-clamp-2 leading-tight">{book.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 mt-1">
                <FaBook className="text-blue-500 flex-shrink-0" size={12} />
                <span className="truncate">{book.subject} • {book.classLevel}</span>
              </p>
            </div>
            <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs font-semibold ml-2 flex-shrink-0">
              {book.condition}
            </div>
          </div>

          {/* Price Section */}
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-bold text-lg sm:text-xl text-gray-900 flex items-center">
              <FaRupeeSign size={12} className="mr-0.5" />
              {book.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through flex items-center">
              <FaRupeeSign size={10} className="mr-0.5" />
              {book.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Location and Views */}
          <div className="mt-3 flex justify-between items-center text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <IoLocationOutline size={14} />
              <span className="truncate max-w-[100px] sm:max-w-[120px]">{book.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye size={12} />
              <span>{book.views.toLocaleString()} views</span>
            </div>
          </div>

          {/* Seller Rating */}
          {book.sellerRating && (
            <div className="mt-2 flex items-center gap-1 text-xs sm:text-sm">
              <FaStar className="text-yellow-400 flex-shrink-0" />
              <span className="font-medium">{book.sellerRating}</span>
              <span className="text-gray-500">({Math.floor(book.views/2).toLocaleString()} reviews)</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link href={`/books/${book.id}`} className="block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors"
              >
                View Details
              </motion.button>
            </Link>
            <motion.a
              href={`https://wa.me/${book.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 shadow-sm"
            >
              <FaWhatsapp size={14} />
              Contact
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Full Image Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setShowGallery(false)}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowGallery(false);
              }}
            >
              <IoClose size={24} />
            </button>
            
            <div className="relative w-full max-w-3xl h-3/4" onClick={e => e.stopPropagation()}>
              <motion.img
                key={currentImageIndex}
                src={book.photos[currentImageIndex]}
                alt={`Book preview ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Thumbnail Strip */}
              <div className="absolute bottom-4 left-0 right-0 px-4">
                <div className="flex justify-center gap-2 overflow-x-auto py-2 scrollbar-hide">
                  {book.photos.map((photo, index) => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-white' : 'border-transparent'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    >
                      <img 
                        src={photo} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="text-white text-sm mt-2">
              {currentImageIndex + 1} / {book.photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
 