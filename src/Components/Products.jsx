import { FaTree } from "react-icons/fa6";
import {PiWindBold } from "react-icons/pi";
import { GiFarmer, GiPlantRoots } from "react-icons/gi";

export const Products = () =>{
    return(
        <div className="grid grid-cols-4 mt-16 text-black border border-[#E6EDFF] rounded-xl h-40">
            <div className="flex justify-center border-r">
                <div className="font-medium text-4xl flex flex-col justify-center items-center">
                    <div>
                        Tree
                    </div>
                    <div className="mt-3">
                        Plantation
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-green-500 text-xl">
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
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-red-500 text-xl">
                    <PiWindBold/>
                </button> 
            </div>
            <div className="flex justify-center border-r">
                <div className="font-medium text-4xl flex flex-col justify-center items-center">
                    <div>
                        Agriculture
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-violet-500 text-2xl">
                    <GiFarmer/>
                </button> 
            </div>
            <div className="flex justify-center border-r">
                <div className="font-medium text-4xl flex flex-col justify-center items-center">
                    <div>
                       Mangrove
                    </div>
                </div>
                <button className="p-2 drop-shadow-md rounded-xl w-11 h-11 bg-[#FFFFFF] mt-4 flex justify-center items-center text-yellow-500 text-3xl ">
                    <GiPlantRoots/>
                </button> 
            </div>
        </div>
    );
}