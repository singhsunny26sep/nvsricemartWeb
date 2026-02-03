import React from 'react';
import { Link } from 'react-router-dom';
import founderImage from '../img/founder.jpeg';
import './About.css';

function About() {
  const milestones = [
    { year: '2010', title: 'Founded', description: 'Started with a small shop in the local grain market' },
    { year: '2015', title: 'Expansion', description: 'Opened our first wholesale warehouse' },
    { year: '2018', title: 'Online Launch', description: 'Started serving customers across India' },
    { year: '2020', title: 'ISO Certified', description: 'Achieved ISO 9001:2015 certification' },
    { year: '2023', title: '50K Customers', description: 'Served over 50,000 happy customers' }
  ];

  const values = [
    { icon: '🌾', title: 'Quality First', description: 'We never compromise on the quality of our rice. Every grain is handpicked and thoroughly inspected.' },
    { icon: '🤝', title: 'Trust & Integrity', description: 'Building lasting relationships with customers through honest dealings and transparent pricing.' },
    { icon: '🌱', title: 'Sustainability', description: 'Sourcing rice from farmers who practice sustainable farming methods.' },
    { icon: '💪', title: 'Customer Focus', description: 'Your satisfaction is our priority. We listen and continuously improve our services.' }
  ];

  const team = [
    { name: 'Vikram Singh', role: 'CEO & Founder', image: founderImage, experience: '20+ years in rice trading', color: 'orange' },
    { name: 'Rajesh Kumar', role: 'Quality Director', emoji: '🌾', experience: 'Expert in rice quality control', color: 'green' },
    { name: 'Priya Sharma', role: 'Operations Manager', emoji: '🚚', experience: 'Supply chain expert', color: 'blue' },
    { name: 'Amit Patel', role: 'Customer Relations', emoji: '👨‍💼', experience: 'MBA in Customer Management', color: 'purple' }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="hero-badge">🏆 About NVS Rice Mart</span>
          <h1 className="hero-title">
            Our Story of
            <br />
            <span className="highlight">Excellence & Trust</span>
          </h1>
          <p className="hero-description">
            Since 2010, we've been dedicated to bringing the finest quality rice to families across India. 
            From a small local shop to becoming one of the most trusted rice suppliers, our journey is built 
            on passion, quality, and customer satisfaction.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Our Rice →</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stats-container">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '50,000+', label: 'Happy Customers' },
            { value: '20+', label: 'Rice Varieties' },
            { value: '100%', label: 'Quality Guaranteed' }
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-badge">Our Story</span>
              <h2 className="section-title">From Small Beginnings to Big Dreams</h2>
              <p className="story-text">
                NVS Rice Mart was founded in 2010 by Vikram Singh with a simple vision: to provide 
                families with the best quality rice at fair prices. What started as a small shop in 
                the local grain market has grown into one of the most trusted rice suppliers in the region.
              </p>
              <p className="story-text">
                We believe in the power of pure, authentic rice. That's why we work directly with 
                farmers across India, ensuring that every grain we sell is of the highest quality. 
                Our commitment to quality has earned us the trust of over 50,000 happy customers.
              </p>
              <p className="story-text">
                Today, NVS Rice Mart stands as a testament to hard work, dedication, and an 
                unwavering commitment to excellence. We continue to grow, innovate, and serve 
                our community with the same passion that guided us from the very beginning.
              </p>
            </div>
            <div className="story-image">
              <div className="image-card">
                <img src={founderImage} alt="NVS Rice Mart - Our Journey" />
                <div className="image-badge">Since 2010</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">Milestones of Success</h2>
            <p className="section-description">Key moments that shaped our journey and defined our commitment to excellence</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-description">The core principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className={`value-icon value-${value.title.toLowerCase().replace(' ', '-')}`}>
                  <span>{value.icon}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-description">Experienced professionals dedicated to bringing you the finest quality rice</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className={`team-avatar ${member.emoji ? `avatar-${member.color}` : ''}`}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <span>{member.emoji}</span>
                  )}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-experience">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <div className="cta-card">
            <h2>Ready to Experience Premium Quality?</h2>
            <p>Join thousands of happy customers who trust NVS Rice Mart for their rice needs</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-white">Shop Now</Link>
              <Link to="/contact" className="btn btn-outline-white">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
