import DropzoneForm from "@/components/custom/dropzone/DropzoneForm";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Add multi partners page",
};

const page = () => {
  return (
    <div className="section-container">
      <DropzoneForm sectionName="clients" />
    </div>
  );
};
export default page;
