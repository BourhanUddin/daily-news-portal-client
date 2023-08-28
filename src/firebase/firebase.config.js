// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6IC7s-QZfHQYtTaHU5lknMWMedWIvr8I",
  authDomain: "daily-news-portal-dea92.firebaseapp.com",
  projectId: "daily-news-portal-dea92",
  storageBucket: "daily-news-portal-dea92.appspot.com",
  messagingSenderId: "704394029573",
  appId: "1:704394029573:web:ef8e2ab0e0e171b54e4a6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;