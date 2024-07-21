import {firebaseAuth, useFirebase } from "../context/firebase";
import {useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, query, orderByChild, equalTo, set, push} from "firebase/database"; 

export const Transaction = ({entity}) => {
    const firebase = useFirebase();
    const [senderEmail, setSenderEmail] = useState("");
    const [receiverEmail, setReceiverEmail] = useState("");
    const [transferCredits, setTransferCredits] = useState(0);
    const [receiverEntity, setReceiverEntity] = useState("");
    const [userID, setUserID] = useState(null);

    const handleTransaction = async (senderEmail, receiverEmail, credits, receiverEntity) => {
        if (!senderEmail || !receiverEmail || credits <= 0) {
            alert("Please ensure all fields are filled out correctly.");
            return;
        }
    
        try {
            const db = getDatabase();
            const senderPath = `${entity}/${userID}/totalCredits`;
    
            const senderBalRef = ref(db, senderPath);
            const senderSnapshot = await get(senderBalRef);
    
            if (!senderSnapshot.exists()) {
                alert("Sender not found.");
                return;
            }
    
            const senderTotalCredits = senderSnapshot.val();
    
            if (senderTotalCredits < credits) {
                alert("Insufficient credits.");
                return;
            }
    
            const receiverPath = receiverEntity.toLowerCase(); 
    
            const receiverQuery = query(ref(db, receiverPath), orderByChild('email'), equalTo(receiverEmail));
            const receiverSnapshot = await get(receiverQuery);
    
            if (!receiverSnapshot.exists()) {
                alert("Receiver not found.");
                return;
            }
    
            const receiverKey = Object.keys(receiverSnapshot.val())[0];
            const receiverTotalCreditsRef = ref(db, `${receiverPath}/${receiverKey}/totalCredits`);
            const receiverCreditsRef = ref(db, `${receiverPath}/${receiverKey}/credits/other`);
            const receiverTotalCreditsSnapshot = await get(receiverTotalCreditsRef);
            const receiverCreditsSnapshot = await get(receiverCreditsRef);
    
            await set(senderBalRef, senderTotalCredits - credits);
    
            const currentReceiverTotalCredits = receiverTotalCreditsSnapshot.exists() ? receiverTotalCreditsSnapshot.val() : 0;
            const currentReceiverCredits = receiverCreditsSnapshot.exists() ? receiverCreditsSnapshot.val() : 0;
            await set(receiverTotalCreditsRef, currentReceiverTotalCredits + credits);
            await set(receiverCreditsRef, currentReceiverCredits + credits);
    
            alert("Transaction successful!");

            setReceiverEmail("");
            setTransferCredits(0);
            setReceiverEntity("select");

            try {
                const transactionsRef = ref(db, `transactions/${userID}`);
                const transactionsSnapshot = await get(transactionsRef);
    
                let newTransactionKey;
                if (!transactionsSnapshot.exists()) {
                    newTransactionKey = 'transaction1';
                } else {
                    const transactionCount = Object.keys(transactionsSnapshot.val()).length;
                    newTransactionKey = `transaction${transactionCount + 1}`;
                }
    
                const newTransactionRef = ref(db, `transactions/${userID}/${newTransactionKey}`);
                await set(newTransactionRef, {
                    sender: senderEmail,
                    receiver: receiverEmail,
                    creditsTransferred: credits,
                    receiverEntity,
                    senderEntity: entity,
                    timestamp: new Date().toISOString()
                });
            } catch (logError) {
                console.error("Error logging transaction: ", logError);
                alert("Transaction completed, but there was an error logging the transaction.");
            }
        } catch (e) {
            console.error("Error processing transaction: ", e);
            alert("There was an error processing the transaction.");
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleTransaction(senderEmail, receiverEmail, transferCredits, receiverEntity);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUserID(user.uid);
                setSenderEmail(user.email);
            } else {
              console.log("You are logged out");
            }
        });
      
        return () => unsubscribe();
    }, []);

    return(
        <div className="w-1/3 mt-12">
            <div className="text-black text-4xl font-semibold">
                Transfer
            </div>
            <form className="mt-7 flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-black text-xl font-medium">Receiver's Email Address</label>
                    <input
                        className="w-64 bg-[#07A433] mt-2 p-1.5 rounded-lg placeholder:text-white focus:outline-none text-white"
                        type="email"
                        placeholder="Email Address"
                        value={receiverEmail}
                        onChange={(e) => setReceiverEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <label className="text-black text-xl font-medium">Credits</label>
                    <input
                        className="w-64 bg-[#07A433] mt-2 p-1.5 rounded-lg placeholder:text-white focus:outline-none text-white"
                        type="number"
                        placeholder="Credits to be transferred"
                        value={transferCredits}
                        onChange={(e) => setTransferCredits(Number(e.target.value))}
                        required
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-black text-xl font-medium">Receiver's Entity</label>
                    <select
                        className="w-64 bg-[#07A433] mt-2 p-1.5 rounded-lg text-white focus:outline-none"
                        value={receiverEntity}
                        onChange={(e) => setReceiverEntity(e.target.value)}
                    >    
                        <option value="select">Select</option>
                        <option value="individual">Individual</option>
                        <option value="org">Organization</option>
                    </select>
                </div>
                <div className="mt-8 ml-7">
                    <button
                        className="text-white bg-[#07A433] hover:bg-[#54CE09] w-48 p-2 rounded-xl"
                        type="submit"
                    >
                        Transfer
                    </button>
                </div>
            </form>
        </div>
    );
}
