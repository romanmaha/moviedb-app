import React, { useState, useEffect } from 'react';
import { useMovieAPI } from './../../hooks/useMovieAPI';
import MovieCard from './../../components/moviecard/MovieCard';
import { Pagination } from '@mui/material';
import Category from '../../components/category/Category';
import Search from '../../components/search/Search';

const Serials = () => {
  // state
  const [serials, setSerials] = useState([]);
  const [category, setCategory] = useState('Top Rated');
  const [activeCategory, setActiveCategory] = useState('Top Rated');
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const categoryList = ['Top Rated', 'Popular'];
  // fetch movies category
  const [fetchTopRatedSerials, isLoading] = useMovieAPI('getTopRatedSerials', async (data) => {
    setSerials(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setActiveCategory('Top Rated');
  });

  const [fetchPopularSerials] = useMovieAPI('getPopularSerials', async (data) => {
    setSerials(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setActiveCategory('Popular');
  });

  // search movies category
  const [searchSerial] = useMovieAPI('searchSerial', async (data) => {
    setSerials(data.results);
    setCurrentPage(1);
    setTotalPages(1);
  });
  // useEffect

  useEffect(() => {
    category === 'Top Rated' && fetchTopRatedSerials(currentPage);
    category === 'Popular' && fetchPopularSerials(currentPage);
    window.scrollTo(0, 0);
  }, [currentPage, category]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    searchSerial(inputValue);
  };

  return (
    <div className="movies">
      <div className="moviesWrapper">
        <div className="moviesFilter">
          <Search inputValue={inputValue} setInputValue={setInputValue} searchSubmitHandler={searchSubmitHandler} />
          {categoryList.map((c) => (
            <Category key={c} category={c} setCategory={setCategory} active={activeCategory} />
          ))}
        </div>
        <div className="moviesList">
          {serials.map((m) => {
            return <MovieCard key={m.id} movie={m} isLoading={isLoading} isSerial={true} />;
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

export default Serials;
