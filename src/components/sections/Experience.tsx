// src/components/sections/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCode, 
  FaDatabase, 
  FaCloud, 
} from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "LexisNexis",
      role: "Senior Software Engineer",
      period: "May 2023 - Present",
      icon: <FaCode className="w-6 h-6" />,
      achievements: [
        "Developed applications using diverse front-end and back-end technologies, increasing user sessions by 28%",
        "Developed and deployed GraphQL schemas, reducing over-fetching and under-fetching of data, improving API performance by 34%",
        "Effectively upgraded Angular 12 project to Angular 15, ensuring seamless transition and compatibility",
        "Leveraged Angular to create responsive front-end interfaces, resulting in 20% increase in page load speed",
        "Applied BEM methodology with SASS for modular styling practices, enhancing development efficiency by 33%",
        "Conducted code reviews ensuring 18% prevention in post-release defects",
        "Leveraged Redis for caching, increasing application responsiveness by 80%",
        "Automated CI/CD pipelines with Azure DevOps, reducing deployment times by 40%",
        "Employed unit testing with NUnit and xUnit, achieving 85% reduction in post-release defects",
        "Successfully integrated applications with Azure containers, reducing infrastructure costs by 18%"
      ],
      technologies: [
        "C#", ".NET", "Angular", "GraphQL", "Redis", "Azure DevOps", "Docker", "NUnit", "xUnit"
      ]
    },
    {
      company: "Motorola Solutions",
      role: "Software Engineer and Cloud Services Co-Op",
      period: "May 2022 - Dec 2022",
      icon: <FaCloud className="w-6 h-6" />,
      achievements: [
        "Produced resilient C#, Angular based application employing MVC and MVVM patterns",
        "Programmed REST APIs using .NET Core with 95% test coverage",
        "Utilized Git, GitHub for managing code repository and Azure for deployment, reducing deployment time by 28%",
        "Orchestrated Agile methodologies with the LeSS framework and Jira"
      ],
      technologies: [
        "C#", "Angular", "MVC", "MVVM", ".NET Core", "REST API", "Git", "Azure", "Jira"
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "Full Stack Developer",
      period: "Dec 2015 - Aug 2021",
      icon: <FaBriefcase className="w-6 h-6" />,
      achievements: [
        "Collaborated with cross-functional teams for successful prototyping at Dow Chemical",
        "Engineered scalable REST APIs using Entity Framework in .NET Core and .NET Framework",
        "Built Dependency Injection, optimizing application architecture by 25%",
        "Conducted database query optimization, improving performance by 35%",
        "Resolved redirect issues, improving application performance by 88%",
        "Integrated SAP interface through APIs, improving functionality by 38%",
        "Created engaging UIs using Angular, HTML, Bootstrap, increasing user engagement by 40%",
        "Developed applications using NodeJS and MongoDB",
        "Provided 24/7 support for application with 25,000+ active users"
      ],
      technologies: [
        "C#", ".NET Core", "Entity Framework", "Angular", "Node.js", "MongoDB", "SAP", "Bootstrap"
      ]
    },
    {
      company: "Larsen & Toubro Infotech",
      role: "Software Developer",
      period: "July 2013 - Dec 2015",
      icon: <FaDatabase className="w-6 h-6" />,
      achievements: [
        "Gathered requirements and collaborated with cross-functional team for Oil and Gas application",
        "Developed applications using .NET web stack including C#, MVC, Entity Framework, and Bootstrap",
        "Implemented comprehensive unit testing with xUnit framework",
        "Maintained application performance for 5,000+ active users with 24/7 support"
      ],
      technologies: [
        "C#", ".NET MVC", "Entity Framework", "Bootstrap", "xUnit", "SQL Server"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative pl-8 border-l-2 border-primary-200">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full" />
                
                {/* Company Info */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary-600">{exp.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  <p className="text-primary-600 font-medium">{exp.role}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-600 flex items-start gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <span className="text-primary-500 mt-1">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm
                               hover:bg-primary-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;