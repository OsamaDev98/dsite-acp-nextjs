"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const TitleInput = ({
  form,
  section,
  name,
  lang,
  title,
  placeholder,
  youtubeLink,
  setYoutubeLink,
  isLink,
}) => {
  const handleYoutubeVideo = (e) => {
    const targetLink = e.target.value;
    console.log(targetLink);
    const editLink =
      targetLink.includes("youtu.be") &&
      targetLink.replace("youtu.be", "www.youtube.com/embed");
    setYoutubeLink(editLink);
  };

  return (
    <FormField
      control={form.control}
      name={name?.length > 0 ? name : `${section}_Title_${lang}`}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          {title && (
            <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
              {title}
            </FormLabel>
          )}
          <div className="col-span-3">
            <FormControl>
              {isLink ? (
                <Input
                  name={name?.length > 0 ? name : `${section}_Title_${lang}`}
                  placeholder={placeholder}
                  type="text"
                  className="h-12 dark:bg-mainDark-900"
                  value={youtubeLink}
                  onChange={(e) => handleYoutubeVideo(e)}
                  {...field}
                />
              ) : (
                <Input
                  name={name?.length > 0 ? name : `${section}_Title_${lang}`}
                  placeholder={placeholder}
                  type="text"
                  className="h-12 dark:bg-mainDark-900"
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default TitleInput;
