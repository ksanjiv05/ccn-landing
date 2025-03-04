import React from "react";
import { FaBook, FaArrowRight } from "react-icons/fa";
function Course({
  title,
  duration,
  certifications = [],
}: {
  title: string;
  duration: string;
  certifications: string[];
}) {
  return (
    <div className="bg-blue-950 rounded-[10px] overflow-hidden shadow-lg">
      <div className=" bg-blue-600 h-18 flex items-center justify-center">
        <h1 className="text-white text-2xl">{title}</h1>
      </div>
      <div className="p-4">
        <p className="text-2xl font-semibold mb-2.5">
          <span className="font-bold">Duration: </span>
          {duration}
        </p>
        <ul>
          {certifications.map((certification, i) => (
            <li
              key={certification + i}
              className="flex items-center gap-2 my-2 text-lg"
            >
              <FaBook />
              {certification}
            </li>
          ))}
        </ul>
        <div className="flex">
          <a
            href="#register"
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
          >
            Register for Demo <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Course;
