import axios from "axios";

export const backendApi = axios.create({
  baseURL:
    "https://projectofinaldigitalhouse-production.up.railway.app/DHBooking",
});

const baseURL =
  "https://projectofinaldigitalhouse-production.up.railway.app/DHBooking";
export default baseURL