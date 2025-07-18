'use client';
import { motion } from 'framer-motion';

const Filters = ({ filters, onChange, onReset, onClose }) => {
  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 
    'English', 'History', 'Geography', 'Computer Science'
  ];

  const classLevels = [
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 
    'Class 10', 'Class 11', 'Class 12', 'JEE', 'NEET'
  ];

  const locations = [
    'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 
    'Chennai', 'Kolkata', 'Pune'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-white p-6 rounded-lg shadow-md mb-8 overflow-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.subject}
            onChange={(e) => onChange('subject', e.target.value)}
          >
            <option value="">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Class Level</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.classLevel}
            onChange={(e) => onChange('classLevel', e.target.value)}
          >
            <option value="">All Classes</option>
            {classLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.location}
            onChange={(e) => onChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.minPrice}
              onChange={(e) => onChange('minPrice', e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.maxPrice}
              onChange={(e) => onChange('maxPrice', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-3">
        <button
          onClick={onReset}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Reset Filters
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </div>
    </motion.div>
  );
};

export default Filters;