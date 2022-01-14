import React, { useState, useEffect } from 'react';
import { useMovieAPI } from '../../hooks/useMovieAPI';
import { Pagination } from '@mui/material';
import ActorCard from './../../components/actorscard/ActorCard';
import Search from '../../components/search/Search';

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchAllActors, isLoading] = useMovieAPI('getAllActors', async (data) => {
    setActors(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
  });

  const [searchActors] = useMovieAPI('searchActors', async (data) => {
    setActors(data.results);
    setCurrentPage(1);
    setTotalPages(1);
  });
  // useEffect
  useEffect(() => {
    inputValue === '' && fetchAllActors(currentPage);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    searchActors(inputValue);
  };

  return (
    <div className="movies">
      <div className="moviesWrapper">
        <div className="moviesFilter">
          <Search inputValue={inputValue} setInputValue={setInputValue} searchSubmitHandler={searchSubmitHandler} />
        </div>
        <div className="moviesList">
          {actors.map((a) => {
            return <ActorCard key={a.id} actor={a} isLoading={isLoading} />;
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

export default Actors;
