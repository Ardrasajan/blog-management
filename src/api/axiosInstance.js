import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/blog_management_api",
  headers: {
    "Content-Type": "application/json",
  },
});