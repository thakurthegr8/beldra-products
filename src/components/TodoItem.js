import React from "react";

export default function TodoItem(props) {
  return (
    <div className="py-8 px-4 border bg-white rounded-md sm:max-w-lg">
    <div className="h-full flex items-start">
      <div className=" flex flex-col flex-grow px-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
          TODAY
        </h2>
        <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
          {props.todo.title}
        </h1>
        <p className="leading-relaxed mb-5">
        {props.todo.desc}
        </p>
        <div className="flex justify-end mt-4">
          {/* {<img
            alt="blog"
            src="https://dummyimage.com/103x103"
            className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
          />} */}
          <div>
          <button onClick={()=>{props.onDelete(props.todo)}} className=" text-center flex flex-col p-3 bg-red-200 text-red-800 rounded">
          Delete
          </button>
          </div>
          </div>
      </div>
    </div>
  </div>
  );
}
