import { tableData } from "./data/websiteContent";
import WebsiteContentTable from "./tables/WebsiteContentTable";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  return (
    <div className="section-container mt-8">
      <div className="card-style mt-2 rounded-tr-lg mb-8">
        <div className="grid w-full">
          <WebsiteContentTable tableData={tableData} />
        </div>
      </div>
    </div>
  );
};
export default page;
