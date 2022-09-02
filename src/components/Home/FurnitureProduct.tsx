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
              <small> SKU: {furniture.SKU}</small>
              <h5>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  name: {furniture.name}
                </Link>
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
              price :$ {furniture.price}
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </div>
          </div>
        ))}
    </>
  );
};

export default FurnitureProduct;
