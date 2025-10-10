// ==================== DesignPortfolio.jsx ====================
import { useState } from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from '../component/Project/FilterTabs';
import DesignShowcaseCard from '../component/Project/FeaturedProject';
import GetInTouchCard from '../component/common/CTASection';
import '@/styles/DesignPage.css';

export default function DesignPortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      heroImage: '/assets/designs/case-study-1.jpg',
      title: 'HealthTrack Pro',
      subtitle: 'Health & Fitness Tracking App',
      description: 'A comprehensive health and fitness tracking app designed to help users monitor their wellness journey with personalized dashboards and goal tracking.',
      category: 'Mobile App',
      role: 'Lead Product Designer',
      duration: '3 Months',
      impact: '50K+ Downloads',
      views: '2.5K',
      likes: '450',
      year: '2024',
      tools: ['Figma', 'Prototyping', 'User Research', 'Design System'],
      award: 'Best UI 2024',
      type: 'case-study'
    },
    {
      id: 2,
      heroImage: '/assets/designs/case-study-2.jpg',
      title: 'FinanceFlow Dashboard',
      subtitle: 'Banking & Finance Platform',
      description: 'Modern banking dashboard with advanced data visualization, transaction tracking, and AI-powered financial insights for better money management.',
      category: 'Web App',
      role: 'UI/UX Designer',
      duration: '4 Months',
      impact: '40% User Growth',
      views: '3.2K',
      likes: '680',
      year: '2024',
      tools: ['Figma', 'Adobe XD', 'Miro', 'Principle'],
      type: 'case-study'
    }
  ];

  const designs = [
    {
      id: 3,
      thumbnail: '/assets/designs/design-1.jpg',
      title: 'E-Commerce Mobile App',
      description: 'Shopping app UI with smooth checkout flow',
      type: 'Mobile UI',
      tools: ['Figma', 'Illustrator'],
      year: '2024'
    },
    {
      id: 4,
      thumbnail: '/assets/designs/design-2.jpg',
      title: 'Food Delivery Interface',
      description: 'Modern food ordering experience',
      type: 'App Design',
      tools: ['Figma'],
      year: '2024'
    },
    {
      id: 5,
      thumbnail: '/assets/designs/design-3.jpg',
      title: 'Travel Booking Platform',
      description: 'Intuitive travel planning interface',
      type: 'Web Design',
      tools: ['Figma', 'Photoshop'],
      year: '2023'
    },
    {
      id: 6,
      thumbnail: '/assets/designs/design-4.jpg',
      title: 'Productivity Dashboard',
      description: 'Task management and analytics',
      type: 'Dashboard',
      tools: ['Figma'],
      year: '2023'
    },
    {
      id: 7,
      thumbnail: '/assets/designs/design-5.jpg',
      title: 'Social Media App',
      description: 'Modern social networking interface',
      type: 'Mobile UI',
      tools: ['Figma', 'Principle'],
      year: '2023'
    },
    {
      id: 8,
      thumbnail: '/assets/designs/design-6.jpg',
      title: 'Music Streaming UI',
      description: 'Beautiful music player interface',
      type: 'App Design',
      tools: ['Figma'],
      year: '2023'
    }
  ];

  const allWork = [...caseStudies, ...designs];

  const filteredWork = allWork.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'case-studies') return item.type === 'case-study';
    if (activeFilter === 'designs') return item.type !== 'case-study';
    return true;
  });

  const workCount = {
    all: allWork.length,
    caseStudies: caseStudies.length,
    designs: designs.length
  };

  return (
    <div className="design-portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">Design Portfolio</h1>
            <p className="hero-subtitle">
              Crafting intuitive, beautiful experiences that users love
            </p>
          </motion.div>
        </div>
      </section>

      <div className="portfolio-container">
        {/* Filter Section */}
        <motion.div 
          className="filter-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="filter-header">
            <h2 className="filter-title">My Work</h2>
            <div className="project-count">
              <span className="count-number">{filteredWork.length}</span>
              <span className="count-label">
                {activeFilter === 'all' ? 'Total Works' : 
                 activeFilter === 'case-studies' ? 'Case Studies' : 
                 'Designs'}
              </span>
            </div>
          </div>

          <div className="filter-tabs">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Work
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'case-studies' ? 'active' : ''}`}
              onClick={() => setActiveFilter('case-studies')}
            >
              Case Studies
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'designs' ? 'active' : ''}`}
              onClick={() => setActiveFilter('designs')}
            >
              Designs
            </button>
          </div>
        </motion.div>

        {/* Case Studies Section */}
        {(activeFilter === 'all' || activeFilter === 'case-studies') && caseStudies.length > 0 && (
          <section className="case-studies-section">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="section-title-alt">Featured Case Studies</h3>
              <p className="section-description">In-depth looks at my design process and impact</p>
            </motion.div>

            <div className="case-studies-grid">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.id} caseStudy={study} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Designs Showcase Section */}
        {(activeFilter === 'all' || activeFilter === 'designs') && designs.length > 0 && (
          <section className="designs-section">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="section-title-alt">Design Showcase</h3>
              <p className="section-description">A collection of my UI/UX design work</p>
            </motion.div>

            <div className="designs-grid">
              {designs.map((design, index) => (
                <DesignShowcaseCard key={design.id} design={design} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Get In Touch */}
        <GetInTouchCard 
          title="Like What You See?"
          subtitle="Let's collaborate on your next design project"
        />
      </div>
    </div>
  );
}