


import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    "MERN Full Stack Developer",
    "Backend Deveoper",
    "Frontend Developer"
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (currentIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const pauseTimer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }
  }, [currentIndex, currentRoleIndex, roles]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Content - Top Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Bhoomika B N</span>
            </h1>

            {/* Animated Roles Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-4 min-h-[60px] flex items-center justify-center">
                <span className="text-pink-500">{displayText}</span>
                <span className="ml-1 animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <a
                href={assets.cv}
                download="Bhoomika_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaDownload className="text-green-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Image - Bottom Section with Circle Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-70 rounded-full -inset-2"></div>
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="relative w-48 h-48 md:w-60 md:h-60 object-cover rounded-full z-10"
              src={assets.profileImg}
              alt="Bhoomika B N - Frontend Developer"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;