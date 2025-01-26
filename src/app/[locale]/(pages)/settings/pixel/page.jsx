import { pixelData } from "./data/pixelData";
import PixelTable from "./tables/PixelTable";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Pixel page",
};

const page = () => {
  return (
    <div className="section-container mt-8">
      <div className="grid card-style mt-2 rounded-tr-lg">
        <div className="grid w-full">
          <PixelTable tableData={pixelData} />
        </div>
      </div>
    </div>
  );
};
export default page;
