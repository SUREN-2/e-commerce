
import { API } from "./axios-client";

export const getCurrentUserQueryFn =
  async () => {
     const response = await API.get(`/user/current`);
    console.log(`sith ${response}`)
    return response.data ;
  };

  export const getPopularProduct = async () => {
    try {
      const response = await API.get(`/product/products`);
      console.log("Response Data:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching product by name:", error);
      throw error; // Re-throw the error for handling at a higher level
    }
  };

  export const getDiscountProduct = async () => {
    try {
      const response = await API.get(`/product/discountProducts`);
      console.log("Response Data:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching product by name:", error);
      throw error; // Re-throw the error for handling at a higher level
    }
  };


export const getProductByName = async (value) => {
    try {
      const response = await API.get(`/product/search?name=${encodeURIComponent(value)}`);
      console.log("Response Data:", response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching product by name:", error);
      throw error; // Re-throw the error for handling at a higher level
    }
  };



  export const getProductByParentCategory = async (value) => {
    try {
      const response = await API.get(`/product/search/pcategory?category=${encodeURIComponent(value)}`);
      // console.log("RespoData:", response);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching product by name:", error);
      throw error; // Re-throw the error for handling at a higher level
    }
  };

  export const getProductByChildrenCategory = async (value) => {
    try {
      const response = await API.get(`/product/search/ccategory?category=${encodeURIComponent(value)}`);
      // console.log("Response Data:", response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching product by name:", error);
      throw error; // Re-throw the error for handling at a higher level
    }
  };