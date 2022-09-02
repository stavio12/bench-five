import React from "react";
import { Link } from "react-router-dom";
import { Books } from "../../States/types";
import { selectWorker } from "../../utils/functions";

interface props {
  books: Books;
  // selectWorker: (sku: string, checked: boolean, DVD: string) => void;
  pagination: number;
  selectedProducts: string[];
  setSelectProductEdit: (products: { type: string; sku: string }) => void;
  setSelectedProducts: (products: string[]) => void;
}

const BooksProduct = ({
  books,
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
              "Books",
              selectedProducts,
              setSelectProductEdit,
              setSelectedProducts
            )
          }
          id="checked-checkbox"
          type="checkbox"
          value={books.SKU}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <small> SKU : {books.SKU}</small>
      <h5 className="text-ellipsis overflow-hidden">
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white "
        >
          {books.name}
        </Link>
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex items-center gap-2">
        <small>Weight : </small> <h5>{books.weight} KG</h5>
      </div>
      <h1 className="text-5xl"> {books.price} $</h1>
    </>
  );
};

export default BooksProduct;
