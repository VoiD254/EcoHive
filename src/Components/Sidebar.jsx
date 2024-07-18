import { IoStatsChartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { useState, useEffect } from "react";
import { firebaseAuth, useFirebase } from "../context/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Sidebar = () => {
	const navigate = useNavigate();
  const firebase = useFirebase();
  const [selected, setSelected] = useState("overview");
  const [user, setUser] = useState(null);

  const getTextClass = (id) => {
    return selected === id ? "text-[#FE981E]" : "text-[#67698E]";
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#1A3421] w-1/5 rounded-r-3xl ">
      <div className="text-white m-12 mt-9 flex">
        <div className="flex justify-center items-center rounded-t-3xl w-14 bg-[#07A433] h-14 rounded-r-3xl rounded-l-lg">
          <div className="rounded-t-xl rounded-tl-none rounded-br-none w-7 bg-[#54CE09] h-7 rounded-r-xl rounded-l-lg mt-7 mr-6"></div>
          <div className="font-bold text-3xl absolute">
            {user?.email[0].toUpperCase() || "U"}
          </div>
        </div>
        <div className="flex justify-center mt-4 ml-3 text-xl font-semibold">
          {user?.email || "User"}
        </div>
      </div>
      <div className="flex flex-col m-12 mt-0.5">
        <div className={`flex text-lg ${getTextClass("overview")}`}>
          <div className="mt-1">
            <IoStatsChartOutline />
          </div>
          <button className="ml-2" onClick={() => setSelected("overview")}>
            Overview
          </button>
        </div>
        <div className={`mt-7 flex text-lg ${getTextClass("orders")}`}>
          <div className="mt-1">
            <IoPersonOutline />
          </div>
          <button className="ml-2" onClick={() => setSelected("orders")}>
            Credit History
          </button>
        </div>
        <div className={`mt-7 flex text-lg ${getTextClass("checkout")}`}>
          <div className="mt-1">
            <CgFileDocument />
          </div>
          <button className="ml-2" onClick={() => setSelected("checkout")}>
            Transaction History
          </button>
        </div>
        <div className={`mt-7 flex text-lg ${getTextClass("settings")}`}>
          <div className="mt-1">
            <IoSettingsOutline />
          </div>
          <button className="ml-2" onClick={() => setSelected("settings")}>
            Settings
          </button>
        </div>
      </div>
      <div className="text-[#67698E] flex m-12 flex-col justify-center mt-44">
        <div className="flex text-md">
          <div className="mt-1">
            <RiErrorWarningLine />
          </div>
          <button className="ml-2">Help Centre</button>
        </div>
        <div className="flex text-md mt-7">
          <div className="mt-1">
            <IoChatbubbleEllipsesOutline />
          </div>
          <button className="ml-2">Contact Us</button>
        </div>
        <div className="flex text-md mt-7 text-[#FE981E]">
          <div className="mt-1">
            <HiOutlineLogout />
          </div>
          <button
            className="ml-2"
            onClick={() => {
              firebase.logOut();
			  navigate('/');
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
