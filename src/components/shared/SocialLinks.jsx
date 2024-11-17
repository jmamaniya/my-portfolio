import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  const links = [
    {
      href: "https://github.com",
      icon: <Github />,
      label: "GitHub",
    },
    {
      href: "http://www.linkedin.com/in/jinal-mamaniya",
      icon: <Linkedin />,
      label: "LinkedIn",
    },
    {
      href: "mailto:jmamaniya2022@gmail.com",
      icon: <Mail />,
      label: "Email",
    },
  ];

  return (
    <div className="flex space-x-6">
      {links.map(({ href, icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary-500 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={label}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
