import AddButton from "@/components/custom/buttons/AddButton";
import AdminsTable from "@/app/[locale]/(pages)/settings/admins/tables/AdminsTable";

const Admins = () => {
  return (
    <div className="section-container">
      <AddButton target="/" />
      <div className="card-style mt-2">
        <AdminsTable />
      </div>
    </div>
  );
};
export default Admins;
