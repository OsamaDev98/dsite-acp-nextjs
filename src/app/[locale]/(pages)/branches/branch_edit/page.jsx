import FormComponent from "../form/FormComponent";

// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  return (
    <div className="section-container">
      <FormComponent isEdit={true} />
    </div>
  );
};

export default page;
