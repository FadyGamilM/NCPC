import React from "react";
import { BsShop } from "react-icons/bs";
import { ImTruck } from "react-icons/im";

const Outlet = (props) => {
  console.log(props);
  return (
    <div>
      <div className="cursor-pointer hover:scale-105 transition duration-500 ease-in-out w-full mx-auto items-center text-center justify-center mt-8 border-2 border-slate-500 rounded-2xl shadow-2xl p-2 bg-darkBlue text-slate-50">
        <div className="text-center items-center justify-center flex">
          <p className="font-standard text-xl font-bold p-1">
            {props.manfzData}
          </p>
          {props.movable ? (
            <ImTruck className=" pl-1 text-3xl " />
          ) : (
            <BsShop className=" pl-1 text-3xl " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Outlet;
