import React, { useEffect } from "react";
import { DVD, BaseProduct } from "../../States/types";

interface props {
  setSize: (size: DVD) => void;
  size: DVD;
  baseForm: BaseProduct;
  disableInputs: boolean;
}

const DiscInput = ({ size, baseForm, setSize, disableInputs }: props) => {
  useEffect(() => {
    setSize({ ...baseForm, size: size.size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseForm]);

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
          onChange={(e) =>
            setSize({
              ...baseForm,
              size: Number(e.target.value),
            })
          }
          value={size.size ? size.size : ""}
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product size"
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "Enter product size"
            )
          }
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          disabled={disableInputs}
          required
        />
      </div>
    </>
  );
};

export default DiscInput;
