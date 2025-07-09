import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import React from "react";
import { contactMob1, supportEmail } from "../../utility/NameSpace";

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-2">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-1 text-blue-900">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-blue-900">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-blue-900">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us more..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div className="space-y-6 text-blue-950">
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-2">
                Head Office
              </h3>
              <p>MithilaX Technologies</p>
              <p>Saharsa, Bihar, India</p>
              <p>PIN 852201</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-2">
                Contact
              </h3>
              <p>
                Email:{" "}
                <a href="mailto:support@mithilax.com" className="text-blue-700">
                 {supportEmail}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+917080206885" className="text-blue-700">
                  {contactMob1}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-2">
                Follow Us
              </h3>

              <div className="flex space-x-6 text-2xl text-blue-700">
                <a
                  href="https://www.linkedin.com/company/mithilax-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  <FaLinkedin />
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  <FaTwitter />
                </a> */}
                <a
                  href="https://www.facebook.com/profile.php?id=61574960164071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  <FaFacebook />
                </a>
                {/* <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  <FaInstagram />
                </a> */}
              </div>
            </div>
            <div className="pt-4">
              <iframe
                title="Saharsa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28711.79663113205!2d86.58303562586985!3d25.88349523647709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1b3f2e9f4e4e7%3A0x7e9b8c7b4b4a4e2a!2sSaharsa%2C%20Bihar%20852011!5e0!3m2!1sen!2sin!4v1717477212345!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
