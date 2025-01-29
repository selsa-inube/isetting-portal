import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { enviroment } from "@config/environment";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.IVITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE,
  timeout: enviroment.FETCH_TIMEOUT_SERVICES,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  }
);

const fetchWithRetries = async <T>(
  url: string,
  config: AxiosRequestConfig
): Promise<T> => {
  const maxRetries = enviroment.MAX_RETRIES_SERVICES;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get<T>(
        url,
        config
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Attempt ${attempt} failed: ${error.message}`);
      } else {
        console.error(`Attempt ${attempt} failed: ${String(error)}`);
      }
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
  throw new Error("Error al obtener los de las unidades de negocio.");
};

export { axiosInstance, fetchWithRetries };
