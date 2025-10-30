import React from "react";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            About Dexter Trucking
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Dexter Trucking is a trusted name in logistics and freight
            management. We specialize in providing efficient, safe, and timely
            trucking solutions across North America.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            With a modern fleet and experienced drivers, our mission is to
            deliver excellence in transportation. From small parcels to
            full-load freight — Dexter Trucking ensures smooth delivery every
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
