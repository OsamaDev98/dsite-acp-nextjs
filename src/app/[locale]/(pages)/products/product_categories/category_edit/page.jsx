import SubFormComponent from "../../form/SubFormComponent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Product category edit page",
};

const page = () => {
  return (
    <div className="section-container">
      <SubFormComponent isEdit={true} sectionTitle="category" />
    </div>
  );
};

export default page;
