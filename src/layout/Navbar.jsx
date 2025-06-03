import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Handshake,
  MenuIcon,
  X,
} from "lucide-react"; // Lucide globe icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <nav className="bg-orange-600 text-white shadow-md sticky top-0 z-50">
        <div className="max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}

            <div className="flex justify-items-center items-center">
              <Link to="/" className="text-accent font-bold text-2xl">
                <div className="flex justify-center items-center">
                  <img
                    className="w-16 h-16 m-4"
                    src="/assets/logo/logo_round.png"
                    alt="logo"
                  />
                  <p className="mr-8">Mithila<span className="">X</span></p>
                </div>
              </Link>

              {!menuOpen && (
                <div>
                  <MenuIcon
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                    className="cursor-pointer"
                    size={36}
                  />
                </div>
              )}
            </div>

           

           
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-orange-600 text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-y-auto shadow-xl`}
      >
        <div className="p-6 space-y-4 overflow-y-auto">
          <div className="absolute right-0 top-2">
            <X
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              size={36}
              className="text-white cursor-pointer"
            />
          </div>

         

          
          <NavLink
            to="/pages/about/website"
            label={"Home"}
            onClick={() => setMenuOpen(false)}
          />
          
        </div>
      </div>
    </>
  );
}

function NavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block text-lg font-semibold hover:text-accent transition-colors my-0"
    >
      <span className="flex">
        {<Handshake className="mr-2" />} {label}
      </span>
    </Link>
  );
}
