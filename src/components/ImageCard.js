import React from "react";
import {Link} from 'react-router-dom';


export default function ImageCard(props) {
  return (
    <div className="bg-white py-8 md:p-8 flex flex-col md:flex-row lg:flex-col items-center lg:items-start md:border">
      <img
      className="rounded max-w-md w-full md:w-1/2 lg:w-full"
        src={props.imgData}
        alt="img"
        style={{aspectRatio:"16/9",objectFit:"cover"}}
      />
      <div className="flex flex-col justify-start text-left px-1 py-3  flex-wrap items-center lg:items-start">
        <h1 className="text-left text-xl font-bold text-gray-800">
        {props.imgName}
        </h1>{" "}
        <p className="text-normal mt-1 text-center lg:text-left">{props.imgDesc}</p>
        <Link to="/products">
        <div className="flex w-max" style={{width:"100%"}}>
        <button className="bg-black w-full md:w-auto mt-4 rounded font-semibold text-white px-4 py-2 hover:bg-yellow-400 hover:text-black">How It Works</button>
        </div>
        </Link>
        
      </div>
    </div>
  );
}
