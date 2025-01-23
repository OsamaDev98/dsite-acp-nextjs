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
import OptionForm from "./OptionForm";
import { Fragment } from "react";
import { useFieldArray } from "react-hook-form";

const SelectForm = ({
  control,
  name_en,
  name_ar,
  placeholder_en,
  placeholder_ar,
  removeAction,
  index,
  boxId,
  icon,
}) => {
  const {
    fields: formFieldsOptions,
    append: formAppendOptions,
    remove: formRemoveOptions,
  } = useFieldArray({
    control,
    name: `Fields.${index}.options`, // Path to the array in the schema
  });

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 border rounded-md"
      id="formRow"
    >
      <div className="flex items-center justify-center gap-8 border-b">
        <div className="flex items-center gap-6 px-4">
          <span id="formId">{index + 1}</span>
          <Image
            src="https://dsite.sa/public/assets/acp/img/sort.svg"
            alt="Sortable icon"
            width={14}
            height={19}
            className="sortable_icon cursor-pointer"
          />
        </div>
        <FormField
          control={control}
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
          control={control}
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
          <DeleteButton removeAction={removeAction} />
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 w-full mb-4 px-4">
        <OptionForm
          control={control}
          name_en={`Fields.${index}.defaultOptions.0.option1_en`}
          name_ar={`Fields.${index}.defaultOptions.0.option1_ar`}
        />
        <OptionForm
          control={control}
          name_en={`Fields.${index}.defaultOptions.1.option2_en`}
          name_ar={`Fields.${index}.defaultOptions.1.option2_ar`}
        />
        {formFieldsOptions?.map((field, i) => (
          <Fragment key={field.id}>
            <OptionForm
              control={control}
              removeAction={() => formRemoveOptions(i)}
              name_en={`Fields.${index}.options.${i}.option_en`}
              name_ar={`Fields.${index}.options.${i}.option_ar`}
            />
          </Fragment>
        ))}
        <button
          type="button"
          className="text-mainColor-500 text-sm font-medium cursor-pointer"
          onClick={() => formAppendOptions()}
        >
          add option
        </button>
      </div>
    </div>
  );
};
export default SelectForm;
