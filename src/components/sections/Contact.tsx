import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-blue-50 text-[#1A73E8] rounded-xl text-sm font-medium mb-4"
            >
              Contact
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something{" "}
              <span className="text-[#1A73E8]">Together</span>
            </h2>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-12 gap-8">
            {/* Info Cards */}
            <div className="md:col-span-5 space-y-6">
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                content="mamaniya.jinals@gmail.com"
                href="mailto:mamaniya.jinals@gmail.com"
              />
              <ContactCard
                icon={<Linkedin className="w-6 h-6" />}
                title="LinkedIn"
                content="Connect with me"
                href="http://www.linkedin.com/in/jinal-mamaniya"
              />
              <ContactCard
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                content="Seattle, WA"
              />
            </div>

            {/* Message Box */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Ready to Start a Conversation?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Available for full-time opportunities and exciting projects.
                    Let's discuss how we can work together!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <ContactButton
                      href="mailto:mamaniya.jinals@gmail.com"
                      text="Send Message"
                      icon={<MessageCircle className="w-5 h-5" />}
                      primary
                    />
                    <ContactButton
                      href="http://www.linkedin.com/in/jinal-mamaniya"
                      text="View Profile"
                      icon={<ExternalLink className="w-5 h-5" />}
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-12 -mr-12 w-32 h-32 bg-blue-100 rounded-full opacity-50" />
                <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-32 h-32 bg-blue-50 rounded-full opacity-50" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard: React.FC<ContactItemProps> = ({
  icon,
  title,
  content,
  href,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 text-[#1A73E8] rounded-xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-[#1A73E8] transition-colors"
          >
            {content}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  </motion.div>
);

const ContactButton: React.FC<{
  href: string;
  text: string;
  icon: React.ReactNode;
  primary?: boolean;
}> = ({ href, text, icon, primary }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors
              ${
                primary
                  ? "bg-[#1A73E8] text-white hover:bg-blue-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    {text}
  </motion.a>
);

export default Contact;
