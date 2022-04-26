import React from 'react';
import { Marker } from '@react-google-maps/api';
import beerIcon from '../../assets/beer.svg';

export const MyMarker = ({ brewery }) => {
  return (
    <Marker
      position={{ lat: +brewery.latitude, lng: +brewery.longitude }}
      icon={beerIcon}
    />
  );
};
