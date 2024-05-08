import axios from "axios";

export const BASE_URL = "https://themepark123-e6af4e64e039.herokuapp.com/";

const Client = axios.create({ baseURL: BASE_URL });

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const purchaseTickets = (ticketsData) => {
  return Client.post("/api/buyTickets", ticketsData);
};

export default Client;
