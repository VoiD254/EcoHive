import { Sidebar } from "../Components/Sidebar";
import { DashBar } from "../Components/Dashbar";
import { OrgProducts } from "../Components/OrgProducts";
import { Transaction } from "../Components/Transaction";

export const DashboardOrg = () => {
  return (
    <div className="bg-white h-screen flex">
        <Sidebar/>
		<div className="m-12 w-4/5">
			<DashBar/>
			<OrgProducts/>
			<div className="flex justify-around">
				<Transaction/>
				<Credits entity={"org"}/>
      		</div>
		</div>
    </div>
  );
};