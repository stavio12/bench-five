import React from "react";
import { DVD } from "../../States/types";
import { selectWorker } from "../../utils/functions";

interface props {
  dvd: DVD;
  selectedProducts: string[];
  setSelectProductEdit: (products: { type: string; sku: string }) => void;
  setSelectedProducts: (products: string[]) => void;
}

const DiscProduct = ({
  dvd,
  selectedProducts,
  setSelectProductEdit,
  setSelectedProducts,
}: props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img
            className="rounded-t-lg"
            src="https://bit.ly/3AHL3Kk"
            alt="DVD"
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
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
              <small className="w-20 text-ellipsis overflow-hidden whitespace-nowrap">
                {dvd.SKU}
              </small>
            </div>

            <div className="flex justify-between mb-5">
              <a
                href={dvd.img}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white w-24 text-ellipsis overflow-hidden whitespace-nowrap"
              >
                {dvd.name}
              </a>

              <h5>{dvd.size} MB</h5>
            </div>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <h1 className="text-3xl"> {dvd.price} $</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscProduct;
