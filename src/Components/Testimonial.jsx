import React from "react";
import studentImage from "../assets/student.jpg"; // Replace with your image path

const Testimonial = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={studentImage}
            alt="Student"
            className="w-full h-full max-w-sm lg:max-w-full lg:h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">
              TESTIMONIALS
            </h4>
            <h2 className="text-2xl font-bold text-white">
              ENCOURAGING <span className="text-yellow-500">FEEDBACK'S</span>
            </h2>
            <p className="text-gray-400 mt-4">
              “Just as the sweet sound my friends you are sure to get a smile
              from even stranded castaways here on Gilligan Isle. Now were up in
              the big leagues getting our turn at bat. And if you threw a party
              invited everyone you knew you would see the BIGGEST GIFT would be
              me.”
            </p>
            <p className="mt-6 text-yellow-500 font-semibold">
              MATHEW HADDAMAY
              <br />
              Student, Texas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
