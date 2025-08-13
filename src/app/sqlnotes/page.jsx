'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiFileText } from 'react-icons/fi';

// Card component
const SQLCard = ({ note, index }) => {
  if (!note) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
            <FiFileText size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{note.title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">{note.description}</p>

        <motion.a
          href={note.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-md"
        >
          View PDF Notes
          <FiExternalLink className="ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );
};

// Page component
export default function SQLNotesPage() {
  const sqlNotes = [
    {
      title: 'SQL Notes',
      description: 'Introduction to SQL commands, syntax, and  data retrieval.',
      pdfLink: 'https://drive.google.com/file/d/1M2K3mUGf1J91xG-vNj5sLd7J9oKUn9tp/view?usp=sharing',
    },
    // {
    //   title: 'Advanced SQL Queries',
    //   description: 'Joins, subqueries, views, and advanced query optimization.',
    //   pdfLink: 'https://drive.google.com/file/d/your-advanced-sql-id/view?usp=sharing',
    // },
    // {
    //   title: 'SQL Functions and Procedures',
    //   description: 'Built-in functions, stored procedures, triggers, and transactions.',
    //   pdfLink: 'https://drive.google.com/file/d/your-sql-functions-id/view?usp=sharing',
    // },
    // Add more items as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-20">SQL Notes</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Learn SQL step by step with these structured PDF notes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {sqlNotes.map((note, index) => (
            <SQLCard key={index} note={note} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            More SQL notes coming soon...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
