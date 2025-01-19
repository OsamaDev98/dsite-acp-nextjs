import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocale } from "next-intl";

const RadioInput = ({ form, title = "", name }) => {
  const locale = useLocale();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-center w-full">
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 text-start">
            {title}
          </FormLabel>
          <FormControl className="h-12 col-span-3">
            <RadioGroup
              value={field.value}
              onChange={field.onChange}
              onValueChange={field.onChange}
              defaultValue="active"
              className={`flex gap-8 ${
                locale == "en" ? "justify-start" : "justify-end"
              }`}
              name={name}
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="active" className="radio-style" />
                </FormControl>
                <FormLabel className="font-bold text-gray-500">
                  Active
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="inactive" className="radio-style" />
                </FormControl>
                <FormLabel className="font-bold text-gray-500">
                  Inactive
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default RadioInput;
