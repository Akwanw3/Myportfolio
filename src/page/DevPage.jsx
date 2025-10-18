
// ==================== DevelopmentPortfolio.jsx ====================
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../component/Project/ProjectCard';
import GetInTouchCard from '@/component/common/CTASection';
import ChaindustryFullstack from '@/assets/ChaindustryFullstack.png'
import '@/styles/DevPage.css'
import Learnmate from '@/assets/Learnmate.png'

export default function DevelopmentPortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
    
  const projects = [
    {
      id: 1,
      title: 'Chaindustry App',
      description: 'A comprehensive analytics platform built for modern businesses. Features real-time data visualization, custom dashboards, team collaboration tools, and advanced reporting capabilities.',
      thumbnail: ChaindustryFullstack,
      techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
      type: 'fullstack',
      featured: true,
      liveLink: 'https://app.chaindustry.io/',
     
    },
    {
      id: 2,
      title: 'StyleHub Marketplace',
      description: 'Full-featured e-commerce platform with advanced product filtering, secure checkout, inventory management, and admin dashboard for seamless operations.',
      thumbnail: '/assets/projects/project2.jpg',
      techStack: ['React', 'Stripe', 'Node.js', 'PostgreSQL'],
      type: 'fullstack',
      featured: false,
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 3,
      title: 'FitLife Pro Landing',
      description: 'High-converting landing page for fitness app with animated sections, testimonials, pricing tables, and newsletter signup. Optimized for performance and SEO.',
      thumbnail: '/assets/projects/project3.jpg',
      techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      type: 'frontend',
      featured: false,
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 4,
      title: 'ProjectFlow SaaS',
      description: 'Project management platform with task tracking, team collaboration, time tracking, and Gantt charts. Supports multiple workspaces and integrations.',
      thumbnail: '/assets/projects/project4.jpg',
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'Redis'],
      type: 'fullstack',
      featured: true,
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 5,
      title: 'Portfolio Showcase',
      description: 'a modern educational landing page  It showcases clean UI design, responsive layouts, and component-based architecture focused on learning accessibility and simplicity, Built with performance in mind.',
      thumbnail: Learnmate,
      techStack: ['React', 'Three.js', 'TailwindCss'],
      type: 'frontend',
      featured: false,
      liveLink: 'https://learnmate-pied.vercel.app/',
      githubLink: 'https://github.com/Akwanw3/Learnmate'
    },
    {
      id: 6,
      title: 'ConnectHub Chat App',
      description: 'Real-time chat application with group messaging, file sharing, voice/video calls, and end-to-end encryption for secure communications.',
      thumbnail: '/assets/projects/project6.jpg',
      techStack: ['React', 'Socket.io', 'WebRTC', 'MongoDB'],
      type: 'fullstack',
      featured: false,
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.type === activeFilter;
  });

  const projectCount = {
    all: projects.length,
    frontend: projects.filter(p => p.type === 'frontend').length,
    fullstack: projects.filter(p => p.type === 'fullstack').length
  };

  return (
    <div className="development-portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className=" text-4xl md:text-5xl sm:text-4xl lg:text-[64px] dark:bg-black font-black mb-6 bg-gradient-to-br from-[var(--text-primary,#1a1f3a)] to-[var(--accent-primary,#00d4ff)] bg-clip-text text-transparent leading-[1.2]">Development Portfolio</h1>
            <p className="text-lg sm:text-xl md:text-[22px] text-[var(--text-muted,#718096)] leading-[1.6]">
              A showcase of my web development work - from concept to deployment
            </p>
          </motion.div>
        </div>
      </section>

      <div className="portfolio-container px-4 md:px-14">
        {/* Filter Section */}
        <motion.div 
          className="filter-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="filter-header">
            <h2 className="filter-title">My Projects</h2>
            <div className="project-count">
              <span className="count-number">{filteredProjects.length}</span>
              <span className="count-label">
                {activeFilter === 'all' ? 'Total Projects' : 
                 activeFilter === 'frontend' ? 'Frontend Projects' : 
                 'Full-Stack Projects'}
              </span>
            </div>
          </div>

          <div className="filter-tabs">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
              
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveFilter('frontend')}
            >
              Frontend
              
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setActiveFilter('fullstack')}
            >
              Full-Stack
              
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-section">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}

        {/* Get In Touch */}
        <GetInTouchCard 
          title="Have a Project in Mind?"
          subtitle="Let's collaborate and bring your vision to life"
        />
      </div>
    </div>
  );
}