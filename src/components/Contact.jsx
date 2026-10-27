import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaMapMarkedAlt, FaLinkedin, FaDownload } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact - From ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    const mailtoLink = `mailto:bhoomikagowda1811@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Optional: Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Optional: Show success message
    alert('Your email client will open with the composed message. Please send it to complete the process.');
  };

  const handleEmailClick = () => {
    const mailtoLink = `mailto:bhoomikagowda1811@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Get In <span className="text-pink-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form - Full Width */}
          <div className="mb-16">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white focus:border-pink-500 transition duration-300"
                  type="text"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white focus:border-pink-500 transition duration-300"
                  type="email"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-white focus:border-pink-500 transition duration-300"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-pink-500 rounded-lg font-medium hover:bg-pink-600 transition duration-300 cursor-pointer text-white"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </div>

          {/* Contact Information - Below Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-dark-300/50 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition duration-300"
            >
              <motion.div 
                className="text-pink-500 text-3xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkedAlt />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-white">Location</h3>
              <p className="text-gray-400">Bengaluru, Rajajinagar</p>
              <p className="text-gray-400">560055</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-dark-300/50 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition duration-300 cursor-pointer"
              onClick={handleEmailClick}
            >
              <motion.div 
                className="text-pink-500 text-3xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-400 hover:text-pink-400 transition duration-300">
                bhoomikagowda1811@gmail.com
              </p>
              <p className="text-sm text-pink-500 mt-2">Click to email directly</p>
            </motion.div>

            {/* Follow Me */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-dark-300/50 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition duration-300"
            >
              <motion.div 
                className="text-pink-500 text-3xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub />
              </motion.div>
              <h3 className="text-lg font-semibold mb-4 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Bhoomika182"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-dark-400 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhoomika-b-n-615323216"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-dark-400 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href={assets.cv}
                  download="Bhoomika_Resume.pdf"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-dark-400 flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white transition duration-300"
                  title="Download CV"
                >
                  <FaDownload /> 
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;