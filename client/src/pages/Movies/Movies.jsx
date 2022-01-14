import React, { useState, useEffect } from 'react';
import { useMovieAPI } from './../../hooks/useMovieAPI';
import MovieCard from './../../components/moviecard/MovieCard';
import Category from '../../components/category/Category';
import Search from '../../components/search/Search';

import { Pagination } from '@mui/material';
import './movies.scss';

const Movies = () => {
  // state
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('Top Rated');
  const [activeCategory, setActiveCategory] = useState('Top Rated');
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // fetch movies category
  const categoryList = ['Top Rated', 'Popular', 'Now Playing', 'Trending'];

  const [fetchTopRatedMovies, isLoading] = useMovieAPI('getTopRatedMovies', async (data) => {
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setActiveCategory('Top Rated');
  });

  const [fetchPopularMovies] = useMovieAPI('getPopular', async (data) => {
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setActiveCategory('Popular');
  });

  const [fetchNowPlayingMovies] = useMovieAPI('getNowPlayingMovies', async (data) => {
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setActiveCategory('Now Playing');
  });
  const [fetchTrendingMovies] = useMovieAPI('getWeeksTrendingMovies', async (data) => {
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setActiveCategory('Trending');
  });
  // search movies category
  const [searchMovie] = useMovieAPI('searchMovie', async (data) => {
    setMovies(data.results);
    setCurrentPage(1);
    setTotalPages(1);
  });
  // useEffect
  useEffect(() => {
    category === 'Top Rated' && fetchTopRatedMovies(currentPage);
    category === 'Popular' && fetchPopularMovies(currentPage);
    category === 'Now Playing' && fetchNowPlayingMovies(currentPage);
    category === 'Trending' && fetchTrendingMovies(currentPage);
    window.scrollTo(0, 0);
  }, [currentPage, category]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    searchMovie(inputValue);
  };

  return (
    <div className="movies">
      <div className="moviesWrapper">
        <div className="moviesFilter">
          <Search inputValue={inputValue} setInputValue={setInputValue} searchSubmitHandler={searchSubmitHandler} />
          {categoryList.map((c) => (
            <Category category={c} key={c} setCategory={setCategory} active={activeCategory} />
          ))}
        </div>
        <div className="moviesList">
          {movies.map((m) => {
            return <MovieCard key={m.id} movie={m} isLoading={isLoading} />;
          })}
        </div>
      </div>
      <Pagination
        page={currentPage}
        count={totalPages}
        className="pagination"
        onChange={(event, value) => {
          setCurrentPage(value);
        }}
      />
    </div>
  );
};

export default Movies;
