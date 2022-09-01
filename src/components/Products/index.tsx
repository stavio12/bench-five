import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";
import { baseProduct } from "../../States/reducer";
import { BaseProduct, Books, DVD, Furniture } from "../../States/types";

import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Index = () => {
  let navigate = useNavigate();
  const { editProduct, products } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [selectProductType, setSelectProductType] = useState<string>("dvd");

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
    h: 0,
    w: 0,
    l: 0,
  });

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(products));
  //   // @ts-ignore
  //   console.log(JSON.parse(localStorage.getItem("products")));
  // }, [products]);

  const submit = (e: any) => {
    e.preventDefault();
    // console.log("dvd", dvdForm);
    // console.log("books", booksForm);
    // console.log("furniture", furnitureForm);

    const allProducts = [
      ...products.dvd,
      ...products.books,
      ...products.furniture,
    ];

    if (allProducts.find((product: any) => product.SKU === dvdForm.SKU)) {
      console.log(products);

      const sku = document.querySelector("#sku");

      //@ts-ignore
      return (sku.value = "");
    } else {
      console.log("works");
      console.log(products);

      selectProductType === "dvd" &&
        dispatch({
          type: "PRODUCTS",
          payload: { ...products, dvd: [...products.dvd, dvdForm] },
        });

      selectProductType === "book" &&
        dispatch({
          type: "PRODUCTS",
          payload: { ...products, books: [...products.books, booksForm] },
        });

      selectProductType === "furniture" &&
        dispatch({
          type: "PRODUCTS",
          payload: {
            ...products,
            furniture: [...products.furniture, furnitureForm],
          },
        });

      return navigate("/");
    }

    // if (allProducts.filter((product: any) => product.SKU !== dvdForm.SKU)) {
    //   console.log(products, allProducts);

    //   allProducts.filter((product: any) =>
    //     console.log(product.SKU === dvdForm.SKU)
    //   );
    // } else {
    //   console.log("yessss");
    // }
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
            dvd={setDvdForm}
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
            dvd={setDvdForm}
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
