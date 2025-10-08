// ==================== ServiceCard.jsx ====================
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '@/styles/ServiceCard.css';

export default function ServiceCard({ 
  icon,
  title,
  description,
  features = [],
  popular = false,
  onClick
}) {
  return (
    <motion.div 
      className={`service-card ${popular ? 'popular' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
    >
      {popular && <div className="popular-badge">Most Popular</div>}
      
      <div className="service-icon-wrapper">
        {icon}
      </div>

      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>

      <ul className="service-features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-list-item">
            <span className="feature-check">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="service-card-cta">
        <span>Learn More</span>
        <ArrowRight size={18} className="cta-arrow" />
      </div>
    </motion.div>
  );
}