import React from "react";
import AccordionItem from "./Accordion";

export default function Sidebar() {
  return (
    <div id="Sidebar" className="flex flex-col bg-gray-50 h-screen px-2 border border-r border-gray-200 fixed top-16 mt-4">
      <h1 className="text-xl my-4 ml-4 text-gray-700 text-left font-semibold">
        Our Segments
      </h1>
      <AccordionItem
        item={"Formwork"}
        subItems={[
          {title:"Formwork Panel & Accessories",link:"/products/formwork/FormworkPanelAccessories"},
          {title:"Formwork Products",link:"/products/formwork/FormworkProducts"},
          {title:"Concrete Accessories",link:"/products/formwork/ConcreteAccessories"},
        ]}
      />
      <AccordionItem
        item={"Scaffolding"}
        subItems={[
          {title:"Scaffolding Forged Clamps",link:"/products/scaffolding/ScaffoldingForgedClamps"},
          {title:"Scaffolding Pressed Clamps",link:"/products/scaffolding/ScaffoldingPressedClamps"},
          {title:"Scaffolding Frame System",link:"/products/scaffolding/ScaffoldingFrameSystem"},
          {title:"Scaffolding Accessories",link:"/products/scaffolding/ScaffoldingAccessories"},
          {title:"Ring Lock System",link:"/products/scaffolding/RingLockSystem"},
          {title:"Cup Lock System",link:"/products/scaffolding/CupLockSystem"},
          {title:"Kwickstage System",link:"/products/scaffolding/KwickstageSystem"},
        ]}
      />
      <AccordionItem
        item={"Shoring"}
        subItems={[
          {title:"Prop & Accessories",link:"/products/scaffolding/PropsAccessories"},
          {title:"Shoring Frame System",link:"/products/scaffolding/ShoringFrameSystem"},
          {title:"Adjustable Jacks",link:"/products/scaffolding/AdjustableJacks"},
          {title:"Beam/Tube",link:"/products/scaffolding/BeamTube"},
          {title:"Walk Board",link:"/products/scaffolding/WalkBoard"},
        ]}
      />
      <AccordionItem
        item={"Other Products"}
        subItems={[
          {title:"Safety Guard / Barriers",link:"/products/scaffolding/SafetyGuardBarriers"},
          {title:"Block Ladder",link:"/products/scaffolding/BlockLadder"},
          {title:"Strut Channel",link:"/products/scaffolding/StrutsChannel"},
          {title:"Safety Products",link:"/products/scaffolding/SafetyProducts"},
        ]}
      />
    </div>
  );
}
