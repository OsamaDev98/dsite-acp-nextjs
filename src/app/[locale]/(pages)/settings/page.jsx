import { redirect } from "next/navigation";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  const redirectPath = true;
  redirectPath && redirect(`settings/basic-information`);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="section-container"></div>
    </div>
  );
};
export default page;
