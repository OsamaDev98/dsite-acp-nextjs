import ConfigForm from "@/components/custom/ConfigForm";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  return (
    <>
      <ConfigForm />
    </>
  );
};
export default page;
