 'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Project card component
const ProjectCard = ({ project, index }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden "
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <Link href={project.link}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors"
            >
              View Live
            </motion.div>
          </Link>

          <a
            href={project.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{note.title}</h3>
        <p className="text-gray-600 mb-4">{note.description}</p>

        <div className="flex space-x-3">
          <a
            href={note.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors inline-block"
          >
            View Notes
          </a>

          {note.readLink && (
            <a
              href={note.readLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors inline-block"
            >
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
  const projects = [
    {
      title: 'Simple Calculator',
      description: 'Basic calculator built using HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://astonishing-sundae-5d6960.netlify.app/',
      pdfLink:
        'https://drive.google.com/file/d/17iUHo_7oRtRwodAK4ymo6DozurdPEa7o/view?usp=sharing',
    },
  ];

  const notes = [
    {
      title: 'Introduction to Internet for Web Development',
      description: 'Understanding the foundation before building websites.',
      link: 'https://drive.google.com/file/d/10wsMd6Lbxjllrx7PO8I6GALupsxws4kA/view?usp=drive_link',
      readLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview', // New link for reading directly
    },
    // {
    //   title: 'Second Class Notes',
    //   description: 'CSS basics, selectors and styling a webpage.',
    //   link: 'https://drive.google.com/file/d/your-second-class-link/view?usp=sharing',
    //   readLink: 'https://example.com/second-class-read-online',
    // },
  ];

  return (
    <div className="p-6">
      {/* Notes Section */}
      <h1 className="text-3xl font-bold mb-6 mt-24">Web Development Notes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note, index) => (
          <NoteCard key={index} note={note} index={index} />
        ))}
      </div>

      {/* Projects Section */}
      <h1 className="text-3xl font-bold mb-6">Web Development Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} index={index} />
        ))}
      </div>
    </div>
  );
}
