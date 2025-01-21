"use client";

import { Trash2 } from "lucide-react";

const DeleteButton = ({ removeAction }) => {
  return (
    <span
      className="group cursor-pointer duration-300 hover:bg-gray-100 h-10 px-3 flex items-center justify-center rounded active:bg-gray-100"
      title="Remove"
      onClick={removeAction}
    >
      <Trash2 className="cursor-pointer w-5 h-5 text-gray-400 group-hover:text-red-500 active:text-red-500" />
    </span>
  );
};
export default DeleteButton;
