import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider, reactReduxFirebase } from "react-redux-firebase";
// import fbconfig from "./config/fbconfig";
import rootReducer from "./store/reducers/rootReducer";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjawXohRXnxz7LILfiMoAVD7ZJbpQPtZQ",
    authDomain: "sports-management-system-47ace.firebaseapp.com",
    projectId: "sports-management-system-47ace",
    storageBucket: "sports-management-system-47ace.appspot.com",
    messagingSenderId: "909812701339",
    appId: "1:909812701339:web:dc2c0a727ed063a4170e3e",
    measurementId: "G-NCYBKJXBS4"
}

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById("root")
);


// // serviceWorker.unregister();
