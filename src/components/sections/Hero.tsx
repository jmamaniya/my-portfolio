import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { HiMail } from "react-icons/hi";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaGithub,
  FaNpm,
  FaSass,
  FaJira,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDotnet,
  SiMicrosoftazure,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiJquery,
  SiBootstrap,
  SiRabbitmq,
  SiJest,
  SiJasmine,
  SiKubernetes,
  SiPostgresql,
  SiSqlite,
  SiVisualstudio,
  SiVisualstudiocode,
  SiPostman,
  SiPowershell,
  SiMicrosoftsqlserver,
  SiRedux,
  SiAzuredevops,
  SiNuget,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const Hero: React.FC = () => {
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const orbitingTechStack = [
    // Programming & Core
    { Icon: TbBrandCSharp, name: "C#", color: "#512BD4" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },

    // Frameworks & Libraries
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: FaAngular, name: "Angular", color: "#DD0031" },
    { Icon: SiRedux, name: "Redux", color: "#764ABC" },
    { Icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { Icon: SiJquery, name: "jQuery", color: "#0769AD" },
    { Icon: SiDotnet, name: ".NET", color: "#512BD4" },
    { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { Icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },

    // Testing
    { Icon: SiJest, name: "Jest", color: "#C21325" },
    { Icon: SiJasmine, name: "Jasmine", color: "#8A4182" },

    // DevOps & Tools
    { Icon: FaGitAlt, name: "Git", color: "#F05032" },
    { Icon: FaGithub, name: "GitHub", color: "#181717" },
    { Icon: FaDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { Icon: SiMicrosoftazure, name: "Azure", color: "#0078D4" },
    { Icon: SiAzuredevops, name: "Azure DevOps", color: "#0078D4" },
    { Icon: SiPowershell, name: "PowerShell", color: "#5391FE" },
    { Icon: SiVisualstudio, name: "Visual Studio", color: "#5C2D91" },
    { Icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
    { Icon: SiPostman, name: "Postman", color: "#FF6C37" },

    // Databases & Storage
    { Icon: SiMicrosoftsqlserver, name: "SQL Server", color: "#CC2927" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { Icon: SiSqlite, name: "SQLite", color: "#003B57" },
    { Icon: SiRedis, name: "Redis", color: "#DC382D" },

    // Methodology & Tools
    { Icon: FaSass, name: "SASS", color: "#CC6699" },
    { Icon: FaJira, name: "Jira", color: "#0052CC" },
    { Icon: FaNpm, name: "NPM", color: "#CB3837" },
    { Icon: SiNuget, name: "NuGet", color: "#004880" },
  ];

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section id="home" className="min-h-screen bg-[#F8FAFC] relative">
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-blue-50 text-[#1A73E8] rounded-full text-sm font-medium">
                Hi there, I'm
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-[#1A73E8]">
                Jinal Mamaniya
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold">
                Senior Software Engineer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Building modern web applications with expertise in full-stack
              development. Specializing in creating scalable solutions and
              delivering exceptional user experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-[#1A73E8] text-white rounded-full shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 15px rgba(30, 136, 229, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              <SocialLink
                href="http://www.linkedin.com/in/jinal-mamaniya"
                icon={<FaLinkedin className="w-6 h-6" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:mamaniya.jinals@gmail.com"
                icon={<HiMail className="w-6 h-6" />}
                label="Email"
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative w-[500px] h-[500px] hidden md:block mx-auto filter drop-shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 500 500">
                {/* Background Light Blue Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="260"
                  fill="#EBF3FE"
                  className="opacity-30"
                />

                {/* Thin White Ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="220"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />

                {/* Main Blue Ring */}
                <circle cx="250" cy="250" r="200" fill="#1A73E8" />

                {/* Inner White Circle */}
                <circle cx="250" cy="250" r="170" fill="white" />

                {/* Center Content */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.text
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    x="250"
                    y="200"
                    textAnchor="middle"
                    className="text-2xl font-bold fill-[#1A73E8]"
                  >
                    8.5+
                  </motion.text>
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    x="250"
                    y="230"
                    textAnchor="middle"
                    className="text-base fill-gray-600"
                  >
                    Years Experience
                  </motion.text>

                  <motion.text
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    x="250"
                    y="270"
                    textAnchor="middle"
                    className="text-2xl font-bold fill-[#34A853]"
                  >
                    20+
                  </motion.text>
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    x="250"
                    y="300"
                    textAnchor="middle"
                    className="text-base fill-gray-600"
                  >
                    Technologies
                  </motion.text>

                  <motion.text
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    x="250"
                    y="340"
                    textAnchor="middle"
                    className="text-2xl font-bold fill-[#EA4335]"
                  >
                    30+
                  </motion.text>
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    x="250"
                    y="370"
                    textAnchor="middle"
                    className="text-base fill-gray-600"
                  >
                    Projects
                  </motion.text>
                </motion.g>

                {/* Tech Icons Circle */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {orbitingTechStack.map((Tech, index) => {
                    const angle = (index * 360) / orbitingTechStack.length;
                    const radius = 240;
                    const x = Math.cos((angle * Math.PI) / 180) * radius + 250;
                    const y = Math.sin((angle * Math.PI) / 180) * radius + 250;

                    return (
                      <motion.g
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ transformOrigin: "center" }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <circle
                          cx={x}
                          cy={y}
                          r="16"
                          fill="white"
                          className="shadow-sm"
                        />
                        <foreignObject
                          x={x - 12}
                          y={y - 12}
                          width="24"
                          height="24"
                          className="flex items-center justify-center"
                        >
                          <div className="w-full h-full flex items-center justify-center hover:scale-125 transition-transform">
                            <Tech.Icon
                              className="w-5 h-5"
                              style={{ color: Tech.color }}
                            />
                          </div>
                        </foreignObject>
                      </motion.g>
                    );
                  })}
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-[#1A73E8] p-2 hover:bg-blue-50 rounded-full"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Hero;
