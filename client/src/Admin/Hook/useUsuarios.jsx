import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsuarios } from '~/redux/actions/admin';




const useUsuarios = () => {

  const dispatch = useDispatch()

  const { usuarios } = useSelector( state => state.admin )
  
  const { ok, usuarios:todosUsuarios } = usuarios

  useEffect(() => {

   dispatch(getAllUsuarios())
    
  }, [ dispatch ])
  

  return {
    ok,
    todosUsuarios
  }
}

export default useUsuarios;