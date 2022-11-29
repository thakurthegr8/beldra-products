import React from "react";
import { Link } from "react-router-dom";

export default function HeadingCard(props) {
  return (
    <div
      className="border rounded overflow-hidden pt-28 px-4 pb-4  flex"
      style={{
        background: `linear-gradient(45deg,black,transparent),url(${props.imgData})`,
        backgroundSize: "cover",
        backgroundColor:"#ffc300",  
        backgroundPosition: "center center",
      }}
    >
      <div className="flex  flex-col w-full p-4 rounded justify-center md:justify-center mt-6">
        <h1 className="text-center md:text-left text-xl font-bold text-white ">
          {props.imgName}
        </h1>{" "}
        <div className="text-center md:text-left">
          <Link to={props.cardLink}>
            <button
              href="//#"
              className="bg-white mt-4 rounded font-semibold text-gray-800 px-4 text-sm py-2 hover:bg-gray-900  hover:text-white focus:outline-none transition"
            >
              Have a look
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
