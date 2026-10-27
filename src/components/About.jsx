import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="about"
      className="py-20 bg-dark-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          About <span className="text-pink-500">Me</span>
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get to know more about my background and passion
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="rounded-2xl p-8 bg-dark-300/50 backdrop-blur-sm border border-gray-700/50"
            variants={itemVariants}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My Journey
            </motion.h3>
            
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a Full Stack Web Developer with 2+ years of experience building modern, end-to-end applications using the MERN stack — MongoDB, Express.js, React, and Node.js.
            </motion.p>
            
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Skilled in working with both relational (SQL) and non-relational (MongoDB) databases, I develop scalable Applications using Frontend and backend services and build seamless integrations between frontend and backend. I have hands-on experience creating secure RESTful APIs, managing code with Git, writing clean, maintainable code, and building user-focused applications that are reliable, performant, and easy to scale.
            </motion.p>

            {/* Info Boxes */}
            <motion.div
              className="flex justify-center gap-6 my-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Experience Box */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 bg-dark-300/80 backdrop-blur-sm border border-pink-500/30 rounded-lg px-6 py-4 hover:border-pink-500/60 transition-all duration-300 min-w-[180px]"
              >
                <div className="text-pink-500 text-2xl">
                  <FaBriefcase />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-lg">2+ Years</p>
                  <p className="text-gray-400 text-sm">Experience</p>
                </div>
              </motion.div>

              {/* Education Box */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 bg-dark-300/80 backdrop-blur-sm border border-pink-500/30 rounded-lg px-6 py-4 hover:border-pink-500/60 transition-all duration-300 min-w-[180px]"
              >
                <div className="text-pink-500 text-2xl">
                  <FaGraduationCap />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-lg">BE in CSE</p>
                  <p className="text-gray-400 text-sm">Education</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;