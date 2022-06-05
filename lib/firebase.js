import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCE2Tw03z31aCJr8GshgjwycjzIx4q-A1o",
    authDomain: "thelounge-88a13.firebaseapp.com",
    projectId: "thelounge-88a13",
    storageBucket: "thelounge-88a13.appspot.com",
    messagingSenderId: "522103102123",
    appId: "1:522103102123:web:8503d83cd06e6ba7c6b5ee",
    measurementId: "G-2YS51RD0W1"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();