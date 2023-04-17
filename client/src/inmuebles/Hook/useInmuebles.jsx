import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllInmuebles } from '~/redux/actions';



const useInmuebles = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  const qSlice = location.search; 
  const search= qSlice.slice(3)

  const { inmuebles, inmueblesCopia } = useSelector( state => state)

  useEffect(() => {
    dispatch(getAllInmuebles({search}))
  }, [dispatch, search])


  const {inmueble: inmuebleCopia, status} = inmueblesCopia

  
  return {
    inmuebles, 
    inmuebleCopia,
    status
  }
}

export default useInmuebles