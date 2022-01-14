import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useMovieAPI } from '../../hooks/useMovieAPI';

import ActorCarusel from '../../components/UI/actorCarusel/ActorCarusel';
import SerialDetails from './../../components/serialsdetails/SerialDetails';

const Serial = () => {
  const { id } = useParams();
  const [serial, setSerial] = useState(null);
  const [actors, setActors] = useState(null);
  const [fetchSerial] = useMovieAPI('getSerialDetailsById', async (data) => {
    setSerial(data);
  });
  const [fetchActors] = useMovieAPI('getSerialsActorsById', async (data) => {
    setActors(data.cast);
  });

  useEffect(() => {
    fetchSerial(id);
    fetchActors(id);
  }, []);

  return (
    <div className="movie">
      <SerialDetails serial={serial} />
      <ActorCarusel data={actors} header="Top Billed Cast" />
    </div>
  );
};

export default Serial;
