import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, X, Home, Briefcase, Phone, Info } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: <Home /> },
  { to: "/pages/legal/about-us", label: "About", icon: <Info /> },
  { to: "/services", label: "Services", icon: <Briefcase /> },
  { to: "/pages/contact-us", label: "Contact", icon: <Phone /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // console.log(location.pathname)




  useEffect(()=>{
    if(location.pathname!=='/'){
      setScrolled(true);
    }

  },[location.pathname])


  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 620 || location.pathname!=='/') {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [location.pathname]);


  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-blue-900 shadow-md text-white" : "bg-transparent text-white"
  }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-orange-600">
              <img src="/assets/logo/logo_round.png" alt="logo" className="w-10 h-10" />
              MithilaX
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex gap-6 items-center text-white">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`hover:text-orange-600 font-medium transition ${
                    location.pathname === link.to ? "text-orange-600" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <MenuIcon
                size={28}
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-64 bg-orange-600 text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-5 space-y-6">
          {/* Close button */}
          <div className="flex justify-end">
            <X
              size={28}
              className="cursor-pointer text-white"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 text-lg font-semibold hover:text-yellow-200 transition ${
                location.pathname === link.to ? "text-yellow-200" : ""
              }`}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
