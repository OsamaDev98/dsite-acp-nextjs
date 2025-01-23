import { useLocale } from "next-intl";

const loading = () => {
  const locale = useLocale();
  return (
    <div className="loader text-gray-600">
      {locale == "en" ? "Loading page..." : "تحميل الصفحة..."}
    </div>
  );
};
export default loading;
