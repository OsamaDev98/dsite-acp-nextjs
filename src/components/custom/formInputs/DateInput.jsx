"use client"

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { DayPicker } from "react-day-picker";
import { arSA } from "react-day-picker/locale";
import "react-day-picker/style.css";

const DateInput = ({ form, name, title }) => {
  const locale = useLocale();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          <FormLabel className="tags-label text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
            {title}
          </FormLabel>
          <div className="col-span-3">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className="h-12 dark:bg-mainDark-900">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full px-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? field.value.toLocaleDateString()
                      : "Pick a day."}
                    <CalendarIcon className="ltr:ml-auto rtl:mr-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <DayPicker
                  disabled={(date) =>
                    date > new Date() || date < new Date("2000-01-01")
                  }
                  className="dark:bg-mainDark-900"
                  mode="single"
                  captionLayout="dropdown"
                  selected={field.value}
                  onSelect={field.onChange}
                  locale={locale == "ar" && arSA}
                  dir={locale == "ar" ? "rtl" : "ltr"}
                />
              </PopoverContent>
            </Popover>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};
export default DateInput;
