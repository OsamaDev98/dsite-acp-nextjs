import AddButton from "@/components/custom/buttons/AddButton";
import { columns, tableData } from "../data/categoriesData";
import ItemsTable from "@/components/custom/tables/ItemsTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Product category page",
};

const page = () => {
  const actions = [{ key: "delete", title: "Delete" }];

  return (
    <section className="section-container">
      <div className="flex items-center justify-end gap-2">
        <AddButton
          title="Add"
          target="/products/product_categories/category_add"
        />
      </div>
      <div className="grid card-style mt-2 rounded-tr-lg">
        <ItemsTable
          sectionName="products-categories"
          editLink="/products/product_categories/category_edit"
          tableData={tableData}
          tableColumns={columns}
          actions={actions}
        />
      </div>
    </section>
  );
};
export default page;
