"use client";

import { useState } from "react";
import Navbar from "../navbar/Navbar";
import FixedSidebar from "../sidebar/FixedSidebar";

const FixedPart = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <FixedSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
export default FixedPart;
