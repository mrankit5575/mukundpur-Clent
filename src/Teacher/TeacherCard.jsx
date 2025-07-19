 'use client'

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChalkboardTeacher, FaMapMarkerAlt, FaRupeeSign, FaStar, FaHeart, FaShare } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { useState } from 'react';

export default function TeacherCard({ tutor, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="w-full sm:w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Premium Ribbon */}
        {tutor.isPremium && (
          <div className="absolute top-0 left-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 z-10 shadow-md">
            <div className="flex items-center">
              <IoMdCheckmark className="mr-1" />
              PREMIUM
            </div>
          </div>
        )}

        {/* Teacher Image with Hover Effect */}
        <div 
          className="relative h-56 sm:h-64 overflow-hidden cursor-pointer"
          onClick={() => setShowFullImage(true)}
        >
          <AnimatePresence>
            <motion.img
              key={isHovered ? 'hover' : 'normal'}
              src={tutor.photo}
              alt={tutor.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{ 
                opacity: 1,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm z-10">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold text-gray-800">{tutor.rating || '4.9'}</span>
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-4 left-4 flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              className={`p-2 rounded-full ${isWishlisted ? 'text-red-500 bg-white shadow-md' : 'text-gray-700 bg-white/90 backdrop-blur-sm'}`}
            >
              <FaHeart className={isWishlisted ? 'fill-current' : ''} size={14} />
            </button>
            <button className="p-2 rounded-full text-gray-700 bg-white/90 backdrop-blur-sm">
              <FaShare size={14} />
            </button>
          </div>
        </div>

        {/* Teacher Info */}
        <div className="p-5 sm:p-6">
          <div className="flex justify-between items-start mb-3">
            <div className="max-w-[70%]">
              <h3 className="text-xl font-bold text-gray-900 truncate">{tutor.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{tutor.qualification}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm">
              {tutor.experience}+ yrs exp
            </div>
          </div>

          {/* Subjects */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              {tutor.subjects.slice(0, 3).map((subject, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium rounded-full shadow-sm"
                >
                  {subject}
                </motion.span>
              ))}
              {tutor.subjects.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                  +{tutor.subjects.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Location & Rate */}
          <div className="mt-5 flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              <FaMapMarkerAlt className="mr-2 text-blue-400" />
              <span className="truncate max-w-[120px] sm:max-w-[150px]">{tutor.location}</span>
            </div>
            <div className="flex items-center font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 rounded-lg shadow-sm">
              <FaRupeeSign className="mr-1" size={12} />
              {/* <span>{tutor.rate.toLocaleString()}</span> */}
            </div>
          </div>

          {/* CTA Button */}
          <Link href={`/tutor/${tutor.id}`}>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaChalkboardTeacher />
              View Full Profile
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {showFullImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowFullImage(false)}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setShowFullImage(false);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <motion.div 
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={tutor.photo} 
                alt={`${tutor.name} profile`} 
                className="w-full h-full max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/30 backdrop-blur-sm py-2 rounded-lg mx-auto max-w-xs">
                <h3 className="font-bold text-lg">{tutor.name}</h3>
                <p className="text-sm">{tutor.qualification}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}