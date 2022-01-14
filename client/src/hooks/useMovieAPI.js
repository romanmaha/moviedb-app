import { useState } from 'react';
import MovieAPIServise from '../api/MovieServise';

export const useMovieAPI = (funcName, callback) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendRequestFunc = async (...args) => {
    setIsLoading(true);
    const response = await MovieAPIServise[funcName](...args);
    callback(response.data);
    setIsLoading(false);
  };

  return [sendRequestFunc, isLoading];
};
