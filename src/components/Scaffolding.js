import React from 'react'
import Sidebar from "./Sidebar";
import HeadingCard from "./HeadingCard";
import { Link } from "react-router-dom";

export default function Scaffolding() {
    const tabLinks = [
        {
          imgSrc: "http://indianscaffolding.com/images/scaffolding/ScaffoldingForgedClamps.jpg",
          name: "Scaffolding Forged Clamps",
          link: "/products/scaffolding/ScaffoldingForgedClamps",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/scaffolding/ScaffoldingPressedClamps.jpg",
          name: "Scaffolding Pressed Clamps",
          link: "/products/scaffolding/ScaffoldingPressedClamps",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/scaffolding/scaf_sys.JPG",
          name: "Scaffolding Frame System",
          link: "/products/scaffolding/ScaffoldingFrameSystem",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/scaff_acces.jpg",
          name: "Scaffolding Accessories ",
          link: "/products/scaffolding/ScaffoldingAccessories",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/scaffolding/Ringlock.jpg",
          name: "Ring Lock System",
          link: "/products/scaffolding/RingLockSystem",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/scaffolding/CupLock.jpeg",
          name: "Cup Lock System",
          link: "/products/scaffolding/CupLockSystem",
        },
        {
          imgSrc: "http://indianscaffolding.com/images/System-Scaffolding.jpg",
          name: "Kwikstage System",
          link: "/products/scaffolding/KwickstageSystem",
        },
      ];
    return (
        <>
        <Sidebar/>
        <div className="pt-28 md:pt-16" id="products">
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
                    <Link to={`/products/scaffolding`}>
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        Scaffolding
                      </a>
                    </Link>
                  </div>
                  
          <h1 className="text-left text-2xl font-bold text-gray-700">
          Scaffolding
          </h1>
          <div className="text-gray-600 w-full body-font transition grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
