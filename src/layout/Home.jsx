import React from "react";
import MithilaXLogo from "../components/logo/Logo";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white h-screen py-60 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MithilaX</h1>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Powering innovation through Blockchain, AI, and Next-Gen Application
          Development.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition">
          Get Started
        </button>
      </section>


      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">Who We Are</h2>
        <p className="text-lg mb-6 text-gray-700">
          MithilaX is a cutting-edge technology company focused on building
          scalable, secure, and AI-powered applications. Our teams specialize in
          blockchain innovation, native Android apps, full-stack web platforms,
          and integrated DevOps pipelines.
        </p>
        <p className="text-lg text-gray-700">
          With deep roots in Mithila, we combine regional passion with global
          standards to deliver exceptional tech solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Blockchain Development",
                desc: "Build secure and decentralized apps using smart contracts and custom blockchain architecture.",
              },
              {
                title: "Android App Development",
                desc: "Native and cross-platform Android apps, optimized for performance and user experience.",
              },
              {
                title: "Web App Development",
                desc: "Custom, scalable web apps using React, Node.js, and modern web frameworks.",
              },
              {
                title: "DevOps Integration",
                desc: "CI/CD pipelines, Docker, Kubernetes, GitOps – ensuring faster and more reliable deployments.",
              },
              {
                title: "AI-Powered Analytics",
                desc: "Advanced analytics dashboards driven by machine learning and NLP insights.",
              },
              {
                title: "Tech Consulting",
                desc: "Strategic guidance, architecture review, tech stack decisions, and growth planning.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-6 shadow rounded-xl border-l-4 border-orange-500">
            <p className="text-gray-700 italic mb-2">
              "MithilaX delivered our blockchain MVP faster than expected. Their
              smart contract expertise is unmatched."
            </p>
            <cite className="block font-semibold text-blue-900">
              – Startup CEO
            </cite>
          </blockquote>
          <blockquote className="bg-white p-6 shadow rounded-xl border-l-4 border-orange-500">
            <p className="text-gray-700 italic mb-2">
              "Their DevOps pipeline helped us scale with zero downtime. Highly
              professional and knowledgeable team."
            </p>
            <cite className="block font-semibold text-blue-900">
              – CTO, SaaS Company
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-950 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to build the future with MithilaX?
        </h2>
        <p className="text-lg mb-6">
          Let’s create something powerful – together.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
