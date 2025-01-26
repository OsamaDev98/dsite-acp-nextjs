import { columns, tableData } from "./data/projectsData";
import AddButton from "@/components/custom/buttons/AddButton";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import ItemsTable from "@/components/custom/tables/ItemsTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Project page",
};

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];

  return (
    <section className="section-container">
      <div className="flex items-center justify-end gap-2">
        <ConfigButton target="/projects/project_config" />
        <AddButton target="/projects/project_add" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="projects"
          editLink="/projects/project_edit"
          requestsLink="/projects/project_requests"
          isRequests={true}
          tableData={tableData}
          tableColumns={columns}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
