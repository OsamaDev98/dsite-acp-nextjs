"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DeleteButton = ({ isOption = false, isMulti = false, removeAction }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(!isActive);
    removeAction();
    isOption
      ? e.target.parentElement.remove()
      : isMulti
      ? e.target.parentElement.parentElement.parentElement.remove()
      : e.target.parentElement.parentElement.remove();
    !isActive
      ? toast.success("Input has been deleted successfully!")
      : toast.success("Input has not been deleted successfully!");
  };

  return (
    <span
      className={`group cursor-pointer duration-300 hover:bg-gray-100 h-10 px-3 flex items-center justify-center rounded ${
        isActive && "bg-gray-100"
      }`}
      title="Remove"
      onClick={(e) => handleClick(e)}
    >
      <Trash2
        className={`cursor-pointer w-5 h-5 text-gray-400 group-hover:text-red-500 ${
          isActive && "text-red-500"
        }`}
      />
    </span>
  );
};
export default DeleteButton;
