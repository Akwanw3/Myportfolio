import { motion } from 'framer-motion';
import { Target, Zap, Eye, Users, BookOpen, Rocket } from 'lucide-react';
import '@/styles/Philosophy.css';

export default function Philosophy() {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'User-Centered',
      description: 'Every decision puts users first, ensuring intuitive and accessible experiences.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Fast, efficient code and optimized designs that deliver seamless experiences.'
    },
    {
      icon: <Eye size={32} />,
      title: 'Attention to Detail',
      description: 'Pixel-perfect precision in every design and clean, maintainable code.'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing creative boundaries.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Great products are built by great teams working together.'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Continuous Learning',
      description: 'Staying current with trends and constantly improving my craft.'
    }
  ];

  return (
    <motion.div 
      className="philosophy-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="philosophy-header">
        <span className="philosophy-label">Values</span>
        <h2 className="philosophy-title">My Philosophy</h2>
        <p className="philosophy-subtitle">
          The principles that guide my work and define my approach
        </p>
      </div>

      <div className="values-grid">
        {values.map((value, index) => (
          <motion.div 
            key={index}
            className="value-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="value-icon">{value.icon}</div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}