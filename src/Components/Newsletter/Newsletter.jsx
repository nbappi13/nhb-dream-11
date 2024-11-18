import React, { useState, useEffect } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [suggestedEmail, setSuggestedEmail] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('newsletterEmail');
    if (savedEmail) {
      setSuggestedEmail(savedEmail);
    }

    const handleScroll = () => {
      const newsletter = document.querySelector('.newsletter');
      if (newsletter) {
        const rect = newsletter.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    localStorage.setItem('newsletterEmail', email);
    setIsSubscribed(true);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={`newsletter ${isVisible ? 'visible' : ''}`}>
      {isSubscribed ? (
        <div>
          <h2>Welcome back!</h2>
          <p className='text-slate-300'>You're subscribed with: {email}</p>
        </div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <h2>Subscribe to our Newsletter</h2>
          <p className='text-slate-300'>Get the latest updates and news right in your inbox!</p>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            list="suggestions"
            required
          />
          <datalist id="suggestions">
            {email && suggestedEmail.includes(email) && <option value={suggestedEmail} />}
          </datalist>
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
