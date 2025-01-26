import AddButton from "@/components/custom/buttons/AddButton";
import AdminsTable from "./tables/AdminsTable";
import { adminsData } from "./data/adminsData";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Admins page",
};

const page = () => {
  return (
    <div className="section-container mt-8">
      <AddButton target="/settings/admins/admin_add" />
      <div className="grid card-style mt-2 rounded-tr-lg">
        <div className="grid w-full">
          <AdminsTable tableData={adminsData} />
        </div>
      </div>
    </div>
  );
};
export default page;
