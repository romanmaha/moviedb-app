import React from 'react';
import { IMG_NOT_AVAILABLE, POSTER_IMG_PATH } from '../../constants';
import Score from './../score/Score';

const SerialDetails = ({ serial }) => {
  const isArrayGenres = Array.isArray(serial?.genres);
  const posterImg = serial?.poster_path;

  return (
    <div className="movieWrapper">
      <div className="left">
        <img src={posterImg ? `${POSTER_IMG_PATH}${serial?.poster_path}` : IMG_NOT_AVAILABLE} alt="poster" />
      </div>
      <div className="right">
        <div className="movieTitle">
          {serial?.name} <span className="movieYear">{serial?.first_air_date.split('-')[0]}</span>
        </div>
        <div className="movieGenres">
          {isArrayGenres &&
            serial?.genres.map((g) => (
              <div key={g.name} className="movieGanre">
                {g.name}
              </div>
            ))}
          {!isArrayGenres && <div className="movieGanre">{serial?.genres.name}</div>}
        </div>
        <Score value={serial?.vote_average} />
        <div className="movieTagline">{serial?.tagline}</div>
        <div className="movieOverview">Overview</div>
        <div className="movieOverviewText">{serial?.overview}</div>
        <div className="productionCountries">
          Country: <span>{serial?.production_countries[0].name}</span>
        </div>
      </div>
    </div>
  );
};

export default SerialDetails;
