import React from 'react';
import { IMG_NOT_AVAILABLE, POSTER_IMG_PATH } from '../../constants';
import Score from '../score/Score';
import './movieDetails.scss';

const MovieDetails = ({ movie }) => {
  const isArrayGenres = Array.isArray(movie?.genres);
  const posterImg = movie?.poster_path;

  return (
    <div className="movieWrapper">
      <div className="left">
        <img src={posterImg ? `${POSTER_IMG_PATH}${movie?.poster_path}` : IMG_NOT_AVAILABLE} alt="poster" />
      </div>
      <div className="right">
        <div className="movieTitle">
          {movie?.title} <span className="movieYear">{movie?.release_date.split('-')[0]}</span>
        </div>
        <div className="movieGenres">
          {isArrayGenres &&
            movie?.genres.map((g) => (
              <div key={g.name} className="movieGanre">
                {g.name}
              </div>
            ))}
          {!isArrayGenres && <div className="movieGanre">{movie?.genres.name}</div>}
        </div>
        <Score value={movie?.vote_average} />

        <div className="movieTagline">{movie?.tagline}</div>
        <div className="movieOverview">Overview</div>
        <div className="movieOverviewText">{movie?.overview}</div>
        <div className="movieBudget">
          Budget:{' '}
          <span>
            {new Intl.NumberFormat('us-US', {
              style: 'currency',
              currency: 'USD',
            }).format(movie?.budget)}
          </span>
        </div>
        <div className="productionCountries">
          Country: <span>{movie?.production_countries[0].name}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
