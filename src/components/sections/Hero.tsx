// src/components/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Jinal Mamaniya
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Senior Software Engineer
          </motion.h2>

          <motion.p
  className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-justify"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  Innovative Senior Software Engineer and Full Stack Developer specializing in end-to-end application 
  development with modern technologies. Expert in crafting scalable, cloud-native solutions from 
  frontend to backend, leveraging cutting-edge frameworks and robust architectures. Passionate about 
  building high-performance applications and implementing best practices in software development. 
  Committed to continuous learning and staying at the forefront of emerging technologies to deliver 
  exceptional user experiences and maintainable solutions.
</motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
                        <motion.a
              href="/my-portfolio/Jinal_Mamaniya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg
                       hover:bg-primary-700 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="w-5 h-5" />
              View Resume
            </motion.a>

            <SocialLink
              href="http://www.linkedin.com/in/jinal-mamaniya"
              icon={<FaLinkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:jmamaniya2022@gmail.com"
              icon={<HiMail className="w-6 h-6" />}
              label="Email"
            />
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
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Hero;