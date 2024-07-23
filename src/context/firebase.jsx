import { createContext, useContext } from "react";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebase-config";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getDatabase, set, ref, get, child} from "firebase/database";

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) =>{
    const signupUserWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    const putData = (key, data) => set(ref(database, key), data);

    const loginUserWithEmailAndPassword = (email, password) =>{
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    const logOut = () =>{
        return signOut(firebaseAuth);
    }

    const getData = (key) => get(child(ref(database), key));

    const getLiveData = (key) => ref(database, key);

    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, loginUserWithEmailAndPassword, putData, logOut, getData, getLiveData}}>
            {props.children}
        </FirebaseContext.Provider>
    );
}
