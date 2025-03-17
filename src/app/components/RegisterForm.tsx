"use client";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import moment from "moment";

const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phone_regex = /^\+?[1-9]\d{9,14}$/;

function objectToFormData(obj: any) {
  const formData = new FormData();

  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      formData.append(key, obj[key]);
    }
  }
  formData.append("Date", moment().format("YYYY-MM-DD hh:mm A"));
  return formData;
}

function RegisterForm() {
  const [data, setData] = React.useState({
    Name: "",
    Email: "",
    Phone: "",
    photo: "",
    Comment: "",
  });
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);

    if (data.Name.length < 3) {
      toast("Name should be at least 3 characters long", { type: "error" });
      return;
    }

    if (!email_regex.test(data.Email)) {
      toast("Please enter a valid email address.", { type: "error" });
      return;
    }

    if (!phone_regex.test(data.Phone)) {
      toast("Please enter a valid phone number.", { type: "error" });
      return;
    }
    setLoading(true);
    const formData = objectToFormData(data);

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbxG5hjZWVACtgj2jlgGdYTdiyKreetKqL4tlqxgJO7mjeFvaVQWGi-N_2dOmsJNm2hp/exec",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        console.log("Success:", response.data);
        // router.push("/thanks");
        router.push("/thanks");
        // toast("Form submitted successfully", { type: "success" });
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
      <input type="text" name="Name" onChange={handleChange} />
      <br />
      <label htmlFor="Email">Email</label>
      <br />
      <input type="email" name="Email" onChange={handleChange} />
      <br />
      <label htmlFor="Phone">Phone Number</label>
      <br />
      <input
        type="text"
        minLength={10}
        maxLength={10}
        name="Phone"
        onChange={handleChange}
      />
      {/* <label htmlFor="qualification">Qualification</label>
      <input type="text" name="qualification" />
      <label htmlFor="photo">Upload Photo</label>
      <input
        type="file"
        placeholder="Upload Photo"
        className="text-gray-400"
        accept="image/*"
      /> */}
      <br />
      <label htmlFor="comment">Comment</label>
      <br />
      <textarea
        name="Comment"
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
