import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBliFCvSuLL_aAan4yb3cLwvdpBg1X1QCk",
  authDomain: "ecohive-8b289.firebaseapp.com",
  projectId: "ecohive-8b289",
  storageBucket: "ecohive-8b289.appspot.com",
  messagingSenderId: "166697648408",
  appId: "1:166697648408:web:77e47ccacdee3284fcde6d",
  measurementId: "G-QXRT8QFYWV",
  databaseURL: "https://ecohive-8b289-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
