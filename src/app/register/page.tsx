import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <div className="w-full md:h-[90vh] md:my-0 my-10 flex items-center justify-center">
      <div className="md:w-[50%] w-full p-10 bg-gray-800 ">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
