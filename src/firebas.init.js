
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5VEa--wtmNq3plK1Ozipsg36c3SyySbc",
  authDomain: "abstrak-aca90.firebaseapp.com",
  projectId: "abstrak-aca90",
  storageBucket: "abstrak-aca90.appspot.com",
  messagingSenderId: "603046894596",
  appId: "1:603046894596:web:1b0938ff580f1bbecaa951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;