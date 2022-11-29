import React from "react";
import {Link} from 'react-router-dom'


export default function linkSidebar(props) {
  return (
    <div
      
      className="flex flex-col bg-gray-50 h-screen px-2 border border-r border-gray-200 fixed top-16 mt-4 linkSidebar"
    >
      <h1 className="text-xl my-4 ml-4 text-gray-700 text-left font-semibold">
        {props.title}
      </h1>
      {props.items.map((item) => {
        return (
          <>
          <li className="list-none justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <Link to={item.link}>
            <a href="//#" className="block">
              {item.name}
            </a>
            </Link>
          </li>
          <hr/>
          </>
        );
      })}
    </div>
  );
}
