import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDjawXohRXnxz7LILfiMoAVD7ZJbpQPtZQ",
    authDomain: "sports-management-system-47ace.firebaseapp.com",
    projectId: "sports-management-system-47ace",
    storageBucket: "sports-management-system-47ace.appspot.com",
    messagingSenderId: "909812701339",
    appId: "1:909812701339:web:dc2c0a727ed063a4170e3e",
    measurementId: "G-NCYBKJXBS4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase ;
