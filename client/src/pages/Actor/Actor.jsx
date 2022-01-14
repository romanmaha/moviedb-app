import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useMovieAPI } from './../../hooks/useMovieAPI';

import ActorDetails from './../../components/actordetails/ActorDetails';
import Carousel from '../../components/UI/carousel/Carousel';

import './Actor.scss';

const Actor = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [otherMovies, setOtherMovies] = useState(null);
  const [fetchActor] = useMovieAPI('getActorDetaileById', async (data) => {
    setActor(data);
  });
  const [fetchOtherMovies] = useMovieAPI('getOtherMoviesByActorId', async (data) => {
    setOtherMovies(data.cast);
  });
  useEffect(() => {
    fetchActor(id);
    fetchOtherMovies(id);
  }, []);

  return (
    <div className="movie">
      <ActorDetails actor={actor} />
      <Carousel header={`Other movies with ${actor?.name}`} data={otherMovies} />
    </div>
  );
};

export default Actor;
