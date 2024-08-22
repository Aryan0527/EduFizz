import React from "react";
import C1 from "../assets/C1.jpg";
import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Diploma in Software and Hardware",
      description:
        "You would see the biggest gift would be from me and the card attached would say lucky star awaited by the government.",
      price: "$150",
      students: 24,
      buttonText: "Join Now",
      image: C1,
    },
    {
      title: "Mechanical & Auto Mobile Engineering Course",
      description:
        "The slip girl grant on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his wife.",
      price: "$120",
      students: 16,
      buttonText: "Join Now",
      image: C2,
    },
    {
      title: "Fashion Designing Technology",
      description:
        "You would see the biggest gift would be from me and the card attached would say today still wanted by the government.",
      price: "$110",
      students: 8,
      buttonText: "Join Now",
      image: C3,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Courses <span className="text-yellow-500">Available</span>
        </h2>
        <p className="mb-8 text-gray-600 text-center">
          We're gonna pay a call on the Addams Family here exciting and new come
          aboard we're expecting you...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">
                    {course.price}
                  </span>
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded">
                    {course.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
