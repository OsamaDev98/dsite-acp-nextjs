import { Fragment } from "react";
import { applicantDetails } from "../../data/applicantDetailsData";
import { useTranslations } from "next-intl";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Applicants details page",
};

const page = () => {
  const t = useTranslations("ApplicantDetailsPage");

  return (
    <section className="section-container">
      <div className="card-style mt-2 rounded-tr-lg items-start">
        <h1 className="text-xl text-mainColor-500 font-bold mb-8 text-start">
          {t("title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-8 w-full">
          {applicantDetails?.map((item) => {
            return (
              <Fragment key={item.id}>
                <div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("name")}:</h6>
                    <p>{item.name}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("gender")}:</h6>
                    <p>{item.gender}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("phone")}:</h6>
                    <p>{item.phone}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("nationality")}:</h6>
                    <p>{item.nationality}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("order")}:</h6>
                    <p>{item.order}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("email")}:</h6>
                    <p>{item.email}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("dob")}:</h6>
                    <p>{item.dob}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("apply")}:</h6>
                    <p>{item.applied}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("cor")}:</h6>
                    <p>{item.cor}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">{t("date")}:</h6>
                    <p>{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap py-4">
                  <h6 className="font-bold min-w-40">{t("cv")}:</h6>
                  <a
                    href="@/app/img/default-img.jpg"
                    download={`${item.name} CV`}
                    target="_blank"
                    className="bg-[#f7b52b] py-2 px-6 border rounded-md text-white duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    {t("download")}
                  </a>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default page;
