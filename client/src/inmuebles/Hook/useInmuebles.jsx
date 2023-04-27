import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInmuebles, getInmueblesBusqueda, getInmueblesCategoria } from '~/redux/actions';
import useQueryParams from './useQueryParams';






const useInmuebles = () => {

  const dispatch = useDispatch()


  const { c='todos', s, items=5 } = useQueryParams()

  const { inmueblesTotales, inmueblesCopia, paginaActual } = useSelector( state => state.inmueble )

  const { inmuebles, status, ok, cantidadTotal, cantidadPaginas } = inmueblesCopia
  

  useEffect(() => {

    if ( c !== undefined && c !=='todos') {
       if( s!== undefined){
        return dispatch(getInmueblesBusqueda({ c, s, paginaActual, items }))
       }else{
        return dispatch(getInmueblesCategoria( { c, paginaActual, items } ))
       }
    } else if (s !== undefined) {
      dispatch(getInmueblesBusqueda({ s, items, paginaActual }))
    }else {
      dispatch(getAllInmuebles({ paginaActual, items }))
    }
    

    // return () => {
    //   deleteInmueble()
    // }
  }, [ paginaActual, c, s ])



  return {
    inmueblesTotales, 
    inmuebles,
    status,
    ok,
    cantidadTotal,
    cantidadPaginas
  }
}

export default useInmuebles