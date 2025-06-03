const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">MithilaX</h2>
          <p className="mt-2 text-sm text-gray-300">
            MithilaX is a next-generation technology company specializing in blockchain solutions, Android and web app development, DevOps integration, AI-powered analytics, and technical consulting. We empower businesses with intelligent, scalable, and secure digital systems—driven by automation, data insights, and modern engineering practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            {/* <li><a href="/pages/about/website" className="hover:underline">About</a></li> */}
            {/* <li><a href="/pages/gallery/all" className="hover:underline">Gallery</a></li> */}
            <li><a href="/pages/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/pages/legal/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/pages/legal/terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="/pages/legal/disclaimer" className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MithilaX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
