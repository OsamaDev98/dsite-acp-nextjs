"use client";

import { setGlobalState } from "@/context/GlobalStateContext";
import { Menu } from "lucide-react";

const MenuIcon = () => {
  const handleOpenSidebar = () => {
    setGlobalState("openSidebar", true);
  };

  return (
    <Menu
      className="ltr:mr-4 rtl:ml-4 w-8 h-8 text-gray-600 cursor-pointer flex xl:hidden"
      onClick={() => handleOpenSidebar()}
    />
  );
};
export default MenuIcon;
