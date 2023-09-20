import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIy1BSYLgqgoXSduLvkaNkw9m6paHZ8mE",
  authDomain: "whatsapp-8ecbf.firebaseapp.com",
  projectId: "whatsapp-8ecbf",
  storageBucket: "whatsapp-8ecbf.appspot.com",
  messagingSenderId: "939992906257",
  appId: "1:939992906257:web:d0d1e87ea5c2fe9d584fb0",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;
