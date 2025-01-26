import ConfigForm from "@/components/custom/ConfigForm";

// When building the project, create static pages (we don't have any changes to the page in real time).
export function generateStaticParams() {
  const locales = ["en", "ar"]; // Add all supported locales
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Client config page",
};

const page = () => {
  return (
    <>
      <ConfigForm />
    </>
  );
};
export default page;
