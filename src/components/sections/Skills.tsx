import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Wrench, 
  Database, 
  Cloud,
  Layers,
  CheckCircle 
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming & Core",
      icon: <Code className="w-6 h-6" />,
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
      icon: <Layers className="w-6 h-6" />,
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
      icon: <CheckCircle className="w-6 h-6" />,
      skills: [
        { name: "NUnit", level: "Expert" },
        { name: "xUnit", level: "Expert" },
        { name: "Jasmine", level: "Advanced" },
        { name: "Karma", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
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
      icon: <Database className="w-6 h-6" />,
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
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "BEM", level: "Expert" },
        { name: "SASS", level: "Expert" },
        { name: "Agile/Scrum", level: "Expert" },
        { name: "Microservices", level: "Advanced" }
      ]
    }
  ];

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
    <section id="skills" className="py-24 bg-[#F8FAFC] overflow-hidden">
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
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full mb-4"/>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise in modern software development technologies and practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all 
                         duration-300 p-6 transform perspective-[1000px]"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 2,
                  translateZ: 20
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="p-3 bg-blue-50 rounded-lg text-[#1A73E8]"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2"
                    >
                      <span className="text-gray-700">{skill.name}</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        skill.level === 'Expert' 
                          ? 'bg-[#1A73E8] text-white'
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;