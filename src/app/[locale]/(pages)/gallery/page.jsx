import AddButton from "@/components/custom/buttons/AddButton";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import { columns, tableData } from "./data/galleryData";
import ItemsTable from "@/components/custom/tables/ItemsTable";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Gallery page",
};

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];
  return (
    <section className="section-container">
      <div className="flex items-center justify-end gap-2">
        <ConfigButton target="/gallery/gallery_config" />
        <AddButton target="/gallery/gallery_add" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="Gallery"
          editLink="/gallery/gallery_edit"
          tableColumns={columns}
          tableData={tableData}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
