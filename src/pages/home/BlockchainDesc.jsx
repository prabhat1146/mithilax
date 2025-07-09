import React from "react";
import {
  Network,
  ShieldCheck,
  Layers3,
  Lock,
  Globe,
  ArrowRight,
  Users2,
  Building2,
  Banknote,
  Boxes,
  Stethoscope,
  Fingerprint,
} from "lucide-react";

export default function BlockchainDesc() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE: Textual Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Understanding{" "}
            <span className="text-orange-600">Blockchain Technology</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Blockchain is a decentralized, distributed ledger technology that
            ensures transparency, security, and immutability in digital
            transactions. It is the foundation of modern cryptocurrencies but
            extends far beyond — revolutionizing sectors such as finance, supply
            chain, healthcare, identity management, and government.
          </p>

          {/* Features */}
          <div className="space-y-8">
            <Feature
              icon={<Network className="text-blue-600 w-6 h-6" />}
              title="Decentralized Network"
              description="Blockchain eliminates the need for a central authority. Every node in the network maintains a copy of the ledger, ensuring resilience and shared control."
            />
            <Feature
              icon={<ShieldCheck className="text-green-600 w-6 h-6" />}
              title="Data Integrity & Security"
              description="Each transaction is encrypted and linked to the previous one using cryptographic hashes. Once data is added, it cannot be altered, providing unmatched data integrity."
            />
            <Feature
              icon={<Layers3 className="text-yellow-600 w-6 h-6" />}
              title="Smart Contracts"
              description="Self-executing code stored on the blockchain. Smart contracts automate business logic, reduce operational costs, and eliminate intermediaries."
            />
            <Feature
              icon={<Lock className="text-purple-600 w-6 h-6" />}
              title="Transparency & Traceability"
              description="All network participants access the same version of the truth. Perfect for use cases like auditing, supply chains, and regulatory compliance."
            />
          </div>

          {/* Link */}
          {/* <a
            href="https://ethereum.org/en/what-is-blockchain/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-10 text-orange-600 font-semibold hover:underline"
          >
            Dive deeper into blockchain basics{" "}
            <ArrowRight className="ml-2 w-4 h-4" />
          </a> */}
        </div>

        {/* RIGHT SIDE: Visual Representation */}
        <div className="relative">
          <img
            src="/assets/img/blockchain/A_modern_blockchain_network_diagram_showing_decentralized_nodes.png"
            alt="Blockchain diagram"
            className="w-full h-auto rounded-xl shadow-xl"
          />

          {/* Floating Benefits */}

          <div className="relative top-6  bg-white bg-opacity-90 rounded-lg shadow-xl p-5 max-w-1/2 border border-blue-100">
            <h4 className="font-bold text-md text-gray-800 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" /> Real-World Use Cases
              of Blockchain
            </h4>

            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <Banknote className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <span className="font-semibold">Cross-border Payments:</span>{" "}
                  Enables fast, low-cost international transfers by eliminating
                  intermediaries like banks and reducing transaction fees.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Boxes className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">
                    Supply Chain Transparency:
                  </span>{" "}
                  Allows tracking of goods at every stage of production and
                  delivery, preventing fraud and ensuring ethical sourcing.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <span className="font-semibold">
                    Healthcare Record Management:
                  </span>{" "}
                  Facilitates secure and interoperable access to medical
                  records, improving patient outcomes and privacy.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Fingerprint className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <span className="font-semibold">Decentralized Identity:</span>{" "}
                  Empowers users to own and control their digital identities
                  with cryptographic proofs, enhancing privacy and reducing
                  identity theft.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* INDUSTRY APPLICABILITY SECTION */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Industry Applications of Blockchain
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-700">
          <ApplicationCard
            icon={<Building2 className="text-indigo-600 w-6 h-6" />}
            title="Banking & Finance"
            description="Improves transparency, reduces fraud, and facilitates instant cross-border transactions."
          />
          <ApplicationCard
            icon={<Users2 className="text-pink-500 w-6 h-6" />}
            title="Healthcare"
            description="Enables secure sharing of medical records and improves patient privacy through encrypted identity layers."
          />
          <ApplicationCard
            icon={<Lock className="text-green-600 w-6 h-6" />}
            title="Government"
            description="Supports e-governance, voting systems, land records, and public service transparency."
          />
        </div>
      </div>
    </section>
  );
}

// 🔹 Reusable Feature Component
function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white shadow-md rounded-full p-2">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// 🔹 Reusable Application Card
function ApplicationCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
