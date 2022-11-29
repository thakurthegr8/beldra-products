import React from "react";

export default function ProductCard(props) {
  return (
    <div>
      <div
        className="border border-gray-200 p-4 bg-white hover:shadow-xl transition delay-150 duration-300 ease-in-out md:rounded"
        style={{ aspectRatio: "1/1" }}
      >
        <div className="flex flex-col">
          <img src={props.imgData} alt="" style={{ aspectRatio: "1/1" }} />
          <div className="py-2">
            <span className="text-gray-800 mt-6 block text-left text-sm">
              {props.category}
            </span>
            <span className="text-gray-800 font-bold block text-left text-base">
              {props.product}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
