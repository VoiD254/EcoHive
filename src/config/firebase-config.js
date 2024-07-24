import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCyPkVEQQSe333eXR5wAtMWITUbX8NPLls",
  authDomain: "ecohive-1.firebaseapp.com",
  databaseURL: "https://ecohive-1-default-rtdb.firebaseio.com",
  projectId: "ecohive-1",
  storageBucket: "ecohive-1.appspot.com",
  messagingSenderId: "802112797222",
  appId: "1:802112797222:web:64eb5b83ae444afa7b84e7",
  measurementId: "G-6Y9RT8JM66"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
