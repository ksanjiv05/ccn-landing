import Link from "next/link";
import React from "react";
import { FaBook, FaArrowRight, FaStar } from "react-icons/fa";
function Course({
  title,
  duration,
  certifications = [],
  benefits = [],
}: {
  title: string;
  duration: string;
  certifications: string[];
  benefits: string[];
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
              className="flex items-center gap-2 my-2 text-lg text-white"
            >
              <FaBook />
              {certification}
            </li>
          ))}
        </ul>
        <p className="text-2xl font-semibold mb-2.5">
          <span className="font-bold  text-amber-500">Benefits: </span>
        </p>
        <ul>
          {benefits.map((bn, i) => (
            <li key={bn + i} className="flex gap-2 my-2 text-lg text-amber-500">
              <FaStar scale={5} size={40} />
              <p
                className="text-amber-500"
                style={{ color: "oklch(.769 .188 70.08)" }}
              >
                {bn}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex">
          <Link
            href="/register"
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
          >
            Register for Demo <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Course;
