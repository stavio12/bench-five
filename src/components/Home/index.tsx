import React, { useEffect, useState } from "react";
import DispatchContext from "../../DispatchContext";
import Buttons from "./Buttons";
import DiscProduct from "./DiscProduct";
import BooksProduct from "./BooksProduct";
import FurnitureProduct from "./FurnitureProduct";
import { Books, DVD, Furniture } from "../../States/types";
import { useContext } from "react";

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

  const [pagination, setPagination] = useState<number>(4);

  const productsType = ["DVD", "Furniture", "Books"];

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

  const selectWorker = (sku: string, checked: boolean, type: string) => {
    setSelectProductEdit({ type, sku });
    //check if product is checked,
    // if it's checked add to array for deletion else remove from array when unchecked
    if (checked) {
      setSelectedProducts([...selectedProducts, sku]);
    } else {
      const newSelect = selectedProducts.filter((item) => item !== sku);

      setSelectedProducts(newSelect);
    }
  };

  const massDelete = () => {
    const newDVD = dvd.filter(
      (item) => !selectedProducts.find((f) => f === item.SKU)
    );
    setDVD(newDVD);

    const newBooks = books.filter(
      (item) => !selectedProducts.find((f) => f === item.SKU)
    );
    setBooks(newBooks);

    const newFurniture = furniture.filter(
      (item) => !selectedProducts.find((f) => f === item.SKU)
    );
    setFurniture(newFurniture);

    dispatch({
      type: "DVD",
      payload: newDVD,
    });

    dispatch({
      type: "BOOKS",
      payload: newBooks,
    });

    dispatch({
      type: "FURNITURE",
      payload: newFurniture,
    });

    productsType.map((type: string) =>
      localStorage.setItem(
        `${type}`,
        JSON.stringify(
          (type === "DVD" && newDVD) ||
            (type === "Books" && newBooks) ||
            (type === "Furniture" && newFurniture)
        )
      )
    );

    return setSelectedProducts([]);
  };

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
              onClick={() => massDelete()}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 pb-5 gap-5 ">
                <DiscProduct
                  selectWorker={selectWorker}
                  dvd={dvd}
                  pagination={pagination}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 pb-5 gap-5 ">
                <BooksProduct
                  selectWorker={selectWorker}
                  books={books}
                  pagination={pagination}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 pb-5  gap-5 ">
                <FurnitureProduct
                  selectWorker={selectWorker}
                  furniture={furniture}
                  pagination={pagination}
                />
              </div>
            </div>
            <div
              className={
                furniture.length > 4 || dvd.length > 4 || books.length > 4
                  ? "text-center pb-5"
                  : "hidden"
              }
            >
              <button
                onClick={() =>
                  pagination > 4
                    ? setPagination(pagination - 4)
                    : setPagination(pagination)
                }
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                disabled={pagination < 4}
              >
                Previous
              </button>

              <button
                onClick={() => setPagination(pagination + 4)}
                className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
