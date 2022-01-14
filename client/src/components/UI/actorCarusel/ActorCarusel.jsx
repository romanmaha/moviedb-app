import React from 'react';
import Slider from 'react-slick';
import { SLIDER_SETTINGS } from './../common/slider';
import ActorCard from './../../actorscard/ActorCard';

import './actorCarusel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ActorCarusel = ({ data, header, isLoading }) => {
  const dataLength = data?.length;
  let settings = SLIDER_SETTINGS;
  if (dataLength < 8) {
    settings = Object.assign({}, settings, { slidesToShow: dataLength });
  }
  return (
    <div className="list">
      <h2 className="listTitle">{header}</h2>
      <div className="sliderWrapper">
        <Slider {...settings} className="slider">
          {data?.map((m) => (
            <ActorCard key={m.id} actor={m} isLoading={isLoading} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ActorCarusel;
