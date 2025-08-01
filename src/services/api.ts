import { Product } from "../types/theme";
import { API_CONSTANTS } from "../constants/api";

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

export const apiService = {
  async fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_CONSTANTS.BASE_URL}/products`);
      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status
        );
      }

      const data = await response.json();
      return data.products as Product[];
    } catch (error: unknown) {
      if (error instanceof ApiError) throw error;
      throw new ApiError("Failed to fetch products");
    }
  },

  async fetchProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_CONSTANTS.BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status
        );
      }

      const data = await response.json();
      return data as Product;
    } catch (error: unknown) {
      if (error instanceof ApiError) throw error;
      throw new ApiError("Failed to fetch product");
    }
  },

  async fetchProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await fetch(
        `${API_CONSTANTS.BASE_URL}/products/category/${encodeURIComponent(category)}`
      );
      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status
        );
      }

      const data = await response.json();
      return data.products as Product[];
    } catch (error: unknown) {
      if (error instanceof ApiError) throw error;
      throw new ApiError("Failed to fetch products by category");
    }
  },
};
