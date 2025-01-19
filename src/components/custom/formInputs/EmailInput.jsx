import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const EmailInput = ({
  form,
  section,
  placeholder = "",
  name,
  icon,
  title = "",
}) => {
  return (
    <FormField
      control={form.control}
      name={name.length > 0 ? name : `${section}`}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
            {title}
          </FormLabel>
          <div className="col-span-3">
            <div className="relative">
              {icon && (
                <span className="absolute top-1/2 -translate-y-1/2 text-muted-foreground bg-[#eee] h-full w-12 flex items-center justify-center ltr:rounded-l-lg rtl:rounded-r-lg">
                  {icon}
                </span>
              )}
              <FormControl>
                <Input
                  placeholder={placeholder}
                  type="email"
                  name={name.length > 0 ? name : `${section}`}
                  className={`h-12 ${
                    icon && "ltr:pl-16 rtl:pr-16"
                  } dark:bg-mainDark-900`}
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default EmailInput;
