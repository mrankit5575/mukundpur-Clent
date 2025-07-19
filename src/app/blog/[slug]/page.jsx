// pages/blog/[slug].jsx
'use client'

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { use } from 'react'; // ✅ Import use

const BlogPost = ({ params }) => {
//   const { slug } = params;
const { slug } = use(params); // ✅ Unwrap the params Promise


  // Sample blog post data (in a real app, you'd fetch this from a CMS or API)
  const blogPosts = {
    "sharing-study-material": {
      id: 1,
      title: "5 Effective Ways to Share Study Material with Juniors",
      date: "June 15, 2023",
      readTime: "4 min read",
      image: "/bimg.jpg",

       content: [
        {
          type: "paragraph",
          text: "Helping your juniors with study materials isn't just about sharing notes—it's about creating a system that helps them learn effectively. Here are five proven methods:"
        },
        {
          type: "heading",
          text: "1. Create Organized Digital Repositories"
        },
        {
          type: "paragraph",
          text: "Use platforms like Google Drive or Notion to create structured repositories. Organize materials by subject, topic, and date. Include:"
        },
        {
          type: "list",
          items: [
            "Lecture notes with clear headings",
            "Important textbook pages scanned",
            "Your personal annotations and mnemonics",
            "Previous year question papers"
          ]
        },
        {
          type: "heading",
          text: "2. Record Explanation Videos"
        },
        {
          type: "paragraph",
          text: "Short 5-10 minute videos explaining complex concepts can be incredibly helpful. Use tools like Loom or even your smartphone. Focus on topics you found difficult when you first learned them."
        },
        {
          type: "heading",
          text: "3. Conduct Weekly Q&A Sessions"
        },
        {
          type: "paragraph",
          text: "Set up a regular virtual meeting where juniors can ask questions. This creates accountability and ensures they're engaging with the material."
        },
        {
          type: "heading",
          text: "4. Create Concept Maps"
        },
        {
          type: "paragraph",
          text: "Visual learners benefit greatly from concept maps that show relationships between ideas. Tools like Miro or even hand-drawn maps shared digitally work well."
        },
        {
          type: "heading",
          text: "5. Build Annotated Resource Lists"
        },
        {
          type: "paragraph",
          text: "Don't just share links—explain why each resource is valuable. For example: 'This YouTube channel explains organic chemistry mechanisms better than our textbook.'"
        }
      ]
    },
    "tech-study-productivity": {
      id: 2,
      title: "How Technology Can Supercharge Your Study Sessions",
      date: "July 2, 2023",
      readTime: "6 min read",
      image: "/bimg1.jpeg",

       content: [
        {
          type: "paragraph",
          text: "The right technology can transform your study sessions from frustrating to highly productive. Here's how to leverage tech for better learning:"
        },
        {
          type: "heading",
          text: "Active Recall with Flashcard Apps"
        },
        {
          type: "paragraph",
          text: "Apps like Anki and Quizlet use spaced repetition algorithms to help you remember more with less effort. Benefits include:"
        },
        {
          type: "list",
          items: [
            "Automatic scheduling of review sessions",
            "Multimedia support (images, audio)",
            "Sync across all devices",
            "Shared decks from other students"
          ]
        },
        {
          type: "heading",
          text: "Distraction-Free Writing Tools"
        },
        {
          type: "paragraph",
          text: "Tools like FocusWriter or even Google Docs in full-screen mode help you concentrate. Combine with speech-to-text for faster note-taking during lectures."
        },
        {
          type: "heading",
          text: "Automated Study Analytics"
        },
        {
          type: "paragraph",
          text: "Apps like Forest track your study time while blocking distracting websites. Over time, you'll see patterns in your most productive hours."
        },
        {
          type: "heading",
          text: "Collaborative Learning Platforms"
        },
        {
          type: "paragraph",
          text: "Notion, Obsidian, or even GitHub can be used to create shared knowledge bases with classmates. Version history ensures you never lose work."
        }
      ]
    },
    "mind-mapping-techniques": {
      id: 3,
      title: "Mind Mapping: The Secret to Retaining More Information",
      date: "July 18, 2023",
      readTime: "5 min read",
      image: "/bimg2.jpg"
      ,
       content: [
        {
          type: "paragraph",
          text: "Mind mapping engages both hemispheres of your brain, making recall easier and more natural. Here's how to do it effectively:"
        },
        {
          type: "heading",
          text: "Start with a Central Image"
        },
        {
          type: "paragraph",
          text: "Your brain remembers images better than words. Draw or paste a representative image at the center of your map."
        },
        {
          type: "heading",
          text: "Use Color Coding"
        },
        {
          type: "paragraph",
          text: "Assign different colors to different branches or concepts. This creates visual distinctions that aid memory."
        },
        {
          type: "heading",
          text: "Keep Text Minimal"
        },
        {
          type: "paragraph",
          text: "Use single keywords or short phrases rather than sentences. Your brain will fill in the connections."
        },
        {
          type: "heading",
          text: "Digital vs Handwritten"
        },
        {
          type: "paragraph",
          text: "While apps like MindMeister are convenient, research shows the physical act of drawing enhances memory. Consider a hybrid approach."
        }
      ]
    },
    "digital-study-groups": {
      id: 4,
      title: "Creating Effective Study Groups in the Digital Age",
      date: "August 5, 2023",
      readTime: "7 min read",
      image: "/img3.jpg",
      content: [
        {
          type: "paragraph",
          text: "Virtual study groups can be even more effective than in-person ones when done right. Here's how to set them up:"
        },
        {
          type: "heading",
          text: "Choose the Right Platform"
        },
        {
          type: "paragraph",
          text: "Options include:"
        },
        {
          type: "list",
          items: [
            "Discord for persistent chat with topic channels",
            "Zoom for live study sessions with breakout rooms",
            "Miro for collaborative whiteboarding",
            "Google Workspace for shared documents"
          ]
        },
        {
          type: "heading",
          text: "Establish Clear Norms"
        },
        {
          type: "paragraph",
          text: "Set expectations about:"
        },
        {
          type: "list",
          items: [
            "Frequency and duration of meetings",
            "Preparation requirements",
            "Participation expectations",
            "How to handle distractions"
          ]
        },
        {
          type: "heading",
          text: "Use the Feynman Technique"
        },
        {
          type: "paragraph",
          text: "Take turns teaching concepts to each other. The act of teaching reveals gaps in your own understanding."
        }
      ]
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | EduBlog</title>
        <meta name="description" content={post.content[0].text} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-10"
        >
          <div className="h-64 md:h-80 bg-gray-200 overflow-hidden">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="prose max-w-none"
            >
              {post.content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  {section.type === "heading" && (
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">{section.text}</h2>
                  )}
                  {section.type === "paragraph" && (
                    <p className="text-gray-700 leading-relaxed">{section.text}</p>
                  )}
                  {section.type === "list" && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-6 border-t border-gray-200"
            >
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center text-indigo-600 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to all articles
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BlogPost;