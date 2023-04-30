import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInmueblesAdmin } from '~/redux/actions/admin';




const useInmuebles = () => {

  const dispatch = useDispatch()

  const { inmueblesTotales, inmueblesCopia } = useSelector( state => state.admin )

  useEffect(() => {

   dispatch(getAllInmueblesAdmin())
    
  }, [ dispatch ])
  
  
  const { inmuebles, status, ok } = inmueblesCopia


  return {
    inmueblesTotales, 
    inmuebles,
    status,
    ok,
  }
}

export default useInmuebles