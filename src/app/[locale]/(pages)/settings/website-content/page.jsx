import { tableData } from "./data/websiteContent";
import WebsiteContentTable from "./tables/WebsiteContentTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Website content page",
};

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
