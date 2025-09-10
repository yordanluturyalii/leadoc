import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://72.60.74.198",
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const customError = {
          message: error.response.data?.message || 'Request failed',
          status: error.response.status,
          errors: error.response.data?.error || {}
        };
        return Promise.reject(customError);
      }
      return Promise.reject(error);
    }
);

export { api };