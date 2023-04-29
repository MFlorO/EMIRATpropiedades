import { combineReducers } from 'redux';
import authReducer from './auth';
import inmuebleReducer from './inmuebles';
import adminReducer from './admin';

const rootReducer = combineReducers({
  auth: authReducer,
  inmueble: inmuebleReducer,
  admin: adminReducer,
});

export default rootReducer;