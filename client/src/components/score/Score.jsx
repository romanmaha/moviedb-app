import React from 'react';
import './score.scss';
const Score = ({ value }) => {
  return (
    <div className="userScore">
      <div className="userScoreValue">{value}</div>
      <span>
        User <br /> Score
      </span>
    </div>
  );
};

export default Score;
