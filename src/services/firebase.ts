import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8pVRzwI1gn7EYSpS2pFhJ3jeq2Pbc6KY",
  authDomain: "zappi-d46e4.firebaseapp.com",
  projectId: "zappi-d46e4",
  storageBucket: "zappi-d46e4.appspot.com",
  messagingSenderId: "498807312197",
  appId: "1:498807312197:web:0da0da4ec23abe952d782c",
  measurementId: "G-K4JBRVV9QY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
