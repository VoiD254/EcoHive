import { useFirebase, firebaseAuth } from "../context/firebase";
import {useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import {onValue} from "firebase/database";

export const Credits = ({entity}) =>{
    const firebase = useFirebase();
    const [totalCreds, setTotalCreds] = useState(0);
    const [creds, setCreds] = useState({
        agriculture: 0,
        air: 0, 
        other: 0,
        tree: 0,
        water: 0,
        mangrove: 0
    });

    const getCredits = async (userId) =>{
        try{
            const totalCredits = await firebase.getLiveData(`${entity}/${userId}/totalCredits`);
            onValue(totalCredits, (snapshot) => {
                if (snapshot.exists()) {
                  setTotalCreds(snapshot.val());
                }
            });
            const credits = await firebase.getLiveData(`${entity}/${userId}/credits`);
            onValue(credits, (snapshot) => {
                if (snapshot.exists()) {
                  setCreds(snapshot.val());
                }
            });
            // console.log(creds);
        }catch(e){
            console.error(e);
        }
    }

    getCredits();

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
    
    return(
        <div className="mt-12">
            <div className="text-4xl text-black font-semibold">
                Your Credits
            </div>
            <div className="flex justify-center text-black text-6xl mt-2">
                {totalCreds}
            </div>
            <div className="text-black mt-4 text-lg ">
                <h2 className="font-medium text-xl">
                    Credits Distribution
                </h2>
                <div className="mt-2">
                    Tree Plantation: {creds.tree}
                </div> 
                <div className="my-1">
                    Air Pollution: {creds.air}
                </div>
                <div className="my-1">
                    Agriculture: {creds.agriculture}
                </div>
                {entity === "org" && (
                    <div className="my-1">
                        Mangrove: {creds.mangrove}
                    </div>
                )}
                <div className="my-1"> 
                    Water Management: {creds.water}
                </div>
                <div>
                    Other: {creds.tree}
                </div>
            </div>
        </div>
    );
}
