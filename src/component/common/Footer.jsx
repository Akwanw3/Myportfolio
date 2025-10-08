import { Github, Linkedin, Twitter, Mail, Heart,Facebook, ArrowUp,  } from 'lucide-react';
import Logo from './Mylogo';
import '@/styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSocialClick = (platform) => {
    console.log(`Opening ${platform}`);
    // Add your actual social media links here
  };

  return (
    <footer className="footer">
      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      
        {/* Top Section */}
        
          {/* Brand Column */}
          <div className="footer-brand">
            <Logo size="medium" animated={false} />
            <p className="footer-tagline">
              Crafting digital experiences through innovative code and exceptional design.
            </p>
            <div className="footer-socials">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:hello@sucrex.dev"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
               <a 
                href="https://Facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} SucreX. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={16} className="heart-icon" /> by Sucre
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      

      {/* Animated Background Elements */}
      <div className="footer-bg-gradient"></div>
    </footer>
  );
}
