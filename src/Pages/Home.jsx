import React from "react";
import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck, Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://scontent.fixc2-1.fna.fbcdn.net/v/t39.30808-6/476973279_604473562357788_5256272047928361908_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YGN76arQCjYQ7kNvwGO3ZW5&_nc_oc=AdkvPJz4xKo6kkOwy17pbS7t2C7q6EZ5NnHz3cfd_0JMg_vVXDg1CnCap1NIqU4E3Uk&_nc_zt=23&_nc_ht=scontent.fixc2-1.fna&_nc_gid=ai_n9axcRhTCH8G1k6uKHw&oh=00_Afc7BbIgMwaF8Zs4A4_6DoHjzh6nzcKbU9njzkZJTN7xYw&oe=6908F4E8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Reliable Freight. <br /> On Time, Every Time.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Dexter Trucking delivers professional trucking and logistics
            services across North America.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Request a Quote
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-600 mb-6"
        >
          About Dexter Trucking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          We are committed to providing reliable, on-time, and cost-efficient
          freight services across North America. With a fleet of well-maintained
          trucks and a team of experienced drivers, we ensure your goods reach
          safely and on schedule.
        </motion.p>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10"
        >
          Our Services
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Truck size={40} />,
              title: "Full Truckload (FTL)",
              desc: "Efficient and secure long-haul delivery for bulk goods.",
            },
            {
              icon: <Clock size={40} />,
              title: "Expedited Shipping",
              desc: "Time-critical deliveries with top priority handling.",
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Safe Transport",
              desc: "Insured and reliable logistics ensuring cargo safety.",
            },
            {
              icon: <Phone size={40} />,
              title: "24/7 Support",
              desc: "Always available for assistance and real-time updates.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Move Your Freight?
        </motion.h2>
        <p className="text-lg mb-8">
          Contact our team for a free, no-obligation quote today.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Request Quote
        </button>
      </section>
    </div>
  );
};

export default Home;
