
import { motion } from 'framer-motion';
import '@/styles/Timeline.css';

export default function JourneyExperience() {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Co.',
      description: 'Leading design and development of enterprise-level web applications. Established design system and mentored junior developers.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      year: '2021 - 2023',
      title: 'UI/UX Developer',
      company: 'Digital Solutions Inc.',
      description: 'Designed and developed responsive interfaces for client projects. Improved user engagement by 40% through UX optimization.',
      technologies: ['Vue.js', 'Figma', 'Tailwind', 'Firebase']
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      description: 'Built modern web applications and collaborated with design team to implement pixel-perfect interfaces.',
      technologies: ['React', 'Redux', 'SASS', 'REST API']
    },
    {
      year: '2018 - 2019',
      title: 'Junior Web Developer',
      company: 'Creative Agency',
      description: 'Developed websites for small businesses and learned fundamentals of responsive design and user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    }
  ];

  return (
    <motion.div 
      className="journey-experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="journey-header">
        <span className="journey-label">Journey</span>
        <h2 className="journey-title">Work Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <span className="timeline-company">{exp.company}</span>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}