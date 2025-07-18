 'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiBook, FiChevronRight } from 'react-icons/fi'
import studyMaterial from "@/data/subjects"

const StudyHome = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    hover: { y: -5 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Select Your Class
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Access curated study materials for your academic year
          </p>
        </motion.div>

        {/* Classes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(studyMaterial).map(([cls, data]) => (
            <motion.div
              key={cls}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Link
                href={`/study/${cls}`}
                className="block h-full"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                        <FiBook className="text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {data.name}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          CBSE Curriculum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">
                      View Subjects
                    </span>
                    <FiChevronRight className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="font-medium text-gray-800 mb-2">About Our Study Materials</h3>
          <p className="text-gray-600">
            All materials are aligned with the latest CBSE curriculum and prepared by
            experienced educators. Select your class to access chapter-wise notes,
            practice questions, and previous year papers.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default StudyHome