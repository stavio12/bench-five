import Swal from "sweetalert2";
import { productsType } from "../States/reducer";
import { Books, DVD, Furniture } from "../States/types";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const massDelete = (
  dvd: DVD[],
  selectedProducts: string[],
  books: Books[],
  furniture: Furniture[],
  setFurniture: (furniture: Furniture[]) => void,
  setBooks: (books: Books[]) => void,
  setDVD: (dvd: DVD[]) => void,
  dispatch: any,
  setSelectedProducts: (products: string[]) => void
) => {
  const newDVD = dvd.filter(
    (item) => !selectedProducts.find((f: string) => f === item.SKU)
  );
  setDVD(newDVD);

  const newBooks = books.filter(
    (item: { SKU: string }) =>
      !selectedProducts.find((f: string) => f === item.SKU)
  );
  setBooks(newBooks);

  const newFurniture = furniture.filter(
    (item) => !selectedProducts.find((f: string) => f === item.SKU)
  );
  setFurniture(newFurniture);

  dispatch({
    type: "DVD",
    payload: newDVD,
  });

  dispatch({
    type: "BOOKS",
    payload: newBooks,
  });

  dispatch({
    type: "FURNITURE",
    payload: newFurniture,
  });

  productsType.map((type: string) =>
    localStorage.setItem(
      `${type}`,
      JSON.stringify(
        (type === "DVD" && newDVD) ||
          (type === "Books" && newBooks) ||
          (type === "Furniture" && newFurniture)
      )
    )
  );

  return setSelectedProducts([]);
};

export const selectWorker = (
  sku: string,
  checked: boolean,
  type: string,
  selectedProducts: string[],
  setSelectProductEdit: (products: { type: string; sku: string }) => void,
  setSelectedProducts: (products: string[]) => void
) => {
  setSelectProductEdit({ type, sku });
  //check if product is checked,
  // if it's checked add to array for deletion else remove from array when unchecked
  if (checked) {
    setSelectedProducts([...selectedProducts, sku]);
  } else {
    const newSelect = selectedProducts.filter((item) => item !== sku);

    setSelectedProducts(newSelect);
  }
};

// const selectWorker = (sku: string, checked: boolean, type: string) => {
//   setSelectProductEdit({ type, sku });
//   //check if product is checked,
//   // if it's checked add to array for deletion else remove from array when unchecked
//   if (checked) {
//     setSelectedProducts([...selectedProducts, sku]);
//   } else {
//     const newSelect = selectedProducts.filter((item) => item !== sku);

//     setSelectedProducts(newSelect);
//   }
// };

// const massDelete = () => {
//   const newDVD = dvd.filter(
//     (item) => !selectedProducts.find((f) => f === item.SKU)
//   );
//   setDVD(newDVD);

//   const newBooks = books.filter(
//     (item) => !selectedProducts.find((f) => f === item.SKU)
//   );
//   setBooks(newBooks);

//   const newFurniture = furniture.filter(
//     (item) => !selectedProducts.find((f) => f === item.SKU)
//   );
//   setFurniture(newFurniture);

//   dispatch({
//     type: "DVD",
//     payload: newDVD,
//   });

//   dispatch({
//     type: "BOOKS",
//     payload: newBooks,
//   });

//   dispatch({
//     type: "FURNITURE",
//     payload: newFurniture,
//   });

//   productsType.map((type: string) =>
//     localStorage.setItem(
//       `${type}`,
//       JSON.stringify(
//         (type === "DVD" && newDVD) ||
//           (type === "Books" && newBooks) ||
//           (type === "Furniture" && newFurniture)
//       )
//     )
//   );

//   return setSelectedProducts([]);
// };
