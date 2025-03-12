import Link from "next/link";
import React from "react";
import { FaArrowRight, FaRegTimesCircle } from "react-icons/fa";

function Fail() {
  return (
    <div className="w-full h-[50vh] ">
      <div className="w-full h-full flex  flex-col items-center justify-center">
        <FaRegTimesCircle className="text-6xl text-red-400" />
        <h1 className="text-4xl font-extrabold text-red-400 mt-4">
          Payment Failed!
        </h1>
        <p className="mt-4 text-2xl text-center ">
          Your payment has been failed. Please try again.
        </p>

        <Link href="/" className="flex items-center mt-8 px-6 py-2 bg-blue-900">
          Go to Home
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default Fail;
