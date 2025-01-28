"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmitButton from "@/components/custom/buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TitleInput from "@/components/custom/formInputs/TitleInput";
import StatusInput from "@/components/custom/formInputs/StatusInput";
import EditImage from "@/components/custom/EditImage";
import { addSubSchema, editSubSchema } from "./formData/schema";
import {
  addSubDefaultValues,
  EditSubDefaultValues,
} from "./formData/defaultValues";
import { useLocale, useTranslations } from "next-intl";
import TagForm from "@/components/custom/formInputs/TagForm";
import TabsListComp from "@/components/custom/TabsListComp";

const SubFormComponent = ({ isEdit, sectionTitle }) => {
  const locale = useLocale();
  const t = useTranslations("RestaurantCategoryPage");
  const tp = useTranslations("Preferences");
  const tb = useTranslations("Buttons");
  const tpl = useTranslations("Placeholder");
  const ttg = useTranslations("Tags");

  const form = useForm({
    resolver: zodResolver(isEdit ? editSubSchema : addSubSchema),
    defaultValues: isEdit ? EditSubDefaultValues : addSubDefaultValues,
  });

  function onSubmit(values) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  const sectionName =
    sectionTitle == "brand"
      ? isEdit
        ? "Brand_Edit"
        : "Brand_Add"
      : isEdit
      ? "Category_Edit"
      : "Category_Add";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="card-style">
          <Tabs
            defaultValue={locale == "en" ? "english" : "arabic"}
            className="tabs-style w-full"
          >
            <TabsListComp />
            <TabsContent value="english" className="space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section={sectionName}
                lang="en"
                name={`${sectionName}_Title_en`}
                placeholder={tpl("title")}
                title={t("title")}
              />
            </TabsContent>
            <TabsContent value="arabic" className="rtl-grid space-y-4 w-full">
              {/* Title */}
              <TitleInput
                form={form}
                section={sectionName}
                lang="ar"
                name={`${sectionName}_Title_ar`}
                placeholder={tpl("title")}
                title={t("title")}
              />
            </TabsContent>
          </Tabs>
        </div>
        <div className="card-style items-start">
          <h1 className="text-[22px] text-[#707070] font-bold mb-8">
            {tp("preferences")}
          </h1>
          <div className="space-y-4 w-full">
            {/* Edit image */}
            <div className="grid grid-cols-6 gap-4 my-8">
              <label className="font-medium text-[#b5b5b5] text-md lg:pt-2 text-start">
                {t("image")}
              </label>
              <EditImage
                w="1920"
                h="1200"
                name={`${sectionName}_Image`}
                form={form}
              />
            </div>
            {/* Tags */}
            <TagForm
              form={form}
              title={ttg("tags")}
              name={`${sectionName}_Category_Tags`}
            />
            {/* Status */}
            <div className="pt-4">
              <StatusInput
                form={form}
                section={sectionName}
                title={t("status")}
                name={`${sectionName}_Status`}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end my-8">
          <SubmitButton title={tb("update")} />
        </div>
      </form>
    </Form>
  );
};

export default SubFormComponent;
