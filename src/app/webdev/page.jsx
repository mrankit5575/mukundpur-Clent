 'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Card component
const ProjectCard = ({ project, index }) => {
  if (!project) return null;

  return (
    <div className="mt-20" >
      <h1 className="text-3xl font-bold mb-6">Web Development Projects</h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden "
    > <h1></h1>
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
    </div>

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
      pdfLink: 'https://drive.google.com/file/d/17iUHo_7oRtRwodAK4ymo6DozurdPEa7o/view?usp=sharing',
    },
    // {
    //   title: 'E-commerce Dashboard',
    //   description: 'Admin dashboard to manage products & orders.',
    //   technologies: ['React', 'Chart.js', 'Node.js'],
    //   link: 'https://example2.com',
    //   pdfLink: 'https://example2.com/project.pdf',
    // },
  ];

  return (
    <div className="p-6 ">
      {/* <h2 className="text-3xl font-bold mb-6">Web Development Projects</h2> */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} index={index} />
        ))}
      </div>
    </div>
  );
}
