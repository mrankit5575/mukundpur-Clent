// pages/blog/index.jsx
'use client'

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
 
const blogPosts = [
  {
    id: 1,
    title: "5 Effective Ways to Share Study Material with Juniors",
    excerpt: "Learn how to organize and share your knowledge to help your juniors succeed academically.",
    date: "June 15, 2023",
    readTime: "4 min read",
    slug: "sharing-study-material",
    image: "/bimg.jpg"
  },
  {
    id: 2,
    title: "How Technology Can Supercharge Your Study Sessions",
    excerpt: "Discover the best tech tools and apps to make your study time more productive than ever.",
    date: "July 2, 2023",
    readTime: "6 min read",
    slug: "tech-study-productivity",
    image: "/bimg1.jpeg"
  },
  {
    id: 3,
    title: "Mind Mapping: The Secret to Retaining More Information",
    excerpt: "Unlock the power of visual learning with these mind mapping techniques.",
    date: "July 18, 2023",
    readTime: "5 min read",
    slug: "mind-mapping-techniques",
    image: "/bimg2.jpg"
  },
  {
    id: 4,
    title: "Creating Effective Study Groups in the Digital Age",
    excerpt: "How to form and maintain productive study groups using technology.",
    date: "August 5, 2023",
    readTime: "7 min read",
    slug: "digital-study-groups",
    image: "/bimg3.jpg"
  }
];

const BlogPage = () => {
  return (
    <>
       <Head>
        <title>Blog | CrackIQ - Latest Exam Tips & Study Guides</title>
        <meta
          name="description"
          content="Read expert blogs on UPSC, SSC, Banking and more. Get study tips, preparation strategies, syllabus updates and career guidance from CrackIQ."
        />
        <meta name="keywords" content="crackiq blog, upsc tips, ssc preparation, banking exams, study hacks, syllabus update" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.crackiq.in/blog" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="CrackIQ Blog" />
        <meta property="og:description" content="Latest updates, tips and strategies for government exams and competitive prep." />
        <meta property="og:image" content="https://www.crackiq.in/blog-og.jpg" />
        <meta property="og:url" content="https://www.crackiq.in/blog" />
        <meta property="og:type" content="website" />
      </Head>


      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-bold text-gray-800 mb-4 mt-10"
            >
              Crack_IQ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Study smarter, not harder with our collection of learning strategies and tech tips.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-indigo-600 font-medium flex items-center"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default BlogPage;