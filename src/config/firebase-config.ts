// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAeSAEEa2zF7r_udj2sRmxB_evLOlzmhAc",
  authDomain: "any-job-5c685.firebaseapp.com",
  projectId: "any-job-5c685",
  storageBucket: "any-job-5c685.appspot.com",
  messagingSenderId: "898387265740",
  appId: "1:898387265740:web:65093a68bbd15b6e649a69",
  measurementId: "G-3ZLENG1VSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuthprovider = new GoogleAuthProvider();