import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601906353645-52aa4b9a8e1d?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Dexter Trucking
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Delivering reliability and trust — one mile at a time.
          </p>
        </div>
      </div>

      {/* Main About Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://scontent.fixc2-1.fna.fbcdn.net/v/t39.30808-6/482021862_622411890563955_7619660071581166051_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cQl8_7zWIfIQ7kNvwHUQ2F7&_nc_oc=Adkx39yYR4ZjLWuW53vmQy7IhDP61eNtUKf96t917saBtLJHiCKgsblpi9hWk68qkg4&_nc_zt=23&_nc_ht=scontent.fixc2-1.fna&_nc_gid=hm0GxRWs8SgTpJXI9pIe8g&oh=00_Aff3W-aEHBPo25v6tbQk7AAAk3E0-05Sx_pg1PdkQJHxfQ&oe=69090E44"
            alt="Dexter Trucking"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Driving Excellence in Transportation
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-5">
            Dexter Trucking is a trusted name in logistics and freight
            management. Based in <strong>Slave Lake, Alberta</strong>, we provide
            efficient, safe, and timely trucking solutions across North America.
            Our commitment to reliability and customer satisfaction sets us
            apart in the freight industry.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-5">
            With a modern fleet and a team of experienced drivers, our mission
            is to deliver excellence in every shipment. From small parcels to
            full-load freight, Dexter Trucking ensures a smooth and dependable
            delivery experience — every single time.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We believe in long-term partnerships built on trust, transparency,
            and performance. Our goal is not just to move goods — but to move
            businesses forward.
          </p>
        </motion.div>
      </div>

      {/* Mission, Vision & Values */}
      <div className="bg-blue-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white shadow-lg rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide safe, efficient, and dependable transportation
              solutions that drive success for our clients and communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-6 bg-white shadow-lg rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as a leading trucking company in North America,
              known for innovation, professionalism, and exceptional service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white shadow-lg rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, reliability, safety, and customer commitment are at the
              core of everything we do.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
