import { useFirebase, firebaseAuth } from "../context/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onValue } from "firebase/database";

export const Credits = ({ entity }) => {
  const firebase = useFirebase();
  const [totalCreds, setTotalCreds] = useState(0);

  const getCredits = async (userId) => {
    try {
      const totalCredits = await firebase.getLiveData(`${entity}/${userId}/totalCredits`);
      onValue(totalCredits, (snapshot) => {
        if (snapshot.exists()) {
          setTotalCreds(snapshot.val());
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        getCredits(user.uid);
      } else {
        console.log("You are logged out");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ml-4 w-full bg-white p-4">
      <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg text-center w-full max-w-md">
        <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
          Your Credits
        </div>
        <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-green-500 mt-4 animate-pulse">
          {totalCreds}
        </div>
      </div>
    </div>
  );
};
