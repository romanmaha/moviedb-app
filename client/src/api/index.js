import axios from 'axios';
import { API_BASE_URL } from '../constants';

const API_KEY = process.env.REACT_APP_API_KEY;

class APIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default class BaseAPI {
  constructor(baseUrl) {
    axios.defaults.params = {
      api_key: API_KEY,
      page: 1,
    };

    this.client = axios.create({
      baseURL: baseUrl ? baseUrl : API_BASE_URL,
      timeout: 1000,
    });

    this.makeRequest = this.makeRequest.bind(this);
    this.searchRequest = this.searchRequest.bind(this);
  }

  makeRequest = (url, method, ...params) => {
    try {
      return this.client[method](url, ...params);
    } catch (e) {
      throw APIError(e);
    }
  };
  searchRequest = (query) => {
    return axios.get(`${API_BASE_URL}search/movie?query=${query}`);
  };
  sortRequest = (sort) => {
    return axios.get(`${API_BASE_URL}discover/movie?sort_by=${sort}`);
  };
}
