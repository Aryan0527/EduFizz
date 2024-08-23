import React from "react";
import certify from "../assets/certify.svg";
import support from "../assets/support.svg";
import teacher from "../assets/teacher.svg";
import video from "../assets/video.svg";

const Features = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold text-white text-center">
              Our <span className="text-yellow-500">Features</span>
              <br />
              <span className="text-gray-300">Special For You</span>
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src={certify}
              alt="Feature 2"
              className="w-12 h-12 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Get Certificate
            </h3>
            <p className="text-gray-400">
              Add value to your certificates and increase your chances of
              getting hired in your dream job.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src={teacher}
              alt="Feature 2"
              className="w-12 h-12 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Amazing Instructor
            </h3>
            <p className="text-gray-400">
              Our amazing instructors bring experience, knowledge, and fun to
              the table.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src={support}
              alt="Feature 3"
              className="w-12 h-12 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Lifetime Support
            </h3>
            <p className="text-gray-400">
              You will have lifetime access to the courses & resources, also
              contacting instructors anytime!
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <img
              src={video}
              alt="Feature 4"
              className="w-12 h-12 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Video Lessons
            </h3>
            <p className="text-gray-400">
              Recorded versions of lectures from professional instructors to
              boost your growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
