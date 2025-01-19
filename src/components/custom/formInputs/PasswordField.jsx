import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "./PasswordInput";

const PasswordField = ({ form, section, name, title, placeholder }) => {
  return (
    <FormField
      control={form.control}
      name={name.length > 0 ? name : `${section}_Password`}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full mt-2">
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
            {title}
          </FormLabel>
          <div className="col-span-3">
            <FormControl>
              <PasswordInput
                placeholder={placeholder}
                name={name.length < 0 ? name : `${section}_Password`} 
                className="h-12 dark:bg-mainDark-900"
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};
export default PasswordField;
