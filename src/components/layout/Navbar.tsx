import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Added function to check which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.toLowerCase());
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveItem(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveItem(sectionId);
    setIsOpen(false);
  };

  const menuItems = ['Home', 'About', 'Experience', 'Skills', 'Contact'];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 
                           bg-clip-text text-transparent">
              JM
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 font-medium tracking-wide group ${
                  activeItem === item.toLowerCase() 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"
                  initial={{ scaleX: activeItem === item.toLowerCase() ? 1 : 0 }}
                  animate={{ scaleX: activeItem === item.toLowerCase() ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
          
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2.5 rounded-lg bg-gray-50 text-gray-600 hover:text-primary-600 
                     hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md 
                       shadow-lg border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-6 py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all 
                             ${activeItem === item.toLowerCase()
                               ? 'bg-primary-50 text-primary-600'
                               : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                             }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.button>
                ))}
                

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;