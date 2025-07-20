// components/PrivacyPolicy.jsx
'use client'

import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-10"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-900">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <div className="prose prose-blue max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">1. Introduction</h2>
              <p className="text-blue-900 mb-4">
                Welcome to Crack_IQ ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational platform and services.
              </p>
              <p className="text-blue-900">
                By accessing or using Crack_IQ, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Personal Information:</h3>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Name, email address, phone number</li>
                <li>Date of birth and educational background</li>
                <li>Payment information for premium services</li>
                <li>Government-issued ID for verification (when required)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Usage Data:</h3>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent, and navigation patterns</li>
                <li>Quiz results and performance metrics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-blue-900">
                <li>To provide and maintain our educational services</li>
                <li>To personalize your learning experience</li>
                <li>To process payments and prevent fraud</li>
                <li>To communicate with you about updates and offers</li>
                <li>To improve our platform and develop new features</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-blue-900 mb-4">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Service providers who assist in platform operations</li>
                <li>Educational institutions for verification purposes</li>
                <li>Legal authorities when required by law</li>
                <li>Affiliates during business transfers or mergers</li>
              </ul>
              <p className="text-blue-900">
                We require all third parties to respect your privacy and comply with data protection laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">5. Data Security</h2>
              <p className="text-blue-900 mb-4">
                We implement appropriate technical and organizational measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>SSL encryption for all data transmissions</li>
                <li>Regular security audits and vulnerability testing</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure storage with limited retention periods</li>
              </ul>
              <p className="text-blue-900">
                While we strive to protect your information, no electronic transmission or storage is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">6. Your Rights</h2>
              <p className="text-blue-900 mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Restrict or object to processing of your data</li>
                <li>Withdraw consent (where applicable)</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="text-blue-900">
                To exercise these rights, please contact us at <a href="mailto:privacy@crack_iq.com" className="text-blue-600 hover:underline">privacy@crack_iq.com</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">7. Children's Privacy</h2>
              <p className="text-blue-900 mb-4">
                Our services are intended for users aged 13 and above. For children under 13:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>We require verifiable parental consent</li>
                <li>We collect only necessary information</li>
                <li>We provide parental control options</li>
              </ul>
              <p className="text-blue-900">
                Parents may review, modify, or delete their child's information by contacting us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">8. Changes to This Policy</h2>
              <p className="text-blue-900 mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Posting a notice on our platform</li>
                <li>Sending an email to registered users</li>
                <li>Updating the "Last Updated" date</li>
              </ul>
              <p className="text-blue-900">
                Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">9. Contact Us</h2>
              <p className="text-blue-900 mb-2">
                For privacy-related inquiries or requests, please contact our Data Protection Officer at:
              </p>
              <p className="text-blue-900 mb-1">
                <strong>Email:</strong> <a href="mailto:privacy@crack_iq.com" className="text-blue-600 hover:underline">privacy@crack_iq.com</a>
              </p>
              <p className="text-blue-900 mb-1">
                <strong>Phone:</strong> <a href="tel:+919718659236" className="text-blue-600 hover:underline">+91 9718659236</a>
              </p>
              <p className="text-blue-900">
                <strong>Address:</strong> Crack_IQ Education Pvt. Ltd., [Your Physical Address], India
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;