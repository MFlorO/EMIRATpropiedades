import { baseURL } from "./url"
import axios from "axios"
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle, logoutFirebase, resetPasswordEmail } from "~/auth/firebase/providers";



export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHECKING_CREDENTIALS = "CHECKING_CREDENTIALS";
export const GET_USER_INFO = "GET_USER_INFO";
export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";




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
  

  
export function clearLoginError() {
    return (dispatch) => {
      dispatch({ type: "CLEAR_LOGIN_ERROR" });
    };
}
  
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

      if (!result.ok) {
      console.log('Error cuando no se logra ingresar con Google',result)
      return dispatch(logout(result))
    }
  
      const { uid, photoURL, displayName, email } = result;
      dispatch(login({ uid, email, displayName, photoURL }));
    };
  };
  



//   export const startCreatingUserWithEmailPassword = ({
//     email,
//     password,
//     displayName,
//   }) => {
//     return async (dispatch) => {
//       dispatch(checkingCredentials());
  
//       const result = await registerUserWithEmailPassword({
//         email,
//         password,
//         displayName,
//       });
  
//       if (!result.ok) return dispatch(logout(result));
  
//       const { uid, photoURL } = result;
//       dispatch(login({ uid, email, displayName, photoURL }));
//     };
//   };
  



//   export const startLoginWithEmailPassword = ({ email, password }) => {
//     return async (dispatch) => {
//       dispatch(checkingCredentials());
  
//       const result = await loginWithEmailPassword({ email, password });
  
//       if (!result.ok) return dispatch(logout(result));
  
//       const { uid, photoURL, displayName } = result;
//       dispatch(login({ uid, email, displayName, photoURL }));
//     };
//   };
  
//   export const startLogout = () => {
//     return async (dispatch) => {
//       await logoutFirebase();
  
//       dispatch(logout());
//     };
//   };