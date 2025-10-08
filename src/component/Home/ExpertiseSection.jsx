import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // If using React Router
import Card, { CardIcon, CardTitle, CardDescription } from '@/component/common/Card';
import { Code, Palette } from 'lucide-react';
import '@/styles/ExpertiseSection.css';

export default function SkillsSnapshot() {
  // Uncomment if using React Router
  // const navigate = useNavigate();

  const handleNavigate = (path) => {
    console.log(`Navigating to ${path}`);
    // navigate(path); // If using React Router
    // window.location.href = path; // Alternative
  };

  return (
    <section className="skills-snapshot">
      <div className="skills-snapshot-container">
        {/* Section Header */}
        <motion.div 
          className="snapshot-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="snapshot-title">What I Do</h2>
          <p className="snapshot-subtitle">
            Explore my expertise in both development and design
          </p>
        </motion.div>

        {/* Two Cards Grid */}
        <div className="snapshot-grid">
          {/* Development Card */}
          <Card 
            hoverable={true}
            animated={true}
            onClick={() => handleNavigate('/portfolio/development')}
          >
            <div className="snapshot-card-content">
              <CardIcon>
                <div className="snapshot-icon development">
                  <Code size={56} />
                </div>
              </CardIcon>

              <CardTitle>Web Development</CardTitle>
              
              <CardDescription>
                Building responsive, performant, and scalable web applications using modern frameworks and cutting-edge technologies. From concept to deployment.
              </CardDescription>

              <div className="snapshot-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Full-Stack Development</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>API Development</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <span>Performance Optimization</span>
                </div>
              </div>

              <div className="snapshot-cta">
                <span className="cta-text">View Projects</span>
                <span className="cta-arrow">→</span>
              </div>
            </div>
          </Card>

          {/* Design Card */}
          <Card 
            hoverable={true}
            animated={true}
            onClick={() => handleNavigate('/portfolio/design')}
          >
            <div className="snapshot-card-content">
              <CardIcon>
                <div className="snapshot-icon design">
                  <Palette size={56} />
                </div>
              </CardIcon>

              <CardTitle>Product Design</CardTitle>
              
              <CardDescription>
                Designing intuitive, beautiful interfaces that prioritize user experience and create memorable digital interactions. From wireframes to high-fidelity prototypes.
              </CardDescription>

              <div className="snapshot-features">
                <div className="feature-item">
                  <span className="feature-icon">🎨</span>
                  <span>UI/UX Design</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <span>Prototyping</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span>Design Systems</span>
                </div>
              </div>

              <div className="snapshot-cta">
                <span className="cta-text">View Projects</span>
                <span className="cta-arrow">→</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}