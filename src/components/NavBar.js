import React from "react";
import Dropdown from "./Dropdown";
import AccordionItem from "./Accordion";
import {Link} from 'react-router-dom';

export default function NavBar() {
  // const products = [
  //   "Scaffolding", "Shoring", "Formwork", "Other Products"
  // ];
  return (
    <div>
      <header className="text-gray-600 body-font border-b border-gray-200 bg-white fixed top-0 right-0 left-0 z-20">
        <div className=" flex flex-wrap p-2 flex-row md:flex-row items-center">
          <span className="ml-3 text-xl"><img className="w-36" src="https://scaffoldings.beldra.com/images/logo.png" alt=""/></span>
          <div className="absolute top-3 right-0 block md:hidden">
          {/* <AccordionItem
        item={null}
        subItems={[
          "Home",
          "Products",
          "Infrastructure",
          "References"
        ]}
        links={[
          "/",
          "/products",
          "/infrastructure",
          "/references"
        ]}
      /> */}
      </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center hidden md:flex">
            <Link to={"/"}>
            <a
              href="//#"
              className="inline-flex justify-center rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none  "
            >
              Home
            </a>
            </Link>
            <Dropdown
              dropdownTitle={"Products"}
              dropdownItem={["Shoring", "Formwork", "Scaffolding"]}
              linkTo ={"/products"}
            />
            <Dropdown
              dropdownTitle={"Infrastructure"}
              dropdownItem={[
                "Design & Development",
                "Pattern & Dies",
                "Lab Testing",
                "Casting-Forging",
                "Shot Blasting",
                "Grinding",
                "Machining",
                "Welding",
                "Zinc & Electroplating",
                "Quality Check & Packing",
              ]}
              linkTo ={"/infrastructure"}
            />
            <Dropdown
              dropdownTitle={"References"}
              dropdownItem={[
                "Company Mission",
                "Company Profile",
                "Location",
                "Contact",
                "References",
                "Newsroom"
              ]}
              linkTo ={"/references"}
            />
            
          </nav>
          
        </div>
      </header>
      {/* {<nav className="flex flex-col md:flex-row lg:flex-row justify-center items-center text-base md:ml-auto">
          <a href={() => false} className="mr-5 hover:text-gray-900">Home</a>
          <a href={() => false} className="mr-5 hover:text-gray-900">About</a>
        </nav>} */}
    </div>
  );
}
