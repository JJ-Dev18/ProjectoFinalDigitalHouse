import axios from "axios";
import { isRouteErrorResponse } from "react-router-dom";
import { backendApi } from "../hooks/axiosBase"


export const getBookingsByProductId = async (idProduct) => {
  console.log(idProduct)
  const resp = await backendApi.get(`/bookings/idProduct?idProduct=${idProduct}`);
  console.log('respuesta')
  console.log(resp)
  return resp;
}
