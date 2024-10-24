import axios, { AxiosRequestConfig } from 'axios';
import ApiResponse from '@/entities/ApiResponse';

const axiosInstant = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
  },
});

export default class APIClient<T> {
  constructor(private _endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstant
      .get<ApiResponse<T>>(this._endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstant
      .get<T>(this._endpoint + '/' + id)
      .then((res) => res.data);
  };
}
