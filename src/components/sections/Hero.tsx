import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#F8FAFC]">
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="absolute right-0 w-1/3 h-screen bg-gradient-to-l from-blue-50 to-transparent" />
        <div className="absolute left-0 w-1/3 h-screen bg-gradient-to-r from-blue-50 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 min-h-screen flex flex-col justify-center">
        <motion.div
          className="grid md:grid-cols-5 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="md:col-span-3 space-y-8">
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="h-[2px] w-12 bg-[#1A73E8]" />
              <span className="text-gray-600 font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name and Role */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-gray-900"
              >
                Hi, I'm{" "}
                <span className="text-[#1A73E8] relative">
                  Jinal
                  <div className="absolute -bottom-2 left-0 h-[0.5rem] w-full bg-blue-100 -z-10" />
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-gray-700"
              >
                Senior Software Engineer
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              Building modern web applications with expertise in full-stack
              development. Specializing in creating scalable solutions and
              delivering exceptional user experiences. Passionate about building
              high-performance applications and implementing best practices in
              software development. Committed to continuous learning and staying
              at the forefront of emerging technologies.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-[#1A73E8] text-white rounded-lg shadow-lg
                         transition-all hover:shadow-blue-200 hover:shadow-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Connect
              </motion.a>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <SocialLink
                  href="http://www.linkedin.com/in/jinal-mamaniya"
                  icon={<FaLinkedin className="w-5 h-5" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="mailto:mamaniya.jinals@gmail.com"
                  icon={<HiMail className="w-5 h-5" />}
                  label="Email"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats/Highlights */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 grid grid-cols-2 gap-6"
          >
            {[
              { number: "8.5+", label: "Years Experience" },
              { number: "20+", label: "Projects Completed" },
              { number: "25+", label: "Tech Stack" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-[#1A73E8] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-[#1A73E8] 
               transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
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
