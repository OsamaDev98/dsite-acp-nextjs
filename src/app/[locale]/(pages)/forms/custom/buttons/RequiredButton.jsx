"use client";

import { Input } from "@/components/ui/input";
import { Sparkle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const RequiredButton = ({ boxId }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    !isActive
      ? toast.success("Input has been required successfully!")
      : toast.success("Input has not been required successfully!");
  };

  return (
    <>
      <Input type="checkbox" className="hidden" id={boxId} />
      <label
        htmlFor={boxId}
        className={`group cursor-pointer duration-300 hover:bg-gray-100 h-10 px-3 flex items-center justify-center rounded ${
          isActive && "bg-gray-100"
        }`}
        title="Required"
        onClick={handleClick}
      >
        <Sparkle
          className={`cursor-pointer w-5 h-5 text-gray-400 group-hover:text-mainColor-500 ${
            isActive && "text-mainColor-500"
          }`}
        />
      </label>
    </>
  );
};
export default RequiredButton;
