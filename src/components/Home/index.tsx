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
    } else {
      console.log("NOoooooo");
    }
  }, []);

  const selectWorker = (sku: string, checked: boolean) => {
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
        <div className="flex justify-between">
          <div>
            <h1>Products</h1>
          </div>

          <div className="d-flex gap-4">
            <Buttons selectedProducts={selectedProducts} />
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
        {!localStorage["DVD"] &&
        !localStorage["Furniture"] &&
        !localStorage["Books"] ? (
          <h1 className="text-center pt-20"> No Product Available</h1>
        ) : (
          <div>
            <div className="flex-flex-column*">
              <div className="grid grid-cols-3 sm:grid-cols-4 pt-5 pb-5 gap-5 ">
                {/* {products.disc && ( */}
                <DiscProduct
                  selectWorker={selectWorker}
                  dvd={dvd}
                  pagination={pagination}
                />
                {/* )} */}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 pt-5 pb-5 gap-5 ">
                <BooksProduct
                  selectWorker={selectWorker}
                  books={books}
                  pagination={pagination}
                />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 pt-5 pb-5  gap-5 ">
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

const products = {
  disc: [
    {
      SKU: "12",
      name: "heloo",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      size: "12313",
    },
    {
      SKU: "123",
      name: "heloo",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      size: "12313",
    },
    {
      SKU: "1234",
      name: "heloo",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      size: "12313",
    },
    {
      SKU: "12345",
      name: "heloo",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      size: "12313",
    },
    {
      SKU: "123456",
      name: "heloo",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      size: "12313",
    },
    {
      SKU: "1234567",
      name: "heloo",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      size: "12313",
    },
    {
      SKU: "12345678",
      name: "heloo",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      size: "12313",
    },
  ],
  books: [
    {
      SKU: " 63   64    4",
      name: "books",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      weight: "12313",
    },
    {
      SKU: " 37   12   51",
      name: "books",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      weight: "12313",
    },
    {
      SKU: " 21   92   16",
      name: "books",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      weight: "12313",
    },
    {
      SKU: " 54   58  100",
      name: "books",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      weight: "12313",
    },
    {
      SKU: " 66   72   93",
      name: "books",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      weight: "12313",
    },
    {
      SKU: " 46   75   29",
      name: "books",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      weight: "12313",
    },
    {
      SKU: " 33   80   31",
      name: "books",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      weight: "12313",
    },
  ],

  furniture: [
    {
      SKU: " 11   68    3",
      name: "furniture",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      l: 12313,
      w: 12313,
      h: 12313,
    },
    {
      SKU: " 18   49   38",
      name: "furniture",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      l: 12313,
      w: 12313,
      h: 12313,
    },
    {
      SKU: " 41   70   48",
      name: "furniture",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      l: 12313,
      w: 12313,
      h: 12313,
    },
    {
      SKU: " 79   90   24",
      name: "furniture",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      l: 12313,
      w: 12313,
      h: 12313,
    },
    {
      SKU: " 84   96   89",
      name: "furniture",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      l: 12313,
      w: 12313,
      h: 12313,
    },
    {
      SKU: " 88   23   99",
      name: "furniture",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      l: 12313,
      w: 12313,
      h: 12313,
    },
    {
      SKU: " 47   15   62",
      name: "furniture",
      price: 1234,
      created_at: "01/02/2022, 9:30 am",
      l: 12313,
      w: 12313,
      h: 12313,
    },
  ],
};
