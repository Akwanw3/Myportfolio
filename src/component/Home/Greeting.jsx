import React,{ useState, useEffect } from 'react';
import { Coffee, Sun, Moon } from 'lucide-react';
import '@/styles/Greeting.css';

export default function Greeting({ userName = 'Explorer' }) {
  const [greeting, setGreeting] = useState({ text: '', icon: null, period: '' });

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return {
        text: 'Good Morning',
        icon: Coffee,
        period: 'morning',
        
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        text: 'Good Afternoon',
        icon: Sun,
        period: 'afternoon',
       
      };
    } else {
      return {
        text: 'Good Evening',
        icon: Moon,
        period: 'evening',
       
      };
    }
  };

  useEffect(() => {
    // Set initial greeting
    setGreeting(getGreeting());

    // Update greeting every minute
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const GreetingIcon = greeting.icon;

  return (
    <div className={`dynamic-greeting ${greeting.period}`}>
      <div className="greeting-content">
        {GreetingIcon && (
          <div className="greeting-icon-wrapper">
            <GreetingIcon className="greeting-icon" size={32} />
          </div>
        )}
        <h2 className="greeting-text">
          {greeting.text}, <span className="greeting-name">{userName}</span>
          
        </h2>
      </div>
    </div>
  );
}
