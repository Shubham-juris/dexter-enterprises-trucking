import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! 🚚");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We’d love to hear from you! Whether you’re looking for a shipping quote or have general inquiries, our team is ready to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Contact Information
          </h2>
          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600 w-6 h-6" />
              <span>info@dextertrucking.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-600 w-6 h-6" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span>209-215 Main St NW, Slave Lake, AB, T0G 2A1, Canada</span>
            </li>
          </ul>

          {/* Google Map for this address */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Dexter Trucking Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.354861569342!2d-114.778!3d55.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538af8a347e8f671%3A0x3b2e04c3b3775f50!2s209-215%20Main%20St%20NW%2C%20Slave%20Lake%2C%20AB%20T0G%202A1%2C%20Canada!5e0!3m2!1sen!2sin!4v1730273543210"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Send Us a Message
          </h2>

          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
