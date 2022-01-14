import React from 'react';
import './search.scss';

const Search = ({ inputValue, setInputValue, searchSubmitHandler }) => {
  return (
    <form className="moviesSearch" onSubmit={searchSubmitHandler}>
      <input
        type="search"
        placeholder="Search movies"
        autoFocus
        required
        min="1"
        className="moviesSearchInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="searchBtn">
        Search
      </button>
    </form>
  );
};

export default Search;
