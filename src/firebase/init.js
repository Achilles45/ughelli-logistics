import firebase from 'firebase'
import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAVUd_HqSpQWrOIL65O57S8jdn7-4d00u0",
  authDomain: "logistics-app-a50f2.firebaseapp.com",
  databaseURL: "https://logistics-app-a50f2.firebaseio.com",
  projectId: "logistics-app-a50f2",
  storageBucket: "logistics-app-a50f2.appspot.com",
  messagingSenderId: "101554474992",
  appId: "1:101554474992:web:36e08b1a472b95ca3b5735",
  measurementId: "G-NBHN9ZGKZ0"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()