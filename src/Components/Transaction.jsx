export const Transaction = () =>{
    return(
        <div className="w-1/3 mt-12">
            <div className="text-black text-4xl font-semibold">
                Transfer
            </div>
            <div className="mt-7 flex flex-col">
                <div className="flex flex-col">
                    <label className="text-black text-xl font-medium">Receiver's Email Address</label>
                    <input className="w-64 bg-[#07A433] mt-2 p-1.5 rounded-lg placeholder:text-white focus:outline-none text-white" type="email" placeholder="Email Address"/>
                </div>
                <div className="flex flex-col mt-5">
                    <label className="text-black text-xl font-medium">Credits </label>
                    <input className="w-64 bg-[#07A433] mt-2 p-1.5 rounded-lg placeholder:text-white focus:outline-none text-white " placeholder="Credits to be transferred"/>
                </div>
            </div>
            <div className="mt-8 ml-7">
                <button className="text-white bg-[#07A433] hover:bg-[#54CE09] w-48 p-2 rounded-xl">
                    Transfer
                </button>
            </div>
        </div>
    );
}