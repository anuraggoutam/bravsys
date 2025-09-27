import React from "react";

export default function Loader() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="loader  w-[60px] flex justify-evenly ">
        <li className="ball w-3 h-3 bg-white rounded-[50%] list-none"></li>
        <li className="ball w-3 h-3 bg-white rounded-[50%] list-none"></li>
        <li className="ball w-3 h-3 bg-white rounded-[50%] list-none"></li>
      </div>
    </div>
  );
}
