import React from "react";
import { Link } from "react-router-dom";
import { Furniture } from "../../States/types";
import { selectWorker } from "../../utils/functions";

interface props {
  furniture: Furniture;
  // selectWorker: (sku: string, checked: boolean, DVD: string) => void;
  pagination: number;
  selectedProducts: string[];
  setSelectProductEdit: (products: { type: string; sku: string }) => void;
  setSelectedProducts: (products: string[]) => void;
}

const FurnitureProduct = ({
  furniture,
  pagination,
  selectedProducts,
  setSelectProductEdit,
  setSelectedProducts,
}: props) => {
  return (
    <>
      <div className="flex items-center">
        <input
          onChange={(e) =>
            selectWorker(
              e.target.value,
              e.target.checked,
              "Furniture",
              selectedProducts,
              setSelectProductEdit,
              setSelectedProducts
            )
          }
          id="checked-checkbox"
          type="checkbox"
          value={furniture.SKU}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <small> SKU : {furniture.SKU}</small>
      <h5 className="text-ellipsis overflow-hidden">
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {furniture.name}
        </Link>
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex items-center gap-2">
        <small>Dimension : </small>{" "}
        <h5>
          {furniture.h} x {furniture.w} x {furniture.l}
        </h5>
      </div>
      <h1 className="text-5xl"> {furniture.price} $</h1>
    </>
  );
};

export default FurnitureProduct;
