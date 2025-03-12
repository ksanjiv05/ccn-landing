"use client";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import moment from "moment";
import { api_url } from "@/config/config";

const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phone_regex = /^\+?[1-9]\d{9,14}$/;

function objectToFormData(obj: any) {
  const formData = new FormData();

  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      if (key === "pic") {
        formData.append(key, obj[key]);
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  formData.append("Date", moment().format("YYYY-MM-DD hh:mm A"));
  return formData;
}

function RegisterForm() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    phone: "",
    pic: null as File | null,
    comment: "",
  });
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, pic: e.target.files[0] });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);

    if (data.name.length < 3) {
      toast("Name should be at least 3 characters long", { type: "error" });
      return;
    }

    if (!email_regex.test(data.email)) {
      toast("Please enter a valid email address.", { type: "error" });
      return;
    }

    if (!phone_regex.test(data.phone)) {
      toast("Please enter a valid phone number.", { type: "error" });
      return;
    }
    if (!data.pic) {
      toast("Please upload a profile picture.", { type: "error" });
      return;
    }
    setLoading(true);
    const formData = objectToFormData(data);

    axios
      .post(api_url + "/users", formData)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("email", data.email);
        localStorage.setItem("phone", data.phone);

        console.log("Success:", response.data);
        router.push("/verification");
        toast("Form submitted successfully", { type: "success" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        toast("Form submission failed", { type: "error" });
      });
  };

  return (
    <div className=" flex-col w-full gap-1 px-2.5">
      <label htmlFor="Name">Name</label>
      <br />
      <input type="text" name="name" onChange={handleChange} />
      <br />
      <label htmlFor="Email">Email</label>
      <br />
      <input type="email" name="email" onChange={handleChange} />
      <br />
      <label htmlFor="Phone">Phone Number</label>
      <br />
      <input
        type="text"
        minLength={10}
        maxLength={10}
        name="phone"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="qualification">Qualification</label>
      <br />
      <input type="text" name="qualification" />
      <br />
      <label htmlFor="photo">Upload Photo</label>
      <br />
      {/* <input
        type="file"
        placeholder="Upload Photo"
        className="text-gray-400"
        onChange={handleFileChange}
        accept="image/*"
      /> */}

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            {data.pic ? (
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">{data.pic.name}</span>
              </p>
            ) : (
              <>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG (MAX. 800x400px)
                </p>
              </>
            )}
          </div>
          <input
            id="dropzone-file"
            onChange={handleFileChange}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>
      <br />

      <label htmlFor="comment">Comment</label>
      <br />
      <textarea
        name="comment"
        onChange={(e) => {
          setData({ ...data, [e.target.name]: e.target.value });
        }}
      ></textarea>
      <br />
      <button
        disabled={loading}
        onClick={(e) => handleSubmit(e)}
        className="bg-red-500 w-full text-white px-4 py-2 rounded-md cursor-pointer"
      >
        {loading ? "Submitting..." : "Register"}
      </button>
    </div>
  );
}

export default RegisterForm;
//TODO : need to otp send after email verify
