import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";
import { baseProduct } from "../../States/reducer";
import { BaseProduct, Books, DVD, Furniture } from "../../States/types";

// import AddProduct from "./AddProduct";
import ProductForm from "./ProductForm";

const Index = () => {
  let navigate = useNavigate();
  const state = useContext(StateContext);

  const { editProduct, dvd, books, furniture } = state;
  const dispatch = useContext(DispatchContext);

  const [selectProductType, setSelectProductType] = useState<string>("DVD");

  const [productForms, setProductForms] = useState<BaseProduct>({
    ...baseProduct,
  });

  const [booksForm, setBooksForms] = useState<Books>({
    ...productForms,
    weight: "",
  });

  const [dvdForm, setDvdForm] = useState<DVD>({
    ...productForms,
    size: "",
  });

  const [furnitureForm, setFurnitureForm] = useState<Furniture>({
    ...productForms,
    h: null,
    w: null,
    l: null,
  });

  const allProducts = [...dvd, ...books, ...furniture];

  const { edit, type, product } = editProduct;

  const submit = (e: any) => {
    e.preventDefault();

    if (edit) {
      const products = state[type.toLocaleLowerCase()];
      //find index number of product from array
      const newIndex = products.findIndex(
        (item: any) => item.SKU === product.SKU
      );

      const newDVD = dvdForm;
      const newBooks = booksForm;
      const newFurniture = furnitureForm;

      //update product object with new data
      products[Number(`${newIndex}`)] =
        (type === "DVD" && newDVD) ||
        (type === "Books" && newBooks) ||
        (type === "Furniture" && newFurniture);

      // save in local storage
      localStorage.setItem(
        `${type}`,
        JSON.stringify(
          (type === "DVD" && products) ||
            (type === "Books" && products) ||
            (type === "Furniture" && products)
        )
      );

      dispatch({
        type: "EDIT_PRODUCT",
        payload: {
          edit: false,
          product: null,
          type: null,
        },
      });
    } else {
      if (
        allProducts.find((product: any) => product.SKU === productForms.SKU)
      ) {
        const sku = document.querySelector("#sku");

        //@ts-ignore
        return (sku.value = "");
      } else {
        const newDVD = [...dvd, dvdForm];
        const newBooks = [...books, booksForm];
        const newFurniture = [...furniture, furnitureForm];

        selectProductType === "DVD" &&
          dispatch({
            type: "DVD",
            payload: newDVD,
          });

        selectProductType === "Book" &&
          dispatch({
            type: "BOOKS",
            payload: newBooks,
          });

        selectProductType === "Furniture" &&
          dispatch({
            type: "FURNITURE",
            payload: newFurniture,
          });

        localStorage.setItem(
          `${selectProductType}`,
          JSON.stringify(
            (selectProductType === "DVD" && newDVD) ||
              (selectProductType === "Books" && newBooks) ||
              (selectProductType === "Furniture" && newFurniture)
          )
        );
      }
    }

    return navigate("/");
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between">
          <h1>Product {edit ? "Edit" : "Add"} </h1>

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

        <ProductForm
          book={booksForm}
          setBook={setBooksForms}
          dvd={dvdForm}
          setDVD={setDvdForm}
          setFurniture={setFurnitureForm}
          furniture={furnitureForm}
          setBaseForm={setProductForms}
          baseForm={productForms}
          productType={setSelectProductType}
          selectedProductType={selectProductType}
        />
        {/* {edit ? (
          <EditProduct
            book={booksForm}
            setBook={setBooksForms}
            dvd={dvdForm}
            setDVD={setDvdForm}
            setFurniture={setFurnitureForm}
            furniture={furnitureForm}
            setBaseForm={setProductForms}
            baseForm={productForms}
            productType={setSelectProductType}
            selectedProductType={selectProductType}
          />
        ) : (
          <AddProduct
            book={booksForm}
            setBook={setBooksForms}
            dvd={dvdForm}
            setDVD={setDvdForm}
            setFurniture={setFurnitureForm}
            furniture={furnitureForm}
            setBaseForm={setProductForms}
            baseForm={productForms}
            productType={setSelectProductType}
            selectedProductType={selectProductType}
          />
        )} */}
      </form>
    </>
  );
};

export default Index;
