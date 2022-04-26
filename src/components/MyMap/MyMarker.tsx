import React, { Component } from 'react';
import { Marker } from '@react-google-maps/api';
import beerIcon from '../../assets/beer.svg';

export const MyMarker = ({ brewery }) => {
  const position = { lat: +brewery.latitude, lng: +brewery.longitude };
  return <Marker position={position} icon={beerIcon}></Marker>;
};
