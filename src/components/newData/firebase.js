import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCIy1BSYLgqgoXSduLvkaNkw9m6paHZ8mE",
  authDomain: "whatsapp-8ecbf.firebaseapp.com",
  projectId: "whatsapp-8ecbf",
  storageBucket: "whatsapp-8ecbf.appspot.com",
  messagingSenderId: "939992906257",
  appId: "1:939992906257:web:d0d1e87ea5c2fe9d584fb0",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
