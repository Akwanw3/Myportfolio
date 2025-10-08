import { motion } from 'framer-motion';
import '@/styles/ProcessStep.css';

export default function ProcessStep({ 
  number,
  title,
  description,
  icon,
  index
}) {
  return (
    <motion.div 
      className="process-step"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="step-number-badge">{number}</div>
      
      <div className="step-icon-wrapper">
        {icon}
      </div>

      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </motion.div>
  );
}