
import { GET_All_INMUEBLES, DELETE_All_INMUEBLES, GET_INMUEBLE_ID, DELETE_INMUEBLE_ID, CREAR_INMUEBLE,
    asc_des, 
    // OrderCont, order_Poblation, Order_Type_Activities 
} from "../actions/index.js"


const initialState = {
    inmuebles: [],
    inmueblesCopia: [],
    inmueble: {},
    categorias: [],
};




export default function rootReducer(state = initialState, action) {

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


        // case OrderCont:
        //    const continetFilter = action.payload === "Default" ? state.countriesAll : state.countriesAll.filter(el => el.continent[0] === action.payload)
        //     return{
        //       ...state,
        //      filterCountries: continetFilter    
        //     }
               
        


        // case Order_Type_Activities:

        //     let newArray = []; // let newArray = ["COL","ARG"];

        //     let countriesAll2 = state.countriesAll


        //     for (let i = 0; i < countriesAll2.length; i++) {
        //         if(countriesAll2[i].activities.length > 0){
        //             for (let j = 0; j < countriesAll2[i].activities.length; j++) {
        //                 if (countriesAll2[i].activities[j].id === action.payload) {
        //                     newArray.push(countriesAll2[i].id)
        //                     console.log("newArray",newArray)
        //                 }
        //             } 
        //         }
        //     }

            
        //     const activitiesFilter = action.payload === "Default" ? state.countriesAll : state.countriesAll.filter(el => newArray.includes(el.id))

            
        //     return{
        //     ...state,
        //     filterCountries: activitiesFilter
        //     }

        
        
            
        //         ##################       ORDENAMIENTOS         #################

      

        case asc_des:

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

            

                
        default:
            return state;
    }
}
