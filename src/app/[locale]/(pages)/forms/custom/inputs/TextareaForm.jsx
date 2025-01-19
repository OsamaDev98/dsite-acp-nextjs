import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import RequiredButton from "../buttons/RequiredButton";
import DeleteButton from "../buttons/DeleteButton";

const TextareaForm = ({
  form,
  name_en,
  name_ar,
  placeholder_en,
  placeholder_ar,
  removeAction,
  index,
  boxId,
  icon,
}) => {
  return (
    <div
      className="flex items-center justify-center gap-8 border rounded-md"
      id="formRow"
    >
      <div className="flex items-center gap-6 px-4">
        <span id="formId">{index}</span>
        <Image
          src="https://dsite.sa/public/assets/acp/img/sort.svg"
          alt="Sortable icon"
          width={14}
          height={19}
          className="sortable_icon cursor-pointer"
        />
      </div>
      <FormField
        control={form.control}
        name={name_en}
        render={({ field }) => (
          <FormItem className="w-1/3">
            <FormControl>
              <div className="flex items-center">
                {icon}
                <Input
                  name={name_en}
                  placeholder={placeholder_en}
                  type="text"
                  className="h-12 border-none outline-none !ring-0 shadow-none"
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
          <FormItem className="w-1/3">
            <FormControl>
              <div className="flex items-center">
                {icon}
                <Input
                  name={name_ar}
                  placeholder={placeholder_ar}
                  type="text"
                  className="h-12 border-none outline-none !ring-0 shadow-none"
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage className="mt-2" />
          </FormItem>
        )}
      />
      <div className="flex items-center justify-center gap-1 ltr:border-l rtl:border-r px-2">
        <RequiredButton boxId={boxId} />
        <DeleteButton />
      </div>
    </div>
  );
};
export default TextareaForm;
