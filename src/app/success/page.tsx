"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaDownload, FaCheckCircle } from "react-icons/fa";

function Success() {
  return (
    <div className="w-full h-[50vh] ">
      <div className="w-full h-full flex  flex-col items-center justify-center">
        <FaCheckCircle className="text-6xl text-green-400" />
        <h1 className="text-4xl font-extrabold text-green-400 mt-4">
          Thank you!
        </h1>
        <p className="mt-4 text-2xl text-center ">
          Your payment has been successful. Here your receipt.
        </p>

        <Link
          href="/adhaar-verification"
          className="flex items-center mt-8 px-6 py-2 bg-amber-400"
        >
          Complete your eKyc
          <FaArrowRight className="ml-2" />
          {/* <FaDownload className="ml-2" /> */}
        </Link>
        <Link href="/" className="flex items-center mt-8 px-6 py-2 bg-blue-900">
          Go to Home
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default Success;
