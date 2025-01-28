import ExportButton from "@/components/custom/buttons/ExportButton";
import { tableData } from "../data/applicantData";
import ApplicantTable from "@/components/custom/tables/ApplicantTable";
import { useTranslations } from "next-intl";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Applicants page",
};

const page = () => {
  const tableName = "Applicants";
  const domainName = "dsite.sa";

  const t = useTranslations("ApplicantPage");

  return (
    <section className="section-container">
      <div className="card-style mt-2 rounded-tr-lg items-start">
        <h1 className="text-xl text-mainColor-500 font-bold mb-4 text-start">
          {t("title")}
        </h1>
        <div className="flex justify-end w-full mb-8">
          <ExportButton
            tableData={tableData}
            tableTitle={`Products Orders for product "${tableName}" From ${domainName}`}
          />
        </div>
        <div className="grid w-full">
          <ApplicantTable tableData={tableData} />
        </div>
      </div>
    </section>
  );
};
export default page;
