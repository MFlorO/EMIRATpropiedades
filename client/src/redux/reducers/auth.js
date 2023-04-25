
import { LOGIN, LOGOUT, CHECKING_CREDENTIALS, GET_USER_INFO, CLEAR_LOGIN_ERROR } from "../actions/auth.js"




const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    address: null,
    isActive: true,
    isAdmin: false,
    isBanned: false,
    errorMessage: null
  };



  
  export default function authrReducer(state = initialState, action) {
    switch (action.type) {


        // login: ( state, { payload } ) => {
        //     state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
        //     state.uid = payload.uid;
        //     state.email = payload.email;
        //     state.displayName = payload.displayName;
        //     state.photoURL = payload.photoURL;
        //     state.errorMessage = null;
        // },
        // logout: ( state, { payload } ) => {
        //     state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        //     state.uid = null;
        //     state.email = null;
        //     state.displayName = null;
        //     state.photoURL = null;
        //     state.errorMessage = payload?.errorMessage;
        // },
        // checkingCredentials: (state) => {
        //     state.status = 'checking';
        // }

    //   case LOGIN:
    //         if (action.payload.email === "admin@gmail.com") {
    //             return {
    //                 ...state,
    //                 status: "authenticated",
    //                 uid: action.payload.uid,
    //                 email: action.payload.email,
    //                 displayName: action.payload.displayName,
    //                 photoURL: action.payload.photoURL,
    //                 errorMessage: null,
    //                 isAdmin: true,
    //             };
    //         }
    //         return {
    //             ...state,
    //             status: "authenticated",
    //             uid: action.payload.uid,
    //             email: action.payload.email,
    //             displayName: action.payload.displayName,
    //             photoURL: action.payload.photoURL,
    //             errorMessage: null,
    //             // isActive: action.payload.isActive,
    //             // isAdmin: action.payload.isAdmin,
    //             // isBanned: action.payload.isBanned,
    //             // address: action.payload.address,
    //         };
            

    //     case LOGOUT:
    //         return {
    //             ...state,
    //             status: "not-authenticated",
    //             uid: null,
    //             email: null,
    //             displayName: null,
    //             photoURL: null,
    //             errorMessage: action.payload?.errorMessage,
    //             isActive: true,
    //             isAdmin: false,
    //             isBanned: false,
    //             address: null,
    //             favorites: [],
    //         };


    //     case CHECKING_CREDENTIALS:
    //         return {
    //             ...state,
    //             status: "checking",
    //         };


    //     case CLEAR_LOGIN_ERROR:
    //         return {
    //             ...state,
    //             errorMessage: null,
    //         };


    //     case GET_USER_INFO:
    //         if (action.payload.email === "admin@gmail.com") {
    //             return {
    //                 ...state,
    //                 isActive: action.payload.isActive,
    //                 isBanned: action.payload.isBanned,
    //                 address: action.payload.address,
    //                 isAdmin: true,
    //             };
    //         }
    //         return {
    //             ...state,
    //             isActive: action.payload.isActive,
    //             isAdmin: action.payload.isAdmin,
    //             isBanned: action.payload.isBanned,
    //             address: action.payload.address,
    //             displayName: action.payload.nameUser,
    //         };

      default:
        return state;
    }
  }
