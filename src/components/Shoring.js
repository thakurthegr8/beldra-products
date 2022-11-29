import React from 'react'
import Sidebar from "./Sidebar";
import HeadingCard from "./HeadingCard";
import { Link } from "react-router-dom";

export default function Shoring() {
    const tabLinks = [
        {
          imgSrc: "http://indianscaffolding.com/images/heavy-duty-prop-250x250.jpg",
          name: "Props & Accessories",
          link: "/products/shoring/PropsAccessories",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/shoring/ShoringFrameSystem.jpg",
          name: "Shoring Frame System",
          link: "/products/shoring/ShoringFrameSystem",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/shoring/AdjustableJacks.jpg",
          name: "Adjustable Jacks",
          link: "/products/shoring/AdjustableJacks",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/shoring/BeamTube.jpg",
          name: "Beam/Tube",
          link: "/products/shoring/BeamTube",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/shoring/walk-board.jpg",
          name: "Walk Board",
          link: "/products/shoring/WalkBoard",
        },
        
      ];
    return (
        <>
        <Sidebar/>
        <div className="pt-28 md:pt-20" id="products">
        <div className="p-6 py-4 flex flex-col justify-start items-start">
        <div className="flex space-x-2">
                    <Link to="/products">
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        Products
                      </a>
                    </Link>
                    <span>/</span>
                    <Link to={`/products/shoring`}>
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        Shoring
                      </a>
                    </Link>
                  </div>
          
          <h1 className="text-left text-2xl font-bold text-gray-700">
           Shoring
          </h1>
          <div className="text-gray-600 w-full body-font transition grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
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
    )
}
