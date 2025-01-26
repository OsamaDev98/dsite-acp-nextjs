import { Fragment } from "react";
import { applicantDetails } from "../../data/applicantDetailsData";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Applicants details page",
};

const page = () => {
  return (
    <section className="section-container">
      <div className="card-style mt-2 rounded-tr-lg items-start">
        <h1 className="text-xl text-mainColor-500 font-bold mb-8 text-start">
          Applicant details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-8 w-full">
          {applicantDetails?.map((item) => {
            return (
              <Fragment key={item.id}>
                <div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Name:</h6>
                    <p>{item.name}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Gender:</h6>
                    <p>{item.gender}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Phone No.:</h6>
                    <p>{item.phone}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Nationality:</h6>
                    <p>{item.nationality}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Order number:</h6>
                    <p>{item.order}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Email:</h6>
                    <p>{item.email}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">DOB:</h6>
                    <p>{item.dob}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Applied for:</h6>
                    <p>{item.applied}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">City of residence:</h6>
                    <p>{item.cor}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap border-b py-4">
                    <h6 className="font-bold min-w-40">Date:</h6>
                    <p>{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap py-4">
                  <h6 className="font-bold min-w-40">CV:</h6>
                  <a
                    href="@/app/img/default-img.jpg"
                    download={`${item.name} CV`}
                    target="_blank"
                    className="bg-[#f7b52b] py-2 px-6 border rounded-md text-white duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    Download CV
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
