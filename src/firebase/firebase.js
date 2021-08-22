import firebase from 'firebase';
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAtvTrx-C-1Z8rAXRvGE41D4ysSm3r-fKE",
    authDomain: "expensify-96c2c.firebaseapp.com",
    databaseURL: "https://expensify-96c2c-default-rtdb.firebaseio.com",
    projectId: "expensify-96c2c",
    storageBucket: "expensify-96c2c.appspot.com",
    messagingSenderId: "912656737113",
    appId: "1:912656737113:web:85a07f2272dd4e665ba248"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };