import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Get in Touch
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="space-y-8">
              <ContactItem 
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                content="jmamaniya2022@gmail.com"
                href="mailto:jmamaniya2022@gmail.com"
              />
              <ContactItem 
                icon={<Linkedin className="w-5 h-5" />}
                title="LinkedIn"
                content="Connect with me"
                href="http://www.linkedin.com/in/jinal-mamaniya"
              />
              <ContactItem 
                icon={<Github className="w-5 h-5" />}
                title="GitHub"
                content="View my projects"
                href="https://github.com/jmamaniya"
              />
              <ContactItem 
                icon={<MapPin className="w-5 h-5" />}
                title="Location"
                content="Seattle, WA"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content, href }) => (
  <motion.div 
    className="flex items-center gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300"
    whileHover={{ x: 5 }}
  >
    <div className="text-primary-600 transition-colors group-hover:text-primary-700">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      {href ? (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary-600 transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </motion.div>
);

export default Contact;