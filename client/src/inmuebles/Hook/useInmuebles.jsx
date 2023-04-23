import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInmuebles, deleteInmueble } from '~/redux/actions';
import useQueryParams from './useQueryParams';




const useInmuebles = () => {

  const dispatch = useDispatch()

  const { c , s } = useQueryParams()

  useEffect(() => {
    
    dispatch(getAllInmuebles({c,s}))
  
    return () => {
      deleteInmueble({c})
    }
  }, [ c, s ])

  
  const { inmuebles, inmueblesCopia } = useSelector( state => state )

  const {inmueble: inmuebleCopia, status, ok} = inmueblesCopia

  
  return {
    inmuebles, 
    inmuebleCopia,
    status,
    ok
  }
}

export default useInmuebles