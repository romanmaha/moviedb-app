import React from 'react';

export const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <button className="slide-arrow prev-arrow" onClick={onClick}></button>;
};
export const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <button className="slide-arrow next-arrow" onClick={onClick}></button>;
};

export const SLIDER_SETTINGS = {
  //eslint-disable-next-line
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: -1,
  prevArrow: <SampleNextArrow />,
  nextArrow: <SamplePrevArrow />,
};
