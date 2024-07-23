import { FaTree } from "react-icons/fa6";
import {PiWindBold } from "react-icons/pi";
import { GiFarmer, GiPlantRoots } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

export const OrgProducts = () =>{
    return(
        <div className="grid grid-cols-5 mt-16 text-black border border-[#E6EDFF] rounded-xl h-40">
            <div className="flex justify-center border-r">
                <div className="font-medium text-4xl flex flex-col justify-center items-center">
                    <div>
                        Tree
                    </div>
                    <div className="mt-3">
                        Plantation
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-green-500 text-xl" onClick={() => {
                    window.open("/Tree", "_blank");
                }}>
                    <FaTree/>
                </button>     
            </div>
            <div className="flex justify-center border-r">
                <div className="font-medium text-4xl flex flex-col justify-center items-center">
                    <div>
                        Air
                    </div>
                    <div className="mt-3">
                        Pollution
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-red-500 text-xl" onClick={() => {
                    window.open("/Air", "_blank");
                }}>
                    <PiWindBold/>
                </button> 
            </div>
            <div className="flex justify-center border-r">
                <div className="font-medium text-4xl flex flex-col justify-center items-center">
                    <div>
                        Agriculture
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-violet-500 text-2xl" onClick={() => {
                    window.open("/Agri", "_blank");
                }}>
                    <GiFarmer/>
                </button> 
            </div>
            <div className="flex justify-center border-r">
                <div className="font-medium text-4xl flex flex-col justify-center items-center">
                    <div>
                       Mangrove
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-yellow-500 text-3xl" onClick={() => {
                    window.open("/Mangrove", "_blank");
                }}>
                    <GiPlantRoots/>
                </button> 
            </div>
            <div className="flex justify-center border-r">
                <div className="font-medium text-3xl flex flex-col justify-center items-center">
                    <div>
                        Water
                    </div>
                    <div className="mt-3">
                        Management
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-cyan-400 text-2xl" onClick={() => {
                    window.open("/Water", "_blank");
                }}>
                    <IoIosWater/>
                </button> 
            </div>
        </div>
    );
}