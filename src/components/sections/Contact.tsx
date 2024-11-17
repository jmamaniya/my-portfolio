import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16 transform perspective-[1000px]" 
            variants={itemVariants}
            whileHover={{ rotateX: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-[#1A73E8] mx-auto rounded-full"/>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                     transition-all duration-300 transform perspective-[1000px]"
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              rotateY: 2,
              translateZ: 20
            }}
            transition={{ type: "spring", stiffness: 300 }}
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
  <div className="flex items-center gap-4">
    <div className="p-2 bg-blue-50 rounded-lg text-[#1A73E8]">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      {href ? (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#1A73E8] transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;