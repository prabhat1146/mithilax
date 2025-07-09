import React from "react";
import {
  MonitorSmartphone,
  Globe,
  LayoutDashboard,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Code2,
  Cloud,
  Cpu,
  Users,
  Star,
} from "lucide-react";

export default function WebDevDesc() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            What We Build in Web & App Development
          </h1>
          <p className="text-lg text-gray-600">
            Scalable digital solutions tailored for businesses, startups, and public platforms.
          </p>
        </div>

        {/* What We Develop */}
        <div className="grid md:grid-cols-3 gap-10">
          <Card
            icon={<LayoutDashboard className="w-8 h-8 text-blue-600" />}
            title="Business Dashboards"
            desc="Custom dashboards for managing operations, sales, CRM, and analytics."
          />
          <Card
            icon={<MonitorSmartphone className="w-8 h-8 text-green-600" />}
            title="Responsive Web Apps"
            desc="Fully functional platforms accessible across desktop, tablet, and mobile."
          />
          <Card
            icon={<Smartphone className="w-8 h-8 text-purple-600" />}
            title="Mobile Applications"
            desc="Android and iOS apps tailored for ecommerce, booking systems, and more."
          />
          <Card
            icon={<Globe className="w-8 h-8 text-orange-500" />}
            title="E-commerce Platforms"
            desc="Secure shopping portals with inventory, payments, and order tracking."
          />
          <Card
            icon={<Code2 className="w-8 h-8 text-red-600" />}
            title="SaaS Products"
            desc="Subscription-based applications built with scalability and user management."
          />
          <Card
            icon={<LockKeyhole className="w-8 h-8 text-yellow-600" />}
            title="Secure Admin Panels"
            desc="Role-based, encrypted admin interfaces with audit trails and logs."
          />
        </div>

        {/* Customer Segments */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Work With</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Startups launching their first MVP or product</li>
            <li>SMBs seeking automation or client portals</li>
            <li>Tourism, education, and healthcare sectors</li>
            <li>Government portals and rural digital initiatives</li>
            <li>Founders needing investor-ready SaaS solutions</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Testimonial
              name="Ravi Mishra"
              company="AgroConnect"
              quote="Their team built a farmer-focused portal that helped thousands of rural vendors track prices and sell produce."
            />
            <Testimonial
              name="Sneha Kapoor"
              company="EduGenius"
              quote="Our LMS platform was developed within weeks and scaled smoothly to 10,000+ users. Excellent experience."
            />
            <Testimonial
              name="Zubair Khan"
              company="CityTours India"
              quote="Our booking app went live with payment, notifications, and CRM – all seamless and budget-friendly."
            />
            <Testimonial
              name="Nidhi Sharma"
              company="FinCalc SaaS"
              quote="We trusted them with our fintech dashboard and they delivered top-grade UI, speed, and compliance."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Testimonial({ name, company, quote }) {
  return (
    <div className="bg-white border-l-4 border-blue-500 p-6 shadow-md">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="text-sm text-gray-600 font-semibold">
        — {name}, <span className="text-gray-500">{company}</span>
      </div>
    </div>
  );
}
