// src/components/shared/FloatingResumeButton.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaDownload, FaEye } from 'react-icons/fa';

const FloatingResumeButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div className="relative">
        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-primary-600 text-white 
                   rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFileAlt className="w-6 h-6" />
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg
                       overflow-hidden z-50 min-w-[160px]"
            >
              <motion.a
              href="/my-portfolio/Jinal_Mamaniya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaEye className="w-4 h-4 text-primary-500" />
                <span>View Resume</span>
              </motion.a>
              
              <motion.a
              href="/my-portfolio/Jinal_Mamaniya_Resume.pdf"
                download="Jinal_Mamaniya_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors
                         border-t border-gray-100"
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
              >
                <FaDownload className="w-4 h-4 text-primary-500" />
                <span>Download</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingResumeButton;