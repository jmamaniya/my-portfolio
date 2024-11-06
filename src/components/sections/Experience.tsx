// src/components/sections/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';

const Experience: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building innovative solutions and driving technological excellence across different domains
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-20">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.company}
                className="relative"
                variants={itemVariants}
              >
                {/* Company Header */}
                <div className="mb-8">
                  <div className="flex items-start md:items-center flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-600">
                        {experience.company}
                      </h3>
                      <p className="text-xl text-gray-700 mt-1">
                        {experience.role}
                      </p>
                      <p className="text-gray-500 mt-1">
                        {experience.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-8 pl-4 border-l-2 border-gray-200">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="relative"
                      variants={itemVariants}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-[25px] top-[10px] w-4 h-4 bg-primary-500 rounded-full" />
                      
                      {/* Achievement Content */}
                      <div className="pl-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {achievement.area}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;