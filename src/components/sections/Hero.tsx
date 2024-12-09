// src/components/sections/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Hero: React.FC = () => {
  // Stagger children elements animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Fade up animation for individual elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Subtle floating animation for greeting
  const floatVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Text reveal animation for name
  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen bg-[#F8FAFC] relative">
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center">
        <motion.div
          className="max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Greeting */}
          <motion.div
            whileHover="hover"
            variants={floatVariants}
            className="mb-8"
          >
            <motion.span
              className="inline-block px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Hi there, I'm
            </motion.span>
          </motion.div>

          {/* Animated Name */}
          <motion.h1
            variants={textRevealVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-[#1A73E8]"
          >
            Jinal Mamaniya
          </motion.h1>

          {/* Role Title with fade */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-800 mb-8 font-semibold"
          >
            Senior Software Engineer
          </motion.h2>

          {/* Description with staggered fade */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Building modern web applications with expertise in full-stack
            development. Specializing in creating scalable solutions and
            delivering exceptional user experiences. Passionate about building
            high-performance applications and implementing best practices in
            software development. Committed to continuous learning and staying
            at the forefront of emerging technologies.
          </motion.p>

          {/* CTA Buttons with hover animations */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-[#1A73E8] text-white rounded-full hover:bg-[#1976D2] 
                       transition-all duration-300 shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 15px rgba(30, 136, 229, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>

            {/* <motion.a
              href="/my-portfolio/Jinal_Mamaniya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#1A73E8] text-[#1A73E8] rounded-full 
                       hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.a> */}
          </motion.div>

          {/* Social Links with hover effects */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6"
          >
            <SocialLink
              href="http://www.linkedin.com/in/jinal-mamaniya"
              icon={<FaLinkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:mamaniya.jinals@gmail.com"
              icon={<HiMail className="w-6 h-6" />}
              label="Email"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Social Link component
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-[#1A73E8] transition-colors p-2 
               hover:bg-blue-50 rounded-full"
    whileHover={{
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default Hero;
