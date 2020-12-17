import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyXD2WnMDLQsnG9bPcjOcfQLY4bf8pDRw",
  authDomain: "chat-locus.firebaseapp.com",
  databaseURL: "https://chat-locus.firebaseio.com",
  projectId: "chat-locus",
  storageBucket: "chat-locus.appspot.com",
  messagingSenderId: "1033916213376",
  appId: "1:530203220009:web:2ae7cb439316d4f225a438",
  measurementId: "G-P788DCRSL8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
