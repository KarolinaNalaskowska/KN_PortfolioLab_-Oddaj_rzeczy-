// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrgeexty0XcsAM1SWAmZWKuvjuSIhN29U",
    authDomain: "kn-portfolio-lab.firebaseapp.com",
    projectId: "kn-portfolio-lab",
    storageBucket: "kn-portfolio-lab.appspot.com",
    messagingSenderId: "937647864248",
    appId: "1:937647864248:web:2790d8dd9639f47532b74d",
    measurementId: "G-D6RPFPD4RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);