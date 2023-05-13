import { GET_ALL_INMUEBLES, GET_All_CATEGORIAS, GET_ALL_USUARIOS } from "../actions/admin.js"




const initialState = {
  inmueblesTotales: [],
  inmueblesCopia: [],
  categorias: [],
  usuarios:[]
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

      case GET_ALL_USUARIOS:
        return {
          ...state,
          usuarios: action.payload
        }

      default:
        return state;
    }
  }
