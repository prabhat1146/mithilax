// TermsOfService.jsx
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-16 md:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>

        {/* 1. Acceptance of Terms */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, software, APIs, or any services related to blockchain development, GIS solutions, or custom software development ("Services"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.
          </p>
        </section>

        {/* 2. Services Provided */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Services Provided</h2>
          <p>
            We provide technology consulting and implementation services including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Custom blockchain applications and smart contracts</li>
            <li>GIS mapping, analysis, and geospatial data solutions</li>
            <li>Web, mobile, and backend software development</li>
          </ul>
          <p>
            We reserve the right to modify or discontinue any of our services at any time with or without notice.
          </p>
        </section>

        {/* 3. User Responsibilities */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You agree to use our services only for lawful purposes.</li>
            <li>You shall not attempt to reverse engineer, exploit, or harm any of our platforms.</li>
            <li>You are responsible for any data, content, or code you submit via our services.</li>
            <li>For blockchain products, you understand the immutable and transparent nature of blockchain data.</li>
          </ul>
        </section>

        {/* 4. Intellectual Property */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content, source code, branding, and proprietary materials related to our services are the intellectual property of our company or its licensors. You may not copy, distribute, or reuse them without explicit permission.
          </p>
        </section>

        {/* 5. Data and Privacy */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Data and Privacy</h2>
          <p>
            Our handling of user data is governed by our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>. By using our services, you consent to the collection, processing, and use of your data in accordance with that policy.
          </p>
        </section>

        {/* 6. Disclaimers */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Disclaimers</h2>
          <p>
            Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that services will be uninterrupted, secure, or error-free.
          </p>
          <p>
            For blockchain-based services, we are not liable for losses due to gas fees, transaction failures, or smart contract bugs.
          </p>
        </section>

        {/* 7. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, our company shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the services.
          </p>
        </section>

        {/* 8. Termination */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Termination</h2>
          <p>
            We may terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, our business, or third parties.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in [Your City, e.g., Bangalore, Delhi].
          </p>
        </section>

        {/* 10. Changes to Terms */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
          <p>
            We reserve the right to update or change these Terms at any time. Updated terms will be posted on this page with a revised “last updated” date. Continued use of the services after changes constitutes acceptance.
          </p>
        </section>

        
      </div>
    </div>
  );
};

export default TermsOfService;
