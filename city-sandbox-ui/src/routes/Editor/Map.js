import {useRef, useState, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import {styled} from '@mui/system';

const MapContainer = styled('div')`
  height: 100%;
  width: 100%;
`;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <MapContainer ref={mapContainer} />;
};

export default Map;
