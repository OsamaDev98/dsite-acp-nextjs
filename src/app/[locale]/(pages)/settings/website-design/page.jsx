import FormComponent from "./form/FormComponent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  return (
    <div className="section-container mt-8">
      <div className="grid">
        <FormComponent />
      </div>
    </div>
  );
};
export default page;
