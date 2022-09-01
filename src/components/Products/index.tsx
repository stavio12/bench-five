import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import StateContext from "../../StateContext";
import { baseProduct } from "../../States/reducer";
import { BaseProduct, Books, Disc, Furniture } from "../../States/types";

import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Index = () => {
  const { editProduct } = useContext(StateContext);

  const [selectProductType, setSelectProductType] = useState<string>("disc");

  const [productForms, setProductForms] = useState<BaseProduct>({
    ...baseProduct,
  });

  const [booksForm, setBooksForms] = useState<Books>({
    ...productForms,
    weight: "",
  });

  const [discForm, setDiscForm] = useState<Disc>({
    ...productForms,
    size: "",
  });

  const [furnitureForm, setFurnitureForm] = useState<Furniture>({
    ...productForms,
    h: 0,
    w: 0,
    l: 0,
  });

  const submit = (e: any) => {
    e.preventDefault();
    console.log("disc", discForm);
    console.log("books", booksForm);
    console.log("furniture", furnitureForm);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div className="flex justify-between">
          <h1>Product {editProduct ? "Edit" : "Add"} </h1>

          <div className="d-flex gap-4">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
            <Link
              to="/"
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Cancel
            </Link>
          </div>
        </div>
        <hr />
        {!editProduct && (
          <AddProduct
            book={setBooksForms}
            disc={setDiscForm}
            setFurniture={setFurnitureForm}
            furniture={furnitureForm}
            setBaseForm={setProductForms}
            baseForm={productForms}
            productType={setSelectProductType}
            selectedProductType={selectProductType}
          />
        )}
        {editProduct && (
          <EditProduct
            book={setBooksForms}
            disc={setDiscForm}
            setFurniture={setFurnitureForm}
            furniture={furnitureForm}
            setBaseForm={setProductForms}
            baseForm={productForms}
            productType={setSelectProductType}
            selectedProductType={selectProductType}
          />
        )}
      </form>
    </>
  );
};

export default Index;
