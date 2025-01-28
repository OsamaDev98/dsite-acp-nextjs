import { useLocale, useTranslations } from "next-intl";
import { TabsList, TabsTrigger } from "../ui/tabs";

const TabsListComp = () => {
  const locale = useLocale();
  const tt = useTranslations("Tabs");

  return (
    <TabsList
      className={`absolute -top-12 h-auto bg-transparent gap-2 ${
        locale == "en" ? "-right-1" : "-left-1"
      }`}
    >
      <TabsTrigger
        value="english"
        className="text-md rounded-none rounded-t-lg py-3 px-6 bg-white dark:bg-mainDark-800 data-[state=active]:dark:bg-white"
      >
        {tt("en")}
      </TabsTrigger>
      <TabsTrigger
        value="arabic"
        className="text-md rounded-none rounded-t-lg py-3 px-6 bg-white dark:bg-mainDark-800 data-[state=active]:dark:bg-white"
      >
        {tt("ar")}
      </TabsTrigger>
    </TabsList>
  );
};
export default TabsListComp;
