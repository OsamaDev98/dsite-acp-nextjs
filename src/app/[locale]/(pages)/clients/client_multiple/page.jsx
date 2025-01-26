import DropzoneForm from "@/components/custom/dropzone/DropzoneForm";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Add multi clients page",
};

const page = () => {
  return (
    <div className="section-container">
      <DropzoneForm sectionName="clients" />
    </div>
  );
};
export default page;
