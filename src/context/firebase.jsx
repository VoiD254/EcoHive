import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase-config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, onValue } from "firebase/database";

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [transactionList, setTransactionList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user);
        const transactionsRef = ref(database, "transactions");
        onValue(transactionsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const userTransactions = [];
            Object.keys(data).forEach((userID) => {
              const transactions = data[userID];
              Object.keys(transactions).forEach((transactionKey) => {
                const transaction = transactions[transactionKey];
                if (transaction.sender === user.email || transaction.receiver === user.email) {
                  userTransactions.push({
                    id: transactionKey,
                    ...transaction
                  });
                }
              });
            });
            setTransactionList(userTransactions);
          }
        });
      } else {
        setCurrentUser(null);
        setTransactionList([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const logOut = () => {
    return signOut(firebaseAuth);
  };

  const getData = (key) => get(ref(database, key));

  const getLiveData = (key) => ref(database, key);

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        putData,
        logOut,
        getData,
        transactionList,
        currentUser,
        getLiveData
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
