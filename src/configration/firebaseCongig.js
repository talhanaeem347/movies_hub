// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaS9NJCG5wdfr5qRmbq5Gf6iuzI6mg5m0",
  authDomain: "movies-1hub.firebaseapp.com",
  projectId: "movies-1hub",
  storageBucket: "movies-1hub.appspot.com",
  messagingSenderId: "254505645426",
  appId: "1:254505645426:web:1719ed2ef27d606a9f99eb",
  measurementId: "G-HQ7K04ZDVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const moviesRef = db.collection('movies');

export default app;