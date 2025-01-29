import AddButton from "@/components/custom/buttons/AddButton";
import ConfigButton from "@/components/custom/buttons/ConfigButton";
import { tableData } from "./data/productsData";
import ItemsTable from "@/components/custom/tables/ItemsTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Products page",
};

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];

  return (
    <section className="section-container">
      <div className="flex items-center justify-end gap-2">
        <ConfigButton target="/products/product_config" />
        <AddButton title="Category" target="/products/product_categories" />
        <AddButton title="Brand" target="/products/product_brands" />
        <AddButton target="/products/product_add" />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="products"
          isRequests={true}
          requestsLink="/products/product_requests"
          editLink="/products/product_edit"
          tableData={tableData}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
