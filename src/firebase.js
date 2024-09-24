import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBAE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBAE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBAE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBAE_STORAGE_BUCKETS,
//   messagingSenderId: process.env.REACT_APP_FIREBAE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBAE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDpb4yOTVbFJ30MLm5pu3ZEctTOuXTOmcc",
  authDomain: "linkedin-clone-dd55a.firebaseapp.com",
  projectId: "linkedin-clone-dd55a",
  storageBucket: "linkedin-clone-dd55a.appspot.com",
  messagingSenderId: "253826520854",
  appId: "1:253826520854:web:83b6f9dbfb02edc3d2e237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const storage = getStorage()

export { auth, provider, storage };
export default db;
