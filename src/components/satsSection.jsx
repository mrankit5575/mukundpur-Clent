'use client'

import { motion } from "framer-motion";
import { FiUsers, FiBook, FiAward, FiClock } from "react-icons/fi";
import CountUp from 'react-countup';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: 12500,
      label: "Active Students",
      icon: <FiUsers className="text-4xl" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      value: 850,
      label: "Verified Tutors",
      icon: <FiBook className="text-4xl" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 3,
      value: 96,
      label: "Success Rate",
      suffix: "%",
      icon: <FiAward className="text-4xl" />,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 4,
      value: 25000,
      label: "Teaching Hours",
      icon: <FiClock className="text-4xl" />,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0c0950] to-blue-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transforming Education <span className="text-blue-300">Every Day</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of students and educators in India's fastest growing learning platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`${stat.bgColor} ${stat.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUp 
                  end={stat.value} 
                  duration={3} 
                  separator=","
                  suffix={stat.suffix || ""}
                />
              </div>
              <h3 className="text-xl font-medium text-blue-200">{stat.label}</h3>
            </motion.div>
          ))}
        </div>

        {/* Animated Progress Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">Our Student Progress</h3>
            
            {[
              { label: "Academic Improvement", value: 92, color: "bg-blue-400" },
              { label: "Exam Success Rate", value: 87, color: "bg-green-400" },
              { label: "Parent Satisfaction", value: 95, color: "bg-purple-400" },
              { label: "Tutor Retention", value: 98, color: "bg-orange-400" }
            ].map((item, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between text-white mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2.5 rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;