// src/components/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center 
                                bg-gradient-to-br from-white via-primary-50/30 to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p 
            className="text-primary-600 font-medium mb-4 tracking-wide"
            variants={itemVariants}
          >
            Hi there, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 
                         bg-clip-text text-transparent">
              Jinal Mamaniya
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold"
            variants={itemVariants}
          >
            Senior Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Building modern web applications with expertise in full-stack development.
            Specializing in creating scalable solutions and delivering exceptional user experiences.
            Passionate about building high-performance applications and implementing best practices in software development. Committed to continuous learning and staying at the forefront of emerging technologies to deliver exceptional user experiences and maintainable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-full font-medium
                     hover:bg-primary-700 transition-colors duration-300 shadow-lg 
                     shadow-primary-600/20 hover:shadow-primary-600/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            <motion.a
              href="/my-portfolio/Jinal_Mamaniya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 
                     rounded-full font-medium hover:bg-primary-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center space-x-6"
            variants={itemVariants}
          >
            <SocialLink
              href="http://www.linkedin.com/in/jinal-mamaniya"
              icon={<FaLinkedin size={24} />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:jmamaniya2022@gmail.com"
              icon={<HiMail size={24} />}
              label="Email"
            />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Hero;