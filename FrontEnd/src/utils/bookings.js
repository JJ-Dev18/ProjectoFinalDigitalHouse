import axios from "axios";
import { isRouteErrorResponse } from "react-router-dom";
import { backendApi } from "../hooks/axiosBase"


export const getBookingsByProductId = async (idProduct) => {
  const resp = await backendApi.get(`/bookings/idProduct?idProduct=${idProduct}`);
  //let forbiddenDates = []
  ///resp.data.map(item => forbiddenDates.push( new Date(item)))
  //console.log('estoy en fetch')
  //console.log(forbiddenDates)
  //return forbiddenDates;
  return resp;
}
