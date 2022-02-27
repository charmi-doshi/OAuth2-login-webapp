import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCcnS9-3uO6NMP4hPs0UOrGnUrGOdVdUwc",
    authDomain: "client-management-8934a.firebaseapp.com",
    projectId: "client-management-8934a",
    storageBucket: "client-management-8934a.appspot.com",
    messagingSenderId: "225905261321",
    appId: "1:225905261321:web:f02852cf04947a7bf5f1d8",
    measurementId: "G-4SDEJPDHJ7"
  };
  

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);