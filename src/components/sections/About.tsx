import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Cloud,
  Laptop,
  Users,
  TrendingUp,
  Settings,
} from "lucide-react";

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
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const expertise: ExpertiseItem[] = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Frontend Excellence",
      description:
        "Mastery in creating responsive, user-centric interfaces using Angular, React, and modern CSS frameworks. Specialized in delivering seamless user experiences across all devices.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Architecture",
      description:
        "Expert in building robust backend systems using .NET Core, Node.js, and various databases. Focus on creating scalable, maintainable APIs and microservices architectures.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description:
        "Experienced in Azure cloud services, containerization with Docker, and implementing CI/CD pipelines. Proven track record of optimizing deployment processes and reducing infrastructure costs.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description:
        "Proficient in both SQL and NoSQL databases, with expertise in performance optimization and data modeling. Experience in handling large-scale data operations and caching strategies.",
    },
  ];

  const achievements: Achievement[] = [
    {
      number: "8.5+",
      label: "Years of Experience",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      number: "20+",
      label: "Projects Completed",
      icon: <Code className="w-5 h-5" />,
    },
    {
      number: "85%",
      label: "Performance Improvements",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      number: "28%",
      label: "User Engagement Increase",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const Header = () => (
    <motion.div
      className="text-center mb-16"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]">
        About Me
      </h2>
      <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full" />
    </motion.div>
  );

  const Description = () => (
    <motion.div
      className="max-w-4xl mx-auto mb-20 relative"
      variants={itemVariants}
    >
      {/* Background pattern */}
      <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#1A73E8]/20 rounded" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#1A73E8]/20 rounded" />

      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 relative">
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#1A73E8] rounded-full" />
          <div className="absolute top-4 right-8 w-2 h-2 bg-[#1A73E8]/50 rounded-full" />
          <div className="absolute top-8 right-4 w-2 h-2 bg-[#1A73E8]/50 rounded-full" />
        </div>

        <div className="space-y-8">
          {[
            "With over 8.5 years of experience in software development, I've cultivated a deep understanding of the full development lifecycle, from concept to deployment. My journey has taken me through various roles at prominent companies like LexisNexis and Motorola Solutions, where I've consistently delivered high-impact solutions.",
            "My technical expertise spans both frontend and backend development, with a strong focus on performance optimization and scalable architecture. I've successfully led projects that resulted in significant improvements in user engagement and system efficiency.",
            "Beyond coding, I'm passionate about mentoring junior developers and contributing to team growth. I stay current with emerging technologies and best practices, ensuring that my solutions are not just effective today but sustainable for the future.",
          ].map((text, index) => (
            <motion.div
              key={index}
              className="relative pl-6 border-l-2 border-[#1A73E8]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Dot accent */}
              <div className="absolute left-[-5px] top-0 w-2 h-2 bg-[#1A73E8] rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-4 left-12 right-12">
          <div className="h-1 w-full bg-[#1A73E8]/5 rounded-full" />
        </div>
      </div>
    </motion.div>
  );

  const ExpertiseCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {expertise.map((item, index) => (
        <motion.div
          key={item.title}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          custom={index}
        >
          <div className="flex items-start gap-4">
            <motion.div
              className="p-3 bg-blue-50 rounded-lg text-[#1A73E8]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
            </motion.div>
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
  );

  const Achievements = () => (
    <motion.div
      className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            className="text-center group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            custom={index}
          >
            <motion.div
              className="p-3 bg-blue-50 rounded-full w-12 h-12 mx-auto flex items-center justify-center text-[#1A73E8]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {achievement.icon}
            </motion.div>
            <div className="text-4xl font-bold text-[#1A73E8] mt-4 mb-2">
              {achievement.number}
            </div>
            <div className="h-1 w-12 mx-auto bg-[#1A73E8] rounded-full" />
            <p className="text-gray-600 font-medium mt-4">
              {achievement.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Header />
          <Description />
          <ExpertiseCards />
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
