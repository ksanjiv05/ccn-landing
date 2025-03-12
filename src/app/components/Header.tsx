import React from "react";
import Link from "next/link";
import { FaPhone, FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full h-20 border-b-[1px] border-gray-600 opacity-90 px-5">
      <div className="flex justify-between h-full">
        <div className="flex flex-1 items-center">
          <img
            src="https://ccn-landing-page.vercel.app/_next/image?url=%2Flogos%2Flogo-white-bg.jpg&w=256&q=75"
            alt="logo"
            className="h-12"
          />
          {/* <h1 className="text-2xl font-bold ml-4">My Logo</h1> */}
        </div>
        <div className="flex flex-1 items-center">
          <ul className="md:flex hidden ">
            <li className="text-white">
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            <li className="text-white ml-4">
              <Link href="#register" className="link">
                About
              </Link>
            </li>
            <li className="text-white ml-4">
              <Link href="#course" className="link">
                Course
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {/* <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
            <Link href="/login">Login</Link>
          </button> */}
          <p className="text-lg text-center md:text-left">
            <a href="tel:+917777097791 " className="flex items-center ">
              <FaPhone className="mr-2 rotate-90" />
              +91 7777097791
            </a>
          </p>
          {/* <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-4">
            <Link href="/register">Register</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
