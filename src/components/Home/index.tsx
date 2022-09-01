import React, { useEffect, useState } from "react";
// import DispatchContext from "../../DispatchContext";
import Buttons from "./Buttons";
import DiscProduct from "./DiscProduct";
import BooksProduct from "./BooksProduct";
import FurnitureProduct from "./FurnitureProduct";
import { Books, DVD, Furniture } from "../../States/types";

const Index = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [dvd, setDVD] = useState<DVD[]>([...products.disc]);
  const [books, setBooks] = useState<Books[]>([...products.books]);
  const [furniture, setFurniture] = useState<Furniture[]>([
    ...products.furniture,
  ]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

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
        <div className="flex-flex-column*">
          <div className="grid grid-cols-3 sm:grid-cols-4 pb-5 gap-5 ">
            {/* {products.disc && ( */}
            <DiscProduct selectWorker={selectWorker} dvd={dvd} />
            {/* )} */}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 pb-5 gap-5 ">
            <BooksProduct selectWorker={selectWorker} books={books} />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 pb-5  gap-5 ">
            <FurnitureProduct
              selectWorker={selectWorker}
              furniture={furniture}
            />
          </div>
        </div>
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
