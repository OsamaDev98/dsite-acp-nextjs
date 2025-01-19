import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

const StatusInput = ({ form, section, title, isImage, image, name }) => {
  return (
    <FormField
      control={form.control}
      name={name?.length > 0 ? name : `${section}_Status`}
      render={({ field }) => (
        <FormItem className="flex items-center flex-wrap gap-4 w-full">
          {isImage ? (
            <div className="flex items-center justify-evenly flex-wrap gap-4 w-full">
              <FormControl>
                <Switch
                  name={name?.length > 0 ? name : `${section}_Status`}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="h-6 w-16"
                  aria-readonly
                />
              </FormControl>
              <FormLabel>
                <Image
                  src={image}
                  alt={title}
                  width={80}
                  height={80}
                  className="cursor-pointer"
                />
              </FormLabel>
            </div>
          ) : (
            <>
              <div className="min-w-40">
                <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 max-w-32 flex dark:text-mainDark-200 text-start">
                  {title}
                </FormLabel>
              </div>
              <FormControl>
                <Switch
                  name={name?.length > 0 ? name : `${section}_Status`}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="h-6 w-16"
                  aria-readonly
                />
              </FormControl>
            </>
          )}
          <FormMessage className="mt-2" />
        </FormItem>
      )}
    />
  );
};

export default StatusInput;
