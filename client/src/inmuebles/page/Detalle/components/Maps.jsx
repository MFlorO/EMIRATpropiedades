import { useEffect, useState } from 'react';
import { getLocalizacionGoogleMaps } from '~/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { apiKey } from "./env";
import icono  from '~/public/img/detalle/iconoGoogleMaps.jpg'




const Maps = () => {

  const [center, setCenter] = useState({
    "lat": 0,
    "lng": 0
  });

  const dispatch = useDispatch()
  const { direccion } = useParams()

  useEffect(() => {

    dispatch(getLocalizacionGoogleMaps({direccion}))

  }, [direccion]);

  const { localizacion } = useSelector( state => state.inmueble )
  
  useEffect(() => {

    if (localizacion?.latitud && localizacion?.longitud) {
      const lat = parseFloat(localizacion.latitud);
      const lng = parseFloat(localizacion.longitud);
      if (!isNaN(lat) && !isNaN(lng)) {
        setCenter({ ...center, lat, lng });
      }
    }

  }, [localizacion]);


  return (
    <Grid>
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        center={{ lat: center.lat, lng: center.lng }}
        zoom={15}
        mapContainerStyle={{ height: "400px", width: "100%" }}
      />
      <Marker 
      position={{ lat: localizacion.latitud, lng: localizacion.longitud }} 
      // icon={{ url: icono }}
      />
    </LoadScript>
    </Grid>
  )
}

export default Maps