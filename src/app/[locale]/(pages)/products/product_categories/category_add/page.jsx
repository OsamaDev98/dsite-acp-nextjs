import SubFormComponent from "../../form/SubFormComponent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

const page = () => {
  return (
    <div className="section-container">
      <SubFormComponent isEdit={false} sectionTitle="category" />
    </div>
  );
};

export default page;
