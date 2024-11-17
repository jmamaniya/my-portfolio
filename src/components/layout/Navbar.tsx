import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { scrollY, scrollYProgress } = useScroll();

  const menuItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
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
  }, [menuItems]);

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

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to top"
            >
              <span className="text-2xl font-bold text-[#1A73E8] dark:text-blue-400">
                JM
              </span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 font-medium ${
                    activeItem === item.id 
                      ? 'text-[#1A73E8] dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-[#1A73E8] dark:hover:text-blue-400'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  aria-label={`Go to ${item.label} section`}
                >
                  {item.label}
                  {activeItem === item.id && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A73E8] dark:bg-blue-400"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              ))}

            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 
                       hover:text-[#1A73E8] dark:hover:text-blue-400 
                       transition-colors rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
                className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900
                         shadow-sm border-t border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="container mx-auto px-4 py-4 space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-all 
                               ${activeItem === item.id
                                 ? 'bg-blue-50 dark:bg-blue-900/50 text-[#1A73E8] dark:text-blue-400'
                                 : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#1A73E8] dark:hover:text-blue-400'
                               }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;