 'use client'

import { books } from '@/bookdata.js/book';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaRupeeSign, FaStar, FaBook, FaMapMarkerAlt, FaArrowLeft, FaCheckCircle, FaHeart, FaShare } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function BookDetailPage() {
    const params = useParams();
    const book = books.find((b) => b.id === params.id);
    const [selectedImage, setSelectedImage] = useState(book?.photos[0] || '');
    const [hoveredImage, setHoveredImage] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md border border-gray-200"
                >
                    <div className="text-red-500 text-5xl mb-4">ⓘ</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Book Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        The book you're looking for may have been sold or removed.
                    </p>
                    <Link 
                        href="/books" 
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                    >
                        Browse Available Books
                    </Link>
                </motion.div>
            </div>
        );
    }

    const openImageModal = (index) => {
        setCurrentImageIndex(index);
        setShowFullImage(true);
    };

    const navigateImages = (direction) => {
        if (direction === 'prev') {
            setCurrentImageIndex(prev => (prev === 0 ? book.photos.length - 1 : prev - 1));
        } else {
            setCurrentImageIndex(prev => (prev === book.photos.length - 1 ? 0 : prev + 1));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Navigation Header */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link 
                            href="/books" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back to Books
                        </Link>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className={`p-2 rounded-full ${isWishlisted ? 'text-red-500 bg-red-50' : 'text-gray-500 hover:text-red-500 hover:bg-red-50'}`}
                            >
                                <FaHeart className={isWishlisted ? 'fill-current' : ''} />
                            </button>
                            <button className="p-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50">
                                <FaShare />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                >
                    <div className="md:flex">
                        {/* Book Images */}
                        <div className="md:w-1/2 p-4 md:p-6">
                            {/* Main Image Display */}
                            <div 
                                className="relative h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center cursor-zoom-in"
                                onClick={() => openImageModal(book.photos.indexOf(selectedImage))}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img 
                                        key={hoveredImage || selectedImage}
                                        src={hoveredImage || selectedImage}
                                        alt={book.title}
                                        className="max-h-full max-w-full object-contain"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </AnimatePresence>
                                <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    {Math.round((1 - book.price/book.originalPrice) * 100)}% OFF
                                </div>
                            </div>
                            
                            {/* Thumbnail Gallery */}
                            <div className="grid grid-cols-4 gap-3">
                                {book.photos.map((photo, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`h-16 md:h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                                            selectedImage === photo ? 'border-blue-500 shadow-md' : 'border-transparent hover:border-gray-300'
                                        }`}
                                        onClick={() => setSelectedImage(photo)}
                                        onMouseEnter={() => setHoveredImage(photo)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                    >
                                        <img 
                                            src={photo} 
                                            alt={`Thumbnail ${index + 1}`} 
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="md:w-1/2 p-4 md:p-6 md:border-l border-gray-200">
                            {/* Direct Seller Badge */}
                            <div className="bg-gradient-to-r from-green-50 to-green-100 text-green-800 px-4 py-2 rounded-full inline-flex items-center mb-4 shadow-sm">
                                <FaCheckCircle className="mr-2 text-green-600" />
                                <span className="font-medium">Direct Student Seller • 0% Commission</span>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
                            <div className="flex items-center text-gray-600 mb-4">
                                <FaBook className="mr-2 text-blue-500" />
                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm">{book.subject} • {book.classLevel}</span>
                            </div>

                            {/* Price Section */}
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-6 border border-blue-100">
                                <div className="flex flex-wrap items-end gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Our Price</p>
                                        <p className="text-2xl md:text-3xl font-bold text-blue-600 flex items-center">
                                            <FaRupeeSign size={16} className="mr-1" />
                                            {book.price}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Original Price</p>
                                        <p className="text-base md:text-lg text-gray-500 line-through flex items-center">
                                            <FaRupeeSign size={14} className="mr-1" />
                                            {book.originalPrice}
                                        </p>
                                    </div>
                                    <div className="md:ml-auto bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                                        Save ₹{book.originalPrice - book.price}
                                    </div>
                                </div>
                            </div>

                            {/* Condition & Location */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                    <p className="text-xs text-gray-500 mb-1">Condition</p>
                                    <p className="font-medium text-gray-800">{book.condition}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                    <p className="text-xs text-gray-500 mb-1">Location</p>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="mr-2 text-gray-500" />
                                        <span className="font-medium text-gray-800">{book.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-700 whitespace-pre-line bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    {book.description}
                                </p>
                            </div>

                            {/* Seller Info */}
                            <div className="border-t border-gray-200 pt-4 md:pt-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Seller</h3>
                                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 font-bold shadow-inner">
                                        {book.whatsappNumber.slice(-2)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Verified Student</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                                                <FaStar className="text-yellow-400 mr-1" />
                                                <span className="font-medium">{book.sellerRating || '4.8'}</span>
                                            </div>
                                            <span>•</span>
                                            <span>{Math.floor(Math.random() * 50) + 10} reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href={`https://wa.me/${book.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                            >
                                <FaWhatsapp size={20} />
                                <span className="text-sm md:text-base">Contact Student Seller on WhatsApp</span>
                            </motion.a>

                            {/* Zero Commission Note */}
                            <div className="mt-4 text-center text-xs md:text-sm text-gray-500">
                                <p>Buy directly from students with <strong className="text-blue-600">0% platform commission</strong></p>
                                <p>You pay exactly what the seller is asking</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[
                        {
                            icon: "💰",
                            title: "Best Prices",
                            desc: "Save 40-70% compared to new books with no middleman fees."
                        },
                        {
                            icon: "🎓",
                            title: "Verified Students",
                            desc: "All sellers are verified students from reputable institutions."
                        },
                        {
                            icon: "🔄",
                            title: "Easy Process",
                            desc: "Contact sellers directly and arrange pickup/delivery as you prefer."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-200 transition-all"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* Image Modal */}
            <AnimatePresence>
                {showFullImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowFullImage(false)}
                    >
                        <button 
                            className="absolute top-4 right-4 text-white text-3xl z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowFullImage(false);
                            }}
                        >
                            <IoMdClose />
                        </button>
                        
                        <motion.div 
                            className="relative max-w-4xl w-full"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={book.photos[currentImageIndex]} 
                                alt={`Full view ${currentImageIndex + 1}`} 
                                className="max-h-[80vh] w-full object-contain"
                            />
                            
                            <button 
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full backdrop-blur-sm hover:bg-opacity-50 transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImages('prev');
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <button 
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full backdrop-blur-sm hover:bg-opacity-50 transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImages('next');
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                {book.photos.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(index);
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </div>
    );
}