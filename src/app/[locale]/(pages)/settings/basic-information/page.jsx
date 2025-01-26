import FormComponent from "./form/FormComponent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Basic information page",
};

const page = () => {
  return (
    <div className="section-container mt-24">
      <FormComponent />
    </div>
  );
};
export default page;
