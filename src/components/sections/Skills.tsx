import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Wrench,
  Database,
  Cloud,
  Layers,
  CheckCircle,
  X,
} from "lucide-react";

import { skillsData } from "../../data/skillsData";

type SkillCategory = keyof typeof skillsData;

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory | null>(null);

  const categoryIcons: Record<SkillCategory, JSX.Element> = {
    programmingLanguages: <Code className="w-8 h-8" />,
    frameworks: <Layers className="w-8 h-8" />,
    testing: <CheckCircle className="w-8 h-8" />,
    devOps: <Cloud className="w-8 h-8" />,
    databases: <Database className="w-8 h-8" />,
    methodologies: <Wrench className="w-8 h-8" />,
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
          </motion.div>

          {/* Hexagonal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {(
              Object.entries(skillsData) as [
                SkillCategory,
                (typeof skillsData)[SkillCategory]
              ][]
            ).map(([key, category]) => (
              <motion.div
                key={key}
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <button
                  onClick={() =>
                    setSelectedCategory(selectedCategory === key ? null : key)
                  }
                  className={`w-40 h-40 relative ${
                    selectedCategory === key ? "z-10" : "hover:z-10"
                  }`}
                >
                  <div
                    className={`absolute inset-0 transform rotate-45 rounded-2xl transition-all duration-300 ${
                      selectedCategory === key
                        ? "bg-blue-600 shadow-lg"
                        : "bg-white hover:bg-blue-50 shadow-md"
                    }`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div
                      className={`mb-2 ${
                        selectedCategory === key
                          ? "text-white"
                          : "text-blue-600"
                      }`}
                    >
                      {categoryIcons[key]}
                    </div>
                    <span
                      className={`text-sm font-medium leading-tight ${
                        selectedCategory === key
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {category.title}
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Detailed Skills View */}
          <AnimatePresence mode="wait">
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative bg-white rounded-2xl p-8 shadow-xl"
              >
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                <h3 className="text-2xl font-bold mb-6 text-blue-600">
                  {skillsData[selectedCategory].title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skillsData[selectedCategory].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.05 },
                      }}
                      className={`p-4 rounded-xl border-2 ${
                        skill.level === "Expert"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            skill.level === "Expert"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <motion.div
                        className="h-1 bg-gray-200 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                      >
                        <motion.div
                          className={`h-full ${
                            skill.level === "Expert"
                              ? "bg-blue-500"
                              : "bg-gray-400"
                          }`}
                          initial={{ width: "0%" }}
                          animate={{
                            width: skill.level === "Expert" ? "90%" : "75%",
                            transition: { duration: 1, ease: "easeOut" },
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
