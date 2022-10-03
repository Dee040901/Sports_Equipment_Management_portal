import authReducer from "./authReducer";
import equipmentReducer from './equipmentReducer';

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  equipments:equipmentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
