"use client";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { api_url } from "@/config/config";

function Thanks() {
  const [uid, setUid] = React.useState("");
  const [uidOtp, setUidOtp] = React.useState("");
  const [merchantTxnRefId, setMerchantTxnRefId] = React.useState("");
  const [is_otp_send, setIsOtpSend] = React.useState(false);
  const [loader, setLoader] = React.useState(false);

  const verify = async () => {
    try {
      if (!uidOtp) {
        toast("Please enter your phone OTP", { type: "error" });
        return;
      }
      setLoader(true);
      const path = api_url + "/users/adhaar/verify";
      const response = await axios.post(
        path,
        { merchantTxnRefId, otp: uidOtp },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      if (response.data.status === "success") {
        toast("Verification successful", { type: "success" });
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
      toast("Something went wrong", { type: "error" });
    }
  };

  const resSendOtp = async () => {
    try {
      if (!uid) {
        toast("Please enter your phone number", { type: "error" });
        return;
      }
      const path = api_url + "/users/adhaar/otp";
      setLoader(true);
      const response = await axios.post(
        path,
        {
          adhaar_number: uid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      if (response.data.status === "success") {
        toast("OTP sent successfully", { type: "success" });
        setMerchantTxnRefId(response.data.merchantTxnRefId);
        setIsOtpSend(true);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      toast("Something went wrong", { type: "error" });
      setLoader(false);
    }
  };

  return (
    <div className="w-full py-4 ">
      <div className="w-full h-full flex  flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-green-400 mt-4">
          eKyc Verification
        </h1>

        {is_otp_send ? (
          <div className="mt-6 block w-[350px] p-10 bg-gray-800">
            <label htmlFor="uid-otp">Enter OTP</label>
            <input
              type="text"
              name="uid-otp"
              onChange={(e) => setUidOtp(e.target.value)}
            />
            <div className="flex items-center justify-between mt-4">
              <button
                className="rounded px-6 py-2"
                onClick={() => resSendOtp()}
              >
                Resend OTP
              </button>
              <button
                className="rounded px-6 py-2 bg-green-700"
                onClick={() => verify()}
              >
                Verify Now
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 block w-[350px] p-10 bg-gray-800">
            <label htmlFor="uid">Enter your Adhaar</label>
            <input
              type="text"
              name="uid"
              onChange={(e) => setUid(e.target.value)}
            />
            <div className="flex items-center justify-between mt-4">
              <button
                className="w-full bg-green-700 rounded px-6 py-2"
                onClick={() => resSendOtp()}
              >
                Send OTP
              </button>
            </div>
          </div>
        )}

        {/* <Link
          href="/register"
          className="flex items-center mt-12 px-6 py-2 bg-blue-900"
        >
          Go to Home
          <FaArrowRight className="ml-2" />
        </Link> */}
      </div>
    </div>
  );
}

export default Thanks;
