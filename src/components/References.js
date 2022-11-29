import React from "react";
import LinkSidebar from "./linkSidebar";

export default function References() {
  const items = [
    {name: "Company Mission",link:"/infrastructure/CompanyMission"},
   {name: "Company Profile",link:"/infrastructure/CompanyProfile"},
   {name: "Location",link:"/infrastructure/Location"},
   {name: "Contact",link:"/infrastructure/Contact"},
   {name: "References",link:"/infrastructure/References"},
   {name: "Newsroom",link:"/infrastructure/Newsroom"},
  ]
  return (
    <>
      <LinkSidebar
        title={"References"}
        items={items}
      />
      <div className="mt-16" id="References">
      References
      </div>
    </>
  );
}
