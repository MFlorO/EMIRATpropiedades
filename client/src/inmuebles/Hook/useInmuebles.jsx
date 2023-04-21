import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInmuebles, deleteInmueble } from '~/redux/actions';
import useQueryParams from './useQueryParams';




const useInmuebles = () => {

  const dispatch = useDispatch()

  const { c="" } = useQueryParams()

  const { inmuebles, inmueblesCopia } = useSelector( state => state )

  useEffect(() => {
    dispatch(getAllInmuebles({c}))
  
    return () => {
      deleteInmueble()
    }
  }, [dispatch, c])
  

  const {inmueble: inmuebleCopia, status, ok} = inmueblesCopia

  
  return {
    inmuebles, 
    inmuebleCopia,
    status,
    ok
  }
}

export default useInmuebles