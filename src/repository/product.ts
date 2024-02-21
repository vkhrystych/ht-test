import { API } from "../services/api";
import { ProductResponse } from "../types/product";
import * as dummyProductsResponse from "../_dummy/products.json";

export const getProducts = async (
  loadLocalData: boolean = false
): Promise<ProductResponse | undefined> => {
  if (loadLocalData) return dummyProductsResponse;
  try {
    // IN REAL SITUATION THE FILTERING OF THE PRODUCTS WOULD HAPPEN THROUGH
    // THE API HERE - I CAN PASS A SIMPLE QUERY TO SEARCH THROUGH
    return await API.get(`/products?select=title&limit=200`);
  } catch (error) {
    // HANDLING THIS ERROR SHOULD BE IMPROVED
    console.warn(error);
  }
};
