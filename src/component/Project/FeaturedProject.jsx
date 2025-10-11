
import { motion, AnimatePresence } from 'framer-motion';
import { Figma, Eye, X } from 'lucide-react';
import { useState } from 'react';
import '@/styles/DesignCards.css';


export default function DesignShowcaseCard({ design, index }) {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
    <motion.div 
      className="design-showcase-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
    >
      {/* Image Container */}
      <div className="design-image-container">
        <img 
          src={design.thumbnail} 
          alt={design.title}
          className="design-thumbnail"
        />
        
        {/* Hover Overlay */}
        <div className="design-overlay">
          <motion.button 
            className="view-design-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={()=>setShowPopup(true)}
          >
            <Eye size={20} />
            <span>View Design</span>
          </motion.button>
        </div>

        {/* Type Badge */}
        <div className="design-type-badge">
          <span>{design.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="design-content">
        <h4 className="design-title">{design.title}</h4>
        <p className="design-description">{design.description}</p>

        {/* Footer */}
        <div className="design-footer">
          <div className="design-tools">
            {design.tools.slice(0, 2).map((tool, idx) => (
              <span key={idx} className="tool-icon" title={tool}>
                {tool === 'Figma' ? <Figma size={16} /> : '🎨'}
              </span>
            ))}
          </div>
          <span className="design-year">{design.year}</span>
        </div>
      </div>
    </motion.div>

    {/* POPUP OVERLAY */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="design-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div 
              className="design-popup-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-popup-btn"
                onClick={() => setShowPopup(false)}
              >
                <X size={22} />
              </button>
              <img 
                src={design.fullImage || design.thumbnail} 
                alt={design.title} 
                className="design-popup-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
  );
}
