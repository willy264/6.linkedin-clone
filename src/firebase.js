import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import { ProviderId } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// import { Firestore } from 'firebase/firestore';

// import firebase from 'firebase/app'
import 'firebase/compat/app';

// import { initializeApp } from 'firebase/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpb4yOTVbFJ30MLm5pu3ZEctTOuXTOmcc",
  authDomain: "linkedin-clone-dd55a.firebaseapp.com",
  projectId: "linkedin-clone-dd55a",
  storageBucket: "linkedin-clone-dd55a.appspot.com",
  messagingSenderId: "253826520854",
  appId: "1:253826520854:web:83b6f9dbfb02edc3d2e237"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth=getAuth()
const provider = new GoogleAuthProvider();
const storage = getStorage()


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore;
// const auth = firebase.auth;
// const storage = firebase.storage;

export { auth, provider, storage };
// export { auth, storage}
export default db;
