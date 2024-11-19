// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <h1 className="logo">Web4Next</h1>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="hero">
            <h1>Design Your Digital World</h1>
            <p>We build stunning websites and apps that empower your business.</p>
            <button className="cta-btn">Get Started</button>
          </div>
        </div>
      </header>

      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Web Development</h3>
              <p>We craft responsive and modern websites tailored to your needs.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-paint-brush"></i>
              <h3>Cloud Solution</h3>
              <p>We Provide End-to-End cloud Infrastructure.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Mobile Apps</h3>
              <p>Custom mobile app solutions for Android and iOS platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"They delivered exactly what we needed. Highly recommend!"</p>
              <h4>— John Doe, CEO of XYZ</h4>
            </div>
            <div className="testimonial-card">
              <p>"Their design work is top-notch, and they are great to work with."</p>
              <h4>— Jane Smith, Founder of ABC Corp</h4>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <p>&copy; 2024 BrandName. All rights reserved.</p>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
