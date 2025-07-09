// BlockchainOverview.jsx
import React from 'react';
import {
  ShieldCheck,
  Network,
  CheckCircle,
  Quote,
  Users,
  Database,
  Lock,
} from 'lucide-react';

const BlockchainOverview = () => {
  return (
    <div className="bg-white text-gray-900 px-6 py-16 md:px-24">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Building Trust and Transparency with Blockchain
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We engineer custom blockchain solutions that redefine how data is stored, shared, and verified—ensuring security, decentralization, and efficiency across industries.
          </p>
        </section>

        {/* What We Build */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 border rounded-2xl hover:shadow-xl transition">
              <Network className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Decentralized Applications</h3>
              <p className="text-gray-600">
                We create dApps that run on peer-to-peer networks, enabling users to interact directly without intermediaries—delivering more privacy, security, and user control.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-xl transition">
              <ShieldCheck className="text-green-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
              <p className="text-gray-600">
                Our smart contract frameworks power automated, self-executing agreements that are transparent, tamper-proof, and enforceable—reducing operational friction.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-xl transition">
              <Database className="text-purple-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Permissioned Blockchains</h3>
              <p className="text-gray-600">
                We design secure and scalable permissioned ledgers for businesses that require access control, auditability, and compliance-ready solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Problems We're Solving */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">The Problem We Solve</h2>
          <div className="text-center max-w-4xl mx-auto text-gray-700 text-lg">
            <p className="mb-6">
              Traditional systems rely heavily on centralized databases and manual processes, which are vulnerable to fraud, downtime, and data manipulation.
            </p>
            <p>
              Our blockchain solutions eliminate these pain points by offering immutable data records, real-time verification, and automated trust. This empowers organizations with more secure infrastructure, reduced costs, and greater transparency.
            </p>
          </div>
        </section>

        {/* Why Clients Trust Us */}
        <section className="bg-gray-50 p-12 rounded-2xl shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto text-center text-gray-800">
            <Quote className="mx-auto text-indigo-500 w-10 h-10 mb-4" />
            <p className="italic text-lg">
              "Working with this team was a turning point for our company. Their blockchain expertise brought a new level of trust and automation to our operations. The integrity and transparency they offer are unmatched."
            </p>
            <p className="mt-4 font-semibold text-indigo-600">
              — Aditi Sharma, COO, ChainLedger Solutions Pvt. Ltd.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Commitment to Innovation
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 rounded-2xl border hover:shadow-xl">
              <Lock className="mx-auto w-10 h-10 text-rose-600 mb-3" />
              <h3 className="font-semibold text-xl mb-2">Security by Design</h3>
              <p className="text-gray-600">
                Every system we build starts with a secure-by-default mindset, ensuring end-to-end encryption, access control, and zero-trust architecture.
              </p>
            </div>
            <div className="p-6 rounded-2xl border hover:shadow-xl">
              <Users className="mx-auto w-10 h-10 text-teal-600 mb-3" />
              <h3 className="font-semibold text-xl mb-2">Client-Centric Approach</h3>
              <p className="text-gray-600">
                We tailor our solutions to meet your business goals, whether you're launching a DeFi protocol, digital identity solution, or enterprise supply chain platform.
              </p>
            </div>
            <div className="p-6 rounded-2xl border hover:shadow-xl">
              <CheckCircle className="mx-auto w-10 h-10 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-xl mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">
                Built for scale from day one—our platforms support millions of transactions with modular designs for future expansion.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlockchainOverview;
