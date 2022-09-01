import { Books, DVD, Furniture } from "./types";

interface Action<T> {
  type: T;
}

export const baseProduct = {
  SKU: "",
  name: "",
  price: 0,
  // image: "",
  created_at: new Date().toLocaleString(),
};

export interface StateType {
  products: { dvd: DVD[]; books: Books[]; furniture: Furniture[] };
  Loader: boolean;
  dvd: DVD;
  books: Books;
  furniture: Furniture;
  editProduct: boolean;
}

export const initialState: StateType = {
  products: {
    dvd: [],
    books: [],
    furniture: [],
  },
  Loader: false,
  dvd: { ...baseProduct, size: "" },
  books: { ...baseProduct, weight: "" },
  furniture: {
    ...baseProduct,
    h: 0,
    w: 0,
    l: 0,
  },
  editProduct: false,
};

export interface StateAction
  extends Action<"PRODUCTS" | "DVD" | "BOOKS" | "FURNITURE" | "EDIT_PRODUCT"> {
  payload: {
    products: { dvd: DVD[]; books: Books[]; furniture: Furniture[] };
    dvd: DVD;
    books: Books;
    furniture: Furniture;
    editProduct: boolean;
  };
}

export const reducer = (
  state: StateType,
  action: any | StateAction
): StateType => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: action.payload };
    case "DVD":
      return { ...state, dvd: action.payload };
    case "BOOKS":
      return { ...state, books: action.payload };
    case "FURNITURE":
      return { ...state, furniture: action.payload };
    case "EDIT_PRODUCT":
      return { ...state, editProduct: action.payload };
    default:
      return state;
  }
};
