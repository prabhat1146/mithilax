import React from "react";
import { ShieldCheck, Code2, Globe2 } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 pt-28 pb-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 text-center">
          About MithilaX
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
          At MithilaX, we build decentralized, geo-intelligent, and scalable digital ecosystems. 
          Our solutions empower industries by combining the power of <span className="font-semibold text-black">Blockchain</span>, 
          <span className="font-semibold text-black"> GIS</span>, and <span className="font-semibold text-black">Software Development</span> to solve real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Blockchain */}
          <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow hover:shadow-lg transition">
            <ShieldCheck size={36} className="text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Blockchain Solutions</h2>
            <p className="text-gray-600">
              We develop secure and transparent blockchain applications that eliminate intermediaries and bring trust to transactions and records.
            </p>
          </div>

          {/* GIS Services */}
          <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow hover:shadow-lg transition">
            <Globe2 size={36} className="text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">GIS & Mapping</h2>
            <p className="text-gray-600">
              From interactive maps to spatial analytics, our GIS solutions help governments and enterprises make smarter location-based decisions.
            </p>
          </div>

          {/* Software Development */}
          <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow hover:shadow-lg transition">
            <Code2 size={36} className="text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Full-stack Development</h2>
            <p className="text-gray-600">
              We design and develop user-centric web and mobile apps that are robust, scalable, and built for modern needs.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto">
            “Working with MithilaX transformed our entire operations. Their blockchain and GIS solutions helped us digitize everything with complete trust.”
          </p>
          <p className="mt-2 text-sm text-gray-500">— A Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default About;
