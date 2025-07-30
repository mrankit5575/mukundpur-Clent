 'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi'
import studyMaterial from '@/data/subjects'

const extractDriveId = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//)
  return match ? match[1] : null
}

const getPreviewUrl = (driveUrl) => {
  const id = extractDriveId(driveUrl)
  return id ? `https://drive.google.com/file/d/${id}/preview` : driveUrl
}

const SubjectPage = ({ params }) => {
  const { class: cls, subject } = use(params)

  const classData = studyMaterial[cls]
  const subjectData = classData?.subjects[subject]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const { resources } = subjectData

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8 mt-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
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
              <p className="text-gray-500 mt-1">Study Resources (NCERT, PYQs, Notes, etc.)</p>
            </div>
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* PYQs */}
          {resources?.pyq && (
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 border">
              <h2 className="text-xl font-bold mb-4 text-blue-800">Previous Year Questions (PYQs)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(resources.pyq).map(([year, url]) => {
                  if (!url) return null
                  const previewUrl = getPreviewUrl(url)
                  return (
                    <div key={year} className="border p-4 rounded-lg bg-blue-50">
                      <p className="font-semibold text-blue-700 mb-2">{year}</p>
                      <div className="flex gap-2">
                        <a href={previewUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 hover:underline">
                          <FiExternalLink className="mr-1" /> View
                        </a>
                        <a href={url} download className="flex items-center text-sm text-green-600 hover:underline">
                          <FiDownload className="mr-1" /> Download
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Static Resources */}
          {["ncert", "samplePaper", "summary", "notes", "mindmap"].map((key) => {
            const labelMap = {
              ncert: "NCERT Book",
              samplePaper: "Sample Paper",
              summary: "Summary",
              notes: "Notes",
              mindmap: "Mindmap"
            }

            const url = resources[key]
            if (!url) return null

            const previewUrl = getPreviewUrl(url)

            return (
              <motion.div key={key} variants={itemVariants} className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{labelMap[key]}</h3>
                <div className="flex gap-3">
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    View
                  </a>
                  <a
                    href={url}
                    download
                    className="flex items-center px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg font-medium transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download
                  </a>
                </div>
              </motion.div>
            )
          })}

          {/* Chapter-Wise Notes */}
          {resources?.chapterNotes && (
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Chapter-wise Notes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(resources.chapterNotes).map(([chapter, url]) => {
                  const previewUrl = getPreviewUrl(url)
                  return (
                    <div key={chapter} className="bg-blue-50 p-4 rounded-lg border">
                      <p className="font-medium text-blue-700">{chapter}</p>
                      <div className="flex gap-2 mt-2">
                        <a href={previewUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 hover:underline">
                          <FiExternalLink className="mr-1" /> View
                        </a>
                        <a href={url} download className="flex items-center text-sm text-green-600 hover:underline">
                          <FiDownload className="mr-1" /> Download
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SubjectPage
