import { useEffect, useState } from 'react';
import { getLocalizacionGoogleMaps } from '~/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { apiKey } from "./env";


const Maps = () => {

  const [coordinates, setCoordinates] = useState(null);
  const [center, setCenter] = useState({
    "lat": -31.42008329999999,
    "lng": -64.1887761
  });
  const { localizacion } = useSelector( state => state )

  const dispatch = useDispatch()
  const { direccion } = useParams()

  useEffect(() => {

    dispatch(getLocalizacionGoogleMaps({direccion}))

  }, [direccion]);

  console.log('maps',localizacion)

  return (
    <Grid>
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        center={{ lat: center.lat, lng: center.lng }}
        zoom={15}
        mapContainerStyle={{ height: "400px", width: "100%" }}
      />
      <Marker position={coordinates} />
    </LoadScript>
    </Grid>
  )
}

export default Maps