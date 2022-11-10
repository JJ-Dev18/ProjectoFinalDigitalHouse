import axios from "axios";
import { isRouteErrorResponse } from "react-router-dom";
import { backendApi } from "../hooks/axiosBase"


export const getProductsByCategory = async (category) => {

  const resp = await backendApi.get(`/products/idCategory?idCategory=${category}`);
  return resp;
}

export const getProductsByCity = async (city) => {
  const resp = await backendApi.get(
    `/products/idCity?idCity=${city}`
  );
  return resp;
};

