// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMJteU7W1sa5O1v3bHJge5_xvg0dSfRaI",
  authDomain: "loginpage-213e1.firebaseapp.com",
  projectId: "loginpage-213e1",
  storageBucket: "loginpage-213e1.appspot.com",
  messagingSenderId: "437524870321",
  appId: "1:437524870321:web:7224f93d93adaf6682de90",
  measurementId: "G-80J2XSKW7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export{app,auth};