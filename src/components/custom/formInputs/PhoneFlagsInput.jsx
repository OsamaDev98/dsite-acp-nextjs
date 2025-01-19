import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";

const PhoneFlagsInput = ({ form, section, title="" }) => {
  return (
    <FormField
      control={form.control}
      name={`${section}_Phone`}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 text-start">
            {title}
          </FormLabel>
          <FormControl>
            <PhoneInput
              placeholder="Phone number"
              defaultCountry="SA"
              className="h-12 col-span-3"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PhoneFlagsInput;
