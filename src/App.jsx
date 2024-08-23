import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import CourseForm from "./Components/CourseForm";
import Features from "./Components/Features";
import Testimonial from "./Components/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <CourseForm />
      <Features />
      <Testimonial />
    </>
  );
};

export default App;
