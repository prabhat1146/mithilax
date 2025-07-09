// Disclaimer.jsx
import React from 'react';

const Disclaimer = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-16 md:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-6">Disclaimer</h1>

        {/* General Disclaimer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. General Disclaimer</h2>
          <p>
            The information provided on this website and through our services—including but not limited to blockchain development, GIS solutions, and custom software development—is for general informational purposes only. While we strive for accuracy, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or availability of any information or services.
          </p>
        </section>

        {/* No Financial or Legal Advice */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. No Financial or Legal Advice</h2>
          <p>
            None of our blockchain-related content, solutions, or smart contracts should be interpreted as legal, financial, or investment advice. Users and clients are advised to consult with certified professionals before making decisions involving financial transactions, compliance, or legal obligations.
          </p>
        </section>

        {/* Blockchain Risk Disclosure */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Blockchain Technology Risks</h2>
          <p>
            Blockchain technology is decentralized and irreversible by nature. We are not liable for any loss of digital assets, smart contract failures, bugs, gas fee fluctuations, or security breaches caused by third-party platforms or user mistakes.
          </p>
          <p>
            Users are solely responsible for safeguarding their private keys, seed phrases, and wallets.
          </p>
        </section>

        {/* GIS & Spatial Data Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. GIS & Spatial Data</h2>
          <p>
            GIS data is derived from third-party sources and may contain inaccuracies due to satellite errors, outdated basemaps, or human error. We do not guarantee 100% accuracy or real-time synchronization of location-based information.
          </p>
        </section>

        {/* Software & Development Services */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Software & Custom Solutions</h2>
          <p>
            While we follow best practices in software development, no system is completely error-proof. We are not liable for business losses, downtime, or data breaches caused by integration failures, third-party dependencies, or misuse of provided code.
          </p>
        </section>

        {/* External Links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. External Links</h2>
          <p>
            Our website may contain links to third-party websites or tools. We are not responsible for the content, practices, or availability of these external resources.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p>
            Under no circumstances shall our company be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our website, products, or services—even if we have been advised of the possibility of such damages.
          </p>
        </section>

        {/* Contact */}
        {/* <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Contact</h2>
          <p>
            If you have any questions about this disclaimer or your use of our services, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:support@yourcompany.com" className="text-blue-600 underline">support@yourcompany.com</a><br />
            Address: Your Company Name, 123 Technology Avenue, Innovation City, 400001
          </p>
        </section> */}
      </div>
    </div>
  );
};

export default Disclaimer;
