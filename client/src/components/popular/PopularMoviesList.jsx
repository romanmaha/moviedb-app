import React, { useState, useEffect } from 'react';
import { useMovieAPI } from './../../hooks/useMovieAPI';
import Carousel from '../UI/carousel/Carousel';

const PopularMoviesList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const [fetchPopularMovies, isPopularMoviesLoading] = useMovieAPI('getPopular', async (data) => {
    setPopularMovies(data.results);
  });

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return <Carousel data={popularMovies} header="Popular Movies" isLoading={isPopularMoviesLoading} />;
};

export default PopularMoviesList;
