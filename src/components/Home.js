import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../App';
import founderImage from '../img/founder.jpeg';
import './Home.css';

function Home() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const riceVarieties = [
    {
      id: 1,
      name: 'Basmati Rice',
      description: 'Premium long-grain aromatic rice from the foothills of Himalayas',
      emoji: '🍚',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      features: ['Aged for 1-2 years', 'Gluten-free & healthy', 'Perfect for biryani'],
      price: '₹120/kg',
      packSizes: '1kg, 5kg, 25kg'
    },
    {
      id: 2,
      name: 'Sonamasuri Rice',
      description: 'Traditional short-grain rice with soft texture and natural sweetness',
      emoji: '🌾',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      features: ['Daily consumption rice', 'Easy to cook', 'Rich in carbohydrates'],
      price: '₹80/kg',
      packSizes: '1kg, 5kg, 25kg'
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Whole grain rice packed with nutrients and fiber',
      emoji: '🥘',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      features: ['High in fiber', 'Low glycemic index', 'Health-conscious choice'],
      price: '₹100/kg',
      packSizes: '1kg, 5kg'
    },
    {
      id: 4,
      name: 'Sona Masoori Rice',
      description: 'Light, fluffy rice perfect for everyday meals',
      emoji: '🍲',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      features: ['Easy digestion', 'Budget-friendly', 'Excellent taste'],
      price: '₹75/kg',
      packSizes: '1kg, 5kg, 10kg'
    },
    {
      id: 5,
      name: 'Jeera Rice',
      description: 'Fragrant rice with subtle cumin flavor',
      emoji: '🌿',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      features: ['Aromatic & flavorful', 'Perfect pulao rice', 'Premium quality'],
      price: '₹95/kg',
      packSizes: '1kg, 5kg'
    },
    {
      id: 6,
      name: 'Ponni Rice',
      description: 'Medium grain rice with excellent cooking quality',
      emoji: '🌱',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      features: ['Non-sticky texture', 'Rich in nutrients', 'South Indian favorite'],
      price: '₹85/kg',
      packSizes: '1kg, 5kg, 25kg'
    }
  ];

  const features = [
    { icon: '🌾', title: 'Premium Quality', description: 'Handpicked, premium rice varieties sourced directly from the finest farms across India', color: 'orange' },
    { icon: '🚚', title: 'Fast Delivery', description: 'Free home delivery within 24 hours across the city. Fresh rice guaranteed', color: 'green' },
    { icon: '💰', title: 'Best Prices', description: 'Competitive wholesale prices with special discounts for bulk orders and regular customers', color: 'blue' },
    { icon: '✅', title: 'Quality Assured', description: 'ISO certified processing unit with strict quality control at every stage', color: 'purple' },
    { icon: '🏪', title: 'Bulk Orders', description: 'Special pricing for restaurants, hotels, and wedding functions. Direct farm to consumer', color: 'red' },
    { icon: '📞', title: '24/7 Support', description: 'Dedicated customer support team ready to assist you with orders and inquiries', color: 'cyan' }
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50,000+', label: 'Happy Customers' },
    { value: '20+', label: 'Rice Varieties' },
    { value: '100%', label: 'Quality Guaranteed' }
  ];

  const testimonials = [
    { name: 'Rajesh Sharma', location: 'Delhi', initials: 'RS', bgColor: 'bg-orange-100', textColor: 'text-orange-600', rating: 5, text: "NVS Rice Mart provides the best quality rice in the city. Their Basmati rice is exceptional, and the delivery is always on time. My family loves their products!" },
    { name: 'Priya Kapoor', location: 'Mumbai', initials: 'PK', bgColor: 'bg-green-100', textColor: 'text-green-600', rating: 5, text: "As a restaurant owner, I need consistent quality rice. NVS Rice Mart has been our trusted supplier for 3 years. Their service and product quality is outstanding!" },
    { name: 'Amit Mehta', location: 'Bangalore', initials: 'AM', bgColor: 'bg-purple-100', textColor: 'text-purple-600', rating: 5, text: "Excellent quality rice with very competitive prices. The free delivery service is a bonus, and their customer service is very responsive and helpful." }
  ];

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="logo">
              <span>🌾</span>
            </div>
            <div className="brand-text">
              <h1>NVS Rice Mart</h1>
              <p>Premium Rice Since 2010</p>
            </div>
          </div>
          <div className="navbar-links">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/products" className="nav-link">Rice Varieties</Link>
            <Link to="/services" className="nav-link">Our Services</Link>
            <Link to="/analytics" className="nav-link">About Us</Link>
            <Link to="/settings" className="nav-link">Contact</Link>
            <Link to="/cart" className="nav-link cart-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🏆 India's Trusted Rice Supplier</span>
          <h1 className="hero-title">
            Premium Quality Rice
            <br />
            <span className="highlight">Delivered Fresh to You</span>
          </h1>
          <p className="hero-description">
            Discover the finest varieties of rice sourced directly from the best farms across India. 
            Fresh, pure, and premium quality rice for your family's health and happiness since 2010.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Shop Rice Varieties →</Link>
            <Link to="/services" className="btn btn-secondary">View Our Services</Link>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rice Varieties Section */}
      <section className="rice-varieties">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Our Products</span>
            <h2 className="section-title">Premium Rice Varieties</h2>
            <p className="section-description">We offer a wide range of premium quality rice varieties sourced from the finest farms across India</p>
          </div>
          <div className="rice-grid">
            {riceVarieties.map((rice) => (
              <div key={rice.id} className="rice-card">
                <div className={`rice-icon ${rice.bgColor.replace('bg-', 'icon-')}`}>
                  <span>{rice.emoji}</span>
                </div>
                <h3 className="rice-name">{rice.name}</h3>
                <p className="rice-description">{rice.description}</p>
                <ul className="rice-features">
                  {rice.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <div className="rice-footer">
                  <div className="rice-price">{rice.price}</div>
                  <p className="rice-packs">Available in: {rice.packSizes}</p>
                  <Link to="/products" className="btn btn-primary btn-small">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/products" className="btn btn-dark">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">The NVS Rice Mart Advantage</h2>
            <p className="section-description">We're committed to providing the highest quality rice with exceptional service</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-icon feature-${feature.color}`}>
                  <span>{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Delivery Banner */}
      <section className="delivery-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h3>🚚 Free Home Delivery on All Orders!</h3>
            <p>Order online and get fresh rice delivered to your doorstep within 24 hours</p>
          </div>
          <Link to="/products" className="btn btn-white">Order Now</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-description">Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">★★★★★</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className={`author-avatar ${testimonial.bgColor.replace('bg-', 'avatar-')}`}>
                    <span className={testimonial.textColor}>{testimonial.initials}</span>
                  </div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-description">Experienced professionals dedicated to bringing you the finest quality rice</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <img src={founderImage} alt="Vikram Singh - CEO & Founder" />
              </div>
              <h3 className="team-name">Vikram Singh</h3>
              <p className="team-role">CEO & Founder</p>
              <p className="team-experience">20+ years in rice trading business</p>
            </div>
            <div className="team-card">
              <div className="team-avatar avatar-green">
                <span>🌾</span>
              </div>
              <h3 className="team-name">Rajesh Kumar</h3>
              <p className="team-role">Quality Director</p>
              <p className="team-experience">Expert in rice quality control</p>
            </div>
            <div className="team-card">
              <div className="team-avatar avatar-blue">
                <span>🚚</span>
              </div>
              <h3 className="team-name">Priya Sharma</h3>
              <p className="team-role">Operations Manager</p>
              <p className="team-experience">Supply chain expert</p>
            </div>
            <div className="team-card">
              <div className="team-avatar avatar-purple">
                <span>👨‍💼</span>
              </div>
              <h3 className="team-name">Amit Patel</h3>
              <p className="team-role">Customer Relations</p>
              <p className="team-experience">MBA in Customer Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <div className="cta-card">
            <h2>Ready to Order Premium Rice?</h2>
            <p>Get fresh, high-quality rice delivered to your doorstep with free home delivery</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-white">Order Now</Link>
              <Link to="/settings" className="btn btn-outline-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
