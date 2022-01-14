import React from 'react';
import TopRatedMoviesList from '../../components/toprated/TopRatedMoviesList';
import PopularMoviesList from '../../components/popular/PopularMoviesList';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <TopRatedMoviesList />
        <PopularMoviesList />
      </div>
    </div>
  );
};

export default Home;
