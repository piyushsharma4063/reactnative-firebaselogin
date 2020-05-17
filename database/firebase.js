import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAl2zSlCG7_Hf7mF2WL1qpYPRfz5s4m3cw",
    authDomain: "reactnative-firebase-996ce.firebaseapp.com",
    databaseURL: "https://reactnative-firebase-996ce.firebaseio.com",
    projectId: "reactnative-firebase-996ce",
    storageBucket: "reactnative-firebase-996ce.appspot.com",
    messagingSenderId: "838244062513",
    appId: "1:838244062513:web:543d538061ea78484a4c10"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;