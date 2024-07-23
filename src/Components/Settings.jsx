import { useState, useEffect } from 'react';
import { useFirebase } from '../context/firebase';

export const Settings = ({ entity }) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    cin: ""
  });

  const { getData, currentUser } = useFirebase();

  useEffect(() => {
    if (currentUser) {
      getData(`${entity}/${currentUser.uid}`).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserData({
            name: data.name || "",
            phone: data.phone || "",
            email: data.email || currentUser.email,
            cin: data.cin || ""
          });
        }
      });
    }
  }, [currentUser, getData]);

  return (
    <div className="p-4 h-full">
      <h2 className="text-2xl font-semibold mb-4 text-[#1A3421]">Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#67698E]">Name</label>
        <div className="mt-1 p-2 block w-full border border-[#5cd488] rounded-md bg-white">
          {userData.name}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#67698E]">Phone</label>
        <div className="mt-1 p-2 block w-full border border-[#5cd488] rounded-md bg-white">
          {userData.phone}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#67698E]">Email</label>
        <div className="mt-1 p-2 block w-full border border-[#5cd488] rounded-md bg-white">
          {userData.email}
        </div>
      </div>
      {entity === "org" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#67698E]">CIN</label>
          <div className="mt-1 p-2 block w-full border border-[#5cd488] rounded-md bg-white">
            {userData.cin}
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
