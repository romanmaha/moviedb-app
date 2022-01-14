import React, { useState, useEffect } from 'react';
import { useMovieAPI } from './../../hooks/useMovieAPI';
import Carousel from '../UI/carousel/Carousel';

const TopRatedMoviesList = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [fetchTopRatedMovies, isLoading] = useMovieAPI('getTopRatedMovies', async (data) => {
    setTopRatedMovies(data.results);
  });

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  return <Carousel data={topRatedMovies} header="Top Rated Movies" isLoading={isLoading} />;
};

export default TopRatedMoviesList;
