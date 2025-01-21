import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DeleteButton from "../buttons/DeleteButton";

const AddOptionForm = ({ form, removeAction, name_en, name_ar }) => {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      <FormField
        control={form.control}
        name={name_en}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <div className="flex items-center">
                <Input
                  name={name_en}
                  placeholder="Option"
                  type="text"
                  className="h-12 border outline-none !ring-0 shadow-none"
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage className="mt-2" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={name_ar}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <div className="flex items-center">
                <Input
                  name={name_ar}
                  placeholder="الاختيار"
                  type="text"
                  className="h-12 border outline-none !ring-0 shadow-none"
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage className="mt-2" />
          </FormItem>
        )}
      />
      <DeleteButton removeAction={removeAction} />
    </div>
  );
};
export default AddOptionForm;
