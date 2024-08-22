import React from "react";

const Navbar = () => {
  return (
    <>
      {" "}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="logo text-2xl font-bold">EDUFIZZ</div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-yellow-400">
              Home
            </a>
            <a href="#" className="hover:text-yellow-400">
              Courses
            </a>
            <a href="#" className="hover:text-yellow-400">
              Pages
            </a>
            <a href="#" className="hover:text-yellow-400">
              Events
            </a>
            <a href="#" className="hover:text-yellow-400">
              Portfolio
            </a>
            <a href="#" className="hover:text-yellow-400">
              Blog
            </a>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              Login
            </a>
            <a href="#" className="hover:text-yellow-400">
              Register
            </a>
          </div>
        </div>
        <div className="bg-gray-800 text-center py-2">
          <p>Call: (123) 456-7890 | Email: info@example.com</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
