import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
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
    <section id="experience" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16 transform perspective-[1000px]" 
            variants={itemVariants}
            whileHover={{ rotateX: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full mb-4"/>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building innovative solutions and driving technological excellence across different domains
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-20">
            {experienceData.map((experience) => (
              <motion.div
                key={experience.company}
                className="relative bg-white rounded-xl shadow-lg p-8 transform perspective-[1000px]"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 2,
                  translateZ: 20
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Company Header */}
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-blue-50 rounded-lg text-[#1A73E8]"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A73E8]">
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
                  </div>
                </div>

                {/* Achievements - Removed animations */}
                <div className="space-y-8 pl-4 border-l-2 border-blue-100">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="relative"
                    >
                      {/* Timeline Dot - Removed hover effect */}
                      <div className="absolute -left-[25px] top-[10px] w-4 h-4 bg-[#1A73E8] rounded-full" />
                      
                      {/* Achievement Content - Removed hover animation */}
                      <div className="pl-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {achievement.area}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
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