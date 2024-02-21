import { Product } from "../types/product";

export const highlight = (query: string, title: string) => {
  const queryRegex = new RegExp(query, "i");
  return title.replace(queryRegex, '<span class="highlight">$&</span>');
};

export const filterProducts = (query: string, products: Array<Product>) => {
  const queryRegex = new RegExp(query, "i");

  return (
    products
      // WE INITIALL FILTER OUT AND ONLY RETURN RELEVANT RESULTS
      .filter((product) => queryRegex.test(product.title))

      // THEM WE NEED TO REMAP THE TITLE AND RUN IT THROUGH THE HIGHLIGHT FUCTION
      ?.map((product) => ({
        ...product,
        title: highlight(query, product.title),
      }))
  );
};
