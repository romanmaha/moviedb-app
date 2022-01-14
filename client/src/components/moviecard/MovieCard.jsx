import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_NOT_AVAILABLE, POSTER_IMG_PATH } from '../../constants';
import Loader from '../UI/loader/Loader';
import './movieCard.scss';

const MovieCard = ({ movie, isLoading, isSerial }) => {
  const posterImg = movie.poster_path;
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="card">
        <Link to={isSerial ? `/serial/${movie.id}` : `/movie/${movie.id}`} className="link">
          <img src={posterImg ? `${POSTER_IMG_PATH}/${movie.poster_path}` : IMG_NOT_AVAILABLE} className="cardImg" />
        </Link>
        <span className="cardTitle">{movie.title || movie.name}</span>
        <span className="ganre"></span>
        <span className="cardRate">{movie.vote_average}</span>
      </div>
    </>
  );
};

export default MovieCard;
