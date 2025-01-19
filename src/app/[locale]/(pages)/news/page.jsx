import AddButton from "@/components/custom/buttons/AddButton";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import { columns, tableData } from "./data/newsData";
import ItemsTable from "@/components/custom/tables/ItemsTable";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];

  return (
    <section className="section-container">
      <section className="section-container">
        <div className="flex items-center justify-end gap-2">
          <ConfigButton target="/news/news_config" />
          <AddButton target="/news/news_add" />
        </div>
        <div className="grid card-style mt-2 rounded-tr-lg">
          <ItemsTable
            sectionName="news"
            editLink="/news/news_edit"
            tableColumns={columns}
            tableData={tableData}
            actions={actions}
          />
        </div>
      </section>
    </section>
  );
};
export default page;
