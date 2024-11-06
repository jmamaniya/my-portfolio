// src/components/sections/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaTools, 
  FaDatabase, 
  FaCloud,
  FaLayerGroup,
  FaCheckCircle 
} from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming & Core",
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        { name: "C#", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Expert" },
        { name: "LINQ", level: "Advanced" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaLayerGroup className="w-6 h-6" />,
      skills: [
        { name: "Angular", level: "Expert" },
        { name: ".NET Core", level: "Expert" },
        { name: ".NET MVC", level: "Expert" },
        { name: "REST API", level: "Expert" },
        { name: "Entity Framework", level: "Expert" },
        { name: "GraphQL", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "SOAP API", level: "Advanced" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "WPF", level: "Advanced" }
      ]
    },
    {
      title: "Testing & Quality",
      icon: <FaCheckCircle className="w-6 h-6" />,
      skills: [
        { name: "NUnit", level: "Expert" },
        { name: "xUnit", level: "Expert" },
        { name: "Jasmine", level: "Advanced" },
        { name: "Karma", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="w-6 h-6" />,
      skills: [
        { name: "Azure", level: "Expert" },
        { name: "Git", level: "Expert" },
        { name: "CI/CD", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "Team Foundation Server", level: "Advanced" }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        { name: "SQL Server", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "SQLite", level: "Advanced" },
        { name: "Redis", level: "Advanced" }
      ]
    },
    {
      title: "Methodologies & Practices",
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        { name: "BEM", level: "Expert" },
        { name: "SASS", level: "Expert" },
        { name: "Agile/Scrum", level: "Expert" },
        { name: "Microservices", level: "Advanced" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise in modern software development technologies and practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-500">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700">{skill.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      skill.level === 'Expert' 
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
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