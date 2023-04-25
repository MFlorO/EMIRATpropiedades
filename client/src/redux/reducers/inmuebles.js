
import { GET_All_INMUEBLES, DELETE_All_INMUEBLES, GET_INMUEBLE_ID, DELETE_INMUEBLE_ID, CREAR_INMUEBLE,
    ASC_DES, RESET_FILTRO, FILTRO_CATEGORIA, FILTRO_HABITACION,
    GET_GOOGLEMAPS,
} from "../actions/inmuebles.js"


const initialState = {
    inmuebles: [],
    inmueblesCopia: [],
    inmueble: {},
    categorias: [],
    localizacion: {},
    paginaActual: 0,
};




export default function inmuebleReducer(state = initialState, action) {

    switch (action.type) {


        case GET_All_INMUEBLES:
            return {
                ...state,
                inmuebles: action.payload,
                inmueblesCopia: action.payload
            }

            
        case DELETE_All_INMUEBLES:   //Limpia el componente --> useEffect del componente
            return {
                ...state,
                inmuebles: [],
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




        case CREAR_INMUEBLE:
            return {
                ...state,
                Inmuebles: action.payload
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

        
            
        //         ##################       ORDENAMIENTOS         #################

      

        case ASC_DES:

            let inmuebles = [...state.inmueblesCopia.inmueble]

              let inmueble2 = action.payload === 'default' 
              ? inmuebles 
              : inmuebles.sort((a, b) => {
                if(a.precio < b.precio){
                    return action.payload === "asc" ? -1 : 1
                }
                if(a.precio > b.precio){
                    return action.payload === "asc" ? 1 : -1
                }
                return 0;
            })

            return {
                ...state,
                inmueblesCopia: {
                    ...state.inmueblesCopia,
                    inmueble: inmueble2
                  }
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