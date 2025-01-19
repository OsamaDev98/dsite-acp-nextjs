import AddButton from "@/components/custom/buttons/AddButton";
import { columns, tableData } from "../data/brandsData";
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
        <AddButton title="Add" target="/products/product_brands/brand_add" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="products-brand"
          editLink="/products/product_brands/brand_edit"
          tableData={tableData}
          tableColumns={columns}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
