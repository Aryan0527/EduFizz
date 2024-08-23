import { useState, useEffect } from "react";

function CourseForm() {
  const targetDate = new Date("2024-12-31T00:00:00"); // Set your target date

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Online Course Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Register Free for{" "}
            <span className="text-yellow-500">Online Course</span>
          </h2>
          <p className="mb-8">
            Travelled down the road and back again your heart is true you're a
            pal and a confident...
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="p-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />
            <select className="p-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </form>
          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded">
            Send Request
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="w-full md:w-1/2 bg-yellow-500 p-8 rounded-lg shadow-lg text-black text-center">
          <h2 className="text-3xl font-bold mb-4">
            Next Set of Online Courses
          </h2>
          <p className="mb-6 text-lg">Launching Soon</p>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
}

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex justify-center space-x-4 text-3xl font-bold">
      <div className=" text-black p-4 rounded">
        <span>{timeLeft.months || "00"}</span>
        <div className="text-sm">Months</div>
      </div>
      <div className=" text-black p-4 rounded">
        <span>{timeLeft.days || "00"}</span>
        <div className="text-sm">Days</div>
      </div>
      <div className=" text-black p-4 rounded">
        <span>{timeLeft.hours || "00"}</span>
        <div className="text-sm">Hours</div>
      </div>
      <div className=" text-black p-4 rounded">
        <span>{timeLeft.minutes || "00"}</span>
        <div className="text-sm">Minutes</div>
      </div>
      <div className=" text-black p-4 rounded">
        <span>{timeLeft.seconds || "00"}</span>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
}

export default CourseForm;
