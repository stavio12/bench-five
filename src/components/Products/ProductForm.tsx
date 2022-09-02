import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import StateContext from "../../StateContext";

import { BaseProduct, Books, DVD, Furniture } from "../../States/types";
import BookInput from "./BookInput";
import DiscInput from "./DiscInput";
import FurnitureInput from "./FurnitureInput";

interface props {
  setBook: (book: Books) => void;
  setDVD: (dvd: DVD) => void;
  setFurniture: (furniture: Furniture) => void;
  furniture: Furniture;
  setBaseForm: (baseForm: BaseProduct) => void;
  productType: (type: string) => void;
  selectedProductType: string;
  baseForm: BaseProduct;
  book: Books;
  dvd: DVD;
  disableInputs: boolean;
}

const ProductForm = ({
  book,
  dvd,
  furniture,
  baseForm,
  setFurniture,
  setBaseForm,
  productType,
  selectedProductType,
  setDVD,
  setBook,
  disableInputs,
}: props) => {
  const productsType = ["DVD", "Furniture", "Books"];
  const { editProduct } = useContext(StateContext);

  const { product, type, edit } = editProduct;

  useEffect(() => {
    //if there isnt any product and no type return to homepage
    if (product && type) {
      setBaseForm(product);
      setFurniture(product);
      setDVD(product);
      setBook(product);
      productType(type);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="ProductForm">
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
              value={baseForm?.SKU ? baseForm?.SKU : ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product SKU"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Enter product SKU"
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              disabled={disableInputs}
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
              value={baseForm?.name ? baseForm?.name : ""}
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
              disabled={disableInputs}
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
              value={baseForm?.price ? baseForm?.price : ""}
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
              disabled={disableInputs}
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
              disabled={edit || disableInputs}
            >
              {productsType.map((type: string) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {selectedProductType === "DVD" && (
            <DiscInput
              disableInputs={disableInputs}
              setSize={setDVD}
              size={dvd}
              baseForm={baseForm}
            />
          )}{" "}
          {selectedProductType === "Books" && (
            <BookInput
              disableInputs={disableInputs}
              setWeight={setBook}
              weight={book}
              baseForm={baseForm}
            />
          )}
          {selectedProductType === "Furniture" && (
            <FurnitureInput
              disableInputs={disableInputs}
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

export default ProductForm;
