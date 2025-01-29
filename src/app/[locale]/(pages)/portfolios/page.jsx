import AddButton from "@/components/custom/buttons/AddButton";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import { tableData } from "./data/portfoliosData";
import ItemsTable from "@/components/custom/tables/ItemsTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Portfolios page",
};

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];

  return (
    <section className="section-container">
      <section className="section-container">
        <div className="flex items-center justify-end gap-2">
          <ConfigButton target="/portfolios/portfolio_config" />
          <AddButton target="/portfolios/portfolio_add" />
        </div>
        <div className="grid card-style mt-2 rounded-tr-lg">
          <ItemsTable
            sectionName="portfolios"
            editLink="/portfolios/portfolio_edit"
            tableData={tableData}
            actions={actions}
          />
        </div>
      </section>
    </section>
  );
};
export default page;
