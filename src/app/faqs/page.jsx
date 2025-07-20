// components/FAQ.jsx
'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Crack_IQ and how does it work?",
      answer: "Crack_IQ is an educational platform designed to help students prepare for competitive exams through quizzes, study materials, and video lectures. Our system adapts to your learning pace and provides personalized recommendations to improve your performance."
    },
    {
      question: "Are the study materials and quizzes free?",
      answer: "We offer both free and premium content. Basic study materials and sample quizzes are available for free, while comprehensive courses and advanced practice tests require a premium subscription."
    },
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button at the top right corner of the page. You can register using your email address or through your Google/Facebook account. After verification, you'll have full access to our resources."
    },
    {
      question: "What courses and exams do you cover?",
      answer: "We currently cover major competitive exams including JEE, NEET, UPSC, CAT, and GATE. We're continuously adding new courses and subjects based on student demand."
    },
    {
      question: "How can I track my progress?",
      answer: "Your dashboard provides detailed analytics including quiz scores, time spent studying, and areas that need improvement. Premium members get advanced progress tracking with personalized insights."
    },
    {
      question: "Can I access the content on mobile devices?",
      answer: "Yes, our platform is fully responsive and works on smartphones, tablets, and desktops. We also have a mobile app available for download on iOS and Android."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, net banking, UPI payments, and PayPal. All transactions are secure and encrypted."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team 24/7 through email at support@crack_iq.com or call us at +91 9718659236. We also offer live chat support during business hours (9 AM to 6 PM IST)."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee for all premium subscriptions if you're not satisfied with our service. Please contact our support team to initiate a refund request."
    },
    {
      question: "How often is new content added?",
      answer: "We update our question banks weekly and add new video lectures monthly. Major course updates happen at the beginning of each academic season (typically June and January)."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-10"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-blue-900 max-w-2xl mx-auto">
            Find answers to common questions about Crack_IQ, our courses, and how to make the most of your learning experience.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-blue-800">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-4"
                >
                  <p className="text-blue-900">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Still have questions?</h2>
          <p className="text-blue-900 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="mailto:ankitroy5575@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Email Us
            </motion.a>
            <motion.a
              href="tel:+919718659236"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-800 border border-blue-800 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Call Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;