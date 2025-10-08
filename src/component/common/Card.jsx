import { motion } from 'framer-motion';
import '@/styles/Card.css';

export default function Card({ 
  children,
  variant = 'default',
  hoverable = true,
  animated = true,
  className = '',
  onClick,
  ...props 
}) {
  const cardContent = (
    <div 
      className={`card card-${variant} ${hoverable ? 'hoverable' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}

// Sub-components for better composition
export function CardIcon({ children, className = '' }) {
  return <div className={`card-icon ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }) {
  return <h3 className={`card-title ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }) {
  return <p className={`card-description ${className}`}>{children}</p>;
}

export function CardBadge({ children, variant = 'default', className = '' }) {
  return <span className={`card-badge badge-${variant} ${className}`}>{children}</span>;
}
