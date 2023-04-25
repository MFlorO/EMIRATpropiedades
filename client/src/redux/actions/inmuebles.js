
import axios from "axios"
const baseURL = "http://localhost:3001/api" 




export const GET_All_INMUEBLES = "GET_All_INMUEBLES"
export const DELETE_All_INMUEBLES = "DELETE_All_INMUEBLES"
export const GET_INMUEBLE_ID = "GET_INMUEBLE_ID";
export const DELETE_COUNTRIES_DETAIL = "DELETE_COUNTRIES_DETAIL";
export const CREAR_INMUEBLE = "CREAR_INMUEBLE";
export const DELETE_INMUEBLE_ID = "DELETE_INMUEBLE_ID";

export const SET_PAGE = "SET_PAGE"

export const ASC_DES = "ASC_DES";
export const FILTRO_HABITACION = "FILTRO_HABITACION"
export const RESET_FILTRO = "RESET_FILTRO"
export const FILTRO_CATEGORIA = "FILTRO_CATEGORIA"


export const GET_GOOGLEMAPS = "GET_GOOGLEMAPS"






//         ##################       GET_All_INMUEBLES         #################

export function getAllInmuebles(query) {

  const { c="", s="" } = query

  return function (dispatch) {

    const url = `${baseURL}/inmuebles?c=${c}&s=${s}`
   
    axios.get(url)
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




//         ##################       GET_INMUEBLE_ID         #################


export function InmuebleID(id) {

  return function (dispatch) {
      axios.get(`${baseURL}/inmuebles/detalle/${id}`)
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
        type: "CREAR_INMUEBLE"
      })
    } catch (error) {
      console.log("crear inmueble", error)
    }
  }
}


// ############ SEET_PAGE ##################


export function setPage(page) {
  return function (dispatch) {
    dispatch({ type: "SET_PAGE", payload: page });
  };
}




//         ##################       asc_des         #################

export function ordenarPor(payload) {
  return {
    type: "ASC_DES",
    payload: payload
  };
}




//         ##################       FILTRO POR HABITACION        #################

export function filtroCat(payload) {
  return {
    type: "FILTRO_CATEGORIA",
    payload: payload
  };
}

export function filtroHab(payload) {
  return {
    type: "FILTRO_HABITACION",
    payload: payload
  };
}


export function resetFiltro(payload) {
  return {
    type: "RESET_FILTRO",
    payload: payload
  };
}



//         ##################       GET_GOOGLEMAPS         #################

export function getLocalizacionGoogleMaps(params) {

  const { direccion } = params

  return async function (dispatch) {
    axios.get(`${baseURL}/inmuebles/maps/${direccion}`)
    .then(response => {
      dispatch({
        type: "GET_GOOGLEMAPS" ,
        payload: response.data
      });
    })
  .catch(error => {
    console.log("obtener localicacion de google maps", error)
  })
  }
}



