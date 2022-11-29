import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import description from './productDetails';

export default function ProductOnlySection({ match }) {

  return (
    <>
      <Sidebar />
      <div className="productDesc pt-28 md:pt-20 mb-8">
        {description.map((item) => {
          if (match.params.link === item.subCategoryId && item.only == "TRUE") {
            return (
              <>
                <div className="p-6 py-4 flex flex-col justify-start items-start">
                  <div className="flex space-x-2">
                    <Link to={"/products"}>
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        Products
                      </a>
                    </Link>
                    <span>/</span>
                    <Link to={`/products/${item.categoryId}`}>
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        {item.category}
                      </a>
                    </Link>
                    <span>/</span>
                    <Link to={`/products/formwork/${match.params.link}`}>
                      <a
                        href="//#"
                        className="inline-flex justify-center rounded-md  bg-white text-sm font-medium text-gray-700 hover:underline focus:outline-none  "
                      >
                        {item.subCategory}
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-left text-2xl font-bold text-gray-700">
                      {item.subCategory}
                    </h1>
                  </div>
                </div>
              </>
            );
          }
        })}
        <div className="text-gray-600 w-full body-font transition grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-6 mx-auto container md:gap-2">
            {
                description.map((item)=>{
                    if(match.params.link === item.subCategoryId){
                    return(
                        <ProductCard category={item.subCategory} product ={item.productName} imgData ={item.imgSrc}/>
                    )
                    }
                })
            }
        
        </div>
      </div>
    </>
  );
}
