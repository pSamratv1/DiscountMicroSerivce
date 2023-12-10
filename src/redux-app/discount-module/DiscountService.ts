/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

axios.defaults.withCredentials = true;

// View all the data for the table
export const ViewCategoryService = async () => {
  const URL = import.meta.env.VITE_DISCOUNT_API_URL;

  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (e: any) {
    console.log("Error in ViewDiscountService", e);
  }
};

// View all the data for the table
export const CreateDiscountService = async ({ formData }: any) => {
  const URL = import.meta.env.VITE_DISCOUNT_API_URL;

  try {
    const { data } = await axios.post(URL, formData);
    return data;
  } catch (e: any) {
    console.log("Error in ViewDiscountService", e);
  }
};

export const EditDiscountService = async (id: any) => {
  const URL = import.meta.env.VITE_DISCOUNT_API_URL + `?card_id=${id}`;
  console.log(id, "id");
  console.log(URL, "url");

  try {
    // either put or patch
    const { data } = await axios.put(URL);
    return data;
  } catch (e: any) {
    console.log("Error in EditDiscountService", e);
  }
};
export const DeleteDiscountService = async (id: any) => {
  const URL = import.meta.env.VITE_DISCOUNT_API_URL + `?card_id=${id}`;

  try {
    // either put or patch
    const { data } = await axios.delete(URL);
    return data;
  } catch (e: any) {
    console.log("Error in DeleteDiscountService", e);
  }
};
