import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to MithilaX. By accessing our services, you agree to abide by the terms outlined here.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Use our services only for legal and authorized purposes.</li>
        <li>Do not misuse, reverse engineer, or distribute our proprietary tools or platforms.</li>
        <li>Violations may result in termination of access or legal actions.</li>
      </ul>
      <p>
        These terms ensure a secure, professional environment across our blockchain apps, DevOps tools, and analytics platforms.
      </p>
    </div>
  );
};

export default TermsOfService;
