// ==================== CaseStudyCard.jsx ====================
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Heart, Award } from 'lucide-react';
import '@/styles/DesignCards.css';

export default function CaseStudyCard({ caseStudy, index }) {
  return (
    <motion.div 
      className="case-study-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Award Badge if featured */}
      {caseStudy.award && (
        <div className="award-badge">
          <Award size={16} />
          <span>{caseStudy.award}</span>
        </div>
      )}

      {/* Main Image Container */}
      <div className="case-study-hero">
        <div className="hero-image-wrapper">
          <img 
            src={caseStudy.heroImage} 
            alt={caseStudy.title}
            className="hero-image"
          />
          <div className="image-gradient-overlay"></div>
        </div>

        {/* Floating Stats */}
        <div className="floating-stats">
          <div className="stat-item">
            <Eye size={18} />
            <span>{caseStudy.views}</span>
          </div>
          <div className="stat-item">
            <Heart size={18} />
            <span>{caseStudy.likes}</span>
          </div>
        </div>

        {/* Category Tag */}
        <div className="case-study-category">
          <span>{caseStudy.category}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="case-study-content">
        <div className="content-header">
          <div className="header-left">
            <h3 className="case-study-title">{caseStudy.title}</h3>
            <p className="case-study-subtitle">{caseStudy.subtitle}</p>
          </div>
          <div className="header-right">
            <span className="project-year">{caseStudy.year}</span>
          </div>
        </div>

        <p className="case-study-description">{caseStudy.description}</p>

        {/* Key Highlights */}
        <div className="case-study-highlights">
          <div className="highlight-item">
            <span className="highlight-label">Role</span>
            <span className="highlight-value">{caseStudy.role}</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-label">Duration</span>
            <span className="highlight-value">{caseStudy.duration}</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-label">Impact</span>
            <span className="highlight-value">{caseStudy.impact}</span>
          </div>
        </div>

        {/* Tools Used */}
        <div className="tools-used">
          {caseStudy.tools.map((tool, idx) => (
            <span key={idx} className="tool-badge">{tool}</span>
          ))}
        </div>

        {/* View Case Study Button */}
        <motion.button 
          className="view-case-study-btn"
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Full Case Study</span>
          <ArrowRight size={20} />
        </motion.button>
      </div>

      {/* Bottom Decorative Element */}
      <div className="card-decoration"></div>
    </motion.div>
  );
}










