import { firebaseAuth } from "../context/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, query, orderByChild, equalTo, set, push } from "firebase/database";

export const Transaction = ({ entity }) => {
    const [senderEmail, setSenderEmail] = useState("");
    const [receiverEmail, setReceiverEmail] = useState("");
    const [transferCredits, setTransferCredits] = useState(0);
    const [receiverEntity, setReceiverEntity] = useState("");
    const [userID, setUserID] = useState(null);

    const handleTransaction = async (senderEmail, receiverEmail, credits, receiverEntity) => {
        if (!senderEmail || !receiverEmail || credits <= 0 || receiverEntity === "select") {
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

    return (
        <div className="w-full max-w-sm ml-0 p-4 bg-white rounded-lg ">
            <div className="text-gray-800 text-3xl font-semibold mb-6 text-center">
                Transfer Credits
            </div>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-gray-700 text-lg font-medium">Receiver's Email Address</label>
                    <input
                        className="w-full bg-gray-100 mt-1 p-2 rounded-lg placeholder-gray-500 text-gray-800 "
                        type="email"
                        placeholder="Email Address"
                        value={receiverEmail}
                        onChange={(e) => setReceiverEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 text-lg font-medium">Credits</label>
                    <input
                        className="w-full bg-gray-100 mt-1 p-2 rounded-lg placeholder-gray-500 text-gray-800"
                        type="number"
                        placeholder="Credits to be transferred"
                        value={transferCredits}
                        onChange={(e) => setTransferCredits(Number(e.target.value))}
                        min="0"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 text-lg font-medium">Receiver's Entity</label>
                    <select
                        className="w-full bg-gray-100 mt-1 p-2 rounded-lg text-gray-800"
                        value={receiverEntity}
                        onChange={(e) => setReceiverEntity(e.target.value)}
                        required
                    >
                        <option value="select">Select</option>
                        <option value="individual">Individual</option>
                        <option value="org">Organization</option>
                    </select>
                </div>
                <div className="mt-6">
                    <button
                        className="relative mt-3 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-600/20 bg-[linear-gradient(110deg,#064e3b,45%,#065f46,55%,#064e3b)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors active:scale-95 w-full"
                        type="submit"
                    >
                        Transfer
                    </button>
                </div>
            </form>
        </div>
    );
}
