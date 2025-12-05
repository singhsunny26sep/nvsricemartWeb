import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CartContext } from '../App';

function Products() {
  const { addToCart } = useContext(CartContext);

  const riceProducts = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      description: "Aged 1-2 years, long grain aromatic rice from Himalayan foothills",
      price: 120,
      image: "🍚",
      features: ["Aged Rice", "Aromatic", "Long Grain", "Gluten Free", "Premium Quality"]
    },
    {
      id: 2,
      name: "Sonamasuri Rice",
      description: "Traditional short grain rice with soft texture and natural sweetness",
      price: 80,
      image: "🌾",
      features: ["Daily Use", "Easy to Cook", "Soft Texture", "Natural Sweetness", "Fresh Harvest"]
    },
    {
      id: 3,
      name: "Brown Rice",
      description: "Whole grain rice packed with nutrients, fiber, and natural goodness",
      price: 100,
      image: "🥘",
      features: ["Whole Grain", "High Fiber", "Nutrient Rich", "Low Glycemic", "Healthy Choice"]
    },
    {
      id: 4,
      name: "Ponni Rice",
      description: "Medium grain rice with excellent cooking quality and taste",
      price: 75,
      image: "🍚",
      features: ["Medium Grain", "Good Taste", "Easy Digestion", "Daily Usage", "Quality Rice"]
    },
    {
      id: 5,
      name: "Red Rice",
      description: "Nutritious red rice with unique flavor and health benefits",
      price: 95,
      image: "🌾",
      features: ["Red Variety", "Nutritious", "Unique Flavor", "Iron Rich", "Traditional"]
    },
    {
      id: 6,
      name: "Mushy Rice",
      description: "Perfect for idlis and dosas, soft and fluffy texture",
      price: 85,
      image: "🥞",
      features: ["Soft Texture", "Idli Dosa", "Fermentation Ready", "Traditional", "South Indian"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">🌾</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">NVS Rice Mart</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Rice Varieties</Link>
              <Link to="/services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Our Services</Link>
              <Link to="/cart" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Cart</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Premium Rice Varieties</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our finest selection of premium quality rice sourced directly from the best farms across India.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riceProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-orange-600">{product.image}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-orange-600 mb-4">₹{product.price}/kg</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-900 font-medium mb-2">Key Features:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
            <p className="text-gray-600 mb-6">Our experts can help you select the perfect rice variety for your specific needs and cooking requirements.</p>
            <Link to="/services" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Products;