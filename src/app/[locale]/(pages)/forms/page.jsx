import FormsTable from "@/components/custom/tables/FormsTable";
import { tableData } from "./data/formsData";
import AddButton from "@/components/custom/buttons/AddButton";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Forms page",
};

const actions = [{ key: "delete", title: "Delete" }];

const page = () => {
  return (
    <div className="section-container">
      <div className="flex items-center justify-end gap-2">
        <AddButton target="/forms/form_add" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <FormsTable
          actions={actions}
          tableData={tableData}
          editLink="/forms/form_edit"
        />
      </div>
    </div>
  );
};
export default page;
