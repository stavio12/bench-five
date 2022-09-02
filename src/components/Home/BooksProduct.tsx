import React from "react";
import { Link } from "react-router-dom";
import { Books } from "../../States/types";

interface props {
  books: Books[];
  selectWorker: (sku: string, checked: boolean, Books: string) => void;
  pagination: number;
}

const BooksProduct = ({ books, selectWorker, pagination }: props) => {
  return (
    <>
      {books
        //check if  pagination is equal to 4 then slice at 0 and the pagination number
        //else subtract 4 from pagination number
        .slice(pagination === 4 ? 0 : pagination - 4, pagination)
        .map((book: Books) => (
          <div className="col-span-full*" key={book.SKU}>
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center">
                <input
                  onChange={(e) =>
                    selectWorker(e.target.value, e.target.checked, "Books")
                  }
                  id="checked-checkbox"
                  type="checkbox"
                  value={book.SKU}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <small> SKU : {book.SKU}</small>
              <h5>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  name : {book.name}
                </Link>
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <h1 className="text-5xl"> {book.price} $</h1>

              <div className="flex items-center gap-2">
                <small>Weight : </small> <h5>{book.weight} KG</h5>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default BooksProduct;
