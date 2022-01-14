import React from 'react';
import Slider from 'react-slick';
import { SLIDER_SETTINGS } from './../common/slider';
import MovieCard from '../../moviecard/MovieCard';

import './carousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ data, header }) => {
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
            <MovieCard key={m.id} movie={m} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
