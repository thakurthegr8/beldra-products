import React from "react";
import Sidebar from "./Sidebar";
import ImageCard from "./ImageCard";
import DescriptionList from "./DescriptionList";
import ScrollNavbar from "./ScrollNavbar";
export default function Main(props) {
  return (
    <>
    
    <Sidebar/>
    <section className="text-gray-600 body-font transition grid grid-cols-1 lg:grid-cols-2 gap-0 mt-28 md:mt-20  mx-2 md:mx-0" id="main">
      <ImageCard
        imgData={
          "/images/scaffolding_header.jpg"
        }
        imgName={"Scaffolding"}
        imgDesc={
          "Scaffolding, also called staging, is a temporary structure used to support people and material in the construction or repair of buildings and other structures. Scaffolding has been used since ancient times. There are many kinds of prefabricated, modular system of metal pipes or tubes, although it can be custom made from other materials such as wood and bamboo which is frequently used in Southeast Asia."
        }
      />
      <ImageCard
        imgData={
          "/images/formwork_header.jpg"
        }
        imgName={"Formwork"}
        imgDesc={
          "Formwork is the term given to either temporary or permanent molds into which concrete or similar materials are poured. In the context of concrete construction, the falsework supports the shuttering moulds.To mould this structure, temporary scaffolding and formwork or falsework was built in the future shape of the structure. These building techniques were not isolated to pouring concrete."
        }
      />
      <ImageCard
        imgData={
          "/images/shoring_header.jpg"
        }
        imgName={"Shoring"}
        imgDesc={
          "Shoring is the process of supporting a building, vessel, structure, or trench with shores (props) when in danger of collapse or during repairs or alterations. Shoring comes from shore a timber or metal prop.A shoring system such as piles and lagging or shotcrete will support the surrounding loads until the underground levels of the building are constructed. Shoring may be vertical, angled, or horizontal."
        }
      />
      <DescriptionList/>
    </section>
    </>
  );
}
