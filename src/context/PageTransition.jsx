// ==================== PageTransition.jsx ====================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/PageTransition.css';

export default function PageTransition({ children, pageName }) {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check if this is the first visit to the site
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
     
      setIsFirstVisit(false);
      // End transition after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2500);
    } else {
       setDisplayText('Welcome');
      setIsFirstVisit(true);
      sessionStorage.setItem('hasVisited', 'true');
      setIsTransitioning(true);
    }
  }, []);

  useEffect(() => {
    // On page change (not first visit)
     const hasVisited = sessionStorage.getItem('hasVisited');
    if (!isFirstVisit && hasVisited) {
      setDisplayText(pageName);
      setIsTransitioning(true);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1800);
    }
  }, [pageName, isFirstVisit]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            className="page-transition-overlay"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.76, 0, 0.24, 1] 
            }}
            style={{ originY: 0 }}
          >
            {/* Animated Background Shapes */}
            <div className="transition-shapes">
              <motion.div 
                className="shape shape-1"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1], 
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="shape shape-2"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1], 
                  rotate: [0, -180, -360] 
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.1,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="shape shape-3"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1.3, 1] 
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.2,
                  ease: "easeInOut" 
                }}
              />
            </div>

            {/* Text Animation */}
            <div className="transition-text-container">
              <motion.div
                className="transition-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 
                }}
              >
                {/* Split text for letter animation */}
                {displayText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-letter"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + (index * 0.05) 
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>

              {/* Decorative Line */}
              <motion.div
                className="transition-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: "easeInOut" 
                }}
              />

              {/* Particle Effects */}
              <div className="particles">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="particle"
                    initial={{ 
                      opacity: 0,
                      x: 0,
                      y: 0,
                      scale: 0
                    }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 400 - 200,
                      scale: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.5 + (i * 0.05),
                      ease: "easeOut" 
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Corner Accents */}
            <motion.div 
              className="corner-accent corner-top-left"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 90 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div 
              className="corner-accent corner-bottom-right"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 90 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      {!isTransitioning &&(
        <motion.div
        key={pageName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay:0.3 }}
      >
        {children}
      </motion.div>
      )}
    </>
  );
}
