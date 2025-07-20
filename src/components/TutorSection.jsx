'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiStar, FiBook, FiFilter, FiMessageSquare, FiUser } from "react-icons/fi";
import axios from "axios";
import Link from "next/link";
import Head from 'next/head';

const MotionLink = motion(Link);

const TutorsSection = () => { 
  const [tutors, setTutors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);

  // Fetch tutors with query params
  const fetchTutors = async () => {
    setLoading(true);
    setError("");

    try {
      const params = {};
      if (selectedSubject !== "all") params.subject = selectedSubject;
      if (selectedClass !== "all") params.class = selectedClass;
      if (searchQuery.trim() !== "") params.search = searchQuery.trim();

      const res = await axios.get("https://server-k6vr.onrender.com/api/", { params });
      setTutors(res.data);

      // Extract unique subjects and classes from tutors
      const subjectsSet = new Set();
      const classesSet = new Set();
      
      res.data.forEach(tutor => {
        tutor.subjects.forEach(subj => subjectsSet.add(subj));
        tutor.classes.forEach(cls => classesSet.add(cls));
      });

      setAvailableSubjects(['all', ...Array.from(subjectsSet).sort()]);
      setAvailableClasses(['all', ...Array.from(classesSet).sort()]);

    } catch (err) {
      setError("Failed to load tutors. Please try again later.");
      console.error("Error fetching tutors:", err);
    }

    setLoading(false);
  };

  // Fetch on mount and when filters change
  useEffect(() => {
    fetchTutors();
  }, [selectedSubject, selectedClass, searchQuery]);

  return (
    <>
    <Head>
        <title>Home Tutor Services | CrackIQ</title>
        <meta
          name="description"
          content="Find qualified home tutors for SSC, UPSC, Banking and school subjects. CrackIQ helps students get 1-on-1 personalized guidance."
        />
        <meta name="keywords" content="home tutor, personal tutor, CrackIQ tutor, SSC UPSC tuition, banking exam coaching" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.crackiq.in/home-tutor" />

        {/* Open Graph / Social Meta */}
        <meta property="og:title" content="Home Tutors - CrackIQ" />
        <meta property="og:description" content="Book experienced home tutors for competitive exam preparation and school subjects." />
        <meta property="og:image" content="https://www.crackiq.in/tutor-og.jpg" />
        <meta property="og:url" content="https://www.crackiq.in/home-tutor" />
        <meta property="og:type" content="website" />
      </Head>
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Find Your <span className="text-blue-600">Perfect Tutor</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with qualified tutors tailored to your learning needs
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search tutors by name or subjects..."
              className="w-full border pl-10 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <select
              className="border px-4 py-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-500 bg-white"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="all">All Subjects</option>
              {availableSubjects.filter(s => s !== 'all').map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            <select
              className="border px-4 py-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-500 bg-white"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="all">All Classes</option>
              {availableClasses.filter(c => c !== 'all').map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Messages */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tutor Cards */}
        {!loading && !error && tutors.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <FiUser className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No tutors found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {tutors.map((tutor, index) => (
              <motion.div
                key={tutor._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {tutor.image ? (
                        <img
                          src={tutor.image}
                          alt={tutor.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-lg bg-gray-200 flex items-center justify-center">
                          <FiUser className="text-gray-400 w-10 h-10" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{tutor.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{tutor.experience}</p>
                      <div className="mt-2 flex items-center">
                        <div className="flex items-center text-yellow-500">
                          <FiStar className="fill-current" />
                          <span className="ml-1 text-gray-700 font-medium">
                            {tutor.rating || "New"}
                          </span>
                        </div>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-blue-600 font-bold">
                          ₹{tutor.price || "Contact"} /hr
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 text-sm line-clamp-3">{tutor.bio}</p>

                  <div className="mt-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Subjects</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tutor.subjects.slice(0, 3).map((subj, i) => (
                        <span 
                        key={i} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {subj}
                        </span>
                      ))}
                      {tutor.subjects.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{tutor.subjects.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Classes</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tutor.classes.slice(0, 3).map((cls, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                        >
                          {cls}
                        </span>
                      ))}
                      {tutor.classes.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{tutor.classes.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                  <Link 
                    href={`/tutors/${tutor._id}`} 
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Profile →
                  </Link>
                  <Link
                    href={`/book-session/${tutor._id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                    <FiMessageSquare className="mr-2" />
                    Book Session
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
                    </>
  );
};

export default TutorsSection;