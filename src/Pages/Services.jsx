import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Clock, Warehouse } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Full Truckload (FTL)",
      desc: "Reliable full truckload transport across North America with dedicated trucks ensuring secure and timely delivery.",
    },
    {
      icon: <Package className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Less Than Truckload (LTL)",
      desc: "Cost-effective and flexible shipping for smaller freight volumes, combining multiple loads efficiently.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Expedited Delivery",
      desc: "Fast and time-critical trucking solutions for urgent shipments that can’t afford delays.",
    },
    {
      icon: <Warehouse className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Warehouse & Storage",
      desc: "Secure, climate-controlled warehousing and logistics support with advanced inventory tracking systems.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen overflow-hidden">
      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 text-center shadow-lg"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Delivering excellence through dependable, secure, and efficient
          logistics solutions tailored to your business needs.
        </p>
      </motion.div>

      {/* ✅ Services Grid Section */}
      <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            <div className="flex justify-center">{s.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3 mt-3">
              {s.title}
            </h3>
            <p className="text-gray-600 text-base">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ✅ Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center pb-24"
      >
        <p className="text-gray-700 mb-5 text-lg">
          Looking for customized logistics or dedicated freight support?
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          Contact Our Team
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
