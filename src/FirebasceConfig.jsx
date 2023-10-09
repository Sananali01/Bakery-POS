// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmVudqo8tuoPjI5kS0Il9gO-bm-iYLFTI",
  authDomain: "react-ecommerce-d7443.firebaseapp.com",
  projectId: "react-ecommerce-d7443",
  storageBucket: "react-ecommerce-d7443.appspot.com",
  messagingSenderId: "768727619641",
  appId: "1:768727619641:web:6bb39087e70b8075d095e8",
  measurementId: "G-FCNPJHH714",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
