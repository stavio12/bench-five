import React, { useEffect } from "react";
import { Furniture, BaseProduct } from "../../States/types";

interface props {
  dimension: (dimension: Furniture) => void;
  baseForm: BaseProduct;
  furniture: Furniture;
}

const FurnitureInput = ({ dimension, baseForm, furniture }: props) => {
  useEffect(() => {
    dimension({ ...baseForm, l: furniture.l, w: furniture.w, h: furniture.h });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseForm]);
  return (
    <>
      <div>
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Height{" "}
        </label>
        <input
          type="number"
          value={furniture.h ? furniture.h : ""}
          onChange={(e) =>
            dimension({
              ...baseForm,
              l: furniture.l,
              w: furniture.w,
              h: Number(e.target.value),
            })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product Height"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Enter product height"
            )
          }
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          required
        />
      </div>
      <div>
        <label
          htmlFor="width"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Width
        </label>
        <input
          type="number"
          value={furniture.w ? furniture.w : ""}
          onChange={(e) =>
            dimension({
              ...baseForm,
              l: furniture.l,
              h: furniture.h,
              w: Number(e.target.value),
            })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product width"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Enter product width"
            )
          }
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          required
        />
      </div>
      <div>
        <label
          htmlFor="length"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Length
        </label>
        <input
          type="number"
          value={furniture.l ? furniture.l : ""}
          onChange={(e) =>
            dimension({
              ...baseForm,
              h: furniture.h,
              w: furniture.w,
              l: Number(e.target.value),
            })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product length"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Enter product length"
            )
          }
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          required
        />
      </div>
    </>
  );
};

export default FurnitureInput;
