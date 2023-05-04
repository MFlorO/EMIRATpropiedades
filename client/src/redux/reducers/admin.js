import { GET_ALL_INMUEBLES, GET_All_CATEGORIAS, CREAR_INMUEBLE } from "../actions/admin.js"




const initialState = {
  inmueblesTotales: [],
  inmueblesCopia: [],
  categorias: []
};



  
  export default function adminReducer(state = initialState, action) {
    switch (action.type) {

      case GET_All_CATEGORIAS:
        return {
            ...state,
            categorias: action.payload
        }

      case GET_ALL_INMUEBLES:
        return {
          ...state,
          inmueblesTotales: action.payload,
          inmueblesCopia: action.payload
        }

      default:
        return state;
    }
  }
