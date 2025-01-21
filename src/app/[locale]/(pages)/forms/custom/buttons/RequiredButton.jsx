"use client";

import { Sparkle } from "lucide-react";
import { useState } from "react";

const RequiredButton = ({ boxId }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        className="hidden"
        id={boxId}
        value={isActive ? "1" : "0"}
      />
      <label
        htmlFor={boxId}
        className={`group cursor-pointer duration-300 hover:bg-gray-100 h-10 px-3 flex items-center justify-center rounded ${
          isActive && "bg-gray-100"
        }`}
        title="Required"
        onClick={() => setIsActive(!isActive)}
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
