import React, { useState } from "react";
import { baseProduct } from "../../States/reducer";
import { BaseProduct, Books, DVD, Furniture } from "../../States/types";
import BookInput from "./BookInput";
import DiscInput from "./DiscInput";
import FurnitureInput from "./FurnitureInput";

interface props {
  book: (book: Books) => void;
  dvd: (dvd: DVD) => void;
  setFurniture: (furniture: Furniture) => void;
  furniture: Furniture;
  setBaseForm: (baseForm: BaseProduct) => void;
  productType: (type: string) => void;
  selectedProductType: string;
  baseForm: BaseProduct;
}

const AddProduct = ({
  book,
  dvd,
  furniture,
  baseForm,
  setFurniture,
  setBaseForm,
  productType,
  selectedProductType,
}: props) => {
  const productsType = ["dvd", "furniture", "book"];

  return (
    <>
      <section id="AddProduct">
        <div className="grid grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-5">
          <div>
            <label
              htmlFor="SKU"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              SKU{" "}
            </label>
            <input
              id="sku"
              type="text"
              onChange={(e) =>
                setBaseForm({ ...baseForm, SKU: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product SKU"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("Enter SKU")
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              onChange={(e) =>
                setBaseForm({ ...baseForm, name: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product name"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Enter product name"
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="number"
              onChange={(e) =>
                setBaseForm({
                  ...baseForm,
                  price: Number(e.target.value),
                })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product price"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Enter product price"
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="productType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select Product Type
            </label>
            <select
              id="productType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => productType(e.target.value)}
            >
              {productsType.map((type: string) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {selectedProductType === "dvd" && (
            <DiscInput size={dvd} baseForm={baseForm} />
          )}{" "}
          {selectedProductType === "book" && (
            <BookInput weight={book} baseForm={baseForm} />
          )}
          {selectedProductType === "furniture" && (
            <FurnitureInput
              dimension={setFurniture}
              baseForm={baseForm}
              furniture={furniture}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default AddProduct;
