import React from "react";

function StudentCard({
  name,
  course,
  img,
}: {
  name: string;
  course: string;
  img: string;
}) {
  return (
    <div className="">
      <div className="overflow-hidden mx-1 bg-gray-700 h-[250px]  rounded-[10px] flex items-center flex-col">
        <img
          src={img}
          alt="Hero Image"
          className="w-full bg-amber-200 h-[195px]"
        />
        <div className="flex justify-center items-center">
          <p className="mt-2 text-2xl font-bold">{name}</p>
        </div>
        {/* <p className="mt-1 text-center">{course}</p> */}
      </div>
    </div>
  );
}

export default StudentCard;
