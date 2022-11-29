import React from 'react'
import Sidebar from "./Sidebar";
import HeadingCard from "./HeadingCard";
import { Link } from "react-router-dom";

export default function Products() {
    const tabLinks = [
        {
          imgSrc: "http://indianscaffolding.com/images/form.jpg",
          name: "Formwork",
          link: "/products/formwork",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/scaff1.jpg",
          name: "Scaffolding",
          link: "/products/scaffolding",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/shorin121g.jpg",
          name: "Shoring",
          link: "/products/shoring",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/other/safetyF.jpg",
          name: "Other Products",
          link: "/products/otherProducts",
        },
        
      ];
    return (
        <>
        <Sidebar/>
        <div className="pt-28 md:pt-20" id="products">
        <div className="p-6 py-4 flex flex-col justify-start items-start">
          <Link to="/products">
            <a
              href="//#"
              className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
            >
              Products
            </a>
          </Link>
          <h1 className="text-left text-2xl font-bold text-gray-700">
           System Groups
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
