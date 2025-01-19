import { columns, tableData } from "./data/sliderData";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import AddButton from "@/components/custom/buttons/AddButton";
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
      <div className="flex items-center justify-end gap-2">
        <ConfigButton target="/slider/slide_config" />
        <AddButton target="/slider/slide_add" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="slider"
          editLink="/slider/slide_edit"
          tableData={tableData}
          tableColumns={columns}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
