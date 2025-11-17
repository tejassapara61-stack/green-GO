import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex flex-col justify-center items-start px-6 md:px-20 overflow-hidden">
      {/* Background SVG */}
      <img
        src="/crops.jpg" // replace with your SVG path
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
      />

      {/* Overlay (optional, for better text visibility) */}
      <div className="absolute inset-0 bg-gray/0 -z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <span className="text-green-600 text-sm font-medium mb-2 inline-block">
          🌱 Smart Farming Revolution
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Smart Farming <span className="text-green-600">Starts Here</span>
        </h1>
        <p className="mt-4 text-gray-700 max-w-lg">
          Empower your farming with intelligent tools for soil health monitoring, 
          smart crop planning, and real-time weather alerts. Transform your agriculture with data-driven decisions.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}
