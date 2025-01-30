import FormComponent from "../forms/FormComponent";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Add admins page",
};

const page = () => {
  
  return (
    <div className="section-container mt-8">
      <FormComponent />
    </div>
  );
};

export default page;
