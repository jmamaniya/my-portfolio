import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r 
                         from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 
                         mx-auto rounded-full"/>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {educationData.degrees.map((edu) => (
              <motion.div
                key={edu.degree}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all 
                         duration-300 overflow-hidden border border-gray-100"
                variants={itemVariants}
              >
                <div className="p-8">
                  {/* Degree Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                      <FaGraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-primary-600 font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-500">
                        <span className="flex items-center gap-2">
                          <FaRegCalendarAlt className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GPA if available */}
                  {edu.gpa && (
                    <div className="mb-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-primary-700 font-semibold">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        variants={itemVariants}
                      >
                        <span className="text-primary-500 mt-1.5">•</span>
                        <p className="text-gray-600 leading-relaxed">
                          {highlight}
                        </p>
                      </motion.div>
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