import React from "react";

function Footer() {
  return (
    <div className="w-full h-[300px] border-t-[1px] mt-3.5 border-gray-600 opacity-90 px-5">
      <div className="grid md:grid-cols-3 py-8">
        <div className="md:col-span-2 md:block flex flex-col justify-center items-center ">
          <img
            src="https://ccn-landing-page.vercel.app/_next/image?url=%2Flogos%2Flogo-white-bg.jpg&w=256&q=75"
            alt="logo"
            className="h-14"
          />
          <p className="mt-4 text-[1.2rem] text-center md:text-left">
            Since its inception in November 2019, Connecting Cyber Networks has
            been committed to providing the highest quality, needs-based
            training interventions to its clients, both locally and
            internationally.
          </p>
          <address className="mt-4 text-lg text-center md:text-left">
            Vaastu Darshan, B-602, Gundawali Azad Rd, near BMC Ward Office, Azad
            Nagar, Andheri East, Mumbai, Maharashtra 400069
          </address>
        </div>
        <div className="md:col-span-1 md:block flex flex-col justify-center md:mt-0 mt-5">
          <h1 className="text-3xl font-extrabold text-center md:text-left">
            LET'S TALK!
          </h1>
          <p className="mt-4 text-lg text-center md:text-left">
            Have questions? Contact a CCN Training Specialist today!
          </p>
          <p className="mt-4 text-lg text-center md:text-left">
            <a href="tel:+91 8591130192">+91 8591130192</a>
          </p>
          <p className="mt-4 text-lg text-center md:text-left">
            <a href="tel:+91 7777097791">+91 7777097791</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
