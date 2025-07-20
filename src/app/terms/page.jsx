// components/TermsOfService.jsx
'use client'

import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-10"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Terms of Service</h1>
          <p className="text-lg text-blue-900">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
              <h2 className="text-2xl font-bold text-blue-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-blue-900">
                By accessing or using the Crack_IQ platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all terms, you may not use our Service. These Terms apply to all visitors, users, and others who access the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">2. Description of Service</h2>
              <p className="text-blue-900 mb-4">
                Crack_IQ provides an online educational platform offering:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Interactive quizzes and practice tests</li>
                <li>Educational video lectures and study materials</li>
                <li>Performance tracking and analytics</li>
                <li>Personalized learning recommendations</li>
              </ul>
              <p className="text-blue-900">
                We reserve the right to modify or discontinue any Service features without notice at any time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">3.1 Registration</h3>
              <p className="text-blue-900 mb-4">
                To access certain features, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-2">3.2 Account Responsibility</h3>
              <p className="text-blue-900">
                You are solely responsible for all activities under your account. Crack_IQ is not liable for any losses caused by unauthorized use.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">4. Payment and Subscriptions</h2>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">4.1 Fees</h3>
              <p className="text-blue-900 mb-4">
                Certain Services require payment. You agree to pay all applicable fees as described on our pricing page.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-2">4.2 Renewals</h3>
              <p className="text-blue-900 mb-4">
                Subscriptions automatically renew unless canceled at least 24 hours before the renewal date.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-800 mb-2">4.3 Refunds</h3>
              <p className="text-blue-900">
                We offer a 7-day money-back guarantee for first-time subscribers. Refund requests must be submitted via email to <a href="mailto:support@crack_iq.com" className="text-blue-600 hover:underline">support@crack_iq.com</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">5. User Conduct</h2>
              <p className="text-blue-900 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Use the Service for any illegal purpose</li>
                <li>Share or distribute our proprietary content</li>
                <li>Attempt to reverse engineer or hack our systems</li>
                <li>Impersonate any person or entity</li>
                <li>Upload viruses or malicious code</li>
                <li>Harass other users or staff members</li>
              </ul>
              <p className="text-blue-900">
                Violations may result in immediate account termination without refund.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">6. Intellectual Property</h2>
              <p className="text-blue-900 mb-4">
                All content on Crack_IQ, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Text, graphics, and logos</li>
                <li>Quiz questions and answer explanations</li>
                <li>Video lectures and study materials</li>
                <li>Software and platform design</li>
              </ul>
              <p className="text-blue-900">
                is owned by or licensed to Crack_IQ and protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-blue-900 mb-4">
                The Service is provided "as is" without warranties of any kind, either express or implied, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>No guarantee of specific educational outcomes</li>
                <li>No warranty of uninterrupted or error-free service</li>
                <li>No assurance that content will meet your requirements</li>
              </ul>
              <p className="text-blue-900">
                Crack_IQ does not guarantee admission to any educational institution or success in any examination.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">8. Limitation of Liability</h2>
              <p className="text-blue-900 mb-4">
                To the maximum extent permitted by law, Crack_IQ shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Errors or omissions in content</li>
                <li>Service interruptions or technical failures</li>
              </ul>
              <p className="text-blue-900">
                Our total liability for any claim shall not exceed the amount you paid us in the last 6 months.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">9. Termination</h2>
              <p className="text-blue-900 mb-4">
                We may terminate or suspend your account immediately, without prior notice, for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Violations of these Terms</li>
                <li>Requests by law enforcement</li>
                <li>Unexpected technical or security issues</li>
              </ul>
              <p className="text-blue-900">
                Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">10. Governing Law</h2>
              <p className="text-blue-900 mb-4">
                These Terms shall be governed by the laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="text-blue-900">
                Any disputes shall be resolved exclusively in the courts located in [Your City], India.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">11. Changes to Terms</h2>
              <p className="text-blue-900 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-blue-900">
                <li>Posting a notice on our platform</li>
                <li>Sending an email to registered users</li>
                <li>Updating the "Effective Date" at the top</li>
              </ul>
              <p className="text-blue-900">
                Your continued use after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">12. Contact Information</h2>
              <p className="text-blue-900 mb-2">
                For questions about these Terms, please contact:
              </p>
              <p className="text-blue-900 mb-1">
                <strong>Email:</strong> <a href="mailto:legal@crack_iq.com" className="text-blue-600 hover:underline">legal@crack_iq.com</a>
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

export default TermsOfService;