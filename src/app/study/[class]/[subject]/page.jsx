 'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi'
import studyMaterial from "@/data/subjects"
import { use } from 'react'

const SubjectPage = ({ params }) => {
  const { class: cls, subject } = use(params) // ✅ unwrap async params using React's use()

  const classData = studyMaterial[cls]
  const subjectData = classData?.subjects[subject]

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
    show: { opacity: 1, y: 0 }
  }

  if (!subjectData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200 max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Subject Not Found</h1>
          <Link 
            href={`/study/${cls}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Subjects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start gap-4 mt-12">
            <Link 
              href={`/study/${cls}`}
              className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 mt-1"
            >
              <FiArrowLeft className="text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  {classData.name}
                </span>
                <span className="text-gray-600"> - {subjectData.name}</span>
              </h1>
              <p className="text-gray-500 mt-1">CBSE Curriculum Study Materials</p>
            </div>
          </div>
        </motion.div>

        {/* Topics List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {Object.entries(subjectData.topics).map(([topic, content]) => (
            <motion.div
              key={topic}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{topic}</h2>
                <p className="text-gray-600 mb-4">{content.description}</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://drive.google.com/viewer?url=${encodeURIComponent(content.pdfUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    View PDF
                  </a>
                  <a
                    href={content.pdfUrl}
                    download
                    className="flex items-center px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg font-medium transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-blue-800 mb-3">More Resources</h3>
          <p className="text-blue-700 mb-4">Explore additional study materials for {subjectData.name}:</p>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="#"
              className="px-4 py-2 bg-white hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg font-medium transition-colors"
            >
              Video Lectures
            </Link>
            <Link 
              href="#"
              className="px-4 py-2 bg-white hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg font-medium transition-colors"
            >
              Practice Quizzes
            </Link>
            <Link 
              href="#"
              className="px-4 py-2 bg-white hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg font-medium transition-colors"
            >
              Previous Year Papers
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SubjectPage
