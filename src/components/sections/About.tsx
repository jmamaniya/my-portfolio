import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaCloud,
} from 'react-icons/fa';

const About: React.FC = () => {
  const expertise = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Frontend Excellence",
      description: "Mastery in creating responsive, user-centric interfaces using Angular, React, and modern CSS frameworks. Specialized in delivering seamless user experiences across all devices."
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Backend Architecture",
      description: "Expert in building robust backend systems using .NET Core, Node.js, and various databases. Focus on creating scalable, maintainable APIs and microservices architectures."
    },
    {
      icon: <FaCloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description: "Experienced in Azure cloud services, containerization with Docker, and implementing CI/CD pipelines. Proven track record of optimizing deployment processes and reducing infrastructure costs."
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Database Design",
      description: "Proficient in both SQL and NoSQL databases, with expertise in performance optimization and data modeling. Experience in handling large-scale data operations and caching strategies."
    }
  ];

  const achievements = [
    { number: "8.5+", label: "Years of Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "85%", label: "Performance Improvements" },
    { number: "28%", label: "User Engagement Increase" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Main Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-lg text-gray-600 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            With over 8.5 years of experience in software development, I've cultivated a deep 
            understanding of the full development lifecycle, from concept to deployment. My 
            journey has taken me through various roles at prominent companies like LexisNexis 
            and Motorola Solutions, where I've consistently delivered high-impact solutions.
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-600 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My technical expertise spans both frontend and backend development, with a strong 
            focus on performance optimization and scalable architecture. I've successfully led 
            projects that resulted in significant improvements in user engagement and system 
            efficiency.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Beyond coding, I'm passionate about mentoring junior developers and contributing 
            to team growth. I stay current with emerging technologies and best practices, 
            ensuring that my solutions are not just effective today but sustainable for the 
            future.
          </motion.p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-primary-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-4xl font-bold text-primary-600 mb-2">
                {achievement.number}
              </h4>
              <p className="text-gray-600">{achievement.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p className="text-gray-600">
            Master of Science in Information Systems - Northeastern University (GPA: 3.75)
          </p>
          <p className="text-gray-600">
            Bachelor of Engineering in Information Technology - Mumbai University
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;