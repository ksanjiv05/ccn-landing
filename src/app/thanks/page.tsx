import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

function Thanks() {
  return (
    <div className="w-full h-[50vh] ">
      <div className="w-full h-full flex  flex-col items-center justify-center">
        <FaCheckCircle className="text-6xl text-green-400" />
        <h1 className="text-4xl font-extrabold text-green-400 mt-4">
          Thank you!
        </h1>
        <p className="mt-4 text-2xl text-center ">
          Your form has been submitted successfully. We will get back to you
          soon.
        </p>

        <Link href="/" className="flex items-center mt-8 px-6 py-2 bg-blue-900">
          Go to Home
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
