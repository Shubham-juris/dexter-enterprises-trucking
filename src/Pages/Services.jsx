import React from 'react'
import { Truck, Package, Clock, Warehouse } from "lucide-react";
const Services = () => {
      const services = [
    {
      icon: <Truck className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Full Truckload (FTL)",
      desc: "Reliable FTL transport services across North America for large shipments that need dedicated trucks.",
    },
    {
      icon: <Package className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Less Than Truckload (LTL)",
      desc: "Efficient and cost-effective LTL shipping for small and medium shipments.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Expedited Delivery",
      desc: "Fast, time-sensitive trucking services to ensure on-time delivery every time.",
    },
    {
      icon: <Warehouse className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Warehouse Solutions",
      desc: "Safe and secure storage solutions with advanced inventory management systems.",
    },
  ];
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">Our Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            {s.icon}
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services