import PlanContent from "./custom/PlanContent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  return (
    <>
      <PlanContent />
    </>
  );
};
export default page;
