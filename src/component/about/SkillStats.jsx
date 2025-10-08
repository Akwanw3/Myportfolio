import { motion } from 'framer-motion';
import { Code, Palette, Server, Smartphone, Zap, Layers } from 'lucide-react';
import '@/styles/SkillStats.css';

export default function Expertise() {
  const expertiseAreas = [
    { icon: <Code size={32} />, name: 'Frontend Dev', level: 95 },
    { icon: <Server size={32} />, name: 'Backend Dev', level: 88 },
    { icon: <Palette size={32} />, name: 'UI/UX Design', level: 94 },
    { icon: <Smartphone size={32} />, name: 'Responsive', level: 97 },
    { icon: <Zap size={32} />, name: 'Performance', level: 90 },
    { icon: <Layers size={32} />, name: 'Design Systems', level: 89 }
  ];

  return (
    <motion.div 
      className="expertise-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="expertise-header">
        <span className="expertise-label">Skills</span>
        <h2 className="expertise-title">Technical Expertise</h2>
      </div>

      <div className="expertise-grid">
        {expertiseAreas.map((area, index) => (
          <motion.div 
            key={index}
            className="expertise-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="expertise-icon">{area.icon}</div>
            <div className="expertise-details">
              <div className="expertise-name-row">
                <span className="expertise-name">{area.name}</span>
                <span className="expertise-percentage">{area.level}%</span>
              </div>
              <div className="expertise-bar">
                <motion.div 
                  className="expertise-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${area.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
