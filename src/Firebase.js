 // Import the functions you need from the SDKs you need
 import { getFirestore } from "firebase/firestore";
 import { initializeApp } from "firebase/app";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBYWM65_a1hj_8r7wJJKXvdSDu0605P_1M",
   authDomain: "job-application-simulator.firebaseapp.com",
   projectId: "job-application-simulator",
   storageBucket: "job-application-simulator.appspot.com",
   messagingSenderId: "163447081310",
   appId: "1:163447081310:web:7c96b34d8ef694d69227cf"
 };

 
 const app = initializeApp(firebaseConfig);

const db = getFirestore();

 export {db};