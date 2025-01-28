"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const CopyButton = ({ targetText }) => {
  const [text, setText] = useState(targetText);
  const [copied, setCopied] = useState(false);

  const tb = useTranslations("Buttons");

  const handleCopy = async () => {
    try {
      navigator && (await navigator.clipboard.writeText(text));
      setCopied(true);
      toast.success("Copied!");
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <button onClick={handleCopy} className="copy-style dark:bg-mainDark-900">
      <Copy className="h-4 w-4" />
      <span>{copied ? tb("copied") : tb("copy")}</span>
    </button>
  );
};
export default CopyButton;
