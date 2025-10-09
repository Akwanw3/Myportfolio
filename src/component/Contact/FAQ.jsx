import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import '@/styles/FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's your typical turnaround time?",
      answer: "Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications may take 2-3 months. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! I love working with startups and helping bring innovative ideas to life. I offer flexible packages and can work within various budget constraints."
    },
    {
      question: "What's your design process?",
      answer: "My process includes discovery, wireframing, high-fidelity design, prototyping, and iterative feedback. I ensure you're involved at every stage to create the perfect solution."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! I provide post-launch support and maintenance packages to ensure your website or application continues to perform optimally and stays up-to-date."
    },
    {
      question: "Can you handle both design and development?",
      answer: "Yes, that's my specialty! Having both skillsets allows for seamless execution from concept to deployment, ensuring design intent is perfectly translated into code."
    },
    {
      question: "What technologies do you use?",
      answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various design tools like Figma and Adobe XD. I choose the best stack for each project's needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="faq-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Quick answers to common questions</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question-btn ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="faq-question">{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="faq-answer-wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}