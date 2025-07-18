 'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiBookOpen } from 'react-icons/fi';
import BookCard from '@/components/BookCard';
import BookModal from '@/components/BookModal';
import Filters from '@/components/Filters';
import SellOldBookCTA from './sellOldBookCTA';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    subject: '',
    classLevel: '',
    minPrice: '',
    maxPrice: '',
    location: '',
    search: ''
  });

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) query.append(key, value);
      });

      const response = await axios.get('http://localhost:8080/api/book/');
      setBooks(response.data.books || []); // fallback to [] if `books` is undefined
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }                                             ///last edit  july 2025 //
  };

  useEffect(() => {
    fetchBooks();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      subject: '',
      classLevel: '',
      minPrice: '',
      maxPrice: '',
      location: '',
      search: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Buy & Sell Used Textbooks
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Save money and help the environment by buying and selling pre-loved educational books
          </motion.p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, subject or author..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FiFilter />
            <span>Filters</span>
          </button>
        </div>

        {showFilters && (
          <Filters 
            filters={filters}
            onChange={handleFilterChange}
            onReset={resetFilters}
            onClose={() => setShowFilters(false)}
          />
        )}

        {/* Books Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : books.length === 0 ? (
          <div className="text-center py-20">
            <FiBookOpen className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No books found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {books.map((book) => (
              <BookCard 
                key={book._id}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Book Modal */}
      {selectedBook && (
        <BookModal 
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
      <SellOldBookCTA/>
    </div>
  );
};

export default BooksPage;
