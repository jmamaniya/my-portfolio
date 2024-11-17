import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../../data/educationData';

const Education: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16 transform perspective-[1000px]" 
            variants={itemVariants}
            whileHover={{ rotateX: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]">
              Education
            </h2>
            <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full"/>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {educationData.degrees.map((edu) => (
              <motion.div
                key={edu.degree}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl 
                         transition-all duration-300 overflow-hidden transform perspective-[1000px]"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 2,
                  translateZ: 20
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-8">
                  {/* Degree Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="p-3 bg-blue-50 rounded-lg text-[#1A73E8]"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-[#1A73E8] font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-500">
                        <span className="flex items-center gap-2 group">
                          <div className="p-1 rounded-full bg-blue-50 text-[#1A73E8] group-hover:bg-[#1A73E8] group-hover:text-white transition-colors">
                            <Calendar className="w-4 h-4" />
                          </div>
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-2 group">
                          <div className="p-1 rounded-full bg-blue-50 text-[#1A73E8] group-hover:bg-[#1A73E8] group-hover:text-white transition-colors">
                            <MapPin className="w-4 h-4" />
                          </div>
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GPA if available */}
                  {edu.gpa && (
                    <motion.div 
                      className="mb-6 p-4 bg-blue-50 rounded-lg transform perspective-[1000px]"
                      whileHover={{ 
                        scale: 1.02,
                        rotateX: 2,
                        translateZ: 10
                      }}
                    >
                      <p className="text-[#1A73E8] font-semibold">
                        GPA: {edu.gpa}
                      </p>
                    </motion.div>
                  )}

                  {/* Highlights - Removed animations from bullets */}
                  <div className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <span className="text-[#1A73E8] mt-1.5">•</span>
                        <p className="text-gray-600 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;