import { useLocale } from "next-intl";

const loading = () => {
  const locale = useLocale();
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="loader text-gray-600">
        {locale == "en" ? "Loading..." : "تحميل..."}
      </div>
    </div>
  );
};
export default loading;
