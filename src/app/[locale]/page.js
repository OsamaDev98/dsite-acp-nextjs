import ChartsComp from "@/components/custom/charts/ChartsComp";

export const metadata = {
  title: "dsite | Admin Control Panel | Website charts",
};

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export default function Home() {
  return (
    <div className="home-style flex flex-col items-center justify-center gap-4 2xl:flex-row xl:items-start w-full">
      <ChartsComp />
    </div>
  );
}
