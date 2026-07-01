import axios from 'axios';
import type { ApiError } from '../types/booking';

const baseURL = import.meta.env.VITE_API_URL || '/api/v1/public';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15_000,
});

// Global error interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw error.response.data as ApiError;
    }
    if (error.request) {
      throw {
        success: false,
        error: { code: 'NETWORK_ERROR', message: 'Unable to reach the server. Please check your connection.' },
      };
    }
    throw {
      success: false,
      error: { code: 'UNKNOWN_ERROR', message: 'Something went wrong. Please try again.' },
    };
  }
);

export default api;