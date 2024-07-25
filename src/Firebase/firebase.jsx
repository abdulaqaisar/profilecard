import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getDatabase,
  set,
  ref,
  update,
  push,
  onValue,
} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBenWmvMzS1J7xsOPozfxFryGOB5sNOWBk",
  authDomain: "profilecard-9f365.firebaseapp.com",
  projectId: "profilecard-9f365",
  storageBucket: "profilecard-9f365.appspot.com",
  messagingSenderId: "426863185060",
  appId: "1:426863185060:web:a6105023b21a01c8576a31"
};

const app = initializeApp(firebaseConfig);
export const fireDb = getDatabase(app);
export const auth = getAuth(app);
export const imageDb = getStorage(app);