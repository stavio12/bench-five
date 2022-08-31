import React, { useContext, useState } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import { useNavigate } from "react-router-dom";

interface props {
  selectedProducts: number[];
}

const Buttons = ({ selectedProducts }: props) => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  let navigate = useNavigate();

  const toggleAddOrEditPage = (toggle: boolean) => {
    dispatch({ type: "EDIT_PRODUCT", payload: toggle });

    return navigate("/product");
  };

  return (
    <>
      {selectedProducts.length === 0 ? (
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => toggleAddOrEditPage(false)}
        >
          Add
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          disabled={selectedProducts.length > 1}
          onClick={() => toggleAddOrEditPage(true)}
        >
          Edit
        </button>
      )}
    </>
  );
};

export default Buttons;