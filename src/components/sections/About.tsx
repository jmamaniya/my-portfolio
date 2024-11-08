// src/components/sections/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaCloud,
  FaLaptopCode,
  FaUserFriends,
  FaChartLine,
  FaCogs
} from 'react-icons/fa';

interface ExpertiseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Achievement {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
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

  const expertise: ExpertiseItem[] = [
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
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

  const achievements: Achievement[] = [
    { 
      number: "8.5+", 
      label: "Years of Experience",
      icon: <FaChartLine className="w-5 h-5" />
    },
    { 
      number: "20+", 
      label: "Projects Completed",
      icon: <FaCode className="w-5 h-5" />
    },
    { 
      number: "85%", 
      label: "Performance Improvements",
      icon: <FaCogs className="w-5 h-5" />
    },
    { 
      number: "28%", 
      label: "User Engagement Increase",
      icon: <FaUserFriends className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 
                         mx-auto rounded-full"/>
          </motion.div>

          {/* Main Description */}
          <motion.div 
            className="max-w-4xl mx-auto mb-20"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b 
                           from-primary-500 to-primary-600"/>
              <div className="space-y-6">
                <motion.p className="text-lg text-gray-700 leading-relaxed">
                  With over 8.5 years of experience in software development, I've cultivated a deep 
                  understanding of the full development lifecycle, from concept to deployment. My 
                  journey has taken me through various roles at prominent companies like LexisNexis 
                  and Motorola Solutions, where I've consistently delivered high-impact solutions.
                </motion.p>
                
                <motion.p className="text-lg text-gray-700 leading-relaxed">
                  My technical expertise spans both frontend and backend development, with a strong 
                  focus on performance optimization and scalable architecture. I've successfully led 
                  projects that resulted in significant improvements in user engagement and system 
                  efficiency.
                </motion.p>

                <motion.p className="text-lg text-gray-700 leading-relaxed">
                  Beyond coding, I'm passionate about mentoring junior developers and contributing 
                  to team growth. I stay current with emerging technologies and best practices, 
                  ensuring that my solutions are not just effective today but sustainable for the 
                  future.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {expertise.map((item) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg text-primary-600 
                               group-hover:bg-primary-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-10"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.label}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-4">
                    <div className="p-3 bg-primary-50 rounded-full w-12 h-12 mx-auto 
                                flex items-center justify-center text-primary-600 
                                group-hover:bg-primary-100 transition-colors">
                      {achievement.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 
                                to-primary-400 bg-clip-text text-transparent mt-4 mb-2">
                      {achievement.number}
                    </div>
                    <div className="h-1 w-12 mx-auto bg-gradient-to-r from-primary-600 
                                to-primary-400 rounded-full transform origin-left 
                                transition-all duration-300 group-hover:w-full"/>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {achievement.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;