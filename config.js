import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB2HFF6xZVzoZFfz7YQ_j_sIKpbZwQjg9E",
    authDomain: "foro-de-quejas-51b46.firebaseapp.com",
    databaseURL: "https://foro-de-quejas-51b46-default-rtdb.firebaseio.com",
    projectId: "foro-de-quejas-51b46",
    storageBucket: "foro-de-quejas-51b46.appspot.com",
    messagingSenderId: "547658252384",
    appId: "1:547658252384:web:db0ac594fbef2cb2794305"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


