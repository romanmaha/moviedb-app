import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useMovieAPI } from './../../hooks/useMovieAPI';

import MovieDetails from './../../components/moviedetails/MovieDetails';
import ActorCarusel from '../../components/UI/actorCarusel/ActorCarusel';

import './movie.scss';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [fetchMovie] = useMovieAPI('getMovieDetailsById', async (data) => {
    setMovie(data);
  });
  const [fetchActors] = useMovieAPI('getMovieActorsById', async (data) => {
    setActors(data.cast);
  });

  useEffect(() => {
    fetchMovie(id);
    fetchActors(id);
  }, []);

  return (
    <div className="movie">
      <MovieDetails movie={movie} />
      <ActorCarusel data={actors} header="Top Billed Cast" />
    </div>
  );
};

export default Movie;
