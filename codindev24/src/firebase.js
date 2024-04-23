import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Setja þetta í .env áðurr en ég publicha þetta app!
const firebaseConfig = {
    apiKey: "AIzaSyBEX483Q43t0YHY9HLOQEgpRbDtJNxJf4E",
    authDomain: "codindev24.firebaseapp.com",
    projectId: "codindev24",
    storageBucket: "codindev24.appspot.com",
    messagingSenderId: "918060991798",
    appId: "1:918060991798:web:9906125152e879cbd31f97",
    measurementId: "G-YRFVY342HJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);