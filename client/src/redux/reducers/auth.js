import { LOGIN, LOGOUT, CHECKING_CREDENTIALS, SET_CREATE_USER_ERROR } from "../actions/auth.js"


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
            isAdmin: false,
            isActive: state.isActive,
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
            // isActive: true,
            // isAdmin: false,
          };


      case CHECKING_CREDENTIALS:
        return {
            ...state,
            status : 'checking',
          }

      case SET_CREATE_USER_ERROR:
        return {
          ...state,
          status: "autenticado",
          uid: state.uid,
          email: state.email,
          displayName: state.displayName,
          photoURL: state.photoURL,
          errorMessage: action?.payload,
          isActive: state.isActive,
          isAdmin: state.isAdmin,
        };


      default:
        return state;
    }
  }
