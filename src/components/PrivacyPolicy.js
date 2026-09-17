import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Effective Date:</strong> 18 September 2026
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              At NVS Rice Mart ("we", "us", or "our"), we are committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our website at nvsricemart.com or our mobile application ("the App").
              Please read this privacy policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following categories of information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, date of birth,
                and demographic information.
              </li>
              <li>
                <strong>Transaction Data:</strong> Purchase history, order details, payment information,
                and billing address.
              </li>
              <li>
                <strong>Delivery Information:</strong> Delivery address, contact details for delivery
                personnel, and order tracking data.
              </li>
              <li>
                <strong>Device and Usage Information:</strong> IP address, browser type, device type,
                operating system, pages visited, time spent on pages, and referring sources.
              </li>
              <li>
                <strong>Location Data:</strong> Geographic location data (with your consent) to provide
                delivery services and nearby store information.
              </li>
              <li>
                <strong>Communication Data:</strong> Records of communications with our customer support
                team, including phone calls, emails, and chat messages.
              </li>
              <li>
                <strong>Marketing Preferences:</strong> Your preferences for receiving promotional
                communications and marketing materials.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>To process, fulfill, and deliver your orders</li>
              <li>To process and verify payments and prevent fraud</li>
              <li>To communicate with you about your orders, deliveries, and account updates</li>
              <li>To provide customer support and resolve disputes</li>
              <li>To improve our products, services, and user experience</li>
              <li>To send promotional offers and updates (only with your consent where required by law)</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To analyze usage patterns and improve our marketing strategies</li>
              <li>To personalize your experience and recommend products based on your preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, tracking pixels, and similar technologies to collect information
              about your browsing activities. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our platform</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
              <li>Provide personalized content and advertisements</li>
            </ul>
            <p className="mt-3">
              You can manage cookie preferences through your browser settings. Most browsers allow you to
              refuse or delete cookies; however, disabling cookies may affect the functionality of our platform.
            </p>
            <p className="mt-3">
              <strong>Types of cookies we use:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the platform to function properly. These
                cannot be disabled.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our platform
                (e.g., Google Analytics).
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track
                campaign performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Services and SDKs</h2>
            <p>
              We integrate with third-party services and include software development kits (SDKs) in our
              application. These third parties may collect information about your device and usage patterns.
            </p>
            <p className="mt-3">
              <strong>Categories of third-party services we use:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Payment Processors:</strong> To handle secure payment transactions (e.g., Stripe,
                Razorpay, or similar). These services collect payment card information as necessary.
              </li>
              <li>
                <strong>Analytics Providers:</strong> To analyze usage data and improve our services
                (e.g., Google Analytics, Firebase Analytics).
              </li>
              <li>
                <strong>Cloud Hosting and Infrastructure:</strong> To host and operate our platform
                (e.g., AWS, Google Cloud, or similar).
              </li>
              <li>
                <strong>Push Notification Services:</strong> To deliver push notifications to your device.
              </li>
              <li>
                <strong>Customer Support Tools:</strong> To manage customer inquiries and support tickets.
              </li>
              <li>
                <strong>Marketing and Advertising Platforms:</strong> To deliver and measure advertising
                effectiveness (e.g., Facebook Ads, Google Ads).
              </li>
              <li>
                <strong>SMS/Notification Gateways:</strong> To send order updates and promotional messages
                via SMS.
              </li>
            </ul>
            <p className="mt-3">
              We recommend reviewing the privacy policies of these third-party services for more information
              about how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Sharing and Disclosure</h2>
            <p className="mb-3">We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>With Service Providers:</strong> We share data with third-party vendors who perform
                services on our behalf (e.g., delivery partners, payment processors, cloud hosting). These
                providers are contractually obligated to protect your data.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with third parties when
                you explicitly consent to such sharing.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information when required by law,
                court order, or other legal process, or to prevent fraud or protect safety.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
                assets, your information may be transferred as part of the transaction.
              </li>
              <li>
                <strong>With Delivery Partners:</strong> We share delivery address and contact information
                with delivery personnel to fulfill your orders.
              </li>
            </ul>
            <p className="mt-3">
              <strong>We do not sell your personal information to third parties.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Data Protection and Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>SSL/TLS encryption for data transmitted over the internet</li>
              <li>Secure payment processing with PCI DSS-compliant providers</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Data encryption at rest and in transit</li>
              <li>Employee training on data privacy and security best practices</li>
            </ul>
            <p className="mt-3">
              However, no method of transmission over the internet or electronic storage is completely
              secure. We cannot guarantee absolute security but will take all commercially reasonable
              measures to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.1 GDPR Rights (European Union/EEA)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Right of Access:</strong> Request a copy of the personal data we hold about you.
              </li>
              <li>
                <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten").
              </li>
              <li>
                <strong>Right to Restriction:</strong> Request restriction of processing of your data.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Request transfer of your data to another service provider.
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing of your data, including for direct marketing.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.2 CCPA Rights (California, USA)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Right to Know:</strong> Request information about the categories and specific pieces of personal information we collect.
              </li>
              <li>
                <strong>Right to Delete:</strong> Request deletion of personal information collected from you.
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your CCPA rights.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.3 Other Rights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Right to Complaint:</strong> File a complaint with your local data protection authority.
              </li>
              <li>
                <strong>Right to Unsubscribe:</strong> Opt out of marketing communications at any time via the unsubscribe link in emails or through your account settings.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@nvsricemart.com" className="text-blue-600 hover:underline">
                privacy@nvsricemart.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <strong>Transaction Data:</strong> Retained for the period required by tax and financial regulations (typically 7 years).
              </li>
              <li>
                <strong>Account Information:</strong> Retained while your account is active and for a reasonable period after closure.
              </li>
              <li>
                <strong>Communication Records:</strong> Retained for up to 3 years for customer service and legal purposes.
              </li>
              <li>
                <strong>Marketing Data:</strong> Retained until you opt out or unsubscribe from marketing communications.
              </li>
              <li>
                <strong>Analytics Data:</strong> Retained in anonymized or aggregated form for up to 26 months.
              </li>
            </ul>
            <p className="mt-3">
              You may request deletion of your data at any time by contacting us (see Section 12).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Children's Privacy (COPPA Compliance)</h2>
            <p>
              Our platform is not directed to children under the age of 13. We do not knowingly collect
              personal information from children under 13 years of age. If we become aware that we have
              collected personal information from a child under 13 without verification of parental consent,
              we will take steps to remove that information from our systems.
            </p>
            <p className="mt-3">
              Parents and guardians: If you believe your child has provided personal information on our
              platform, please contact us immediately at{" "}
              <a href="mailto:privacy@nvsricemart.com" className="text-blue-600 hover:underline">
                privacy@nvsricemart.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of
              residence. These countries may include India and other countries where our service providers
              operate.
            </p>
            <p className="mt-3">
              We ensure that appropriate safeguards are in place for international data transfers, including
              Standard Contractual Clauses (SCCs) approved by the European Commission, or reliance on adequacy
              decisions where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. SMS and Phone Communications</h2>
            <p>
              We may send you SMS messages, WhatsApp messages, or phone calls regarding your orders,
              delivery updates, promotional offers, and customer service matters.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>You can opt out of promotional SMS/messages at any time by replying "STOP" or through your account settings.</li>
              <li>Transactional messages (e.g., order confirmations, delivery updates) are sent based on legitimate interest and cannot be opted out of.</li>
              <li>We do not use automated dialing or pre-recorded messages for marketing without your consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Payment Information</h2>
            <p>
              Payment information is processed by PCI DSS-compliant third-party payment processors. We do
              not store your full credit card numbers, CVV codes, or other sensitive payment data on our servers.
            </p>
            <p className="mt-3">
              For more details, please refer to the privacy policy of your chosen payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Data Breach Notification</h2>
            <p>
              In the event of a data breach involving unauthorized access to your personal information, we
              will:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Investigate the breach and take immediate steps to contain and mitigate the impact</li>
              <li>Notify affected users within the timeframes required by applicable law (typically 72 hours under GDPR)</li>
              <li>Report the breach to relevant regulatory authorities as required</li>
              <li>Implement corrective measures to prevent future breaches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites and services that are not operated by
              us. We are not responsible for the privacy practices of these third-party sites. We encourage
              you to review the privacy policies of any third-party website or service you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">16. How to Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact our Data Protection Officer at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-3 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@nvsricemart.com" className="text-blue-600 hover:underline">
                  privacy@nvsricemart.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Address:</strong> 456 Grain Market, Rice District, India
              </p>
              <p>
                <strong>Mail:</strong> Attn: Data Protection Officer, NVS Rice Mart
              </p>
            </div>
            <p className="mt-3">
              We will respond to your request within 30 days as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">17. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
            </p>
            <p className="mt-3">
              Material changes will be communicated to users via email or through a prominent notice on
              our platform prior to the change becoming effective. Your continued use of the platform after
              changes are posted constitutes your acceptance of the revised Privacy Policy.
            </p>
            <p className="mt-3">
              <strong>Last updated:</strong> 18 September 2026
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">18. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes arising from or relating
              to this Privacy Policy shall be resolved in the competent courts of India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
