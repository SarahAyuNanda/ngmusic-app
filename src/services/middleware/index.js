import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://itunes.apple.com",
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err),
);
