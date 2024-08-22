import React from "react";

const Features = () => {
  return (
    <div className="absolute top-2 bottom-0 left-0 right-0 transform translate-y-1/2 bg-gray-100 p-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-box bg-yellow-500 p-6 rounded text-center">
          <i className="fas fa-chalkboard-teacher text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Highly Qualified Teachers</h3>
          <p>Can you tell me how to...</p>
        </div>
        <div className="feature-box bg-black text-white p-6 rounded text-center">
          <i className="fas fa-award text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">World Class Teaching</h3>
          <p>Can you tell me how to...</p>
        </div>
        <div className="feature-box bg-gray-800 text-white p-6 rounded text-center">
          <i className="fas fa-globe text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">International Syllabus</h3>
          <p>Can you tell me how to...</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
