import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllInmuebles, deleteInmueble, ordenarPor } from '~/redux/actions';
import useQueryParams from './useQueryParams';





const useInmuebles = () => {

  const dispatch = useDispatch()

  const { orden = 'default' } = useParams()

  const { c , s, items } = useQueryParams()

  const { inmueblesCopia, paginaActual } = useSelector( state => state.inmueble )

  const {inmueble, status, ok, cantidadTotal, cantidadPaginas } = inmueblesCopia
  

  useEffect(() => {

    if ( orden === 'asc' || orden ==='des' ) {
      dispatch(ordenarPor( {c,s, paginaActual, items}, {orden} ))
    } else {
      dispatch(getAllInmuebles({c,s, paginaActual, items}))
    }

  
    return () => {
      deleteInmueble({c})
    }
  }, [ c, s, orden, paginaActual ])


  return {
    // inmuebles, 
    inmueble,
    status,
    ok,
    cantidadTotal,
    cantidadPaginas
  }
}

export default useInmuebles