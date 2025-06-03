import React from 'react';

const Disclaimer = () => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Disclaimer</h1>
      <p className="mb-4">
        The content provided on MithilaX’s platforms is for informational and educational purposes only.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>We do not guarantee accuracy or completeness of data in analytics reports.</li>
        <li>Blockchain-based tools involve risks. Users are responsible for their usage and actions.</li>
        <li>We are not liable for any loss or damage resulting from use of our services or reliance on information provided.</li>
      </ul>
      <p>
        Users should consult professional advice where necessary. Use of our services implies acceptance of this disclaimer.
      </p>
    </div>
  );
};

export default Disclaimer;
