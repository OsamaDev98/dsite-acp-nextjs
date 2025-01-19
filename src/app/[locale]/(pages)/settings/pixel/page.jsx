import { pixelData } from "./data/pixelData";
import PixelTable from "./tables/PixelTable";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

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
