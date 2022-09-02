import React, { useEffect } from "react";
import { BaseProduct, Books } from "../../States/types";

interface props {
  setWeight: (weight: Books) => void;
  baseForm: BaseProduct;
  weight: Books;
}

const BookInput = ({ weight, baseForm, setWeight }: props) => {
  useEffect(() => {
    setWeight({ ...baseForm, weight: weight.weight });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseForm]);
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
          onChange={(e) => setWeight({ ...baseForm, weight: e.target.value })}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product weight"
          value={weight.weight}
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
