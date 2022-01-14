import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div>
      <div className="loadingio-spinner-spinner-bbepeyy9fm">
        <div className="ldio-6sv5aquulwf">
          {[...new Array(12)].map((item, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
