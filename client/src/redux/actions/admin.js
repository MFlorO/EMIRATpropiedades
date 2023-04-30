import { baseURL } from "./url"
import axios from "axios"


export const GET_All_CATEGORIAS = "GET_All_CATEGORIAS"
export const GET_ALL_INMUEBLES = "GET_ALL_INMUEBLES"




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