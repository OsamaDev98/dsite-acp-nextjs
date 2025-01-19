"use client";

import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TitleInput from "./TitleInput";
import { useLocale } from "next-intl";

const SelectInputWithAction = ({
  form,
  placeholder = "",
  title = "",
  name,
  section,
  selectData,
  defaultValue,
  setIsVideo = "",
}) => {
  const [showField, setShowField] = useState("");
  const locale = useLocale();

  const handleLink = (value) => {
    setShowField(value);
    section == "Slider_Edit" && setIsVideo(value);
  };

  return (
    <>
      <FormField
        control={form.control}
        name={name?.length > 0 ? `${name}_Type` : title}
        render={({ field }) => (
          <FormItem
            className={
              showField == "addlink"
                ? "grid lg:grid-cols-6 items-start w-full mb-4"
                : "grid lg:grid-cols-6 items-start w-full"
            }
          >
            <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
              {title}
            </FormLabel>
            <Select
              name={name?.length > 0 ? `${name}_Type` : title}
              onValueChange={(field.onChange, (value) => handleLink(value))}
              defaultValue={defaultValue}
              dir={locale == "en" ? "ltr" : "rtl"}
            >
              <FormControl className="h-12 col-span-3">
                <SelectTrigger className="dark:bg-mainDark-900">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="dark:bg-mainDark-900">
                {selectData?.map((item) => {
                  return (
                    <SelectItem key={item.id} value={item.value}>
                      {item.title}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {showField == "addlink" && (
        <TitleInput
          form={form}
          section={section}
          title="The link"
          name={name}
          placeholder="The link"
        />
      )}
    </>
  );
};
export default SelectInputWithAction;
