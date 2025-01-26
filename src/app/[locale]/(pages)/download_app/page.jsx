import ConfigButton from "@/components/custom/buttons/ConfigButton";
import FormComponent from "./form/FormComponent";

// // When export project
// export function generateStaticParams() {
//   const locales = ["en", "ar"]; // Add all supported locales
//   return locales.map((locale) => ({ locale }));
// }

export const metadata = {
  title: "Download apps page",
};

const page = () => {
  return (
    <div className="section-container">
      <div className="flex items-center justify-end gap-2">
        <ConfigButton target="/download-app/app_config" />
      </div>
      <FormComponent />
    </div>
  );
};
export default page;
