import FormComponent from "../form/FormComponent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Product edit page",
};

const page = () => {
  return (
    <div className="section-container">
      <FormComponent isEdit={true} />
    </div>
  );
};

export default page;
