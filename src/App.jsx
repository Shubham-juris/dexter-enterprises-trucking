import "./App.css";
import React from "react";
import { Mail, Phone } from "lucide-react";
function App() {
  return (
    <>
      <div className="font-sans text-gray-800">
        {/* Top Bar */}
        <div className="bg-black text-white text-sm flex justify-between items-center px-4 py-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-yellow-400" />
            <a
              href="mailto:dexter@dexterhauling.com"
              className="hover:underline"
            >
              DEXTER@DEXTERHAULING.COM
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Phone size={16} className="text-yellow-400" />
            <span>+1 (470) 206-8814</span>
          </div>
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
          <div className="text-2xl font-bold">
            <span className="block leading-tight">DEXTER</span>
            <span className="text-sm font-semibold text-gray-600">
              Trucking & Hauling LLC
            </span>
          </div>

          <ul className="hidden md:flex gap-8 text-base font-medium">
            <li>
              <a href="#about" className="hover:text-yellow-500">
                About Dexter Trucking & Hauling
              </a>
            </li>
            <li>
              <a href="#quote" className="hover:text-yellow-500">
                Get a Quote
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Menu Placeholder */}
          <button className="md:hidden border rounded px-3 py-1">☰</button>
        </nav>

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 max-w-3xl px-6 text-center">
            <p className="text-lg mb-2 tracking-wide text-yellow-400">
              Got Cargo to Move?
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Your Trusted <span className="text-yellow-400">Partner</span> in
              Hauling and Logistics
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200">
              Offering dependable, on-time transport solutions tailored to your
              needs.
            </p>

            <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
              Get a Quote
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
