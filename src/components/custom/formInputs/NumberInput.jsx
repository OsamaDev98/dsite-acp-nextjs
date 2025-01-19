import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const NumberInput = ({
  form,
  section,
  placeholder = "",
  lang = "",
  title = "",
  name = "",
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 text-start">
            {title}
          </FormLabel>
          <div className="col-span-3">
            <FormControl>
              <Input
                placeholder={placeholder}
                type="number"
                className="h-12"
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

export default NumberInput;
