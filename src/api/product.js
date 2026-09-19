import axios from "axios";

export const getProduct = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=50");
  return response.data.products;
};

export const getOneProduct = async (id) => {
  const response = await axios.get(`https://dummyjson.com/product/${id}`);

  return response.data;
};

export const category = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  return response.data;
};

export const specificCategory = async (slug) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${slug}`,
  );
  return response.data;
};
