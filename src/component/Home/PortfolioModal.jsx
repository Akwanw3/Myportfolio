import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Palette } from 'lucide-react';
import Button from '@/component/common/Button';
import '@/styles/PortfolioModal.css';

export default function PortfolioModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleNavigation = (type) => {
    console.log(`Navigating to ${type} portfolio`);
    // Add your navigation logic here
    // Example: navigate(/portfolio/${type});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div 
            className="portfolio-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={24} />
            </button>

            <div className="modal-content">
              <motion.h2 
                className="modal-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Choose Your Journey
              </motion.h2>
              
              <motion.p 
                className="modal-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Explore my work in development or design
              </motion.p>

              <div className="portfolio-options">
                <motion.div 
                  className="portfolio-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNavigation('development')}
                >
                  <div className="card-icon-wrapper development">
                    <Code size={48} />
                  </div>
                  <h3>Web Development</h3>
                  <p>Full-stack applications, APIs, and cutting-edge web solutions</p>
                  <Button variant="outline" size="small">
                    View Projects →
                  </Button>
                </motion.div>

                <motion.div 
                  className="portfolio-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNavigation('design')}
                >
                  <div className="card-icon-wrapper design">
                    <Palette size={48} />
                  </div>
                  <h3>Design Portfolio</h3>
                  <p>UI/UX designs, prototypes, and creative visual solutions</p>
                  <Button variant="outline" size="small">
                    View Projects →
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

