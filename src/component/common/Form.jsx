// ==================== Usage Examples ====================

// Example 1: Default variant (at the end of a page)
import GetInTouchCard from './components/GetInTouchCard';

function AboutPage() {
  return (
    <>
      {/* Your about content */}
      
      <GetInTouchCard />
    </>
  );
}

// Example 2: Custom title and subtitle
function ServicesPage() {
  return (
    <>
      {/* Your services content */}
      
      <GetInTouchCard 
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how I can help bring your vision to life."
      />
    </>
  );
}

// Example 3: Minimal variant (for pages with less space)
function ProjectsPage() {
  return (
    <>
      {/* Your projects content */}
      
      <GetInTouchCard 
        variant="minimal"
        title="Interested in Working Together?"
        showIcons={false}
      />
    </>
  );
}

// Example 4: Colorful variant (for landing pages)
function HomePage() {
  return (
    <>
      {/* Your home content */}
      
      <GetInTouchCard 
        variant="colorful"
        title="Let's Create Something Amazing"
        subtitle="I'm always excited to take on new challenges and collaborate on innovative projects."
      />
    </>
  );
}

// Example 5: Section wrapper for consistent spacing
function PortfolioPage() {
  return (
    <div className="page-container">
      {/* Your portfolio content */}
      
      <section className="get-in-touch-section">
        <GetInTouchCard 
          title="Like What You See?"
          subtitle="Let's collaborate on your next project and create something extraordinary together."
        />
      </section>
    </div>
  );
}

