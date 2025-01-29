import ConfigButton from "@/components/custom/buttons/ConfigButton";
import { tableData } from "./data/teamData";
import AddButton from "@/components/custom/buttons/AddButton";
import ItemsTable from "../../../../components/custom/tables/ItemsTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Team page",
};

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];

  return (
    <section className="section-container">
      <div className="flex items-center justify-end gap-2">
        <ConfigButton target="/team/team_config" />
        <AddButton target="/team/team_add" />
      </div>
      <div className="card-style mt-2 rounded-tr-lg grid">
        <ItemsTable
          sectionName="team"
          editLink="/team/team_edit"
          tableData={tableData}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
