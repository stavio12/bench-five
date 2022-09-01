import React from "react";
import { BaseProduct, Books } from "../../States/types";

interface props {
  weight: (weight: Books) => void;
  baseForm: BaseProduct;
}

const BookInput = ({ weight, baseForm }: props) => {
  return (
    <>
      <div>
        <label
          htmlFor="weight"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Weight
        </label>
        <input
          onChange={(e) => weight({ ...baseForm, weight: e.target.value })}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product weight"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Enter product weight"
            )
          }
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          required
        />
      </div>
    </>
  );
};

export default BookInput;