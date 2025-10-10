
import { motion } from 'framer-motion';
import { Figma, Eye } from 'lucide-react';
import '@/styles/DesignCards.css';

export default function DesignShowcaseCard({ design, index }) {
  return (
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
  );
}
