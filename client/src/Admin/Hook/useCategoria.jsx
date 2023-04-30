import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategorias } from '~/redux/actions';



const useCategoria = () => {
  const dispatch = useDispatch()

  const { categorias } = useSelector( state => state.admin )

  useEffect(() => {
    dispatch(getAllCategorias())

  }, [dispatch])

  const {ok, status, categorias:categoria} = categorias

  return { 
    categoria,
    status
  }
}

export default useCategoria;