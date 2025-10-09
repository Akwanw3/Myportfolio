// ==================== ProjectCard.jsx ====================
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '@/styles/ProjectCard.css';

export default function ProjectCard({ 
  project,
  index,
  direction = 'left' // 'left' or 'right'
}) {
  const isLeft = direction === 'left';

  return (
    <motion.div 
      className={`project-wrapper ${direction}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Project Number */}
      <motion.div 
        className="project-number"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="number-text">PROJECT</span>
        <span className="number-digit">{String(index + 1)}</span>
      </motion.div>

      {/* Project Card */}
      <div className="project-card">
        {/* Featured Ribbon */}
        {project.featured && (
          <div className="featured-ribbon">
            <span>★ Featured</span>
          </div>
        )}

        {/* Badge */}
        <div className="project-badge-wrapper">
          <span className={`project-badge ${project.type}`}>
            {project.type === 'frontend' ? 'Frontend' : 'Full-Stack'}
          </span>
        </div>

        {/* Card Content */}
        <div className="card-content-wrapper">
          {/* Image Side */}
          <div className="project-image-side">
            <div className="image-wrapper">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="project-thumbnail"
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          {/* Description Side */}
          <div className="project-description-side">
            <div className="description-box">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                    aria-label="View Live Project"
                  >
                    <ExternalLink size={18} />
                    
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                    aria-label="View GitHub Repository"
                  >
                    <Github size={18} />
                    
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}