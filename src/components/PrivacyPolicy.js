import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              At NVS Rice Mart, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, 
              use, and safeguard your personal information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal information such as name, email, and phone number</li>
              <li>Delivery address and billing information</li>
              <li>Order history and preferences</li>
              <li>Communication data when you contact us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To process and deliver your orders</li>
              <li>To communicate with you about your orders</li>
              <li>To improve our products and services</li>
              <li>To send promotional offers and updates (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. Your data is stored securely and only accessible to authorized personnel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide 
              you with advance notice. This does not include website hosting partners and other parties who assist us 
              in operating our website, conducting our business, or serving you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@nvsricemart.com or call us at +91 98765 43210.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500">Last updated: April 2024</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;