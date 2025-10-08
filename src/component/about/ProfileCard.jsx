import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Mail, Download } from 'lucide-react';
import '@/styles/ProfileCard.css';
import Abia from '@/assets/Abia.png';

export default function ProfileCard({ 
  name = "SUCRE",
  role = "Web Developer & UI/UX Designer",
  location = "Your City, Country",
  experience = "5+ Years",
  education = "Computer Science",
  email = "hello@sucrex.dev",
  avatarSrc = "@/assets/Abia.png",
}) {
  return (
    <motion.div 
      className="profile-card"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Avatar */}
      <div className="profile-avatar-wrapper">
        <div className="avatar-glow-effect"></div>
        <img 
          src={Abia} 
          alt={`${name} Profile`} 
          className="profile-avatar"
        />
        <div className="avatar-status">
          <span className="status-dot"></span>
          <span className="status-text">Available</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
      </div>

      {/* Quick Info */}
      <div className="profile-details">
        <div className="detail-item">
          <MapPin size={18} className="detail-icon" />
          <span>{location}</span>
        </div>
        <div className="detail-item">
          <Briefcase size={18} className="detail-icon" />
          <span>{experience} Experience</span>
        </div>
        <div className="detail-item">
          <GraduationCap size={18} className="detail-icon" />
          <span>{education}</span>
        </div>
        <div className="detail-item">
          <Mail size={18} className="detail-icon" />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>

      
    

      {/* Social Links */}
      <div className="profile-socials">
        <a href="#" className="social-link" aria-label="GitHub">💻</a>
        <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
        <a href="#" className="social-link" aria-label="Twitter">🐦</a>
        <a href="#" className="social-link" aria-label="Dribbble">🎨</a>
      </div>
    </motion.div>
  );
}