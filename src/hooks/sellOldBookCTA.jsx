'use client';
import { FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SellOldBookCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-10"></div>
      
      <div className="relative bg-white backdrop-blur-sm border border-green-100 rounded-xl shadow-lg p-6 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-md">
            <FiMessageSquare className="text-white w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Sell Your Old Books</h3>
            <p className="text-gray-600 text-sm">Get instant cash for your used textbooks</p>
          </div>
        </div>

        <a
          href="https://wa.me/919999999999?text=I%20want%20to%20sell%20my%20old%20books"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FiMessageSquare className="w-5 h-5" />
          <span>Contact on WhatsApp</span>
        </a>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-20"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full opacity-20"></div>
    </motion.div>
  );
};

export default SellOldBookCTA;