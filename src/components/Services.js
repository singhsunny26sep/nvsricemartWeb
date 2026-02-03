import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../App';
import './Services.css';

function Services() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const services = [
    {
      id: 1,
      name: "Free Home Delivery",
      description: "Get your premium rice delivered fresh to your doorstep absolutely free",
      price: "Free",
      icon: "🚚",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      features: [
        "Delivery within 24 hours",
        "No minimum order requirement",
        "All areas covered",
        "Real-time tracking"
      ]
    },
    {
      id: 2,
      name: "Bulk Orders",
      description: "Special pricing for restaurants, hotels, caterers, and wedding functions",
      price: "Up to 20% Off",
      icon: "🏪",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      features: [
        "Wholesale pricing",
        "Custom packaging",
        "Flexible payment terms",
        "Dedicated account manager"
      ]
    },
    {
      id: 3,
      name: "Quality Assurance",
      description: "Premium quality guarantee with ISO certified processing",
      price: "100% Guaranteed",
      icon: "✅",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      features: [
        "Lab tested quality",
        "Proper aging ensured",
        "No adulteration",
        "Money back guarantee"
      ]
    },
    {
      id: 4,
      name: "Custom Packaging",
      description: "Get rice packed in your desired quantity and packaging",
      price: "Custom Quote",
      icon: "📦",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      features: [
        "1kg to 50kg packs",
        "Vacuum packaging available",
        "Branded packaging",
        "Gift packs available"
      ]
    },
    {
      id: 5,
      name: "Corporate Gifting",
      description: "Premium rice gift boxes for corporate events and festivals",
      price: "Custom Pricing",
      icon: "🎁",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      features: [
        "Elegant packaging",
        "Custom branding",
        "Bulk discounts",
        "Pan-India delivery"
      ]
    },
    {
      id: 6,
      name: "Farm Visits",
      description: "Visit our rice farms to see the quality firsthand",
      price: "Free",
      icon: "🌾",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      features: [
        "Guided tours",
        "Farm-fresh rice",
        "Educational tours",
        "Group bookings welcome"
      ]
    }
  ];

  const processSteps = [
    { step: "1", title: "Place Order", description: "Browse our collection and place your order online or call us" },
    { step: "2", title: "Quality Check", description: "We select and pack the freshest rice for your order" },
    { step: "3", title: "Dispatch", description: "Your order is dispatched with proper packaging and tracking" },
    { step: "4", title: "Delivery", description: "Fresh rice delivered to your doorstep within 24 hours" }
  ];

  return (
    <div className="services-container">
      {/* Navigation */}
 

      {/* Header */}
      <section className="services-header">
        <div className="header-content">
          <span className="header-badge">Our Services</span>
          <h1>Premium Rice Services</h1>
          <p>From farm to your kitchen, we provide the finest rice with exceptional service</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-description">Comprehensive rice solutions tailored to meet your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className={`service-icon ${service.bgColor.replace('bg-', 'icon-')}`}>
                  <span>{service.icon}</span>
                </div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                <Link to="/products" className="btn btn-primary btn-small">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">Our Simple Process</h2>
            <p className="section-description">Getting fresh rice has never been easier</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{step.step}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Why NVS Rice Mart</span>
            <h2 className="section-title">What Makes Us Different</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <span className="why-icon">🌾</span>
              <h3>Direct from Farms</h3>
              <p>Our rice comes directly from the finest farms, ensuring freshness and quality at the best prices</p>
            </div>
            <div className="why-choose-card">
              <span className="why-icon">🏆</span>
              <h3>15+ Years Experience</h3>
              <p>With over 15 years in the business, we understand rice like no one else</p>
            </div>
            <div className="why-choose-card">
              <span className="why-icon">📦</span>
              <h3>Quality Packaging</h3>
              <p>Proper packaging ensures your rice stays fresh for months</p>
            </div>
            <div className="why-choose-card">
              <span className="why-icon">💰</span>
              <h3>Best Prices Guaranteed</h3>
              <p>We offer the best prices in the market with special discounts for bulk orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
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

export default Services;
