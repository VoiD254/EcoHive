import { Sidebar } from "../Components/Sidebar";
import { DashBar } from "../Components/Dashbar";
import { UserProducts } from "../Components/UserProducts";
import {Transaction} from "../Components/Transaction";
import {Credits} from "../Components/Credits";

export const DashboardUser = () => {
  return (
    <div className="bg-white h-screen flex">
        <Sidebar/>
		<div className="m-12 w-4/5">
			<DashBar/>
			<UserProducts/>
			<div className="flex justify-around">
				<Transaction/>
				<Credits entity={"individual"}/>
      		</div>
		</div>
    </div>
  );
};