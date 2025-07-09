import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import TypewriterWriter from "../components/utility/TypewriterWriter";

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-12 px-4 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Brand Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">MithilaX</h2>
          <p className="mt-2 text-sm text-gray-300">
            <TypewriterWriter
              text="MithilaX is a next-generation technology company specializing in blockchain solutions, Android and web app development, DevOps integration, AI-powered analytics, and technical consulting. We empower businesses with intelligent, scalable, and secure digital systems—driven by automation, data insights, and modern engineering practices."
              speed={20}
            />
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-400 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-orange-400 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/yourorg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-orange-400 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-orange-400 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="/pages/legal/about-us" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">Services</a>
            </li>
            <li>
              <a href="/pages/contact-us" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            Legal
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="/pages/legal/privacy-policy" className="hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="/pages/legal/terms-of-service" className="hover:text-white">Terms of Service</a>
            </li>
            <li>
              <a href="/pages/legal/disclaimer" className="hover:text-white">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MithilaX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
