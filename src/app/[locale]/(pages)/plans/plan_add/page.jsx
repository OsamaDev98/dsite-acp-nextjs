import FormComponent from "../form/FormComponent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Plan add page",
};

const page = () => {
  return (
    <div className="section-container">
      <FormComponent isEdit={false} />
    </div>
  );
};

export default page;
