import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBc-zlMZd0Vac0oP92Fhm6MH_YG37yexLI",
  authDomain: "crwn-db-550fc.firebaseapp.com",
  projectId: "crwn-db-550fc",
  storageBucket: "crwn-db-550fc.appspot.com",
  messagingSenderId: "180928522671",
  appId: "1:180928522671:web:207c4d7f45b0798696e75a",
  measurementId: "G-CSFQVJKX47",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
