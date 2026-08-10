import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import founderImage from '../img/founder.jpeg';
import './Home.css';

function Home() {
  const [riceVarieties, setRiceVarieties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Static rice data as backup
  const staticRiceData = [
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

   useEffect(() => {
     const fetchRiceVarieties = async () => {
       try {
         const token = localStorage.getItem('token');
         
         // Add timeout to fetch request to prevent hanging
         const controller = new AbortController();
         const timeoutId = setTimeout(() => controller.abort(), 10000);
         
         // Prepare headers
         const headers = {
           'Content-Type': 'application/json'
         };
         
         // Only add Authorization header if token exists
         if (token) {
           headers['Authorization'] = `Bearer ${token}`;
         }
         
         const response = await fetch('https://nvs-rice-mart.onrender.com/nvs-rice-mart/products/getAll', {
           method: 'GET',
           headers: headers,
           signal: controller.signal
         });
        
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
         // Handle different API response structures
         let products = [];
         if (Array.isArray(data)) {
           products = data;
         } else if (data.data && Array.isArray(data.data)) {
           // Handle case where data.data is the array (like in login response)
           products = data.data;
         } else if (data.data && data.data.data && Array.isArray(data.data.data)) {
           // Handle case where data.data.data is the array (like in products response)
           products = data.data.data;
         } else if (data.products && Array.isArray(data.products)) {
           products = data.products;
         } else {
           products = staticRiceData;
         }
        
         // Map API response to expected format if needed
         const mappedProducts = products.length > 0 ? products.map((product, index) => ({
           id: product._id || product.id || index + 1,
           name: product.name || product.productName || 'Premium Rice',
           description: product.description || product.productDescription || 'High quality premium rice',
           emoji: getEmojiForRice(product.name || ''),
           bgColor: getBgColor(index),
           iconColor: getIconColor(index),
           features: product.features || ['Premium quality', 'Fresh stock', 'Best taste'],
           price: product.generalPrice ? `₹${product.generalPrice}/kg` : '₹99/kg',
           packSizes: product.weightInKg ? `${product.weightInKg}kg` : '1kg, 5kg, 25kg'
         })) : staticRiceData;
        
        setRiceVarieties(mappedProducts);
      } catch (err) {
        console.error('Error fetching rice varieties:', err);
        setError('Failed to load rice varieties. Showing sample products.');
        // Fallback to static data if API fails
        setRiceVarieties(staticRiceData);
      } finally {
        setLoading(false);
      }
    };

    fetchRiceVarieties();
  }, []);

  // Helper function to get emoji based on rice name
  const getEmojiForRice = (name) => {
    if (!name) return '🍚';
    const lowerName = name.toLowerCase();
    if (lowerName.includes('basmati')) return '🍚';
    if (lowerName.includes('sona')) return '🌾';
    if (lowerName.includes('brown')) return '🥘';
    if (lowerName.includes('jeera')) return '🌿';
    if (lowerName.includes('ponni')) return '🌱';
    return '🍚';
  };

  // Helper function to get background color
  const getBgColor = (index) => {
    const colors = ['bg-green-50', 'bg-blue-50', 'bg-amber-50', 'bg-yellow-50', 'bg-emerald-50', 'bg-teal-50'];
    return colors[index % colors.length];
  };

  // Helper function to get icon color
  const getIconColor = (index) => {
    const colors = ['text-green-600', 'text-blue-600', 'text-amber-600', 'text-yellow-600', 'text-emerald-600', 'text-teal-600'];
    return colors[index % colors.length];
  };

  return (
    <div className="home-container">
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
            {loading ? (
              <div className="loading-message">
                <div className="loader"></div>
                <p>Loading premium rice varieties...</p>
              </div>
            ) : error ? (
              <div className="error-message">
                <p>{error}</p>
                <button onClick={() => window.location.reload()} className="retry-btn">Retry</button>
              </div>
            ) : (
              <>
                {riceVarieties.length > 0 ? (
                  riceVarieties.map((rice, idx) => (
                    <div key={rice.id || idx} className="rice-card">
                      <div className={`rice-icon ${rice.bgColor || getBgColor(idx)}`}>
                        <span className="rice-emoji">{rice.image || '🍚'}</span>
                      </div>
                      <h3 className="rice-name">{rice.name}</h3>
                      <p className="rice-description">{rice.description}</p>
                      <ul className="rice-features">
                        {rice.features && rice.features.slice(0, 3).map((feature, featureIdx) => (
                          <li key={featureIdx}>
                            <span className="check-mark">✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="rice-footer">
                        <div className="rice-price">{rice.price}</div>
                        <p className="rice-packs">Available in: {rice.packSizes}</p>
                        <Link to="/products" className="btn btn-primary btn-small">View Details</Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-data-message">
                    <p>No rice varieties available at the moment.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  </div>
                )}
              </>
            )}
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
                  <span className="feature-icon-emoji">{feature.icon}</span>
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
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className={`author-avatar ${testimonial.bgColor}`}>
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
                <img 
                  src={founderImage} 
                  alt="Vikram Singh - CEO & Founder" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/120x120?text=VS';
                  }}
                />
              </div>
              <h3 className="team-name">Vikram Singh</h3>
              <p className="team-role">CEO & Founder</p>
              <p className="team-experience">20+ years in rice trading business</p>
            </div>
            <div className="team-card">
              <div className="team-avatar avatar-green">
                <span className="avatar-emoji">🌾</span>
              </div>
              <h3 className="team-name">Rajesh Kumar</h3>
              <p className="team-role">Quality Director</p>
              <p className="team-experience">Expert in rice quality control</p>
            </div>
            <div className="team-card">
              <div className="team-avatar avatar-blue">
                <span className="avatar-emoji">🚚</span>
              </div>
              <h3 className="team-name">Priya Sharma</h3>
              <p className="team-role">Operations Manager</p>
              <p className="team-experience">Supply chain expert</p>
            </div>
            <div className="team-card">
              <div className="team-avatar avatar-purple">
                <span className="avatar-emoji">👨‍💼</span>
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
              <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
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