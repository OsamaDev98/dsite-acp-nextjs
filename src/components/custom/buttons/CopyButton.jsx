"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const CopyButton = ({ targetText }) => {
  const [text, setText] = useState(targetText);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
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
      <span>{copied ? "Copied!" : "Click to copy"}</span>
    </button>
  );
};
export default CopyButton;
