
import axios from "axios"
const baseURL = "http://localhost:3001/api" 




export const GET_All_INMUEBLES = "GET_All_INMUEBLES"
export const GET_INMUEBLE_ID = "GET_INMUEBLE_ID";
export const DELETE_COUNTRIES_DETAIL = "DELETE_COUNTRIES_DETAIL";
export const CREAR_INMUEBLE = "CREAR_INMUEBLE"


//         ##################       GET_All_INMUEBLES         #################

export function getAllInmuebles() {
  return function (dispatch) {
   
    axios.get(`${baseURL}/inmuebles`)
      .then(response => {
        dispatch({
          type: 'GET_All_INMUEBLES',
          payload: response.data
        });
      })
    .catch(error => {
      console.log("todos los inmuebles",error)
    })
  };
}





//         ##################       GET_INMUEBLE_ID         #################


export function InmuebleID(id) {
  return function (dispatch) {
    
      axios.get(`${baseURL}/inmuebles/${id}`)
      .then(response => {
        dispatch({
          type: "GET_INMUEBLE_ID" ,
          payload: response.data
        });
      })
    .catch(error => {
      console.log("obtener inmueble por id",error)
    })
  };
}





//         ##################       CREAR_INMUEBLE         #################

export function createActivities(body) {
  return async function (dispatch) {
    try {
      await axios.post(`${baseURL}/inmuebles/`, body);
      return dispatch({
        type: CREAR_INMUEBLE
      })
    } catch (error) {
      console.log("crear inmueble", error)
    }
  }
}











// export const Order_Type_Activities = "ORDER_TYPE_ACTIVITIES";
// export const order_Poblation = "ORDER_POBLATION";
// export const asc_des = "ASC_DES";
// export const OrderCont = "ORDER_CONT";
// export const delete_activities = "DELETE_ACTIVITIES";
// export const update_activities = "UPDATE_ACTIVITIES";
// export const truncate_activities = "TRUNCATE_ACTIVITIES"



