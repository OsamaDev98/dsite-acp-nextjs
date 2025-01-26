import SubFormComponent from "../../form/SubFormComponent";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Product brand edit page",
};

const page = () => {
  return (
    <div className="section-container">
      <SubFormComponent isEdit={false} sectionTitle="brand" />
    </div>
  );
};

export default page;
