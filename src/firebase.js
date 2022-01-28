import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkeCSQ0K4wvaQ8wzkRNqYjMM9YRyWizN8",
    authDomain: "f29so-project.firebaseapp.com",
    projectId: "f29so-project",
    storageBucket: "f29so-project.appspot.com",
    messagingSenderId: "71152783236",
    appId: "1:71152783236:web:6085b7bd532a1827edd7d1",
    measurementId: "G-RG69R0Q27H"
  };

//wer are passing the object from above here to connect everything 
const firebaseApp = initializeApp(firebaseConfig);

// access to the database
const db = getFirestore(firebaseApp);
//const auth = firebase.auth();
// need to tell the provider that we want google authorisation service 
//const provider = new firebase.auth.GoogleAuthProvider(); 


//to access outside the file
export default db;