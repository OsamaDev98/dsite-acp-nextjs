"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";

const PlanFeature = ({ form, sectionName }) => {
  const t = useTranslations("PlansPage");
  const tb = useTranslations("Buttons");

  const { control } = useForm({
    defaultValues: { planFeatures: [{ feature_en: "", feature_ar: "" }] },
  });

  const {
    fields: planFeatureFields,
    append: planFeatureAppend,
    remove: planFeatureRemove,
  } = useFieldArray({
    control,
    name: "planFeatures",
  });

  return (
    <div className="grid lg:grid-cols-6 items-start w-full">
      <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#b5b5b5] text-md lg:pt-2 mb-3 lg:mb-0">
        {t("features")}
      </label>
      <div className="col-span-3 space-y-3">
        {planFeatureFields?.map((field, index) => {
          return (
            <div className="flex items-center gap-3 w-full" key={field.id}>
              <FormField
                control={form.control}
                // name="Plans_Feature_en[]"
                name={`planFeatures.${index}.feature_en`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Controller
                        name={`planFeatures.${index}.feature_en`}
                        control={form.control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            name={`planFeatures.${index}.feature_en`}
                            placeholder="Feature EN"
                            type="text"
                            className="h-12 dark:bg-mainDark-900"
                            {...field}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`planFeatures.${index}.feature_ar`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Controller
                        name={`planFeatures.${index}.feature_ar`}
                        control={form.control}
                        defaultValue=""
                        render={({ field }) => (
                          <Input
                            name={`planFeatures.${index}.feature_ar`}
                            placeholder="Feature AR"
                            type="text"
                            className="h-12 dark:bg-mainDark-900"
                            {...field}
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
              <Trash2
                className="text-red-500 h-6 w-6 cursor-pointer"
                onClick={() => planFeatureRemove(index)}
              />
            </div>
          );
        })}
        <div className="flex justify-end">
          <Button
            type="button"
            className="bg-mainColor-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-mainColor-500 mt-3"
            onClick={() =>
              planFeatureAppend({ feature_en: "", feature_ar: "" })
            }
          >
            {tb("feature")}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PlanFeature;
