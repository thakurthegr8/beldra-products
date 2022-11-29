import React from "react";
import HeadingCard from "./HeadingCard";
import LinkSidebar from "./linkSidebar";
import { Link } from "react-router-dom";

export default function Infrastructure(props) {
  const tabLinks = [
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Design & Development",
      link: "/infrastructure/0",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Pattern & Dies",
      link: "/infrastructure/1",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Lab Testing",
      link: "/infrastructure/2",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Casting & Forging",
      link: "/infrastructure/3",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Shot Blasting",
      link: "/infrastructure/4",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Grinding",
      link: "/infrastructure/5",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Machining",
      link: "/infrastructure/6",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Welding",
      link: "/infrastructure/7",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Zinc Electroplating",
      link: "/infrastructure/8",
    },
    {
      imgSrc: "http://indianscaffolding.com/images/lab%20%26%20designing.jpg",
      name: "Quality Check & Packing",
      link: "/infrastructure/9",
    },
  ];
  return (
    <>
      <LinkSidebar title={"Infrastructure"} items={tabLinks} />
      <div className="pt-28 md:pt-16" id="infrastructure">
        <div className="p-6 py-4 flex flex-col justify-start items-start">
          <Link to="/infrastructure">
            <a
              href="//#"
              className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
            >
              Infrastructure
            </a>
          </Link>
          <h1 className="text-left text-2xl font-bold text-gray-700">
            {props.title ? props.title : "System Groups"}
          </h1>
          <div className="text-gray-600 body-font w-full transition grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {
              tabLinks.map((item)=>{
                return(<HeadingCard
                  imgData={
                    item.imgSrc
                  }
                  imgName={item.name}
                  cardLink={item.link}
                />)
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
