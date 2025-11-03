import React from "react";
import { Briefcase, MapPin } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Truck Driver (Long Haul)",
      location: "Toronto, ON",
      desc: "We’re looking for experienced Class A drivers to handle cross-border and regional hauls with safety and reliability.",
    },
    {
      title: "Logistics Coordinator",
      location: "Vancouver, BC",
      desc: "Coordinate shipments, optimize routes, and maintain client communication for smooth freight operations.",
    },
    {
      title: "Fleet Maintenance Technician",
      location: "Calgary, AB",
      desc: "Maintain, inspect, and repair our modern truck fleet to ensure top performance and minimal downtime.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* ✅ Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Careers at Dexter Trucking</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Drive your career forward with a team that values safety, integrity,
          and growth. Explore open positions below.
        </p>
      </div>

      {/* ✅ Jobs Section */}
      <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Current Openings
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <Briefcase size={40} />
              </div>

              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {job.title}
              </h3>
              <div className="flex justify-center items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-1" />
                <span>{job.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{job.desc}</p>

              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition w-full">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* ✅ Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-4 text-lg">
            Didn’t find a suitable position? We’re always looking for talented
            professionals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Contact HR Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Careers;
