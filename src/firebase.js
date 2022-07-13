import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSWpqi1cb4lWaGZCiI8WiYWU63Cq2Lhnk",
    authDomain: "qkrandjs.firebaseapp.com",
    projectId: "qkrandjs",
    storageBucket: "qkrandjs.appspot.com",
    messagingSenderId: "891399826561",
    appId: "1:891399826561:web:d0fff2c21ed0d96f2b7180",
    measurementId: "G-CLE0QT9TWZ"
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };