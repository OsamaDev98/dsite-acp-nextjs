"use client";

import { useState } from "react";
import PlanButton from "./PlanButton";
import PlanCard from "./PlanCard";

const PlanContent = () => {
  const [planType, setPlanType] = useState("annually");

  const plansData = [
    {
      title: "Business starter",
      subtitle: "Essential Features",
      price: { annually: 54.99, monthly: 64.99 },
      features: [
        "Access all features",
        "5 wathclists included",
        "Chat support",
        "Optimize hashtags",
        "5 exclusive widgets",
      ],
    },
    {
      title: "Premium",
      subtitle: "Advanced Features",
      price: { annually: 84.99, monthly: 94.99 },
      features: [
        "Access all features",
        "Unlimited wathclists",
        "Chat support",
        "Optimize hashtags",
        "10+ exclusive widgets",
      ],
    },
  ];

  return (
    <section className="section-container">
      <div className="card-style mt-2 rounded-tr-lg items-start">
        <h1 className="text-2xl text-mainColor-500 font-bold mb-8 text-start">
          Plans:
        </h1>
        <div className="p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-mainDark-900">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <PlanButton planType={planType} setPlanType={setPlanType} />
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-8 mt-16 w-full">
          <PlanCard plansData={plansData} planType={planType} />
        </div>
      </div>
    </section>
  );
};
export default PlanContent;
