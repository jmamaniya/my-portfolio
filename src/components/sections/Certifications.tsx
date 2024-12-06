import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { certificationsData } from "../../data/certificationsData";

const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState(0);

  return (
    <section id="certifications" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full mb-4" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Certificate List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4">
              {certificationsData.certifications.map((cert, index) => (
                <motion.button
                  key={cert.name}
                  onClick={() => setActiveCert(index)}
                  className={`w-full text-left p-4 rounded-lg mb-2 last:mb-0 transition-all
                             ${
                               activeCert === index
                                 ? "bg-[#1A73E8] text-white shadow-lg"
                                 : "hover:bg-gray-50"
                             }`}
                  whileHover={{ x: activeCert === index ? 0 : 5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          activeCert === index ? "bg-white/20" : "bg-blue-50"
                        }`}
                      >
                        <ShieldCheck
                          className={`w-5 h-5 ${
                            activeCert === index
                              ? "text-white"
                              : "text-[#1A73E8]"
                          }`}
                        />
                      </div>
                      <span className="font-medium">{cert.name}</span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        activeCert === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Panel - Certificate Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCert}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Certificate Header */}
                <div className="p-8 bg-gradient-to-r from-[#1A73E8]/5 to-transparent border-b">
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="p-4 bg-white rounded-xl shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Award className="w-8 h-8 text-[#1A73E8]" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {certificationsData.certifications[activeCert].name}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building2 className="w-4 h-4" />
                          <span>
                            {
                              certificationsData.certifications[activeCert]
                                .issuer
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {certificationsData.certifications[activeCert].date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Description */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6">
                    {certificationsData.certifications[activeCert].description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Key Achievements
                    </h4>
                    <div className="grid gap-4">
                      {certificationsData.certifications[
                        activeCert
                      ].achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 p-1 bg-blue-50 rounded-full">
                            <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
                          </div>
                          <p className="text-gray-600">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Credential Button */}
                  {certificationsData.certifications[activeCert]
                    .credentialUrl && (
                    <motion.a
                      href={
                        certificationsData.certifications[activeCert]
                          .credentialUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#1A73E8] 
                               text-white rounded-lg hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Verify Credential
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
