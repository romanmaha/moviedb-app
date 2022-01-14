import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_NOT_AVAILABLE, POSTER_IMG_PATH } from '../../constants';
import Loader from '../UI/loader/Loader';

import './actorCard.scss';

const ActorCard = ({ actor, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Link to={`/actor/${actor.id}`} className="link">
          <div className="card">
            <img src={actor.profile_path ? `${POSTER_IMG_PATH}${actor.profile_path}` : IMG_NOT_AVAILABLE} className="cardImg" />
            <span className="cardTitle">{actor.name}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default ActorCard;
