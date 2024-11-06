import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const experienceData = {
  role: "Senior Software Engineer",
  company: "LexisNexis",
  period: "May 2023 - Present",
  achievements: [
    {
      category: "Full Stack Development",
      items: [
        {
          content: "Developed full-stack applications utilizing **C#**, **.NET**, **Node.js**, achieving **28% increase** in user session",
          techs: ["C#", ".NET", "Node.js", "HTML", "CSS", "JavaScript"],
          impact: "28% increase in user engagement"
        },
        {
          content: "Implemented **GraphQL schemas** for efficient data querying, achieving **34% enhancement** in API performance",
          techs: ["GraphQL", "API"],
          impact: "34% API performance boost"
        }
      ]
    },
    {
      category: "Frontend Excellence",
      items: [
        {
          content: "Upgraded **Angular 12** to **Angular 15**, ensuring seamless migration of **Angular Material** components",
          techs: ["Angular", "Angular Material"],
          impact: "Successful platform modernization"
        },
        {
          content: "Created responsive interfaces using **Angular**, delivering **20% faster** page loads",
          techs: ["Angular", "Frontend"],
          impact: "20% performance improvement"
        }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        {
          content: "Utilized **Redis** for data caching, achieving **80% increase** in application responsiveness",
          techs: ["Redis", "Caching"],
          impact: "80% faster response time"
        },
        {
          content: "Automated **CI/CD pipelines** with **Azure DevOps**, reducing deployment times by **40%**",
          techs: ["Azure DevOps", "CI/CD"],
          impact: "40% faster deployments"
        }
      ]
    }
  ]
};

const Experience: React.FC = () => {
  const renderHighlightedText = (text: string) => {
    return text.split('**').map((part, index) => 
      index % 2 === 0 ? (
        part
      ) : (
        <span key={index} className="font-semibold text-primary-600">
          {part}
        </span>
      )
    );
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Header Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{experienceData.role}</h3>
            <p className="text-xl text-primary-600 mb-1">{experienceData.company}</p>
            <p className="text-gray-600">{experienceData.period}</p>
          </motion.div>

          {/* Achievement Cards */}
          <div className="space-y-12">
            {experienceData.achievements.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all 
                             duration-300 p-6 border-l-4 border-primary-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                  >
                    {/* Achievement Content */}
                    <p className="text-gray-700 mb-4">
                      {renderHighlightedText(item.content)}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.techs.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm
                                   hover:bg-primary-100 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Impact */}
                    {item.impact && (
                      <div className="text-primary-600 text-sm font-medium">
                        Impact: {item.impact}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;