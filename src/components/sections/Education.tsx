import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Book } from "lucide-react";
import educationData from "../../data/educationData";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-block mb-4">
              <motion.div
                className="p-4 bg-blue-100 rounded-full"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="w-10 h-10 text-blue-600" />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Education Journey
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {educationData.degrees.map((edu) => (
              <motion.div
                key={edu.degree}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl 
                         transition-all duration-300 border border-blue-100"
                variants={itemVariants}
              >
                <div className="p-8">
                  {/* Degree Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <motion.div
                      className="p-4 bg-blue-100 rounded-xl text-blue-600"
                      whileHover={{ scale: 1.1 }}
                    >
                      <GraduationCap className="w-8 h-8" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-3">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    {edu.gpa && (
                      <motion.div
                        className="px-4 py-2 bg-blue-100 rounded-lg text-blue-600 font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        GPA: {edu.gpa}
                      </motion.div>
                    )}
                  </div>

                  {/* Courses Section */}
                  {edu.courses && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-4 text-gray-900">
                        Key Courses
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {edu.courses.map((course, i) => (
                          <motion.div
                            key={i}
                            className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <Book className="w-5 h-5 text-blue-600 mt-1" />
                              <h5 className="font-semibold text-gray-900">
                                {course.name}
                              </h5>
                            </div>
                            <ul className="ml-8 space-y-1">
                              {course.highlights.map((highlight, j) => (
                                <li
                                  key={j}
                                  className="text-gray-600 text-sm list-disc"
                                >
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
