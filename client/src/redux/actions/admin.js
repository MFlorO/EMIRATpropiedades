import { fileUpload } from "../../Admin/helpers/fileUpload"
import { baseURL } from "./url"
import axios from "axios"


export const GET_All_CATEGORIAS = "GET_All_CATEGORIAS"
export const GET_ALL_INMUEBLES = "GET_ALL_INMUEBLES"
export const CREAR_INMUEBLE = "CREAR_INMUEBLE"



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

  console.log('action', body)
  
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
