export interface BaseProduct {
  SKU: string;
  name: string;
  price: number;
  img: string;
  created_at: string;
}

export interface DVD extends BaseProduct {
  size: string;
}

export interface Books extends BaseProduct {
  weight: string;
}

export interface Furniture extends BaseProduct {
  h: number | null;
  w: number | null;
  l: number | null;
}
