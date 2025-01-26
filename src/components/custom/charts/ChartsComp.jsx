import { useTranslations } from "next-intl";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

const ChartsComp = () => {
  const t = useTranslations("ChartPage");
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center md:!h-[495px] max-w-[400px] w-full dark:bg-mainDark-800">
        <div className="flex items-center justify-start w-full mb-8">
          <h1 className="text-[15px] text-[#5a5a5a] font-bold border-b-2 border-[#83bedf] pb-1.5 dark:text-mainDark-200">
            {t("doughnut")}
          </h1>
        </div>
        <DoughnutChart data="true" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center h-full max-w-[800px] w-full dark:bg-mainDark-800">
        <div className="flex items-center justify-start w-full mb-8">
          <h1 className="text-[15px] text-[#5a5a5a] font-bold border-b-2 border-[#83bedf] pb-1.5 dark:text-mainDark-200">
            {t("line")}
          </h1>
        </div>
        <LineChart data="true" />
      </div>
    </>
  );
};
export default ChartsComp;
