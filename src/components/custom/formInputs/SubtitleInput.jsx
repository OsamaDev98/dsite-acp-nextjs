import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SubtitleInput = ({ form, section, name, placeholder, lang, title }) => {
  return (
    <FormField
      control={form.control}
      name={name?.length > 0 ? name : `${section}_Subtitle_${lang}`}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 text-start">
            {title}
          </FormLabel>
          <div className="col-span-3">
            <FormControl>
              <Input
                name={name?.length > 0 ? name : `${section}_Subtitle_${lang}`}
                placeholder={placeholder}
                type="text"
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

export default SubtitleInput;
