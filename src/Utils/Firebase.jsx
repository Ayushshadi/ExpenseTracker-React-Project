import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth" 
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL-0DLkaB1FXc2N6jQK_ggZ1WZVH-h7mw",
  authDomain: "expensetracker-cbb08.firebaseapp.com",
  databaseURL: "https://expensetracker-cbb08-default-rtdb.firebaseio.com",
  projectId: "expensetracker-cbb08",
  storageBucket: "expensetracker-cbb08.appspot.com",
  messagingSenderId: "9708777446",
  appId: "1:9708777446:web:0ba8a8a3225086b79f7027",
  measurementId: "G-Q3TNEJF5XK"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app); 