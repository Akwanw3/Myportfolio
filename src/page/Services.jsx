
import { motion } from 'framer-motion';
import ServiceCard from '../component/Services/Servicecard';
import ProcessStep from '../component/Services/ProcessStep';
import Animation from '@/component/services/p';
import GetInTouchCard from '../component/common/CTASection';
import { 
  Code, Palette, Server, Smartphone, Zap, Layers,
  Search, Lightbulb, Pencil, Rocket, HeadphonesIcon
} from 'lucide-react';
import '@/styles/service.css';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Building responsive, performant web applications with modern frameworks',
      features: [
        'Frontend Development (React, Next.js)',
        'Backend Development (Node.js, APIs)',
        'Full-Stack Applications',
        'Database Design & Integration'
      ],
       popular: true
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, beautiful interfaces that users love',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Wireframing & Prototyping',
        'Design Systems & Style Guides'
      ],
     
    }
  ];

  const allServices = [
    {
      icon: <Code size={32} />,
      title: 'Website Development',
      description: 'Custom websites built with modern frameworks, optimized for performance and SEO.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Performance']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Web Applications',
      description: 'Complex web apps with rich functionality and seamless user experience.',
      features: ['Real-time Features', 'User Authentication', 'Data Management']
    },
    {
      icon: <Server size={32} />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless data exchange and integrations.',
      features: ['RESTful APIs', 'GraphQL', 'Third-party Integration']
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Consulting',
      description: 'Expert advice on improving user experience and interface design.',
      features: ['UX Audit', 'Design Review', 'Strategy Planning']
    },
    {
      icon: <Pencil size={32} />,
      title: 'Prototyping',
      description: 'Interactive prototypes to validate ideas and test user flows.',
      features: ['High-fidelity Mockups', 'Interactive Prototypes', 'User Testing']
    },
    {
      icon: <Layers size={32} />,
      title: 'Design Systems',
      description: 'Scalable component libraries for consistent user experiences.',
      features: ['Component Library', 'Style Guide', 'Documentation']
    }
  ];

  const processSteps = [
    {
      number: '1',
      icon: <Search size={32} />,
      title: 'Discovery',
      description: 'Understanding your goals, audience, and requirements through consultation'
    },
    {
      number: '2',
      icon: <Lightbulb size={32} />,
      title: 'Strategy',
      description: 'Planning the approach, architecture, and design direction'
    },
    {
      number: '3',
      icon: <Pencil size={32} />,
      title: 'Design & Build',
      description: 'Creating designs and developing with best practices'
    },
    {
      number: '4',
      icon: <Zap size={32} />,
      title: 'Testing',
      description: 'Rigorous testing for quality, performance, and user experience'
    },
    {
      number: '5',
      icon: <Rocket size={32} />,
      title: 'Launch & Support',
      description: 'Deployment and ongoing support for continued success'
    }
  ];


  

  const handleServiceClick = (title) => {
    console.log(`Service clicked: ${title}`);
  };

  const handleCTA = (plan) => {
    console.log(`CTA clicked for: ${plan}`);
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">Services</h1>
            <p className="hero-subtitle">
              Comprehensive solutions from concept to launch - combining development expertise with design excellence
            </p>
          </motion.div>
        </div>
      </section>

      <div className="services-container">
        {/* Main Services */}
        <section className="main-services-section">
          <div className="main-services-grid">
            {mainServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                popular={service.popular}
                onClick={() => handleServiceClick(service.title)}
              />
            ))}
          </div>
        </section>
        <Animation/>

        {/* All Services Grid */}
        <section className="all-services-section">
          <div className="section-header">
            <h2 className="section-title">What I Can Do For You</h2>
            <p className="section-subtitle">Specialized services tailored to your needs</p>
          </div>

          <div className="all-services-grid">
            {allServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                onClick={() => handleServiceClick(service.title)}
              />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="section-header">
            <span className="section-label">How I Work</span>
            <h2 className="section-title">My Process</h2>
            <p className="section-subtitle">A systematic approach to delivering exceptional results</p>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </section>

        
        {/* Get In Touch */}
        <GetInTouchCard 
          title="Ready to Start Your Project?"
          subtitle="Let's discuss how I can help bring your vision to life"
        />
      </div>
    </div>
  );
}