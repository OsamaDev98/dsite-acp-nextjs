"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Tags({ value = [], onChange }) {
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag) => {
    if (!value.includes(tag) && tag.trim()) {
      onChange([...value, tag.trim()]);
    }
    setInputValue("");
  };

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div className="flex items-center gap-4 flex-wrap border rounded-lg p-2 dark:bg-mainDark-900">
      <div className="flex flex-wrap gap-2">
        {value.map((tag, index) => (
          <Badge
            key={index}
            className="flex items-center gap-2 transition-all border px-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-50 text-sm h-9 rounded-sm cursor-default animate-fadeIn font-normal"
          >
            {tag}
            <X
              className="cursor-pointer text-mainDark-400 hover:text-mainDark-900 dark:hover:text-mainDark-300"
              size={14}
              onClick={() => removeTag(tag)}
            />
          </Badge>
        ))}
      </div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addTag(inputValue);
          }
        }}
        className="border-none shadow-none !ring-0 px-0 flex-1 min-w-52 max-w-52"
        placeholder="Enter a tag"
      />
    </div>
  );
}
