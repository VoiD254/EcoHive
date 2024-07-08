import { Sidebar } from "../Components/Sidebar";
import { DashBar } from "../Components/DashBar";
import { Products } from "../Components/Products";

export const Dashboard = () => {
  return (
    <div className="bg-white h-screen flex">
        <Sidebar/>
		<div className="m-12 w-4/5">
			<DashBar/>
			<Products/>
		</div>
    </div>
  );
};
