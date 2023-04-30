import { baseURL } from "./url"
import axios from "axios"
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle, logoutFirebase, resetPasswordEmail } from "~/auth/firebase/providers";



export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHECKING_CREDENTIALS = "CHECKING_CREDENTIALS";
export const GET_USER_INFO = "GET_USER_INFO";
export const SET_CREATE_USER_ERROR = "SET_CREATE_USER_ERROR";




export function login(user) {
    return function (dispatch) {
      dispatch({ type: "LOGIN", payload: user });
    };
}
  
export function logout(msg) {
    return function (dispatch) {
      dispatch({ type: "LOGOUT", payload: msg });
    };
}
  

  
export function setCreateUserError(msg) {
    return (dispatch) => {
      dispatch({ type: "SET_CREATE_USER_ERROR", payload: msg });
    };
}
  

  export function getUserInfo(uid) {
    return async function (dispatch) {
      await axios
        .get(`${baseURL}/user/${uid}`)
        .then((response) => {
          if (response.data.isActive)
            dispatch({ type: "GET_USER_INFO", payload: response.data });
          else dispatch(startLogout());
        })
        .catch((error) => {
          console.log("getUserInfo", error);
        });
    };
  }
  




  export function checkingCredentials() {
    return function (dispatch) {
      dispatch({ type: "CHECKING_CREDENTIALS" });
    };
 }


  
  export const startGoogleSignIn = () => {
    return async (dispatch) => {
      dispatch(checkingCredentials());  //Lo primero que necesito que haga es que verifique el estado, para saber si esta autenticado o no
  
      const result = await signInWithGoogle();

      if (!result.ok) return dispatch(logout(result))
  
      const { uid, photoURL, displayName, email } = result;
      dispatch(login({ uid, email, displayName, photoURL }));
    };
  };
  



  export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

      dispatch(checkingCredentials());
  
      const {ok, errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
  
      if (!ok) return dispatch(setCreateUserError(errorMessage));
  
      dispatch(setCreateUserError('Usuario creado con exito'))

    };
  };
  



  export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
      dispatch(checkingCredentials());
  
      const { ok, uid, photoURL, displayName , errorMessage } = await loginWithEmailPassword({ email, password });
  
      if (!ok) return dispatch(setCreateUserError(errorMessage));
  
      dispatch(login({ uid, email, displayName, photoURL }));
    };
  };
  


//   export function createOrFindUser(user) {
//     return async function (dispatch) {
//       await axios
//         .post(`${baseURL}/user`, user)
//         .then((response) => {
//           dispatch(getUserInfo(user.uid));
//         })
//         .catch((error) => {
//           console.log("createOrFindUser", error);
//         });
//     };
//   }
  