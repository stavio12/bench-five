import React from "react";
import { DVD } from "../../States/types";
import { selectWorker } from "../../utils/functions";

interface props {
  dvd: DVD;
  // selectWorker: (sku: string, checked: boolean, DVD: string) => void;
  pagination: number;
  selectedProducts: string[];
  setSelectProductEdit: (products: { type: string; sku: string }) => void;
  setSelectedProducts: (products: string[]) => void;
}

const DiscProduct = ({
  dvd,
  pagination,
  selectedProducts,
  setSelectProductEdit,
  setSelectedProducts,
}: props) => {
  return (
    <>
      {/* {dvd
        //check if  pagination is equal to 4 then slice at 0 and the pagination number
        //else subtract 4 from pagination number
        .slice(pagination === 4 ? 0 : pagination - 4, pagination)
        .map((dvd: DVD) => ( */}
      <div className="flex items-center">
        <input
          onChange={(e) =>
            selectWorker(
              e.target.value,
              e.target.checked,
              "DVD",
              selectedProducts,
              setSelectProductEdit,
              setSelectedProducts
            )
          }
          id="checked-checkbox"
          type="checkbox"
          value={dvd.SKU}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <small> SKU : {dvd.SKU}</small>
      <h5 className="text-ellipsis overflow-hidden">
        <a
          href={dvd.img}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {dvd.name}
        </a>
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <h1 className="text-5xl"> {dvd.price} $</h1>

      <div className="flex items-center gap-2">
        <small>Size : </small> <h5>{dvd.size} MB</h5>
      </div>
      {/* ))} */}
    </>
  );
};

export default DiscProduct;
