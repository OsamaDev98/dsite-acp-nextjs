import { TagInput } from "emblor";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";

const TagsInputs = ({ form, title, tags, setTags, name, placeholder }) => {
  const [activeTagIndex, setActiveTagIndex] = useState(null);

  const addTag = (newTag) => {
    // Get the current value of the tags field
    const currentTags = form.getValues(name);
    // Append the new tag
    const updatedTags = [...currentTags, newTag];
    // Update the field value
    form.setValue(name, updatedTags);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          <FormLabel className="tags-label text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
            {title}
          </FormLabel>
          <div className="tags-container col-span-3">
            <FormControl className="h-12 dark:bg-mainDark-900">
              <TagInput
                placeholder={
                  placeholder?.length > 0 ? placeholder : "Enter a tag"
                }
                tags={tags}
                setTags={(newTags) => {
                  setTags(newTags);
                }}
                value={tags}
                onTagAdd={(tag) => addTag(tag)}
                onTagRemove={() =>
                  toast.success("Tag has been deleted successfully!")
                }
                activeTagIndex={activeTagIndex}
                setActiveTagIndex={setActiveTagIndex}
                className="dark:bg-mainDark-900"
              />
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default TagsInputs;
