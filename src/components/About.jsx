// about.jsx

import React from "react";

const stats = [
  { label: "Farmers Served", value: "10,000+" },
  { label: "Crop Yield Increase", value: "25%" },
  { label: "Water Saved", value: "30%" },
  { label: "Awards Won", value: "15+" },
];

export default function About() {
  return (
    <main className="bg-white min-h font-sans">
      {/* Header */}
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-10 flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* About Text */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"></circle><path d="M12 8v4l2 2" strokeWidth="2"></path></svg>
              Our Mission
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Empowering Farmers with 
            <br className="hidden md:block" /> <span className="text-green-500">Smart Technology</span>
          </h1>
          <p className="text-gray-700 mb-5 text-base lg:text-lg">
            At GreenGo Crop Helper, we believe that sustainable agriculture is the key to feeding the world's growing population. Our mission is to democratize access to advanced farming technology, making it simple, affordable, and effective for farmers of all sizes.
          </p>
          <p className="text-gray-700 mb-6 text-base lg:text-lg">
            Founded by agricultural experts and technology innovators, we combine decades of farming experience with cutting-edge AI and IoT technologies to create solutions that truly make a difference in the field.
          </p>
        </div>
        {/* Stats Cards */}
        <div className="flex-1 grid grid-cols-2 gap-5">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="bg-white shadow rounded-xl flex flex-col items-center justify-center p-6">
              <div className="mb-2 text-green-500">
                {/* Placeholder icons */}
                {idx === 0 ? (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/><path d="M16 20a4 4 0 0 0-8 0" stroke="currentColor" strokeWidth="2"/></svg>
                ) : idx === 1 ? (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 12l6 6 8-12" stroke="currentColor" strokeWidth="2"/></svg>
                ) : idx === 2 ? (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2C10 7 6 10.5 6 14a6 6 0 0 0 12 0c0-3.5-4-7-6-12z" stroke="currentColor" strokeWidth="2"/></svg>
                ) : (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/><path d="M6 22v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/></svg>
                )}
              </div>
              <div className="text-2xl font-bold text-green-600">{stat.value}</div>
              <div className="text-gray-600 text-base font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-1 flex items-center justify-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Learn More About Us
          </button>
        </div>
    </main>
  );
}
