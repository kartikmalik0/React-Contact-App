// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYlKU4kQF2zf7oI5eOccnt6VQ2TfikWuc",
    authDomain: "vite-contact-c485e.firebaseapp.com",
    projectId: "vite-contact-c485e",
    storageBucket: "vite-contact-c485e.appspot.com",
    messagingSenderId: "61666230263",
    appId: "1:61666230263:web:a7c7e8e78b122cd1e978f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)