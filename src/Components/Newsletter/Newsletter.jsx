import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p  className='text-slate-300'>Get the latest updates and news right in your inbox!</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="button">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
