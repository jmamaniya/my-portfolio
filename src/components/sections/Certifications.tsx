// src/components/sections/Certifications.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../../data/certificationsData';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications: React.FC = () => {
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 
                         mx-auto rounded-full"/>
          </motion.div>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificationsData.certifications.map((cert) => (
              <motion.div
                key={cert.name}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Certificate Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-50 rounded-lg text-primary-600 
                                group-hover:bg-primary-100 transition-colors">
                      <FaCertificate className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 
                                 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600">
                        Issued by <span className="font-semibold">{cert.issuer}</span>
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.credentialUrl && (
                    <motion.a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 
                               hover:text-primary-700 font-medium group/link"
                      whileHover={{ x: 5 }}
                    >
                      View Credential
                      <FaExternalLinkAlt className="w-4 h-4 transition-transform 
                                                 group-hover/link:transform 
                                                 group-hover/link:translate-x-1" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;