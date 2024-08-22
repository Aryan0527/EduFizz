import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import CourseForm from "./Components/CourseForm";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <CourseForm />
    </>
  );
};

export default App;
