import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATBYEnhQsKYb1tL6uNSGBcaFxDUWkJ-bk",
    authDomain: "chatter-df5b7.firebaseapp.com",
    projectId: "chatter-df5b7",
    storageBucket: "chatter-df5b7.appspot.com",
    messagingSenderId: "67925119835",
    appId: "1:67925119835:web:f04bdae7eb27d62e16c07e"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// if (firebase.apps.length === 0) {
//   FIREBASE_CLIENT.initializeApp(firebaseConfig);
// }

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const storageRef = ref(storage);

// initialize firebase auth
const auth = getAuth();

const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, provider, db, storage, storageRef };