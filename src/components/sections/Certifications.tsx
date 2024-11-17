import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../../data/certificationsData';
import { Award, ExternalLink } from 'lucide-react';

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
              Certifications
            </h2>
            <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full"/>
          </motion.div>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificationsData.certifications.map((cert) => (
              <motion.div
                key={cert.name}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl 
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
                {/* Certificate Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-blue-50 rounded-lg text-[#1A73E8]"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1A73E8] 
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
                      className="inline-flex items-center gap-2 text-[#1A73E8] hover:text-blue-700 
                               font-medium group/link bg-blue-50 px-4 py-2 rounded-lg
                               hover:bg-blue-100 transition-colors"
                      whileHover={{ 
                        x: 5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4 transition-transform 
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