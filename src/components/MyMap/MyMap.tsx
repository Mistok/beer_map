import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Brewery } from '../../hooks/useOpenBrewery/types';
import { MyMarker } from './MyMarker';
import { useWindowSize } from '../../hooks/useWindowSize';

const center = {
  lat: 40.067,
  lng: -98.536,
};

interface MyMapProps {
  breweries: Brewery[];
}

export const MyMap = ({ breweries = [] }: MyMapProps) => {
  const dimensions = useWindowSize();

  return (
    <LoadScript googleMapsApiKey="AIzaSyBvt_3mYlfWErP_AYgxRvx-BGzx42j0GsA">
      <GoogleMap mapContainerStyle={dimensions} center={center} zoom={5}>
        <>
          {breweries.map((brewery) => (
            <MyMarker key={brewery.id} brewery={brewery} />
          ))}
        </>
      </GoogleMap>
    </LoadScript>
  );
};
