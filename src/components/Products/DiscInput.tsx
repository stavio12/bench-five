import React from "react";
import { DVD, BaseProduct } from "../../States/types";

interface props {
  size: (size: DVD) => void;
  baseForm: BaseProduct;
}

const DiscInput = ({ size, baseForm }: props) => {
  return (
    <>
      <div>
        <label
          htmlFor="size"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Size
        </label>
        <input
          onChange={(e) => size({ ...baseForm, size: e.target.value })}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product size"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Enter product size"
            )
          }
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          required
        />
      </div>
    </>
  );
};

export default DiscInput;
