import React from 'react'

const Careers = () => {
     const jobs = [
    {
      title: "Truck Driver (Long Haul)",
      location: "Toronto, ON",
      desc: "We’re looking for experienced Class A drivers for cross-border and regional trips.",
    },
    {
      title: "Logistics Coordinator",
      location: "Vancouver, BC",
      desc: "Coordinate fleet schedules, manage clients, and ensure on-time delivery operations.",
    },
    {
      title: "Fleet Maintenance Technician",
      location: "Calgary, AB",
      desc: "Perform maintenance, inspections, and repairs on our modern truck fleet.",
    },
  ];
  return (
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Careers at Dexter Trucking
      </h1>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
        Join a fast-growing team of logistics professionals dedicated to keeping
        freight moving safely and efficiently across North America.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {job.title}
            </h3>
            <p className="text-gray-500 mb-3">{job.location}</p>
            <p className="text-gray-700">{job.desc}</p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Careers