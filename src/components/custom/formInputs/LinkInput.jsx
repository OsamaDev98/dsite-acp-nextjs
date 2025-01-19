import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const LinkInput = ({
  form,
  section,
  placeholder,
  name,
  isIcon,
  icon,
  title,
  label,
}) => {
  return (
    <FormField
      control={form.control}
      name={name?.length > 0 ? name : `${section}_Link_${title}`}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          {label && (
            <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200  text-start">
              {title}
            </FormLabel>
          )}
          <div className="relative col-span-3">
            {isIcon && (
              <span className="absolute top-1/2 -translate-y-1/2 text-muted-foreground bg-[#eee] h-full w-12 flex items-center justify-center ltr:rounded-l-lg rtl:rounded-r-lg">
                {icon}
              </span>
            )}
            <FormControl>
              <Input
                placeholder={placeholder}
                type="text"
                className={
                  isIcon
                    ? "h-12 col-span-3 ltr:pl-16 rtl:pr-16 dark:bg-mainDark-900"
                    : "h-12 col-span-3 dark:bg-mainDark-900"
                }
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default LinkInput;
