import AddButton from "@/components/custom/buttons/AddButton";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import { columns, tableData } from "./data/partnersData";
import ItemsTable from "@/components/custom/tables/ItemsTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Partners page",
};

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];

  return (
    <section className="section-container">
      <div className="flex items-center justify-end gap-2">
        <ConfigButton target="/partners/partner_config" />
        <AddButton target="/partners/partner_add" />
        <AddButton title="Add multiple" target="/partners/partner_multiple" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="partners"
          editLink="/partners/partner_edit"
          tableColumns={columns}
          tableData={tableData}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
