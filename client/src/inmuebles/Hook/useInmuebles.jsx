import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllInmuebles, getInmueblesBusqueda, getInmueblesCategoria, ordenarPor } from '~/redux/actions';
import useQueryParams from './useQueryParams';







const useInmuebles = () => {

  const dispatch = useDispatch()

  const { ordenar } = useParams()

  const { c='todos', s, items=5 } = useQueryParams()

  const { inmueblesTotales, inmueblesCopia, paginaActual } = useSelector( state => state.inmueble )

  const { inmuebles, status, ok, cantidadTotal, cantidadPaginas } = inmueblesCopia
  
  


  useEffect(() => {

    if ( c !== undefined && c !=='todos') {
       if( s!== undefined){
        if(ordenar) return dispatch(ordenarPor({c,s,items,paginaActual},{ordenar}))
        return dispatch(getInmueblesBusqueda({c, s, paginaActual, items}))
       }else{
        if(ordenar) return dispatch(ordenarPor({c,items,paginaActual},{ordenar}))
        return dispatch(getInmueblesCategoria({c, paginaActual, items}))
       }
    } else{
      if (s !== undefined) {
        if(ordenar !== undefined) return dispatch(ordenarPor({s,items,paginaActual},{ordenar}))
        return dispatch(getInmueblesBusqueda({s, items, paginaActual}))
      }else{
        if(ordenar) return dispatch(ordenarPor({items,paginaActual},{ordenar}))
        return dispatch(getAllInmuebles({ paginaActual, items }))
      }
    }
    
  }, [ paginaActual, c, s, ordenar ])



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