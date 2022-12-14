import { Books, DVD, Furniture } from "./types";

interface Action<T> {
  type: T;
}

export const productsType = ["DVD", "Furniture", "Books"];

export const baseProduct = {
  SKU: "",
  name: "",
  price: 0,
  img: "https://bit.ly/3ekX4h6",
  created_at: `${new Date()}`,
};

interface EditProduct {
  edit: boolean;
  product: Furniture | Books | DVD | null;
  type: string | null;
}

export interface StateType {
  products: { dvd: DVD[]; books: Books[]; furniture: Furniture[] };
  Loader: boolean;
  dvd: DVD[];
  books: Books[];
  furniture: Furniture[];
  editProduct: EditProduct;
}

export const initialState: StateType = {
  products: {
    dvd: [],
    books: [],
    furniture: [],
  },
  Loader: false,
  dvd: [],
  books: [],
  furniture: [],
  editProduct: { edit: false, product: null, type: null },
};

export interface StateAction
  extends Action<"PRODUCTS" | "DVD" | "BOOKS" | "FURNITURE" | "EDIT_PRODUCT"> {
  payload: {
    products: { dvd: DVD[]; books: Books[]; furniture: Furniture[] };
    dvd: DVD[];
    books: Books[];
    furniture: Furniture[];
    editProduct: EditProduct;
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
