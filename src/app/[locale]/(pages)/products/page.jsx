import AddButton from "@/components/custom/buttons/AddButton";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import { columns, tableData } from "./data/productsData";
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
        <ConfigButton target="/products/product_config" />
        <AddButton title="Categories" target="/products/product_categories" />
        <AddButton title="Brands" target="/products/product_brands" />
        <AddButton target="/products/product_add" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="products"
          isRequests={true}
          requestsLink="/products/product_requests"
          editLink="/products/product_edit"
          tableData={tableData}
          tableColumns={columns}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
