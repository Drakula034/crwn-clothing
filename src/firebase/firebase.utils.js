import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDABTSmDUvMm4EpN0AEwCSCPnxp7AY7Xdo",
    authDomain: "crwn-db-c360b.firebaseapp.com",
    projectId: "crwn-db-c360b",
    storageBucket: "crwn-db-c360b.appspot.com",
    messagingSenderId: "248543791058",
    appId: "1:248543791058:web:ce83984f43c2fdc5cbea0b",
    measurementId: "G-1JZN38J0LX"
  };

firebase.initializeApp(config);  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;