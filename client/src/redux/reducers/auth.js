
import { LOGIN, LOGOUT, CHECKING_CREDENTIALS, GET_USER_INFO, CLEAR_LOGIN_ERROR } from "../actions/auth.js"




const initialState = {
    status: 'no-autenticado', // autenticado //checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    isActive: true,
    isAdmin: false,
    isBanned: false,
    errorMessage: null
  };



  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {

      case LOGIN:
        if (action.payload.email === "emiratpropiedades@gmail.com") {
          return {
            ...state,
            status: "autenticado",
            uid: action.payload.uid,
            email: action.payload.email,
            displayName: action.payload.displayName,
            photoURL: action.payload.photoURL,
            errorMessage: null,
            isAdmin: true,
           }
        }
        return {
            ...state,
            status: "autenticado",
            uid: action.payload.uid,
            email: action.payload.email,
            displayName: action.payload.displayName,
            photoURL: action.payload.photoURL,
            errorMessage: null,
            // isActive: action.payload.isActive,
            // isAdmin: action.payload.isAdmin,
            // isBanned: action.payload.isBanned,
        }
            
      
      case LOGOUT:
            return {
                ...state,
                status : 'no-autenticado',
                uid : null,
                email : null,
                displayName : null,
                photoURL : null,
                errorMessage : action.payload?.errorMessage,
            }
      
            
      case LOGOUT:
          return {
            ...state,
            status: "no-autenticado",
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: action.payload?.errorMessage,
            isActive: true,
            isAdmin: false,
            isBanned: false,
          };

      case CHECKING_CREDENTIALS:
        return {
            ...state,
            status : 'checking',
          }

      case CLEAR_LOGIN_ERROR:
        return {
            ...state,
            errorMessage: null,
        };


      case GET_USER_INFO:
        if (action.payload.email === "emirat@gmail.com") {
            return {
            ...state,
            isActive: action.payload.isActive,
            isBanned: action.payload.isBanned,
            isAdmin: true,
            }
        }
            return {
            ...state,
            isActive: action.payload.isActive,
            isAdmin: action.payload.isAdmin,
            isBanned: action.payload.isBanned,
            displayName: action.payload.nameUser,
        };


      default:
        return state;
    }
  }
