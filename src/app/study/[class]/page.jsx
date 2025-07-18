 'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiBook, FiChevronRight } from 'react-icons/fi'
import studyMaterial from "@/data/subjects"

const ClassPage = ({ params }) => {
  const { class: cls } = use(params)
  const classData = studyMaterial[cls]

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
    show: { opacity: 1, y: 0 }
  }

  if (!classData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200 max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Class Not Found</h1>
          <Link 
            href="/study"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Classes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center mt-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              {classData.name}
            </span>
          </h1>
          <p className="text-lg text-gray-600">CBSE Curriculum Subjects</p>
        </motion.div>

        {/* Subjects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {Object.entries(classData.subjects).map(([sub, data]) => (
            <motion.div
              key={sub}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/study/${cls}/${sub}`} className="block h-full">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 h-full flex">
                  <div className="p-5 flex-1 flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                      <FiBook className="text-xl" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {data.name}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {data.resources ? Object.keys(data.resources).length : 0} resources available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center px-4 bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <FiChevronRight className="text-gray-400 group-hover:text-blue-500 transition-colors" />
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
          <h3 className="font-medium text-gray-800 mb-2">About {classData.name} Curriculum</h3>
          <p className="text-gray-600">
            The CBSE {classData.name} curriculum includes core subjects along with co-curricular activities. 
            Click on any subject to access chapter-wise study materials, notes, and practice resources.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ClassPage
