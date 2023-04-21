
import axios from "axios"
const baseURL = "http://localhost:3001/api" 




export const GET_All_INMUEBLES = "GET_All_INMUEBLES"
export const DELETE_All_INMUEBLES = "DELETE_All_INMUEBLES"
export const GET_INMUEBLE_ID = "GET_INMUEBLE_ID";
export const DELETE_COUNTRIES_DETAIL = "DELETE_COUNTRIES_DETAIL";
export const CREAR_INMUEBLE = "CREAR_INMUEBLE";
export const DELETE_INMUEBLE_ID = "DELETE_INMUEBLE_ID";
export const GET_NAME_INMUEBLES = "GET_NAME_INMUEBLES";




//         ##################       GET_All_INMUEBLES         #################

export function getAllInmuebles(query) {

  const { c } = query

  return function (dispatch) {
   
    axios.get(`${baseURL}/inmuebles?c=${c}`)
      .then(response => {
        dispatch({
          type: 'GET_All_INMUEBLES',
          payload: response.data
        });
      })
    .catch(error => {
      console.log("error ruta getAllInmuebles",error)
    })
  };
}


//         #########   DELETE_All_INMUEBLES  #################


export function deleteInmueble(query) {  //--> Lo utilizo para desmontar el componente de inmueble
  return {
    type: DELETE_All_INMUEBLES,
    payload: query
  };
}



//         ##################       GET_NAME_INMUEBLES         #################


export function getNameInmuebles(query) {

  const { c } = query


  return function (dispatch) {
   
    axios.get(`${baseURL}/inmuebles?c=${c}`)
      .then(response => {
        console.log(response.data)
        dispatch({
          type: 'GET_NAME_INMUEBLES',
          payload: response.data
        });
      })
    .catch(error => {
      console.log("error ruta getnameinmueblee",error)
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


//         ##################       DELETE_INMUEBLE_ID         #################

export function deleteInmuebleID(id) {  //--> Lo utilizo para desmontar el componente de detalle
  return {
    type: DELETE_INMUEBLE_ID,
    payload: id
  };
}



//         ##################       CREAR_INMUEBLE         #################

export function createInmueble(body) {
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



