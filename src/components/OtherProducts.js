import React from 'react'
import Sidebar from "./Sidebar";
import HeadingCard from "./HeadingCard";
import { Link } from "react-router-dom";

export default function OtherProducts() {
    const tabLinks = [
        {
          imgSrc: "http://indianscaffolding.com/images/form.jpg",
          name: "Safety Guard/Barriers",
          link: "/products/otherProducts/SafetyGuardBarriers",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/scaff1.jpg",
          name: "Block Ladder",
          link: "/products/otherProducts/BlockLadder",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/shorin121g.jpg",
          name: "Strut Channels",
          link: "/products/otherProducts/StrutsChannel",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/other/safetyF.jpg",
          name: "Safety Products",
          link: "/products/otherProducts/SafetyProducts",
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
                    <Link to={`/products/otherProducts`}>
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        Other Products
                      </a>
                    </Link>
                  </div>
          <h1 className="text-left text-2xl font-bold text-gray-700">
           Other Products
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
