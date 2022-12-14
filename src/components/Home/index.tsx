import React, { useEffect, useState } from "react";
import DispatchContext from "../../DispatchContext";
import Buttons from "./Buttons";
import DiscProduct from "./DiscProduct";
import BooksProduct from "./BooksProduct";
import FurnitureProduct from "./FurnitureProduct";
import { Books, DVD, Furniture } from "../../States/types";
import { useContext } from "react";
import { massDelete } from "../../utils/functions";

const Index = () => {
  const dispatch = useContext(DispatchContext);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [dvd, setDVD] = useState<DVD[]>([]);
  const [books, setBooks] = useState<Books[]>([]);
  const [furniture, setFurniture] = useState<Furniture[]>([]);
  const [selectProductEdit, setSelectProductEdit] = useState<{
    type: string;
    sku: string;
  }>({
    type: "",
    sku: "",
  });

  const [pagination, setPagination] = useState<number>(6);

  useEffect(() => {
    if (
      localStorage["DVD"] ||
      localStorage["Furniture"] ||
      localStorage["Books"]
    ) {
      const DVD = localStorage["DVD"] ? JSON.parse(localStorage["DVD"]) : [];
      const Books = localStorage["Books"]
        ? JSON.parse(localStorage["Books"])
        : [];
      const Furniture = localStorage["Furniture"]
        ? JSON.parse(localStorage["Furniture"])
        : [];

      setDVD(DVD);
      setBooks(Books);
      setFurniture(Furniture);

      dispatch({
        type: "DVD",
        payload: DVD,
      });

      dispatch({
        type: "BOOKS",
        payload: Books,
      });

      dispatch({
        type: "FURNITURE",
        payload: Furniture,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between">
          <div>
            <h1>Products</h1>
          </div>

          <div className="d-flex gap-4">
            <Buttons
              selectedProducts={selectedProducts}
              selectProductEdit={selectProductEdit}
            />
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              disabled={selectedProducts.length === 0}
              onClick={() =>
                massDelete(
                  dvd,
                  selectedProducts,
                  books,
                  furniture,
                  setFurniture,
                  setBooks,
                  setDVD,
                  dispatch,
                  setSelectedProducts,
                  setPagination
                )
              }
            >
              Mass Delete
            </button>
          </div>
        </div>
        <hr />
        {(!localStorage["DVD"] &&
          !localStorage["Furniture"] &&
          !localStorage["Books"]) ||
        (dvd.length === 0 && books.length === 0 && furniture.length === 0) ? (
          <h1 className="text-center pt-20"> No Product Available</h1>
        ) : (
          <div>
            <div className="flex-flex-column*">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 pb-5 gap-5 ">
                {[...furniture, ...dvd, ...books]
                  //check if  pagination is equal to 4 then slice at 0 and the pagination number
                  //else subtract 4 from pagination number
                  .slice(pagination === 6 ? 0 : pagination - 6, pagination)
                  .map((product: any) => (
                    <div key={product.SKU} className="flex justify-center">
                      <div className="product_card* flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        {product.size && (
                          <DiscProduct
                            setSelectedProducts={setSelectedProducts}
                            setSelectProductEdit={setSelectProductEdit}
                            selectedProducts={selectedProducts}
                            dvd={product}
                          />
                        )}

                        {product.weight && (
                          <BooksProduct
                            setSelectedProducts={setSelectedProducts}
                            setSelectProductEdit={setSelectProductEdit}
                            selectedProducts={selectedProducts}
                            books={product}
                          />
                        )}
                        {product.l && (
                          <FurnitureProduct
                            setSelectedProducts={setSelectedProducts}
                            setSelectProductEdit={setSelectProductEdit}
                            selectedProducts={selectedProducts}
                            furniture={product}
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={
                [...furniture, ...dvd, ...books].length > 5
                  ? "text-center pb-5"
                  : "hidden"
              }
            >
              <button
                onClick={() =>
                  pagination > 6
                    ? setPagination(pagination - 6)
                    : setPagination(pagination)
                }
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                disabled={pagination <= 6}
              >
                Previous
              </button>

              <button
                onClick={() => setPagination(pagination + 6)}
                className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                disabled={[...furniture, ...dvd, ...books].length <= pagination}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
