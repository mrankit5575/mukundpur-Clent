 'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Announcement card component
const AnnouncementCard = ({ message }) => {
  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ scale: 1.01 }}
      className="relative bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 text-red-900 p-6 mb-8 rounded-lg shadow-sm mt-15"
    >
      <div className="absolute top-2 right-2 text-red-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <p className="font-medium text-lg leading-relaxed">{message}</p>
    </motion.div>
  );
};

// Project card component
const ProjectCard = ({ project, index }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex space-x-3">
          <Link href={project.link}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg cursor-pointer hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Live
            </motion.div>
          </Link>

          <a
            href={project.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all shadow-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Notes
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Notes card component
const NoteCard = ({ note, index }) => {
  if (!note) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{note.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{note.description}</p>

        <div className="flex space-x-3">
          <a
            href={note.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all shadow-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Notes
          </a>

          {note.readLink && (
            <a
              href={note.readLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all shadow-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read Online
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Page component
export default function WebdevPage() {
  const announcement = 'There is a quiz tomorrow! It has 10 questions, so study the topics covered in the previous class first';

  const projects = [
    {
      title: 'Simple Calculator',
      description: 'A responsive calculator built with vanilla JavaScript that performs basic arithmetic operations with a clean UI design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      link: 'https://astonishing-sundae-5d6960.netlify.app/',
      pdfLink: 'https://drive.google.com/file/d/17iUHo_7oRtRwodAK4ymo6DozurdPEa7o/view?usp=sharing',
    },
     
  ];

  const notes = [
    {
      title: 'Introduction to Internet for Web Development',
      description: 'Comprehensive guide covering HTTP protocols, DNS, and how the web works at a fundamental level.',
      link: 'https://drive.google.com/file/d/10wsMd6Lbxjllrx7PO8I6GALupsxws4kA/view?usp=drive_link',
      readLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview',
    },
     
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Announcement Section */}
      <AnnouncementCard message={announcement} />

      {/* Notes Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center mb-8">
          <div className="w-2 h-8 bg-green-600 rounded-full mr-3"></div>
          <h1 className="text-3xl font-bold text-gray-900">Web Development Notes</h1>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, index) => (
            <NoteCard key={index} note={note} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-24"
      >
        <div className="flex items-center mb-8">
          <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
          <h1 className="text-3xl font-bold text-gray-900">Web Development Projects</h1>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}