import { motion } from 'framer-motion';
import '@/styles/MyStory.css';

export default function MyStoryCard({ 
  title = "My Story",
  paragraphs = []
}) {
  return (
    <motion.div 
      className="my-story-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="story-header">
        <span className="story-label">About Me</span>
        <h2 className="story-title">{title}</h2>
      </div>

      <div className="story-content">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="story-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="story-highlight">
        <div className="highlight-icon">✨</div>
        <p className="highlight-text">
          Passionate about creating exceptional digital experiences that make a difference
        </p>
      </div>
    </motion.div>
  );
}
