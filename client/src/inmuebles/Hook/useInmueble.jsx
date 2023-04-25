import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from 'react-router-dom';
import { InmuebleID, deleteInmuebleID} from '~/redux/actions';



const useInmueble = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const { inmueble } = useSelector( state => state.inmueble)


  useEffect(() => {
    dispatch(InmuebleID(id))

    return () => {
      dispatch(deleteInmuebleID(id));
      //TENGO QUE DESMONTAR EL COMPONENTE SINO ME QUEDA AHI COLGADO
    };
  }, [dispatch, id])

   
  const { inmuebleId, status } = inmueble
 

  return { 
    inmuebleId
  }
}

export default useInmueble;