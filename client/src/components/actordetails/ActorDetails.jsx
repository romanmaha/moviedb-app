import React from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { IMG_NOT_AVAILABLE, POSTER_IMG_PATH } from '../../constants';

import './actorDetails.scss';

const ActorDetails = ({ actor }) => {
  const biography = actor?.biography;
  const posterImg = actor?.profile_path;

  return (
    <div className="actorWrapper">
      <div className="left">
        <img src={posterImg ? `${POSTER_IMG_PATH}${actor?.profile_path}` : IMG_NOT_AVAILABLE} alt="poster" />
      </div>
      <div className="right">
        <div className="actorTitle">{actor?.name}</div>
        <div className="actorBirthday">{actor?.birthday}</div>
        <div className="actorBirthday">
          Place of birth: <span>{actor?.place_of_birth}</span>
        </div>
        <div className="actorBiography">Biography</div>
        <ReactReadMoreReadLess
          charLimit={1200}
          readMoreText={'Read more ▼'}
          readLessText={'Read less ▲'}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
          className="actorBiographyText"
        >
          {biography ? biography : 'Not available'}
        </ReactReadMoreReadLess>
      </div>
    </div>
  );
};

export default ActorDetails;
