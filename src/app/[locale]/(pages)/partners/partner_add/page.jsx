import FormComponent from "../form/FormComponent";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Partners add page",
};

const page = () => {
  return (
    <div className="section-container">
      <FormComponent isEdit={false} />
    </div>
  );
};

export default page;
