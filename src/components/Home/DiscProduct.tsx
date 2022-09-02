import React from "react";
import { DVD } from "../../States/types";

interface props {
  dvd: DVD[];
  selectWorker: (sku: string, checked: boolean, DVD: string) => void;
  pagination: number;
}

const DiscProduct = ({ dvd, selectWorker, pagination }: props) => {
  return (
    <>
      {dvd
        //check if  pagination is equal to 4 then slice at 0 and the pagination number
        //else subtract 4 from pagination number
        .slice(pagination === 4 ? 0 : pagination - 4, pagination)
        .map((dvd: DVD) => (
          <div className="col-span-full*" key={dvd.SKU}>
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <div className="flex items-center">
                <input
                  onChange={(e) =>
                    selectWorker(e.target.value, e.target.checked, "DVD")
                  }
                  id="checked-checkbox"
                  type="checkbox"
                  value={dvd.SKU}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <small> SKU : {dvd.SKU}</small>
              <h5>
                <a
                  href={dvd.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  name : {dvd.name}
                </a>
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <h1 className="text-5xl"> {dvd.price} $</h1>

              <div className="flex items-center gap-2">
                <small>Size : </small> <h5>{dvd.size} MB</h5>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default DiscProduct;
