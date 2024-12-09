import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-3 gradient-text">
              Jinal Mamaniya
            </h3>
            <p className="text-gray-400 text-lg">Senior Software Engineer</p>
            <p className="text-gray-500 mt-2 text-sm">
              Building modern web solutions
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-end space-y-4"
          >
            <div className="flex space-x-4">
              <SocialLink
                href="http://www.linkedin.com/in/jinal-mamaniya"
                icon={<Linkedin size={22} />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:mamaniya.jinals@gmail.com"
                icon={<Mail size={22} />}
                label="Email"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-700/50 text-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Jinal Mamaniya. All rights
              reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white
               transition-all duration-300 shadow-lg hover:shadow-primary-600/20"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default Footer;
