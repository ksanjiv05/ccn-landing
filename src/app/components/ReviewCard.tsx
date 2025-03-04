import React from "react";
import { FaStar } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

function ReviewCard({
  name,
  rating,
  comment,
  img,
}: {
  name: string;
  rating: number;
  comment: string;
  img: string;
}) {
  return (
    <div className="w-full md:h-[410px] flex items-center justify-center">
      <div className="md:w-[75%] w-[90%]  md:h-[380px] flex flex-col items-center justify-center  rounded-[10px] p-4">
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
          }
          alt="Hero Image"
          className=" bg-amber-200 h-[80px] w-[80px] rounded-full"
        />
        <div className="flex items-center mt-2" />
        {/* <FaStar scale={2} color="yellow" /> */}
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        <p className="mt-2 text-2xl font-bold">{name}</p>
        <p className="mt-1 text-center text-lg">
          <q>{comment}</q>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
