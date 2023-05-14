import { baseURL } from "./url"
import axios from "axios"


export const GET_All_CATEGORIAS = "GET_All_CATEGORIAS"
export const GET_ALL_INMUEBLES = "GET_ALL_INMUEBLES"
export const CREAR_INMUEBLE = "CREAR_INMUEBLE"
export const GET_ALL_USUARIOS = "GET_ALL_USUARIOS"
export const DELETE_USER = "DELETE_USER"
export const SET_STATE = "SET_STATE"





//         ##################       GET_All_CATEGORIAS         #################

export function getAllCategorias() {

    return function (dispatch) {
  
      const url = `${baseURL}/categorias`
     
      axios.get(url)
        .then(response => {
          dispatch({
            type: 'GET_All_CATEGORIAS',
            payload: response.data
          });
        })
      .catch(error => {
        console.log("error ruta getAllCategorias",error)
      })
    };
  }
  


// ######## GET_ALL_INMUEBLES ##############

export function getAllInmueblesAdmin() {

  return function (dispatch) {

    const url = `${baseURL}/inmuebles/`
   
    axios.get(url)
      .then(response => {
        dispatch({
          type: 'GET_ALL_INMUEBLES',
          payload: response.data
        });
      })
    .catch(error => {
      console.log("error ruta getAllInmueblesAdmin",error)
    })
  };
}




//         ##################       CREAR_INMUEBLE         #################

export function createInmueble(body) {
  return async function (dispatch) {
    axios.post(`${baseURL}/inmuebles/`, body)
      .then(response => {
        console.log(response.data)
        dispatch({
          type: 'CREAR_INMUEBLE',
          payload: response.data
        });
      })
    .catch(error => {
      console.log("crear inmueble",error)
    })
  }
}


export function uploadImage(
  base64EncodedImage,
  setImage,
  successMessage,
  errorMessage
) {
  return async function (dispatch) {
    await axios
      .post(`${baseURL}/inmuebles/upload`, { data: base64EncodedImage })
      .then((response) => {
        console.log('response'. response)
        setImage(response.data.url);
        successMessage
      })
      .catch((error) => {
        errorMessage
        console.log("uploadImage", error);
      });
  };
}




//         ##################       DELETE_INMUEBLE         #################

export function deleteInmueble(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${baseURL}/inmuebles/${id}`);
      dispatch(getAllInmueblesAdmin())
      dispatch(getAllCategorias())
    } catch (error) {
      console.log("delete inmueble", error)
    }
  }
}




// ######## GET_ALL_USUARIOS ##############

export function getAllUsuarios() {
  
  const url = `${baseURL}/usuarios`

  return function (dispatch) {   
    axios.get(url)
    .then(response => {
        dispatch({
          type: 'GET_ALL_USUARIOS',
          payload: response.data
        });
      })
    .catch(error => {
      console.log("error ruta getAllUsuarios",error)
    })
  };
}




// ######## SET_ACTIVE_USUARIOS ##############
export function setUserAdmin(uid) {

  return async function (dispatch) {

    await axios.put(`${baseURL}/usuarios/${uid}`)
  };
}





// ######## DELETE_USUARIO ##############
export function deleteUser(uid) {
  return async function (dispatch) {
    await axios
      .delete(`${baseURL}/usuarios/${uid}`)
      .then((response) => {
        dispatch({ type: "DELETE_USER", payload: uid });
      })
      .catch((error) => {
        console.log("deleteUser", error);
      });
  };
}



// ######## SET_STATE ##############
export function setstate(msg) {
  return (dispatch) => {
    dispatch({ type: "SET_STATE", payload: msg });
  };
}
