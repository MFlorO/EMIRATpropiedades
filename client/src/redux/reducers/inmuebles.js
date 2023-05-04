
import { GET_All_INMUEBLES, DELETE_All_INMUEBLES, GET_INMUEBLE_ID, DELETE_INMUEBLE_ID, CREAR_INMUEBLE,
    ASC_DES, RESET_FILTRO, FILTRO_CATEGORIA, FILTRO_HABITACION,
    GET_GOOGLEMAPS,
    SET_PAGINA_ACTUAL,
    GET_INMUEBLES_CATEGORIA, GET_INMUEBLES_BUSQUEDA
} from "../actions/inmuebles.js"


const initialState = {
    inmueblesTotales: [],
    inmueblesCopia: [],
    inmueble: {},
    categorias: [],
    localizacion: {},
    paginaActual: 1,
    cantidadPaginas: 1
};




export default function inmuebleReducer(state = initialState, action) {

    switch (action.type) {


        case GET_All_INMUEBLES:
            return {
                ...state,
                inmueblesTotales: action.payload,
                inmueblesCopia: action.payload
            }

        case GET_INMUEBLES_CATEGORIA:{
            return{
                ...state,
                inmueblesCopia: action.payload
            }
        }

        case GET_INMUEBLES_BUSQUEDA:{
            return{
                ...state,
                inmueblesCopia: action.payload
            }
        }
            
        case DELETE_All_INMUEBLES:   //Limpia el componente --> useEffect del componente
            return {
                ...state,
                inmueblesTotales: [],
                inmueblesCopia: []
        } 


        case GET_INMUEBLE_ID:
            return {
                ...state,
                inmueble: action.payload
            }



        case DELETE_INMUEBLE_ID:   //Limpia el componente --> useEffect del componente detalle
            return {
                ...state,
                inmueble: {}
            }





        // ################### PAGINADO ####################

        case SET_PAGINA_ACTUAL:
            return{
                ...state,
                paginaActual: action.payload
            }





        //         ##################       FILTROS         #################

        case RESET_FILTRO:
           const resetFiltro = [...state.inmuebles.inmueble]
           return{
              ...state,
              inmueblesCopia: {
                  ...state.inmueblesCopia,
                  inmueble: resetFiltro
                }
            }




        case FILTRO_HABITACION:

           const inmuebleFilterHab = [...state.inmuebles.inmueble]
           let inmuebleFilterHab2 = [...state.inmueblesCopia.inmueble]

           const inmuebleFilterHab3 = action.payload === "default" ? inmuebleFilterHab : inmuebleFilterHab2.filter(i => String(i.dormitorios) === action.payload)

           return{
              ...state,
              inmueblesCopia: {
                  ...state.inmueblesCopia,
                  inmueble: inmuebleFilterHab3
                }
            }
               
        

        case FILTRO_CATEGORIA:

            const inmuebleFilterCat = [...state.inmuebles.inmueble]
            let inmuebleFilterCat2 = [...state.inmueblesCopia.inmueble]
    
            const inmuebleFilterCat3 = action.payload === "default" ? inmuebleFilterCat : inmuebleFilterCat2.filter(i => String(i.categoria.map( c => c.nombre === action.payload )))

            return{
                ...state,
                inmueblesCopia: {
                    ...state.inmueblesCopia,
                    inmueble: inmuebleFilterCat3
                }
            }

        
        case ASC_DES:
            return {
                ...state,
                inmueblesCopia: action.payload
            }
            

        case GET_GOOGLEMAPS:
            return {
                ...state,
                localizacion: action.payload
            }

                
        default:
            return state;
    }
}
