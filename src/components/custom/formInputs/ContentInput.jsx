import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const ContentInput = ({
  form,
  section,
  placeholder = "",
  lang = "",
  title = "",
}) => {
  return (
    <FormField
      control={form.control}
      name={`${section}_Content_${lang}`}
      render={({ field }) => (
        <FormItem className="grid lg:grid-cols-6 items-start w-full">
          <FormLabel className="text-[#b5b5b5] text-md lg:pt-2 dark:text-mainDark-200 text-start">
            {title}
          </FormLabel>
          <div className="col-span-3">
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="resize-none h-28 dark:bg-mainDark-900"
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

export default ContentInput;
