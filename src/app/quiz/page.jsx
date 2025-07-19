 // pages/index.jsx
'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Home() {
  const [step, setStep] = useState('start'); // start | quiz | submitted | wait
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentId, setStudentId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle Start Quiz
  const handleStart = async () => {
    setError('');
    if (!name || !phone) {
      setError('Name and phone are required');
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post('https://server-k6vr.onrender.com/api/start', { name, phone });
      setStudentId(res.data.studentId);
      await fetchQuestions(res.data.studentId);
    } catch (err) {
      setError('Unable to start quiz');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch Questions
  const fetchQuestions = async (id) => {
    try {
      const res = await axios.get('https://server-k6vr.onrender/api/quiz', {
        headers: { 'x-student-id': id }
      });

      if (res.data.questions.length === 0) {
        setStep('wait');
      } else {
        setQuestions(res.data.questions);
        setStep('quiz');
      }
    } catch (err) {
      setStep('wait');
    }
  };

  // Submit Quiz
  const handleSubmit = async () => {
    const formattedAnswers = Object.entries(answers).map(([id, selected]) => ({
      id,
      selected,
    }));

    setIsLoading(true);
    try {
      const res = await axios.post('https://server-k6vr.onrender.com/api/submit', {
        studentId,
        answers: formattedAnswers
      });
      setScore(res.data.score);
      setStep('submitted');
    } catch (err) {
      setError('Submit failed or time expired');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Quiz_IQ - Interactive Learning Platform</title>
        <meta name="description" content="Test your knowledge with our interactive quiz platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white mt-20 rounded-xl shadow-md overflow-hidden"
        >
          <div className="bg-indigo-600 py-4 px-6">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Crack_IQ
            </h1>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {step === 'start' && (
                <motion.div
                  key="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-gray-800">Welcome to the Quiz!</h2>
                  <p className="text-gray-600">Please enter your details to begin the assessment.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>

                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStart}
                    disabled={isLoading}
                    className={`w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Start Quiz'}
                  </motion.button>
                </motion.div>
              )}

              {step === 'wait' && (
                <motion.div
                  key="wait"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="inline-block mb-6"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Not Available Yet</h2>
                  <p className="text-gray-600 mb-6">The administrator hasn't started the quiz. Please wait and try again later.</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep('start')}
                    className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
                  >
                    Back to Start
                  </motion.button>
                </motion.div>
              )}

              {step === 'quiz' && (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Quiz Questions</h2>
                    <div className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full text-sm font-medium">
                      Student ID: {studentId}
                    </div>
                  </div>

                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {questions.map((q, idx) => (
                      <motion.div 
                        key={q.id}
                        variants={itemVariants}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition"
                      >
                        <p className="text-lg font-medium text-gray-800 mb-4">
                          <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                            {idx + 1}
                          </span>
                          {q.question}
                        </p>
                        <div className="space-y-3 pl-8">
                          {q.options.map(opt => (
                            <motion.div 
                              key={opt}
                              whileHover={{ x: 5 }}
                              className="flex items-center"
                            >
                              <input
                                type="radio"
                                id={`${q.id}-${opt}`}
                                name={q.id}
                                value={opt}
                                checked={answers[q.id] === opt}
                                onChange={() =>
                                  setAnswers({ ...answers, [q.id]: opt })
                                }
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                              />
                              <label htmlFor={`${q.id}-${opt}`} className="ml-3 block text-gray-700">
                                {opt}
                              </label>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}

                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      disabled={isLoading || Object.keys(answers).length !== questions.length}
                      className={`py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition ${isLoading || Object.keys(answers).length !== questions.length ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : 'Submit Quiz'}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 'submitted' && (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="inline-block mb-6"
                  >
                    <div className="bg-green-100 p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Submitted Successfully!</h2>
                  <p className="text-gray-600 mb-4">Thank you for completing the assessment.</p>
                  
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="inline-block bg-indigo-50 px-6 py-4 rounded-lg mb-6"
                  >
                    <p className="text-sm text-indigo-600 font-medium mb-1">Your Score</p>
                    <p className="text-4xl font-bold text-indigo-800">{score}/{questions.length}</p>
                  </motion.div>
                  
                  <div className="mt-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setStep('start');
                        setName('');
                        setPhone('');
                        setStudentId('');
                        setAnswers({});
                      }}
                      className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
                    >
                      Take Another Quiz
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Crack_IQ - Interactive Learning Platform
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}