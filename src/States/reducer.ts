import { Books, Disc, Furniture } from "./types";

interface Action<T> {
  type: T;
}

const baseProduct = {
  SKU: "",
  name: "",
  price: 0,
  image: "",
};

export interface StateType {
  Products: { disc: Disc[]; books: Books[]; furniture: Furniture[] };
  Loader: boolean;
  disc: Disc;
  books: Books;
  furniture: Furniture;
}

export const initialState: StateType = {
  Products: {
    disc: [],
    books: [],
    furniture: [],
  },
  Loader: false,
  disc: { ...baseProduct, size: "" },
  books: { ...baseProduct, weight: "" },
  furniture: {
    ...baseProduct,
    dimensions: {
      H: 0,
      W: 0,
      L: 0,
    },
  },
};

export interface StateAction
  extends Action<"PRODUCTS" | "DISC" | "BOOKS" | "FURNITURE"> {
  payload: {
    Products: { disc: Disc[]; books: Books[]; furniture: Furniture[] };
    disc: Disc;
    books: Books;
    furniture: Furniture;
  };
}

export const reducer = (
  state: StateType,
  action: any | StateAction
): StateType => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, Products: action.payload };
    case "DISC":
      return { ...state, disc: action.payload };
    case "BOOKS":
      return { ...state, books: action.payload };
    case "FURNITURE":
      return { ...state, furniture: action.payload };
    default:
      return state;
  }
};
