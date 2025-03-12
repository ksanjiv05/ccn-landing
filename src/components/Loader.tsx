import React from "react";
import { Bars, Rings, Circles } from "react-loader-spinner";

function Loader({ loader }: { loader: boolean }) {
  return (
    <div
      className={`flex justify-center items-center absolute z-10 h-[100vh] bg-[#000000a3] left-0  w-full top-0 ${
        loader ? "" : "hidden"
      } `}
    >
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loader}
      />
    </div>
  );
}

export default Loader;
