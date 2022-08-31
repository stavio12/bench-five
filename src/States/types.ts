export interface BaseProduct {
  SKU: string;
  name: string;
  price: number;
  image: string;
}

export interface Disc extends BaseProduct {
  size: string;
}

export interface Books extends BaseProduct {
  weight: string;
}

export interface Furniture extends BaseProduct {
  dimensions: {
    H: number;
    W: number;
    L: number;
  };
}
