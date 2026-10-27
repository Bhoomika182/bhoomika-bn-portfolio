import React from 'react';
import { motion } from 'framer-motion';
import { workdetails } from '../assets/assets';

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='experience'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Work <span className='text-pink-500'>Experience</span>
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            My professional journey and contributions
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          <div className='space-y-8'>
            {workdetails.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='group'
              >
                <div className='flex flex-col lg:flex-row gap-8 p-8 bg-dark-300/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-pink-500/30 transition-all duration-300'>
                  
                  {/* Timeline & Duration */}
                  <div className='lg:w-1/4'>
                    <div className='flex items-center gap-4 mb-4 lg:mb-0'>
                      {/* <div className='w-3 h-3 bg-pink-500 rounded-full'></div> */}
                      <span className='px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium'>
                        {data.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='lg:w-3/4'>
                    <div className='mb-4'>
                      <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-pink-500 transition duration-300'>
                        {data.position}
                      </h3>
                      <p className='text-pink-400 font-medium'>{data.company}</p>
                    </div>

                    {/* Description Points */}
                    <ul className='space-y-3'>
                      {data.description.map((point, pointIndex) => (
                        <li key={pointIndex} className='flex items-start gap-3 text-gray-300'>
                          <div className='w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0'></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

  
      </div>
    </motion.div>
  );
};

export default Work;