export interface Product {
  id: number;
  title: string;
}

export interface ProductResponse {
  products: Array<Product>;
  limit: number;
  skip: number;
  total: number;
}
