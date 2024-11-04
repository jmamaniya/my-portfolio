// src/components/sections/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode className="w-6 h-6" />,
      skills: ['C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'LINQ', 'Angular', 'GraphQL']
    },
    {
      title: "Frameworks",
      icon: <FaLayerGroup className="w-6 h-6" />,
      skills: ['.NET', '.NET Core', 'Entity Framework', 'Bootstrap', 'WPF']
    },
    {
      title: "DevOps",
      icon: <SiDocker className="w-6 h-6" />,
      skills: ['Git', 'CI/CD', 'Docker', 'Kubernetes', 'Azure']
    },
    {
      title: "Databases",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold capitalize">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm
                             border border-gray-200 hover:bg-primary-50 hover:text-primary-700
                             hover:border-primary-100 transition-all duration-200 cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;