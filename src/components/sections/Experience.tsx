import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../../data/experienceData";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building innovative solutions and driving technological excellence
              across different domains
            </p>
          </motion.div>

          <div className="space-y-12">
            {experienceData.map((experience) => (
              <motion.div
                key={experience.company}
                className="relative bg-white rounded-xl shadow-lg p-8"
                variants={itemVariants}
              >
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="p-3 bg-blue-50 rounded-lg text-[#1A73E8]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A73E8]">
                      {experience.company}
                    </h3>
                    <p className="text-xl text-gray-700 mt-1">
                      {experience.role}
                    </p>
                    <p className="text-gray-500">{experience.period}</p>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      variants={itemVariants}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {achievement.area}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description.split(" ").map((word, i) => {
                          const isHighlight = isKeyword(word);
                          return (
                            <span
                              key={i}
                              className={
                                isHighlight ? "text-[#1A73E8] font-medium" : ""
                              }
                            >
                              {word}{" "}
                            </span>
                          );
                        })}
                      </p>
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

// Enhanced keyword detection
const isKeyword = (word: string): boolean => {
  const keywords = [
    // Technical Skills
    "C#",
    "React",
    "Angular",
    "Angular's",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GraphQL",
    "REST",
    "API",
    "microservices",
    "SQL",
    "MongoDB",
    "DevOps",
    "Python",
    "Java",
    "NET",
    "node.js",
    "architecture",
    "frontend",
    "backend",
    "full-stack",
    "SASS",
    "Material",
    "BEM",

    // Development Concepts
    "scalable",
    "optimized",
    "performance",
    "automation",
    "deployment",
    "integration",
    "testing",
    "development",
    "5,000",
    "active",
    "users",
    // Business Terms
    "automated",
    "leadership",
    "strategy",
    "innovation",
    "collaboration",
    "implementation",
    "analysis",
    "management",
    "enterprise",
    "active",
    "users",
    "caching",
  ].map((k) => k.toLowerCase());

  // Clean the word from punctuation and check
  const cleanWord = word.toLowerCase().replace(/[.,;()]/g, "");
  return keywords.includes(cleanWord);
};

export default Experience;
