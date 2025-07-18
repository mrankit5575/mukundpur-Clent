 'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FiFolder, FiBookOpen, FiArrowRight } from "react-icons/fi";

const StudyMaterialSection = () => {
  const grades = [
    { id: 6, name: "Class 6", path: "/study/class6", color: "bg-blue-100", hover: "hover:bg-blue-200" },
    { id: 7, name: "Class 7", path: "/study/class7", color: "bg-green-100", hover: "hover:bg-green-200" },
    { id: 8, name: "Class 8", path: "/study/class8", color: "bg-purple-100", hover: "hover:bg-purple-200" },
    { id: 9, name: "Class 9", path: "/study/class9", color: "bg-yellow-100", hover: "hover:bg-yellow-200" },
    { id: 10, name: "Class 10", path: "/study/class10", color: "bg-red-100", hover: "hover:bg-red-200" },
    { id: 11, name: "Class 11", path: "/study/class11", color: "bg-indigo-100", hover: "hover:bg-indigo-200" },
    { id: 12, name: "Class 12", path: "/study/class12", color: "bg-pink-100", hover: "hover:bg-pink-200" },
  ];

  const competitive = [
    { id: "jee", name: "JEE Preparation", path: "/study-material/jee", color: "bg-orange-100", hover: "hover:bg-orange-200" },
    { id: "neet", name: "NEET Preparation", path: "/study-material/neet", color: "bg-teal-100", hover: "hover:bg-teal-200" },
  ];

  const subjects = [
    { name: "Mathematics", icon: "🧮", path: "/study-material/subject/mathematics" },
    { name: "Science", icon: "🔬", path: "/study-material/subject/science" },
    { name: "Social Studies", icon: "🌍", path: "/study-material/subject/social-studies" },
    { name: "English", icon: "📖", path: "/study-material/subject/english" },
    { name: "Hindi", icon: "🖋️", path: "/study-material/subject/hindi" },
    { name: "Computer Science", icon: "💻", path: "/study-material/subject/computer-science" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c0950] mb-4">
            Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Study Materials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated resources for students from 6th to 12th grade along with specialized JEE & NEET preparation materials.
          </p>
        </motion.div>

        {/* Grades */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-[#0c0950] mb-6 flex items-center">
            <FiBookOpen className="mr-2" /> School Curriculum
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {grades.map((grade) => (
              <motion.div key={grade.id} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={grade.path}
                  className={`${grade.color} ${grade.hover} rounded-xl p-4 shadow-md transition-all duration-300 flex flex-col items-center cursor-pointer`}
                >
                  <FiFolder className="text-3xl mb-2 text-gray-700" />
                  <span className="font-medium text-gray-800">{grade.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Exams */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-[#0c0950] mb-6 flex items-center">
            <FiBookOpen className="mr-2" /> Competitive Exams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {competitive.map((exam) => (
              <motion.div key={exam.id} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={exam.path}
                  className={`${exam.color} ${exam.hover} rounded-xl p-6 shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer`}
                >
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{exam.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {exam.id === 'jee' ? 'Engineering Entrance' : 'Medical Entrance'}
                    </p>
                  </div>
                  <FiArrowRight className="text-xl text-gray-700" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subjects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-[#0c0950] mb-6 flex items-center">
            <FiBookOpen className="mr-2" /> Browse by Subject
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200">
              {subjects.map((subject, index) => (
                <motion.div key={index} whileHover={{ backgroundColor: "#f8fafc" }}>
                  <Link
                    href={subject.path}
                    className="bg-white p-6 flex flex-col items-center cursor-pointer transition-colors duration-300"
                  >
                    <span className="text-3xl mb-3">{subject.icon}</span>
                    <span className="font-medium text-gray-800 text-center">{subject.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Premium Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#0c0950] rounded-2xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">Premium Study Packages</h3>
              <p className="text-blue-100 max-w-lg">
                Access our exclusive collection of solved papers, concept videos, and mock tests crafted by top educators.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/premium"
                className="bg-white text-[#0c0950] px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2 whitespace-nowrap"
              >
                Explore Premium <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyMaterialSection;
