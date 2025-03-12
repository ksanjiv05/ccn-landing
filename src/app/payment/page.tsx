"use client";
import { useState } from "react";
import Script from "next/script";
import { api_url, base_url } from "@/config/config";
import { Bars } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";


// Declare Razorpay on the window object
declare global {
  interface Window {
    Razorpay: any;
  }
}

function Payment() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch(api_url + "/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          amount: 100 * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      return {
        id: data.data.id,
        amount: data.data.amount,
        email: data.data?.email,
        user_id: data.data?.user_id,
      };
      setLoading(false);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      setLoading(false);
    }
  };
  const processPayment = async (e: any) => {
    e.preventDefault();
    try {
      const { id, amount, email, user_id }: any = await createOrder();

      const options = {
        key: "rzp_test_sPtgTNQKgcOoMS", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "CCN",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: base_url + "/success",
        notes: {
          email,
          user_id,
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log(options);
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on("payment.failed", function (response: any) {
        console.log(response);
        router.push("/fail");
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <section className="min-h-[80vh] flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-36 ">
        <h1 className="text-4xl font-bold text-white">Make Payment</h1>
        <p className="text-2xl text-white">Amount: 100 INR</p>
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded-md"
          onClick={(e) => processPayment(e)}
        >
          Pay
        </button>
        <Loader loader={loading} />
      </section>
    </>
  );
}

export default Payment;
