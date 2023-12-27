import { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { getCenter } from 'geolib';
import { MdHotel } from 'react-icons/md';

export const MapBox = ({ Data }) => {

    const [MapCenter, setMapCenter] = useState({
        longitude: 77.20,
        latitude: 28.60,
        zoom: 1,
    });

useEffect(() => {
    if (Data) {
    const Coordinates = Data?.map((hotel) => ({
        longitude: hotel?.address.longitude,
        latitude: hotel?.address.latitude,
    }));
    const Center = getCenter(Coordinates);
    setMapCenter({
        longitude: Center.longitude,
        latitude: Center.latitude,
        zoom: 1, 
    });
    }
}, [Data]);

const viewport = {
    longitude: MapCenter.longitude,
    latitude: MapCenter.latitude,
    zoom: 6,
};

return (
    <Map
    key={Data?.id}
    initialViewState={viewport}
    mapStyle="mapbox://styles/shoebk478/clqmzfmaq00rh01qv4aj12ht0"
    mapboxAccessToken="pk.eyJ1Ijoic2hvZWJrNDc4IiwiYSI6ImNsa2h5aXM0bTA4bWgzZW1qNzJjdGd0dmwifQ.FOfTGmZEuD9xu7QTahNBtA"
    
    style={{ width: '100%', height: '100%' }}
    onViewportChange={(nextViewport) => setMapCenter(nextViewport)}
    >
    {Data?.map((Hotel) => (
        <Marker key={Hotel.id} latitude={Hotel?.address?.latitude} longitude={Hotel?.address?.longitude}>
        <MdHotel size="20px" color="#fa5252" />
        </Marker>
    ))}
    </Map>
);
};
