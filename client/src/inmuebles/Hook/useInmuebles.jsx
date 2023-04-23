import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInmuebles, deleteInmueble } from '~/redux/actions';
import useQueryParams from './useQueryParams';




const useInmuebles = () => {

  const dispatch = useDispatch()

  const { c , s } = useQueryParams()

  const { inmuebles, inmueblesCopia } = useSelector( state => state )

  const {inmueble, status, ok} = inmueblesCopia


  useEffect(() => {
    
    dispatch(getAllInmuebles({c,s}))
  
    return () => {
      deleteInmueble({c})
    }
  }, [ c, s ])



  return {
    inmuebles, 
    inmueble,
    status,
    ok
  }
}

export default useInmuebles