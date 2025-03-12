"use client";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { api_url } from "@/config/config";
import OtpInput from "react-otp-input";
import Loader from "@/components/Loader";

function Verification() {
  const [emailOtp, setEmailOtp] = React.useState("");
  const [phoneOtp, setPhoneOtp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [is_email_verified, setIsEmailVerified] = React.useState(false);
  const [is_phone_verified, setIsPhoneVerified] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const verify = async (is_email_verification: boolean) => {
    try {
      if (is_email_verification && !emailOtp) {
        toast("Please enter your email OTP", { type: "error" });
        return;
      }
      if (!is_email_verification && !phoneOtp) {
        toast("Please enter your phone OTP", { type: "error" });
        return;
      }
      const path = is_email_verification
        ? "/users/email/verify"
        : "/users/phone/verify";
      setLoader(true);
      const response = is_email_verification
        ? await axios.post(api_url + path, { email, otp: emailOtp })
        : await axios.post(api_url + path, { phone, otp: phoneOtp });
      console.log(response);
      setLoader(false);
      if (response.data.success) {
        if (!response.data.is_valid_otp) {
          toast("Invalid OTP", { type: "error" });
          return;
        }
        if (is_email_verification) {
          setIsEmailVerified(true);
        } else {
          setIsPhoneVerified(true);
          router.push("/payment");
        }
        const { token } = response.data;
        localStorage.setItem("token", token);
        toast("Verification successful", { type: "success" });
      }
    } catch (err) {
      console.log(err);
      toast("Something went wrong", { type: "error" });
      setLoader(false);
    }
  };

  const resSendOtp = async (is_email_verification: boolean) => {
    try {
      const path = is_email_verification
        ? "/users/email/otp"
        : "/users/phone/otp";
      setLoader(true);
      const response = is_email_verification
        ? await axios.post(api_url + path, { email })
        : await axios.post(api_url + path, { phone });
      console.log(response);
      if (response.data.success) {
        toast("OTP sent successfully", { type: "success" });
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
      toast("Something went wrong", { type: "error" });
    }
  };

  React.useEffect(() => {
    if (is_email_verified && is_phone_verified) {
      toast("Verification successful", { type: "success" });
      router.push("/payment");
    }
  }, [is_email_verified, is_phone_verified]);

  React.useEffect(() => {
    // if (searchParams.get("email")) {
    //   setEmail(searchParams.get("email") || "");
    // }
    // if (searchParams.get("phone")) {
    //   setPhone(searchParams.get("phone") || "");
    // }
    const sEmail = localStorage.getItem("email");
    const sPhone = localStorage.getItem("phone");
    if (sEmail) {
      setEmail(sEmail);
    }
    if (sPhone) {
      setPhone(sPhone);
    }
  }, []);

  React.useEffect(() => {
    if (email && !is_email_verified) {
      resSendOtp(true);
    }
    if (phone && is_email_verified) {
      resSendOtp(false);
    }
  }, [email, phone, is_email_verified]);

  return (
    <div className="w-full py-4 ">
      <div className="w-full h-full flex  flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-green-400 mt-4">
          Verify Your Email and Phone Number
        </h1>
        {/* <hr className="bg-gray-600 h-1 w-full mt-4" /> */}
        <div className="mt-6 block w-[350px] p-10 bg-gray-800">
          {!is_email_verified && (
            <>
              <label htmlFor="email-otp">Enter your email OTP</label>
              <OtpInput
                value={emailOtp}
                onChange={setEmailOtp}
                numInputs={6}
                containerStyle={{ width: "100%" }}
                inputStyle={{
                  width: "100%",
                }}
                renderSeparator={
                  <span>
                    <div className="h-1 w-[5px] "></div>
                  </span>
                }
                renderInput={(props) => <input {...props} />}
              />
              {/* <input
                type="text"
                onChange={(e) => setEmailOtp(e.target.value)}
                name="email-otp"
              /> */}
              <div className="flex items-center justify-between my-4">
                <button
                  className="rounded px-6 py-2"
                  onClick={() => resSendOtp(true)}
                  disabled={is_email_verified}
                >
                  Resend OTP
                </button>
                <button
                  className="rounded px-6 py-2 bg-green-700"
                  onClick={() => verify(true)}
                  disabled={is_email_verified}
                >
                  Verify Now
                </button>
              </div>
            </>
          )}
          {is_email_verified && (
            <>
              <label htmlFor="phone-otp">Enter your phone OTP</label>
              <OtpInput
                value={phoneOtp}
                onChange={setPhoneOtp}
                numInputs={6}
                containerStyle={{ width: "100%" }}
                inputStyle={{
                  width: "100%",
                }}
                renderSeparator={
                  <span>
                    <div className="h-1 w-[5px] "></div>
                  </span>
                }
                renderInput={(props) => <input {...props} />}
              />
              {/* <input
                type="text"
                onChange={(e) => setPhoneOtp(e.target.value)}
                name="phone-otp"
              /> */}
              <div className="flex items-center justify-between mt-4">
                <button
                  className="rounded px-6 py-2"
                  onClick={() => resSendOtp(false)}
                  disabled={is_phone_verified}
                >
                  Resend OTP
                </button>
                <button
                  className="rounded px-6 py-2 bg-green-700"
                  onClick={() => verify(false)}
                  disabled={is_phone_verified}
                >
                  Verify Now
                </button>
              </div>
            </>
          )}
        </div>

        {/* <Link
          href="/register"
          className="flex items-center mt-12 px-6 py-2 bg-blue-900"
        >
          Go to Home
          <FaArrowRight className="ml-2" />
        </Link> */}
      </div>
      <Loader loader={loader} />
    </div>
  );
}

export default Verification;
