// PrivacyPolicy.jsx
import React from 'react';
import { companyName, supportEmail } from '../../utility/NameSpace';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-16 md:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>

        {/* 1. Introduction */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            This Privacy Policy describes how we collect, use, and protect your personal information across all our services including Blockchain Solutions, Geographic Information Systems (GIS), and Software & Web Development. By using our platforms or engaging with our services, you agree to the practices described here.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal Information:</strong> Name, email, contact number, company details, and user-provided credentials.</li>
            <li><strong>Blockchain Data:</strong> Public wallet addresses, transaction history, smart contract interactions (note: immutable on-chain data).</li>
            <li><strong>GIS Data:</strong> Location coordinates, spatial usage behavior, and geospatial datasets when using our GIS services.</li>
            <li><strong>Technical Data:</strong> IP address, device information, browser type, OS, and referring URLs.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, click behavior, and user interaction logs across our platforms.</li>
          </ul>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide, improve, and personalize our services.</li>
            <li>To fulfill contractual obligations and manage customer relationships.</li>
            <li>To maintain security, verify identities, and prevent fraud.</li>
            <li>For GIS services: to process spatial data and provide geolocation features.</li>
            <li>To develop and test blockchain-based applications and integrations.</li>
            <li>To analyze website usage and improve user experience.</li>
            <li>To comply with legal obligations and regulatory requirements.</li>
          </ul>
        </section>

        {/* 4. Blockchain-Specific Considerations */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Blockchain-Specific Considerations</h2>
          <p>
            Transactions on public blockchains are by nature transparent, immutable, and publicly accessible. Any data recorded on-chain (e.g., wallet address, smart contract interactions) cannot be altered or deleted by us or any third party. Please use discretion before submitting personal or sensitive information to smart contracts or public ledgers.
          </p>
        </section>

        {/* 5. GIS-Specific Considerations */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. GIS-Specific Considerations</h2>
          <p>
            When using our GIS-based services or applications, we may collect and process location data to provide spatial analysis, mapping services, or custom geospatial solutions. All GIS data is stored securely and used strictly for the purposes outlined in the project scope or user agreement.
          </p>
        </section>

        {/* 6. Cookies and Analytics */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Cookies and Analytics</h2>
          <p>
            We use cookies and third-party analytics tools (e.g., Google Analytics) to understand user behavior and optimize our services. You can control cookie preferences through your browser settings.
          </p>
        </section>

        {/* 7. Data Sharing and Disclosure */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal data. We may share your data only with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Trusted service providers under strict confidentiality agreements.</li>
            <li>Legal authorities when required by law, court order, or regulations.</li>
            <li>Partners involved in project delivery under NDAs and data agreements.</li>
          </ul>
        </section>

        {/* 8. Data Retention and Security */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Data Retention and Security</h2>
          <p>
            We retain personal data only as long as necessary to fulfill the purposes outlined in this policy. All data is stored using industry-grade security practices including encryption, access control, and secure infrastructure.
          </p>
        </section>

        {/* 9. Your Rights */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Your Rights</h2>
          <p>
            Depending on your region, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent at any time.</li>
            <li>Request a copy of your data in portable format.</li>
            <li>Object to processing or request restriction.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a>.
          </p>
        </section>

        {/* 10. Changes to This Policy */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">10. Changes to This Policy</h2>
          <p>
            We may update this policy periodically to reflect changes in our services or legal obligations. We encourage you to review this policy regularly.
          </p>
        </section>

        
      </div>
    </div>
  );
};

export default PrivacyPolicy;
