import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import '@/styles/p.css';
export default function SkillsStats() {
  const stats = [
    { number: 50, label: "Projects Completed" },
    { number: 30, label: "Happy Clients" },
    { number: 5, label: "Years Experience" },
    { number: 98, label: "Client Satisfaction" },
  ];

  return (
    <section className="skills-section">
      <motion.div 
        className="skills-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <AnimatedNumber target={stat.number} />
            <div className="stat-label">{stat.label}</div>
            {index < stats.length - 1 && <div className="stat-divider"></div>}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// 👇 Handles count-up only when visible
function AnimatedNumber({ target }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // animation time
      const increment = target / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div ref={ref} className="stat-number">
    {count>50? `${count}%`: `${count}+`} 
    </motion.div>
  );
}



