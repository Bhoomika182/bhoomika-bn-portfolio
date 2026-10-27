


import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../assets/assets';

const renderPoint = (text) => {
  if (typeof text !== 'string') return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects" // ← CRITICAL: This must be "projects"
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            My <span className='text-pink-500'>Projects</span>
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects List */}
        <div className='max-w-4xl mx-auto space-y-12'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='p-6 hover:bg-dark-300/50 rounded-xl transition duration-300'>

                {/* Project Content */}
                <div>
                  <h3 className='text-2xl font-bold text-white mb-3 transition duration-300 group-hover:text-pink-500'>
                    {project.title}
                  </h3>

                  {/* Project Points */}
                  <ul className='space-y-2 mb-4'>
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex} className='flex items-start gap-3 text-gray-300'>
                        <div className='w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0'></div>
                        <span className='leading-relaxed'>{renderPoint(point)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-3 py-1 bg-dark-400 text-gray-300 rounded-full text-sm border border-gray-700'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  {project.liveLink && (
                    <div className='flex gap-4 mt-4'>
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-pink-500/25'
                      >
                        <FaExternalLinkAlt className='text-xs' />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Separator */}
              {index < projects.length - 1 && (
                <div className='h-px bg-gray-700 mx-6'></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-center mt-16'
        >
          <a
            href='#'
            className='inline-flex items-center px-8 py-3 bg-dark-300 border border-gray-600 text-white rounded-lg font-medium hover:bg-dark-400 hover:border-gray-500 transition duration-300'
          >
            <span>View All Projects</span>
            <FaArrowRight className='ml-3' />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;