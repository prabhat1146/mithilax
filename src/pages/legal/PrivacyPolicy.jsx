import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At MithilaX, we prioritize your privacy. This policy outlines how we collect, use, and safeguard your information across our apps, websites, and platforms.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>We only collect data necessary to deliver and improve our services.</li>
        <li>Data is stored securely and never shared with unauthorized third parties.</li>
        <li>You have full control over your personal data and can request deletion anytime.</li>
      </ul>
      <p>
        By using our services, you consent to our data practices as outlined here. This policy may update to reflect regulatory changes or new features.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
