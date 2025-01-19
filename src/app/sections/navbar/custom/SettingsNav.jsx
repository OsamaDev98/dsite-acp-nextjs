"use client";

import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const SettingsNav = () => {
  const t = useTranslations("SettingsNav");
  const locale = useLocale();
  const pathName = usePathname();

  const tabHeaders = [
    {
      id: 1,
      value: "/settings/basic-information",
      title: "basicInfo",
    },
    {
      id: 2,
      value: "/settings/website-content",
      title: "websiteContent",
    },
    {
      id: 3,
      value: "/settings/website-design",
      title: "websiteDesign",
    },
    {
      id: 4,
      value: "/settings/admins",
      title: "admin",
    },
    {
      id: 5,
      value: "/settings/pixel",
      title: "pixel",
    },
    {
      id: 6,
      value: "/settings/domain",
      title: "domain",
    },
    {
      id: 7,
      value: "/settings/subscriptions",
      title: "subscriptions",
    },
  ];

  return (
    <div className="scroll-container grid w-full overflow-x-auto">
      <ul className="flex items-center gap-4 p-2 border-b min-w-[1200px]">
        {tabHeaders?.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={item.value}
                data-state={
                  pathName == `/${locale}${item.value}` ? "active" : ""
                }
                className="flex px-6 py-3.5 text-lg font-medium text-gray-500 rounded-md data-[state=active]:shadow data-[state=active]:text-foreground data-[state=active]:bg-background data-[state=active]:dark:bg-mainDark-800 data-[state=active]:dark:text-white dark:text-mainDark-400"
              >
                {t(item.title)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SettingsNav;
