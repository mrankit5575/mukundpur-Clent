 'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BookCard = ({ book, onClick }) => {
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Book Image */}
      <div className="relative h-48 w-full">
        <Image
          src={book.photos[0]}
          alt={book.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {book.condition}
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.subject} • {book.classLevel}</p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">₹{book.price}</span>
          {book.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{book.originalPrice}</span>
          )}
        </div>

        {book.discount && (
          <div className="text-xs font-medium text-green-600">
            {book.discount}% OFF
          </div>
        )}

        {/* Buy Now Button */}
        <div className="pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent button click from bubbling
              onClick(); // Open modal
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
