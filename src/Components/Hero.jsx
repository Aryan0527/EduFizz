import React from "react";
// import Features from "./Features";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          We Are Engaged to Give You A Good Future
        </h1>
        <p className="text-lg mb-8">Your supporting text goes here...</p>
        <div className="space-x-4">
          <button className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded">
            Purchase
          </button>
          <button className="bg-transparent border border-white px-6 py-3 font-semibold rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
