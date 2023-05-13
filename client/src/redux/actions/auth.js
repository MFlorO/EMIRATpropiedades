import { baseURL } from "./url"
import axios from "axios"
import { loginWithEmailPassword, registerUserWithEmailPassword, logoutFirebase, resetPasswordEmail } from "~/auth/firebase/providers";



export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHECKING_CREDENTIALS = "CHECKING_CREDENTIALS";
export const SET_CREATE_USER_ERROR = "SET_CREATE_USER_ERROR";
export const GET_USER_INFO = "GET_USER_INFO"





export function login(user) {
    return function (dispatch) {
      dispatch({ type: "LOGIN", payload: user });
    };
}
  
export function logout(msg=null) {
    return function (dispatch) {
      dispatch({ type: "LOGOUT", payload: msg });
    };
}
  

  
export function setCreateUserError(msg) {
    return (dispatch) => {
      dispatch({ type: "SET_CREATE_USER_ERROR", payload: msg });
    };
}
  


export function checkingCredentials() {
  return function (dispatch) {
    dispatch({ type: "CHECKING_CREDENTIALS" });
  };
}
  



export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());
  
    const {ok, errorMessage, uid} = await registerUserWithEmailPassword({email,password,displayName});
  
    if (!ok) return dispatch(setCreateUserError(errorMessage));
  
    dispatch(findorCreateUser({ uid, email, displayName }));
    dispatch(setCreateUserError(null))

  };
};
  



export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  
    const { ok, uid, photoURL, displayName , errorMessage } = await loginWithEmailPassword({ email, password });
  
    if (!ok) return dispatch(logout({errorMessage}));
  
    dispatch(findorCreateUser({ uid, email, displayName }));
    
    dispatch(login({ uid, email, displayName, photoURL }));

  };
};
  


export function findorCreateUser({ uid, email, displayName }) {
  return async function (dispatch) {

    email === "emiratpropiedades@gmail.com" 
    ? await axios.post(`${baseURL}/usuarios`, { uid, email, displayName, isAdmin:true })
    : await axios.post(`${baseURL}/usuarios`, { uid, email, displayName, isAdmin:false })
  };
}


export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  };
};




// export const startResetPasswordEmail = ({ email }) => {
//   return async (dispatch) => {
//     const result = await resetPasswordEmail({ email });
//     if (!result.ok) return dispatch(logout(result.errorMessage));
//   };
// };