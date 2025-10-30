import React from "react";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* 🖼️ Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://scontent.fixc2-1.fna.fbcdn.net/v/t39.30808-6/482021862_622411890563955_7619660071581166051_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cQl8_7zWIfIQ7kNvwHUQ2F7&_nc_oc=Adkx39yYR4ZjLWuW53vmQy7IhDP61eNtUKf96t917saBtLJHiCKgsblpi9hWk68qkg4&_nc_zt=23&_nc_ht=scontent.fixc2-1.fna&_nc_gid=hm0GxRWs8SgTpJXI9pIe8g&oh=00_Aff3W-aEHBPo25v6tbQk7AAAk3E0-05Sx_pg1PdkQJHxfQ&oe=69090E44"
            alt="Dexter Trucking"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* 📝 Text Section */}
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
