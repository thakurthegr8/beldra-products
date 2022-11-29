import React from "react";
import {Link} from 'react-router-dom'
export default function ScrollNavbar() {
    const links = [{
        name:"Formwork",
        link:"/products/formwork",
    },
    {
        name:"Scaffolding",
        link:"/products/scaffolding",
    },
    {
        name:"Shoring",
        link:"/products/shoring",
    },
    {
        name:"Other Products",
        link:"/products/otherProducts",
    },]
  return (
    <div className="mt-16 top-2 right-0 left-0 flex fixed bg-white md:hidden z-10 shadow-sm">
      <nav className="overflow-x-auto no-scroll mask w-max">
        <ul className="flex py-4 space-x-2 overflow-x-auto w-max px-2">
            {links.map((item)=>{
                return(
                    <li>
                        <Link to ={item.link}>
                    <a href="//#" class="border text-sm bg-gray-50 text-gray-400 font-semibold p-2 rounded-full transition hover:border-yellow-400 hover:text-yellow-700 hover:bg-yellow-200">{item.name}</a>
                    </Link>
                  </li> 
                )
            })}
        </ul>
      </nav>
    </div>
  );
}
