import React from 'react'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Dexter<span className="text-blue-500">Trucking</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Reliable and efficient trucking solutions across the nation.  
            On-time delivery with safety and professionalism at every mile.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#fleet" className="hover:text-blue-500 transition">Fleet</a></li>
            <li><a href="#careers" className="hover:text-blue-500 transition">Careers</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              info@dextertrucking.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-500" />
              120 Dexter Avenue, Toronto, ON, Canada
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} <span className="text-white font-medium">Dexter Trucking</span>.  
        All rights reserved.
      </div>
    </footer>
  )
}

export default Footer