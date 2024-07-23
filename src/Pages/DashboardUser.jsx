import { Sidebar } from "../Components/Sidebar";
// import { DashBar } from "../Components/Dashbar";
// import { UserProducts } from "../Components/UserProducts";
import { Transaction } from "../Components/Transaction";
import { Credits } from "../Components/Credits";
import Table from "../Components/Table";

export const DashboardUser = () => {
  return (
    <div className="bg-white h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 m-12 ml-18 overflow-y-auto">
        {/* <DashBar/> */}
        {/* <UserProducts/> */}
        <div className="flex justify-between mx-auto">
          <Transaction entity={"individual"} />
          <Credits entity={"individual"} />
        </div>
        <div className="mt-8">
          <Table />
        </div>
      </div>
    </div>
  );
};
