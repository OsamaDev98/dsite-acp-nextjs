"use client";

import { useTranslations } from "next-intl";

const PlanButton = ({ planType, setPlanType }) => {
  const t = useTranslations("Packages");

  return (
    <>
      <button
        className={`px-8 py-2 font-medium text-gray-800 transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-mainColor-200 dark:hover:bg-gray-600 hover:bg-white ${
          planType.toLowerCase() == "annually" && "bg-white"
        } `}
        onClick={() => setPlanType("annually")}
      >
        <span>{t("annually")}</span>
      </button>
      <button
        className={`px-8 py-2 font-medium text-gray-800 transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-mainColor-200 dark:hover:bg-gray-600 hover:bg-white ${
          planType.toLowerCase() == "monthly" && "bg-white"
        } `}
        onClick={() => setPlanType("monthly")}
      >
        <span>{t("monthly")}</span>
      </button>
    </>
  );
};
export default PlanButton;
