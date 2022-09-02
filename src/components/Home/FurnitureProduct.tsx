import React from "react";
import { Link } from "react-router-dom";
import { Furniture } from "../../States/types";

interface props {
  furniture: Furniture[];
  selectWorker: (sku: string, checked: boolean, Furniture: string) => void;
  pagination: number;
}

const FurnitureProduct = ({ furniture, selectWorker, pagination }: props) => {
  return (
    <>
      {furniture
        //check if  pagination is equal to 4 then slice at 0 and the pagination number
        //else subtract 4 from pagination number
        .slice(pagination === 4 ? 0 : pagination - 4, pagination)
        .map((furniture: Furniture) => (
          <div className="col-span-full*" key={furniture.SKU}>
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center">
                <input
                  onChange={(e) =>
                    selectWorker(e.target.value, e.target.checked, "Furniture")
                  }
                  id="checked-checkbox"
                  type="checkbox"
                  value={furniture.SKU}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <small> SKU : {furniture.SKU}</small>
              <h5>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  name : {furniture.name}
                </Link>
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <h1 className="text-5xl"> {furniture.price} $</h1>

              <div className="flex items-center gap-2">
                <small>Dimension : </small>{" "}
                <h5>
                  {furniture.h} x {furniture.w} x {furniture.l}
                </h5>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FurnitureProduct;
