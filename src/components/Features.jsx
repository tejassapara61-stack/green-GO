import React from "react";

export default function Features() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="py-16 px-6 md:px-20 bg-white">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Everything You Need for <span className="text-green-600">Smart Farming</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps farmers increase productivity, reduce costs, 
            and make data-driven decisions for sustainable agriculture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-xl shadow-sm border border-slate-200 hover:hover:shadow-[0_0_25px_3px_rgba(34,197,94,0.35)] transition duration-300 bg-white">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50">
                🌱
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Soil Health Monitoring</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Real-time soil analysis with pH levels, moisture content, and nutrient tracking 
              to optimize your crop growth conditions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-xl shadow-sm border border-slate-200 hover:hover:shadow-[0_0_25px_3px_rgba(34,197,94,0.35)] transition duration-300 bg-white">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50">
                📅
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Smart Crop Planning</h3>
            <p className="mt-2 text-slate-600 text-sm">
              AI-powered planting schedules based on weather patterns, soil conditions, 
              and market demand forecasts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-xl shadow-sm border border-slate-200 hover:hover:shadow-[0_0_25px_3px_rgba(34,197,94,0.35)] transition duration-300 bg-white">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50">
                🌦️
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Real-time Weather Alerts</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Instant notifications about weather changes, frost warnings, and optimal 
              harvesting conditions.
            </p>
          </div>

        {/* Feature 4 */}
          <div className="p-6 rounded-xl shadow-sm border border-slate-200 hover:hover:shadow-[0_0_25px_3px_rgba(34,197,94,0.35)] transition duration-300 bg-white">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50">
                💹
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Market Price Updates</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Live market data and price trends to help you make informed decisions about when to sell your crops.
            </p>
          </div>

        {/* Feature 5 */}
        <div className="p-6 rounded-xl shadow-sm border border-slate-200 bg-white transition duration-300 hover:shadow-[0_0_25px_3px_rgba(34,197,94,0.35)]">
          <div className="mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50">
              🩺
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-800">AI-Driven Crop Diagnosis</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Upload photos of your crops for instant disease detection and treatment recommendations using advanced AI.
          </p>
        </div>

        

        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Explore All Features
          </button>
        </div>

      </section>
    </>
  );
}
