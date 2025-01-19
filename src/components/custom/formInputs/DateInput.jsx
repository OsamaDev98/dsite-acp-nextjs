import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const DateInput = ({ form, name, title }) => {
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
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ltr:ml-auto rtl:mr-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                  className="dark:bg-mainDark-900"
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
