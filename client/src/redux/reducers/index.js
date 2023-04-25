import { combineReducers } from 'redux';
import authrReducer from './auth';
import inmuebleReducer from './inmuebles';

const rootReducer = combineReducers({
  auth: authrReducer,
  inmueble: inmuebleReducer,
});

export default rootReducer;