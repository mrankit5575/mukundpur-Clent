 'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiClock,
  FiShare2,
  FiBarChart2,
  FiStar,
} from 'react-icons/fi';
import { FaChalkboardTeacher, FaBookReader } from 'react-icons/fa';
import CountUp from 'react-countup';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: 12500,
      label: 'Active Students',
      icon: <FiUsers className="text-4xl" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      value: 850,
      label: 'Verified Tutors',
      icon: <FaChalkboardTeacher className="text-4xl" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 3,
      value: 96,
      label: 'Success Rate',
      suffix: '%',
      icon: <FiAward className="text-4xl" />,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      id: 4,
      value: 25000,
      label: 'Teaching Hours',
      icon: <FiClock className="text-4xl" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  const features = [
    {
      title: 'Buy/Sell Books',
      icon: <FiBookOpen className="text-3xl" />,
      description: 'Get affordable textbooks and materials',
      color: 'bg-blue-100 text-blue-600',
      path: '/buybook',
    },
    {
      title: 'Weekly Quiz',
      icon: <FiBarChart2 className="text-3xl" />,
      description: 'Test your knowledge weekly',
      color: 'bg-purple-100 text-purple-600',
      path: '/quiz',
    },
    {
      title: "Topper's Corner",
      icon: <FiStar className="text-3xl" />,
      description: 'Learn from the best students',
      color: 'bg-green-100 text-green-600',
      path: '/toppers',
    },
    // {
    //   title: 'Share Notes',
    //   icon: <FiShare2 className="text-3xl" />,
    //   description: 'Collaborate with peers',
    //   color: 'bg-orange-100 text-orange-600',
    //   path: '/study',
    // },
    {
      title: 'About Us',
      icon: <FaBookReader className="text-3xl" />,
      description: 'Our mission and vision',
      color: 'bg-indigo-100 text-indigo-600',
      path: '/aboutus',
    },
    {
      title: 'Study Materials',
      icon: <FiBookOpen className="text-3xl" />,
      description: 'Premium resources',
      color: 'bg-pink-100 text-pink-600',
      path: '/study',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0c0950] to-blue-800 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-300 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transforming <span className="text-blue-300">Education</span> Every Day
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of students and educators in India's fastest growing learning platform.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className={`${stat.bgColor} ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <CountUp end={stat.value} duration={3} separator="," suffix={stat.suffix || ''} />
              </div>
              <h3 className="text-lg font-medium text-blue-200">{stat.label}</h3>
            </motion.div>
          ))}
        </div>

        {/* Features Buttons with Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Explore Our Platform</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <Link href={feature.path} passHref>
                  <div className={`${feature.color} w-full p-4 rounded-lg flex flex-col items-center justify-center h-full cursor-pointer transition-all hover:shadow-lg`}>
                    <div className="mb-2">{feature.icon}</div>
                    <span className="font-semibold text-sm text-center">{feature.title}</span>
                    <span className="text-xs mt-1 text-center opacity-80">{feature.description}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
