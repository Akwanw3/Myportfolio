import { useState, useEffect, useRef } from 'react';
import {NavLink} from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react';
import '@/styles/Nav.css';
import Logo from './Mylogo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavClick = (section) => {
    
    closeMobileMenu();
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
        <NavLink to='/Home'>
         <Logo  size="medium" animated={true} />
         </NavLink>
        </div>
        <ThemeToggle/>

        {/* Desktop Navigation - Hidden on Mobile */}
        <ul className="nav-menu-desktop">
          <li>
            <NavLink to='/Home' className={({isActive})=>(isActive? 'active': '')} onClick={() => handleNavClick('home')}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to ='/About' className={({isActive})=> (isActive? 'active': '')} onClick={() => handleNavClick('about')}>
              About
            </NavLink>
          </li>

          {/* Portfolio with Dropdown */}
          <li 
            className="dropdown-container" 
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onClick={() => setIsDropdownOpen(false)}
          >
            <button 
              className="dropdown-btn"
              onClick={toggleDropdown}
            >
              Portfolio
              <ChevronDown 
                size={16} 
                className={`chevron-icon ${isDropdownOpen ? 'rotate' : ''}`}
              />
            </button>
            
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to='/DevPage' className={({isActive})=> (isActive?'active': '')}
                    onClick={() => handleNavClick('web-development')}
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/DesignPage' className={({isActive})=> (isActive? 'active': '')} 
                    onClick={() => handleNavClick('design')}
                  >
                    Design
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to ='/Services' className={({isActive})=> (isActive? 'active':'')} onClick={() => handleNavClick('services')}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to ='/Contact' className={({isActive})=>(isActive? 'active': '')} onClick={() => handleNavClick('contact')}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay + Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="mobile-overlay" onClick={closeMobileMenu} />
          
          <div className="mobile-menu">
            <ul>
              <li>
                <NavLink to = '/Home'className={({isActive})=> (isActive? 'active':'')} onClick={() => handleNavClick('Home')}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to ='/About' className={({isActive})=> (isActive?'active':'')} onClick={() => handleNavClick('About')}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to ='/DevPage' className={({isActive})=> (isActive? 'active': '')} onClick={() => handleNavClick('DevPage')}>
                  Web Development
                </NavLink>
              </li>

              <li>
                <NavLink to ='/DesignPage' className={({isActive})=> (isActive? 'active':'')} onClick={() => handleNavClick('Designpage')}>
                  Design
                </NavLink>
              </li>

              <li>
                <NavLink to = '/Services' className={({isActive})=> (isActive? 'active':'')} onClick={() => handleNavClick('Services')}>
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to = '/Contact' className={({isActive})=> (isActive? 'active' : '')} onClick={() => handleNavClick('Contact')}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
