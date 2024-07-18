import { useNavigate } from "react-router-dom";

export const UserOrOrg = () =>{
    const navigate = useNavigate();

    return(
        <div className="bg-slate-50 h-screen text-black flex justify-center items-center flex-col">
            <h1 className="text-4xl mb-4">Choose Your Entity</h1>
            <div className="flex flex-row w-1/4 justify-between items-center">
                <button className="p-4 text-2xl border rounded-xl border-green-600 hover:bg-green-700 hover:border-white hover:text-white" onClick={() => navigate("/individual")}>
                    Individual
                </button>
                <button className="text-2xl p-3 border rounded-xl border-green-600 py-4 hover:bg-green-700 hover:border-white hover:text-white" onClick={() => navigate("/org")}>
                    Organization
                </button>
            </div>
        </div>
    );
}