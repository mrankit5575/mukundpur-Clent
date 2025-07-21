 'use client'

import { motion } from "framer-motion";
import { tutors } from '@/teacherData/teacher';
import { FaChalkboardTeacher, FaGraduationCap, FaMapMarkerAlt, FaRupeeSign, FaStar, FaBook } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { use } from 'react'; // ✅ at the top
import TeacherList from "@/Teacher/TeacherList";

export default function TutorProfilePage({ params }) {
  // const { id } = params;
  const { id } = use(params); // ✅ this line fixes the warning

  const tutor = tutors.find((t) => t.id === id);  

  if (!tutor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c0950] to-[#1a147a]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md"
        >
          <h2 className="text-2xl font-bold text-[#0c0950] flex items-center justify-center gap-2">
            <span className="text-3xl">❌</span> Tutor Not Found
          </h2>
          <p className="mt-4 text-gray-600">The tutor you're looking for doesn't exist or may have been removed.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#0c0950] text-white px-6 py-2 rounded-lg font-medium"
          >
            Browse Other Tutors
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Tutor Image */}
            <div className="md:w-1/3 relative">
              <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <img 
                    src={tutor.photo} 
                    alt={tutor.name} 
                    className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#0c0950]/20 transition-all duration-300"></div>
                </motion.div>
              </div>
            </div>

            {/* Tutor Info */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex justify-between items-start">
                <div>
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-[#0c0950]"
                  >
                    {tutor.name}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-600 mt-1"
                  >
                    {tutor.subjects.join(', ')} Tutor
                  </motion.p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0c0950] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaStar className="text-yellow-300" />
                  <span className="font-bold">{tutor.rating || '4.9'}</span>
                </motion.div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0c0950]/10 p-3 rounded-full">
                    <FaGraduationCap className="text-[#0c0950] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">QUALIFICATION</h3>
                    <p className="text-lg font-medium">{tutor.qualification}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0c0950]/10 p-3 rounded-full">
                    <IoTime className="text-[#0c0950] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">EXPERIENCE</h3>
                    <p className="text-lg font-medium">{tutor.experience} years</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0c0950]/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-[#0c0950] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">LOCATION</h3>
                    <p className="text-lg font-medium">{tutor.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0c0950]/10 p-3 rounded-full">
                    <FaRupeeSign className="text-[#0c0950] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">RATE</h3>
                    <p className="text-lg font-medium">₹{tutor.rate}/hr</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold text-[#0c0950] mb-4">About Me</h3>
                <p className="text-gray-700 leading-relaxed">{tutor.bio}</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Subjects & Availability */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-xl font-semibold text-[#0c0950] mb-4 flex items-center gap-2">
              <FaBook className="text-[#0c0950]" />
              Subjects Taught
            </h3>
            <div className="flex flex-wrap gap-3">
              {tutor.subjects.map((subject, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-[#0c0950]/10 text-[#0c0950] rounded-full font-medium"
                >
                  {subject}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-xl font-semibold text-[#0c0950] mb-4 flex items-center gap-2">
              <IoTime className="text-[#0c0950]" />
              Availability
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="text-center">
                  <p className="font-medium">{day}</p>
                  <div className={`h-2 rounded-full mt-2 ${Math.random() > 0.3 ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                  <p className="text-xs mt-1 text-gray-500">
                    {Math.random() > 0.3 ? '9AM-6PM' : 'Not available'}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-[#0c0950] to-[#1a147a] rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Ready to start learning with {tutor.name.split(' ')[0]}?</h3>
              <p className="mt-2 opacity-90">Book a trial session now and experience quality teaching</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0c0950] px-8 py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-2"
              >
                <FaChalkboardTeacher />
                Book Trial Session
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-2"
              >
                Message Tutor
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}